import { useEffect, useRef } from "react";
import SceneEngine from "./SceneEngine";

/**
 * Creates the three.js SceneEngine inside `mountRef` and keeps it sized
 * (window resize and layout changes such as the full-view mode).
 * `onRefresh` is called when something asynchronous (plate photos, resize) needs a redraw.
 */
export default function useSceneEngine(mountRef, onRefresh) {
  const controllerRef = useRef(null);
  const refreshRef = useRef(onRefresh);
  refreshRef.current = onRefresh;

  useEffect(() => {
    const el = mountRef.current;
    const controller = new SceneEngine(el, () => refreshRef.current());
    controllerRef.current = controller;
    const onResize = () => {
      controller.resize();
      refreshRef.current();
    };
    window.addEventListener("resize", onResize);
    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(onResize);
      ro.observe(el);
    }
    return () => {
      window.removeEventListener("resize", onResize);
      if (ro) ro.disconnect();
      controller.dispose();
      controllerRef.current = null;
    };
  }, [mountRef]);

  return controllerRef;
}
