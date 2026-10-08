import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { DEFAULT_PARAMS, MANUAL_URL, PRESETS, PRESET_OPTIONS } from "../config/toolSettings";
import useSceneEngine from "../engine3d/useSceneEngine";
import { applyFovLock, clampToZoom, diagonalFov, recenterAngles, xRange, zoomInfo } from "../calculations/geometry";
import { exportConfig, parseConfig, saveSetupImage } from "../files/saveAndExport";

const PlacementContext = createContext(null);
export const usePlacement = () => useContext(PlacementContext);

const TOUR_KEY = "cp_tour_done";
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// Apply updates, then enforce zoom bounds, lateral range and the FOV lock
function normalize(prev, updates, lock, zoom) {
  let next = { ...prev, ...updates };
  if ("hfov" in updates) next.hfov = clampToZoom("hfov", next.hfov, zoom, next, lock);
  if ("vfov" in updates) next.vfov = clampToZoom("vfov", next.vfov, zoom, next, lock);
  const r = xRange(next.lanes, next.laneW);
  next.camX = clamp(next.camX, r.min, r.max);
  return applyFovLock(next, lock, zoom.on);
}

const INITIAL_DOC = {
  params: DEFAULT_PARAMS,
  fovLock: null, // 'h' | 'v' | null — which axis is derived from the other + sensor
  zoom: { on: false, wideH: null, wideV: null },
  customPlate: null,
  useSynthetic: false,
};

const shallowEqual = (a, b) => {
  const ka = Object.keys(a);
  return ka.length === Object.keys(b).length && ka.every((k) => a[k] === b[k]);
};
const sameDoc = (a, b) =>
  shallowEqual(a.params, b.params) && a.fovLock === b.fovLock && shallowEqual(a.zoom, b.zoom) &&
  a.customPlate === b.customPlate && a.useSynthetic === b.useSynthetic;

const isTyping = (t) =>
  !!t && (
    (t.tagName === "INPUT" && !["range", "checkbox", "radio", "button", "file"].includes(t.type)) ||
    t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable
  );

