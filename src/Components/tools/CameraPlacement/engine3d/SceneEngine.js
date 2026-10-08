import * as THREE from "three";
import { CAR_PALETTE, PLATE_PHOTO_URLS, PRESET_REGION } from "../config/toolSettings";
import { laneLabel } from "../calculations/geometry";
import { makeLaneMark, makePlateTexture } from "./plateTextures";

const RAD = Math.PI / 180;

// Orbit-view look (light, matches the site UI) vs. the dark look used for the camera's own image
const VIEW_BG = 0x0f1420;
const VIEW_GROUND = 0x161c28;
const SENSOR_BG = 0x0f1420;
const SENSOR_GROUND = 0x161c28;

// Shared car geometry (created once, never disposed per-frame)
let CARGEO = null;
function carGeo() {
  if (CARGEO) return CARGEO;
  CARGEO = {
    lower: new THREE.BoxGeometry(1.82, 0.6, 4.4),
    hood: new THREE.BoxGeometry(1.7, 0.32, 1.2),
    cabin: new THREE.BoxGeometry(1.62, 0.62, 2.1),
    roof: new THREE.BoxGeometry(1.5, 0.1, 1.9),
    wheel: new THREE.CylinderGeometry(0.34, 0.34, 0.26, 16),
    light: new THREE.BoxGeometry(0.34, 0.16, 0.08),
    ring: new THREE.RingGeometry(1.6, 1.9, 28),
  };
  Object.values(CARGEO).forEach((g) => (g.userData.shared = true));
  return CARGEO;
}

function clearGroup(group) {
  while (group.children.length) {
    const child = group.children[0];
    group.remove(child);
    child.traverse((o) => {
      if (o.geometry && !o.geometry.userData.shared) o.geometry.dispose();
      if (o.material) o.material.dispose(); // textures are cached/shared, so left alone
    });
  }
}

/**
 * Owns the three.js scene: road, mount, cars, camera frustum, coverage footprint,
 * the orbit "viewer" camera and the true "sensor" camera render.
 */
export default class SceneEngine {
  constructor(mountEl, onAssetsReady) {
    this.mount = mountEl;
    this.onAssetsReady = onAssetsReady;
    this.orbit = { target: new THREE.Vector3(0, 0, 20), radius: 46, theta: -0.9, phi: 0.95 };
    this.mode = "3d"; // '3d' orbit view | '2d' top-down plan view
    this.photoTex = {};
    this.customPlateTex = null;
    this.useSynthetic = false;
    this._rt = null; this._rtw = 0; this._rth = 0; this._tmp = null;
    this._roadKey = "";
    this._raf = 0;
    this._cleanup = [];

    this._initScene();
    this._bindOrbit();
    this._loadPlatePhotos();
    this._animate = this._animate.bind(this);
    this._animate();
  }

  // ---------------------------------------------------------------- setup
  _initScene() {
    const m = this.mount;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(VIEW_BG);
    this.scene.fog = new THREE.Fog(VIEW_BG, 110, 300);
    this.view = new THREE.PerspectiveCamera(55, m.clientWidth / m.clientHeight, 0.1, 600);
    this.topCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
    this.viewFog = this.scene.fog;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(m.clientWidth, m.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    m.appendChild(this.renderer.domElement);

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dir = new THREE.DirectionalLight(0xffffff, 0.6);
    dir.position.set(20, 40, 10);
    this.scene.add(dir);

    const pad = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshStandardMaterial({ color: VIEW_GROUND }));
    this.pad = pad;
    pad.rotation.x = -Math.PI / 2; pad.position.y = -0.02;
    this.scene.add(pad);

    this.roadGroup = new THREE.Group();
    this.mountGroup = new THREE.Group();
    this.carGroup = new THREE.Group();
    this.ringGroup = new THREE.Group();
    [this.roadGroup, this.mountGroup, this.carGroup, this.ringGroup].forEach((g) => this.scene.add(g));

    this.trafficCam = new THREE.PerspectiveCamera(30, 1.5, 0.4, 60);
    this.scene.add(this.trafficCam);
    this.helper = new THREE.CameraHelper(this.trafficCam);
    this.scene.add(this.helper);

    const cg = new THREE.BufferGeometry();
    cg.setAttribute("position", new THREE.BufferAttribute(new Float32Array(18), 3));
    this.coverMesh = new THREE.Mesh(cg, new THREE.MeshBasicMaterial({ color: 0x6ea8fe, transparent: true, opacity: 0.22, side: THREE.DoubleSide }));
    this.scene.add(this.coverMesh);
    const lg = new THREE.BufferGeometry();
    lg.setAttribute("position", new THREE.BufferAttribute(new Float32Array(15), 3));
    this.coverLine = new THREE.Line(lg, new THREE.LineBasicMaterial({ color: 0x6ea8fe }));
    this.scene.add(this.coverLine);
  }

  _loadPlatePhotos() {
    const loader = new THREE.TextureLoader();
    Object.entries(PLATE_PHOTO_URLS).forEach(([region, url]) => {
      loader.load(url, (t) => {
        t.anisotropy = 4;
        this.photoTex[region] = t;
        if (this.onAssetsReady) this.onAssetsReady();
      });
    });
  }

  _bindOrbit() {
    const el = this.renderer.domElement;
    const o = this.orbit;
    let drag = false, lx = 0, ly = 0;
    const clampPhi = () => (o.phi = Math.max(0.12, Math.min(Math.PI / 2 - 0.03, o.phi)));
    const on = (target, ev, fn, opts) => {
      target.addEventListener(ev, fn, opts);
      this._cleanup.push(() => target.removeEventListener(ev, fn, opts));
    };
    on(el, "mousedown", (e) => { drag = true; lx = e.clientX; ly = e.clientY; });
    on(window, "mouseup", () => (drag = false));
    on(window, "mousemove", (e) => {
      if (!drag) return;
      o.theta -= (e.clientX - lx) * 0.005; o.phi -= (e.clientY - ly) * 0.005; clampPhi();
      lx = e.clientX; ly = e.clientY;
    });
    on(el, "wheel", (e) => {
      e.preventDefault();
      o.radius *= 1 + e.deltaY * 0.0012;
      o.radius = Math.max(10, Math.min(130, o.radius));
    }, { passive: false });
    on(el, "touchstart", (e) => { drag = true; lx = e.touches[0].clientX; ly = e.touches[0].clientY; }, { passive: true });
    on(el, "touchend", () => (drag = false));
    on(el, "touchmove", (e) => {
      if (!drag) return;
      o.theta -= (e.touches[0].clientX - lx) * 0.005; o.phi -= (e.touches[0].clientY - ly) * 0.005; clampPhi();
      lx = e.touches[0].clientX; ly = e.touches[0].clientY;
    }, { passive: true });
  }

  setViewMode(mode) {
    this.mode = mode === "2d" ? "2d" : "3d";
  }

  _activeCam() {
    return this.mode === "2d" ? this.topCam : this.view;
  }

  // Plan view: orthographic camera straight above the target, "up" = the compass heading
  _placeTopCam() {
    const { target: t, radius, theta } = this.orbit;
    const m = this.mount;
    const aspect = (m.clientWidth || 1) / (m.clientHeight || 1);
    const half = radius * 0.55;
    const cam = this.topCam;
    cam.left = -half * aspect; cam.right = half * aspect; cam.top = half; cam.bottom = -half;
    cam.updateProjectionMatrix();
    cam.position.set(t.x, 300, t.z);
    cam.up.set(-Math.cos(theta), 0, -Math.sin(theta));
    cam.lookAt(t.x, 0, t.z);
  }

  _animate() {
    this._raf = requestAnimationFrame(this._animate);
    const { target: t, radius, phi, theta } = this.orbit;
    this.view.position.set(
      t.x + radius * Math.sin(phi) * Math.cos(theta),
      t.y + radius * Math.cos(phi),
      t.z + radius * Math.sin(phi) * Math.sin(theta)
    );
    this.view.lookAt(t);
    if (this.mode === "2d") {
      this._placeTopCam();
      this.scene.fog = null; // fog would swallow a camera that high above
    } else {
      this.scene.fog = this.viewFog;
    }
    this.renderer.render(this.scene, this._activeCam());
  }

  /** RotateControl bearing (deg, 0-360) of the direction the viewer looks. N = +Z (down the road), E = -X. */
  getBearing() {
    const t = this.orbit.theta;
    const b = (Math.atan2(Math.cos(t), -Math.sin(t)) * 180) / Math.PI;
    return (b + 360) % 360;
  }

  setBearing(deg) {
    const b = (deg * Math.PI) / 180;
    this.orbit.theta = Math.atan2(-Math.cos(b), Math.sin(b));
  }