export function PlacementProvider({ children }) {
  // ---- document state (everything undo/redo covers)
  const [doc, setDocState] = useState(INITIAL_DOC);
  const docRef = useRef(INITIAL_DOC);
  const pastRef = useRef([]);
  const futureRef = useRef([]);
  const lastEdit = useRef({ tag: null, time: 0 });
  const [hist, setHist] = useState({ undo: 0, redo: 0 });
  const { params, fovLock, zoom, customPlate, useSynthetic } = doc;

  // ---- other UI state
  const [lastTargets, setLastTargets] = useState(null);
  const [results, setResults] = useState(null);
  const [sensorCaption, setSensorCaption] = useState("plate shapes as the camera sees them");
  const [camOpen, setCamOpen] = useState(false);
  const [solverOpen, setSolverOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const [viewMode, setViewMode] = useState("3d"); // '3d' | '2d'
  const [fullView, setFullView] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // left controls panel (normal layout)
  const [refreshTick, setRefreshTick] = useState(0);

  const mountRef = useRef(null);
  const sensorRef = useRef(null);
  const camFullRef = useRef(null);
  const controllerRef = useSceneEngine(mountRef, useCallback(() => setRefreshTick((t) => t + 1), []));

  // ---- history
  const setDoc = useCallback((d) => { docRef.current = d; setDocState(d); }, []);
  const syncHist = () => setHist({ undo: pastRef.current.length, redo: futureRef.current.length });

  /** Apply a change to the document; consecutive changes with the same tag (a slider drag) merge into one undo step */
  const commit = useCallback((fn, tag) => {
    const cur = docRef.current;
    const patch = fn(cur);
    if (!patch) return;
    const next = { ...cur, ...patch };
    if (sameDoc(cur, next)) return;
    const now = Date.now();
    const le = lastEdit.current;
    const merge = tag && le.tag === tag && now - le.time < 700;
    if (!merge) {
      pastRef.current.push(cur);
      if (pastRef.current.length > 100) pastRef.current.shift();
    }
    lastEdit.current = { tag, time: now };
    futureRef.current = [];
    setDoc(next);
    syncHist();
  }, [setDoc]);

  const undo = useCallback(() => {
    if (!pastRef.current.length) return;
    futureRef.current.push(docRef.current);
    setDoc(pastRef.current.pop());
    lastEdit.current = { tag: null, time: 0 };
    syncHist();
  }, [setDoc]);

  const redo = useCallback(() => {
    if (!futureRef.current.length) return;
    pastRef.current.push(docRef.current);
    setDoc(futureRef.current.pop());
    lastEdit.current = { tag: null, time: 0 };
    syncHist();
  }, [setDoc]);

  // ---- redraw the scene whenever inputs change
  useEffect(() => {
    const c = controllerRef.current;
    if (!c) return;
    c.setViewMode(viewMode);
    c.setPlateSource({ customTex: customPlate, useSynthetic });
    const r = c.update(params);
    setResults(r);
    if (sensorRef.current) setSensorCaption(c.drawSensor(sensorRef.current, params, r.lanes));
  }, [params, customPlate, useSynthetic, viewMode, refreshTick, controllerRef]);

  // ---- parameter actions
  const updateParams = useCallback((updates, tag = "params") => {
    commit((cur) => ({ params: normalize(cur.params, updates, cur.fovLock, cur.zoom) }), tag);
  }, [commit]);

  const setParam = useCallback((key, value) => updateParams({ [key]: value }, key), [updateParams]);

  const resetParam = useCallback((key) => {
    updateParams({ [key]: DEFAULT_PARAMS[key] }, `reset-${key}-${Date.now()}`);
  }, [updateParams]);

  const setPreset = useCallback((value) => {
    const pr = PRESETS[value];
    updateParams(pr ? { preset: value, pw: pr.w, ph: pr.h } : { preset: value }, "preset");
  }, [updateParams]);

  const setPlateSize = useCallback((key, value) => updateParams({ [key]: value, preset: "custom" }, key), [updateParams]);

  const toggleLock = useCallback((axis) => {
    commit((cur) => {
      const next = cur.fovLock === axis ? null : axis;
      return { fovLock: next, params: applyFovLock(cur.params, next, cur.zoom.on) };
    }, `lock-${Date.now()}`);
  }, [commit]);

  const toggleZoom = useCallback((on) => {
    commit((cur) => ({
      // the FOV in effect when zoom is switched on becomes the (fixed) wide end
      zoom: on ? { on: true, wideH: cur.params.hfov, wideV: cur.params.vfov } : { on: false, wideH: null, wideV: null },
      params: applyFovLock(cur.params, cur.fovLock, on),
    }), `zoom-${Date.now()}`);
  }, [commit]);

  const recenter = useCallback(() => {
    const p = docRef.current.params;
    updateParams(recenterAngles(p.camH, p.camX, p.aim, p.pmh), `recenter-${Date.now()}`);
  }, [updateParams]);

  // ---- plate image
  const uploadPlate = useCallback((file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const t = new THREE.Texture(img);
        t.needsUpdate = true;
        t.anisotropy = 4;
        commit(() => ({ customPlate: t }), `plate-${Date.now()}`);
      };
      img.src = reader.result; // data URL keeps it local — no CORS taint, PNG save still works
    };
    reader.readAsDataURL(file);
  }, [commit]);

  const togglePlateSource = useCallback(() => {
    commit((cur) => (cur.customPlate
      ? { customPlate: null, useSynthetic: false } // an upload is showing -> drop it, back to the region photo
      : { useSynthetic: !cur.useSynthetic }), `plate-${Date.now()}`); // otherwise flip photo / drawn plate
  }, [commit]);

  // ---- save / export / import
  const saveSetup = useCallback(() => {
    if (!controllerRef.current || !results) return;
    saveSetupImage(controllerRef.current, {
      params, results, zoom, fovLock, lastTargets,
      presetText: PRESET_OPTIONS.find((o) => o.value === params.preset)?.label || params.preset,
    });
  }, [controllerRef, params, results, zoom, fovLock, lastTargets]);

  const exportCfg = useCallback(() => exportConfig({ params, fovLock, zoom, lastTargets }), [params, fovLock, zoom, lastTargets]);

  const importCfg = useCallback((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const cur = docRef.current;
        const next = parseConfig(reader.result, { params: cur.params, fovLock: cur.fovLock, zoom: cur.zoom, lastTargets });
        setLastTargets(next.lastTargets);
        commit(() => ({
          fovLock: next.fovLock,
          zoom: next.zoom,
          params: normalize(next.params, {}, next.fovLock, next.zoom),
        }), `import-${Date.now()}`);
      } catch (e) {
        alert(`Invalid config file: ${e.message}`);
      }
    };
    reader.readAsText(file);
  }, [commit, lastTargets]);

  // ---- sensor modal
  const renderFullSensor = useCallback(() => {
    if (controllerRef.current && camFullRef.current) controllerRef.current.renderCameraTo(camFullRef.current, params.sw, params.sh);
  }, [controllerRef, params.sw, params.sh]);

  const openCamModal = useCallback(() => { renderFullSensor(); setCamOpen(true); }, [renderFullSensor]);

  const saveSensorPng = useCallback(() => {
    renderFullSensor();
    const a = document.createElement("a");
    a.download = `camera_view_${params.sw}x${params.sh}.png`;
    a.href = camFullRef.current.toDataURL("image/png");
    a.click();
  }, [renderFullSensor, params.sw, params.sh]);

  const openManual = useCallback(() => {
    const w = window.open(MANUAL_URL, "_blank");
    if (!w) alert("The manual opens in a new tab — please allow pop-ups for this page.");
  }, []);

  // ---- solver
  const applySolution = useCallback((r) => {
    const round = { laneW: 1, camH: 1, camX: 1, tilt: 1, pan: 1, hfov: 1, vfov: 1, pmh: 2 };
    const updates = {};
    if (r.lanes !== undefined) updates.lanes = r.lanes;
    Object.entries(round).forEach(([k, dec]) => { if (r.p[k] !== undefined) updates[k] = +(+r.p[k]).toFixed(dec); });
    updateParams(updates, `solve-${Date.now()}`);
  }, [updateParams]);

  // ---- guided tour
  useEffect(() => {
    let seen = true;
    try { seen = !!localStorage.getItem(TOUR_KEY); } catch (e) { /* storage unavailable */ }
    if (seen) return undefined;
    const t = setTimeout(() => setTourOpen(true), 700);
    return () => clearTimeout(t);
  }, []);

  const startTour = useCallback(() => { setFullView(false); setSidebarOpen(true); setTourOpen(true); }, []);
  const closeTour = useCallback(() => {
    setTourOpen(false);
    try { localStorage.setItem(TOUR_KEY, "1"); } catch (e) { /* storage unavailable */ }
  }, []);

  // ---- keyboard shortcuts (latest actions held in a ref so the listener is attached once)
  const keyRef = useRef(null);
  keyRef.current = {
    undo, redo, recenter, openManual, startTour, closeTour,
    solverOpen, camOpen, shortcutsOpen, tourOpen, fullView,
    openSolver: () => setSolverOpen(true),
    closeAll: () => {
      if (tourOpen) closeTour();
      else if (shortcutsOpen) setShortcutsOpen(false);
      else if (camOpen) setCamOpen(false);
      else if (solverOpen) setSolverOpen(false);
      else if (fullView) { setFullView(false); setDrawerOpen(false); }
    },
    toggleFull: () => { setFullView((v) => !v); setDrawerOpen(false); },
    toggleSidebar: () => setSidebarOpen((v) => !v),
    toggleShortcuts: () => setShortcutsOpen((v) => !v),
    setViewMode,
  };

  useEffect(() => {
    const onKey = (e) => {
      const k = keyRef.current;
      const key = e.key;
      if (key === "Escape") { k.closeAll(); return; }
      if (isTyping(e.target)) return;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) {
        const low = key.toLowerCase();
        if (low === "z" && !e.shiftKey) { e.preventDefault(); k.undo(); }
        else if (low === "y" || (low === "z" && e.shiftKey)) { e.preventDefault(); k.redo(); }
        return;
      }
      if (e.altKey || k.solverOpen || k.camOpen || k.tourOpen) return;
      switch (key.toLowerCase()) {
        case "s": k.openSolver(); break;
        case "r": k.recenter(); break;
        case "m": k.openManual(); break;
        case "f": k.toggleFull(); break;
        case "b": k.toggleSidebar(); break;
        case "t": k.startTour(); break;
        case "2": k.setViewMode("2d"); break;
        case "3": k.setViewMode("3d"); break;
        case "?": k.toggleShortcuts(); break;
        default: break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const value = useMemo(() => ({
    params, setParam, updateParams, resetParam, setPreset, setPlateSize,
    fovLock, toggleLock, zoom, toggleZoom,
    results, sensorCaption, recenter,
    dfov: diagonalFov(params.hfov, params.vfov),
    zoomText: zoomInfo(zoom, params),
    customPlate, useSynthetic, uploadPlate, togglePlateSource,
    saveSetup, exportCfg, importCfg, openManual,
    lastTargets, setLastTargets, applySolution,
    camOpen, setCamOpen, openCamModal, saveSensorPng,
    solverOpen, setSolverOpen,
    undo, redo, canUndo: hist.undo > 0, canRedo: hist.redo > 0,
    viewMode, setViewMode, fullView, setFullView, drawerOpen, setDrawerOpen, sidebarOpen, setSidebarOpen,
    shortcutsOpen, setShortcutsOpen, tourOpen, startTour, closeTour,
    mountRef, sensorRef, camFullRef, controllerRef,
  }), [
    params, setParam, updateParams, resetParam, setPreset, setPlateSize, fovLock, toggleLock, zoom, toggleZoom,
    results, sensorCaption, recenter, customPlate, useSynthetic, uploadPlate, togglePlateSource,
    saveSetup, exportCfg, importCfg, openManual, lastTargets, applySolution,
    camOpen, openCamModal, saveSensorPng, solverOpen, undo, redo, hist,
    viewMode, fullView, drawerOpen, sidebarOpen, shortcutsOpen, tourOpen, startTour, closeTour, controllerRef,
  ]);

  return <PlacementContext.Provider value={value}>{children}</PlacementContext.Provider>;
}