  /** Step the orbit view: bearing in degrees, elevation (phi) in radians */
  orbitBy(dBearingDeg, dPhi) {
    this.setBearing((this.getBearing() + dBearingDeg + 720) % 360);
    this.orbit.phi = Math.max(0.12, Math.min(Math.PI / 2 - 0.03, this.orbit.phi + dPhi));
  }

  resize() {
    const m = this.mount;
    if (!m.clientWidth || !m.clientHeight) return;
    this.view.aspect = m.clientWidth / m.clientHeight;
    this.view.updateProjectionMatrix();
    this.renderer.setSize(m.clientWidth, m.clientHeight);
  }

  dispose() {
    cancelAnimationFrame(this._raf);
    this._cleanup.forEach((fn) => fn());
    [this.roadGroup, this.mountGroup, this.carGroup, this.ringGroup].forEach(clearGroup);
    if (this._rt) this._rt.dispose();
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode) this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
  }

  // ------------------------------------------------------------ plate source
  setPlateSource({ customTex, useSynthetic }) {
    this.customPlateTex = customTex || null;
    this.useSynthetic = !!useSynthetic;
  }

  // ------------------------------------------------------------ scene pieces
  _rebuildRoad(lanes, lw) {
    const key = `${lanes}_${lw}`;
    if (key === this._roadKey) return;
    this._roadKey = key;
    clearGroup(this.roadGroup);
    const roadW = lanes * lw, len = 170;
    const surf = new THREE.Mesh(new THREE.PlaneGeometry(roadW, len), new THREE.MeshStandardMaterial({ color: 0x2b3240 }));
    surf.rotation.x = -Math.PI / 2; surf.position.set(0, 0, len / 2 - 3);
    this.roadGroup.add(surf);
    for (let i = 0; i <= lanes; i++) {
      const x = -roadW / 2 + i * lw, edge = i === 0 || i === lanes;
      if (edge) {
        const m = new THREE.Mesh(new THREE.PlaneGeometry(0.16, len), new THREE.MeshBasicMaterial({ color: 0xf0d060 }));
        m.rotation.x = -Math.PI / 2; m.position.set(x, 0.01, len / 2 - 3);
        this.roadGroup.add(m);
      } else {
        for (let z = 0; z < len; z += 4) {
          const m = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 2), new THREE.MeshBasicMaterial({ color: 0xdfe4ec }));
          m.rotation.x = -Math.PI / 2; m.position.set(x, 0.01, z);
          this.roadGroup.add(m);
        }
      }
    }
  }

  _orient(p) {
    const { camH: H, camX: cx, aim, pmh, hfov, vfov, tilt, pan } = p;
    const cam = this.trafficCam;
    cam.fov = vfov;
    cam.aspect = Math.tan(hfov * Math.PI / 360) / Math.tan(vfov * Math.PI / 360);
    const roadW = p.lanes * p.laneW;
    const slant = Math.hypot(H - pmh, cx, aim);
    cam.far = Math.max(slant + 25, 40);
    const tr = tilt * RAD, pr = pan * RAD;
    const fwd = new THREE.Vector3(Math.sin(pr) * Math.cos(tr), -Math.sin(tr), Math.cos(pr) * Math.cos(tr));
    cam.position.set(cx, H, 0);
    cam.up.set(0, 1, 0);
    cam.lookAt(cx + fwd.x, H + fwd.y, fwd.z);
    cam.updateProjectionMatrix();
    cam.updateMatrixWorld(true);
    this.helper.update();
    return { H, cx, aim, roadW, slant, pmh };
  }

  _groundCorners() {
    const cam = this.trafficCam, pos = cam.position, MAXR = 150, pts = [];
    const gpos = new THREE.Vector3(pos.x, 0, pos.z);
    let clamped = false;
    for (const c of [[-1, 1], [1, 1], [1, -1], [-1, -1]]) {
      const p = new THREE.Vector3(c[0], c[1], 1).unproject(cam);
      const dir = p.sub(pos).normalize();
      let g;
      if (dir.y < -1e-4) {
        const t = -pos.y / dir.y;
        g = new THREE.Vector3(pos.x + dir.x * t, 0, pos.z + dir.z * t);
        if (g.distanceTo(gpos) > MAXR) {
          const h = new THREE.Vector3(dir.x, 0, dir.z).normalize();
          g = gpos.clone().add(h.multiplyScalar(MAXR));
          clamped = true;
        }
      } else {
        const h = new THREE.Vector3(dir.x, 0, dir.z).normalize();
        g = gpos.clone().add(h.multiplyScalar(MAXR));
        clamped = true;
      }
      pts.push(g);
    }
    pts.clamped = clamped;
    return pts;
  }

  _projectPlate(p, laneX, g) {
    const W = p.pw * 0.0254, Ph = p.ph * 0.0254;
    const SW = p.sw, SH = p.sh, psi = p.yaw * RAD;
    const cy = Math.cos(psi), sy = Math.sin(psi);
    const uL = [-W / 2, W / 2, W / 2, -W / 2], vL = [Ph / 2, Ph / 2, -Ph / 2, -Ph / 2];
    const px = [];
    let infront = true;
    for (let i = 0; i < 4; i++) {
      const v = new THREE.Vector3(laneX + uL[i] * cy, g.pmh + vL[i], g.aim + uL[i] * sy).project(this.trafficCam);
      if (v.z > 1) infront = false;
      px.push([(v.x * 0.5 + 0.5) * SW, (1 - (v.y * 0.5 + 0.5)) * SH]);
    }
    const c = new THREE.Vector3(laneX, g.pmh, g.aim).project(this.trafficCam);
    const inView = infront && c.x >= -1 && c.x <= 1 && c.y >= -1 && c.y <= 1 && c.z <= 1;
    // projected centreline lengths (NOT the axis-aligned bbox, which over-reads under skew)
    const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
    return {
      wPx: dist(mid(px[0], px[3]), mid(px[1], px[2])),
      hPx: dist(mid(px[0], px[1]), mid(px[3], px[2])),
      inView,
    };
  }

  _buildMount(g) {
    clearGroup(this.mountGroup);
    const steel = new THREE.MeshStandardMaterial({ color: 0x8892a4 });
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 0.6), new THREE.MeshStandardMaterial({ color: 0x11151f }));
    box.position.set(g.cx, g.H, 0);
    this.mountGroup.add(box);
    if (Math.abs(g.cx) < g.roadW / 2) {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(g.roadW + 3, 0.35, 0.35), steel);
      beam.position.set(0, g.H + 0.3, 0);
      this.mountGroup.add(beam);
      [-1, 1].forEach((s) => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, g.H + 0.3, 12), steel);
        leg.position.set(s * (g.roadW / 2 + 1.2), (g.H + 0.3) / 2, 0);
        this.mountGroup.add(leg);
      });
      const drop = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.3, 8), steel);
      drop.position.set(g.cx, g.H + 0.15, 0);
      this.mountGroup.add(drop);
    } else {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, g.H, 12), steel);
      pole.position.set(g.cx, g.H / 2, 0);
      this.mountGroup.add(pole);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.12, 0.12), steel);
      arm.position.set(g.cx + (g.cx < 0 ? 0.6 : -0.6), g.H, 0);
      this.mountGroup.add(arm);
    }
  }

  _plateTexture(p) {
    if (this.customPlateTex) return this.customPlateTex;
    const region = PRESET_REGION[p.preset] || "US";
    if (!this.useSynthetic && this.photoTex[region]) return this.photoTex[region];
    return makePlateTexture(region, p.pw, p.ph);
  }

  _buildCars(p, g) {
    clearGroup(this.carGroup);
    clearGroup(this.ringGroup);
    const G = carGeo();
    const { lanes, laneW: lw } = p;
    const roadW = lanes * lw, psi = p.yaw * RAD;
    const tex = this._plateTexture(p);
    const pwM = p.pw * 0.0254, phM = p.ph * 0.0254;
    const glass = new THREE.MeshStandardMaterial({ color: 0x141c28, metalness: 0.3, roughness: 0.2 });
    const tyre = new THREE.MeshStandardMaterial({ color: 0x141414 });
    const head = new THREE.MeshStandardMaterial({ color: 0xfff2c0, emissive: 0x554400, emissiveIntensity: 0.4 });
    const tail = new THREE.MeshStandardMaterial({ color: 0xcc2222, emissive: 0x551111, emissiveIntensity: 0.4 });
    const out = [];

    for (let i = 0; i < lanes; i++) {
      const x = -roadW / 2 + (i + 0.5) * lw;
      const pr = this._projectPlate(p, x, g);
      const bodyMat = new THREE.MeshStandardMaterial({ color: CAR_PALETTE[i % CAR_PALETTE.length], metalness: 0.5, roughness: 0.45 });
      // car group pivots about the plate point (x, g.aim); body extends in +z (away from camera)
      const car = new THREE.Group();
      car.position.set(x, 0, g.aim);
      car.rotation.y = psi;
      const add = (geo, mat, px, py, pz) => { const m = new THREE.Mesh(geo, mat); m.position.set(px, py, pz); car.add(m); return m; };
      add(G.lower, bodyMat, 0, 0.62, 2.2);
      add(G.hood, bodyMat, 0, 0.9, 0.7);
      add(G.cabin, glass, 0, 1.15, 2.55);
      add(G.roof, bodyMat, 0, 1.47, 2.55);
      [[-0.83, 0.85], [0.83, 0.85], [-0.83, 3.55], [0.83, 3.55]].forEach((w) => {
        add(G.wheel, tyre, w[0], 0.34, w[1]).rotation.z = Math.PI / 2;
      });
      [-0.6, 0.6].forEach((lx) => add(G.light, head, lx, 0.7, 0.02));
      [-0.6, 0.6].forEach((lx) => add(G.light, tail, lx, 0.85, 4.4));
      // licence plate on the nose (local -z faces the camera)
      const back = new THREE.Mesh(new THREE.PlaneGeometry(pwM * 1.06, phM * 1.12), new THREE.MeshBasicMaterial({ color: 0x0a0a0a, side: THREE.DoubleSide }));
      back.position.set(0, g.pmh, -0.01); back.rotation.y = Math.PI; car.add(back);
      const plate = new THREE.Mesh(new THREE.PlaneGeometry(pwM, phM), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }));
      plate.position.set(0, g.pmh, -0.02); plate.rotation.y = Math.PI; car.add(plate);
      this.carGroup.add(car);

      // in-view indicator ring (hidden in the true camera image)
      const ring = new THREE.Mesh(G.ring, new THREE.MeshBasicMaterial({ color: pr.inView ? 0x3fae6b : 0xc0453f, transparent: true, opacity: 0.7, side: THREE.DoubleSide }));
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(x + Math.sin(psi) * 2.2, 0.02, g.aim + Math.cos(psi) * 2.2);
      this.ringGroup.add(ring);

      // "LANE n" painted on the road near the camera
      const mw = Math.min(2.2, lw * 0.6), mh = mw * 1.5;
      const mark = new THREE.Mesh(new THREE.PlaneGeometry(mw, mh), new THREE.MeshBasicMaterial({ map: makeLaneMark(laneLabel(i, lanes, g.cx)), transparent: true, side: THREE.DoubleSide }));
      mark.rotation.x = -Math.PI / 2; mark.rotation.z = Math.PI; mark.position.set(x, 0.03, 8);
      this.ringGroup.add(mark);

      out.push({ i: laneLabel(i, lanes, g.cx), pr });
    }
    return out;
  }

  // ------------------------------------------------------------ main update
  /** Rebuilds the scene for the given parameters and returns derived readouts. */
  update(p) {
    this._rebuildRoad(p.lanes, p.laneW);
    const g = this._orient(p);
    const c = this._groundCorners();

    const arr = this.coverMesh.geometry.attributes.position.array;
    const tri = [c[0], c[1], c[2], c[0], c[2], c[3]];
    for (let i = 0; i < 6; i++) { arr[i * 3] = tri[i].x; arr[i * 3 + 1] = 0.03; arr[i * 3 + 2] = tri[i].z; }
    this.coverMesh.geometry.attributes.position.needsUpdate = true;
    const la = this.coverLine.geometry.attributes.position.array;
    const loop = [c[0], c[1], c[2], c[3], c[0]];
    for (let i = 0; i < 5; i++) { la[i * 3] = loop[i].x; la[i * 3 + 1] = 0.04; la[i * 3 + 2] = loop[i].z; }
    this.coverLine.geometry.attributes.position.needsUpdate = true;
    const zs = c.map((q) => q.z);

    this._buildMount(g);
    const lanesOut = this._buildCars(p, g);

    return {
      roadW: g.roadW,
      slant: g.slant,
      near: Math.min(...zs),
      far: Math.max(...zs),
      farClamped: !!c.clamped,
      lanes: lanesOut
        .map((L) => ({ lane: L.i, inView: L.pr.inView, wPx: L.pr.wPx, hPx: L.pr.hPx }))
        .sort((a, b) => a.lane - b.lane),
    };
  }

  // ------------------------------------------------------------ rendering
  _setOverlays(v) {
    this.helper.visible = v; this.coverMesh.visible = v; this.coverLine.visible = v;
    this.mountGroup.visible = v; this.ringGroup.visible = v;
  }

  _getRT(w, h) {
    if (!this._rt || this._rtw !== w || this._rth !== h) {
      if (this._rt) this._rt.dispose();
      this._rt = new THREE.WebGLRenderTarget(w, h, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter });
      this._rtw = w; this._rth = h;
    }
    return this._rt;
  }

  _readTargetTo(canvas, rt, w, h) {
    const buf = new Uint8Array(w * h * 4);
    this.renderer.readRenderTargetPixels(rt, 0, 0, w, h, buf);
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext("2d");
    const img = ctx.createImageData(w, h);
    for (let y = 0; y < h; y++) {
      const s = (h - 1 - y) * w * 4; // flip vertical
      img.data.set(buf.subarray(s, s + w * 4), y * w * 4);
    }
    ctx.putImageData(img, 0, 0);
  }

  /** Render exactly what the traffic camera sees (no annotations) into a 2D canvas at w x h */
  renderCameraTo(canvas, w, h) {
    const rt = this._getRT(w, h);
    const fog = this.scene.fog;
    this.scene.fog = null;
    this.scene.background.setHex(SENSOR_BG);
    this.pad.material.color.setHex(SENSOR_GROUND);
    this._setOverlays(false);
    const prev = this.renderer.getRenderTarget();
    this.renderer.setRenderTarget(rt);
    this.renderer.render(this.scene, this.trafficCam);
    this._readTargetTo(canvas, rt, w, h);
    this.renderer.setRenderTarget(prev);
    this._setOverlays(true);
    this.scene.background.setHex(VIEW_BG);
    this.pad.material.color.setHex(VIEW_GROUND);
    this.scene.fog = fog;
  }

  /** Draw the live sensor preview and return its caption */
  drawSensor(canvas, p, lanes) {
    const SW = p.sw, SH = p.sh;
    if (!this._tmp) this._tmp = document.createElement("canvas");
    const rw = Math.min(SW, 720), rh = Math.max(2, Math.round((rw * SH) / SW));
    this.renderCameraTo(this._tmp, rw, rh);
    const cssW = canvas.clientWidth || 276, cssH = (cssW * SH) / SW;
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = cssW * dpr; canvas.height = cssH * dpr; canvas.style.height = `${cssH}px`;
    const x = canvas.getContext("2d");
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    x.imageSmoothingEnabled = true;
    x.clearRect(0, 0, cssW, cssH);
    x.drawImage(this._tmp, 0, 0, cssW, cssH);
    x.strokeStyle = "#2a3346";
    x.strokeRect(0.5, 0.5, cssW - 1, cssH - 1);
    const best = lanes.reduce((m, L) => (L.inView && L.hPx > (m ? m.hPx : 0) ? L : m), null);
    const bstr = best
      ? `${Math.round(best.wPx)}×${Math.round(best.hPx)}px · char ${Math.round(best.hPx * p.charRatio)}px`
      : "—";
    return `${SW}×${SH} sensor · tap to enlarge & save · best ${bstr}`;
  }

  /** ~4K render of the orbit view into a fresh canvas (legend is drawn by the caller) */
  captureSetup() {
    const aspect = (this.mount.clientWidth || 1) / (this.mount.clientHeight || 1), LONG = 3840, MAXDIM = 4096;
    let W, H;
    if (aspect >= 1) { W = LONG; H = Math.round(W / aspect); } else { H = LONG; W = Math.round(H * aspect); }
    W = Math.min(W, MAXDIM); H = Math.min(H, MAXDIM);
    const rt = this._getRT(W, H);
    const prev = this.renderer.getRenderTarget();
    this.renderer.setRenderTarget(rt);
    if (this.mode === "2d") this._placeTopCam();
    this.renderer.render(this.scene, this._activeCam());
    const out = document.createElement("canvas");
    this._readTargetTo(out, rt, W, H);
    this.renderer.setRenderTarget(prev);
    return out;
  }
}
