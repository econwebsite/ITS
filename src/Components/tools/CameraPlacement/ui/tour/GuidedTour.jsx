import React, { useEffect, useState } from "react";
import { usePlacement } from "../../state/PlacementContext";

const STEPS = [
  { id: "road", title: "Road", text: "Start with the road: set how many lanes the camera must cover and how wide each lane is. Every lane is checked on its own." },
  { id: "camera", title: "Camera", text: "Place the camera: height, sideways offset, tilt, pan and the working distance. Press Re-center on road (R) to aim it at the road centre." },
  { id: "lens", title: "Lens", text: "Enter the lens field of view from its datasheet. Lock one axis with the padlock to derive it from the other and the sensor, or add a zoom lens." },
  { id: "plate", title: "Plate", text: "Describe the sensor resolution and the plate: type, size, mount height and approach angle. Pixel results depend on all of these." },
  { id: "solve", title: "Solve", text: "Finally, open Autocompute (S): choose your pixel and speed targets, tick what it may change, and press Solve. The answer is applied to the scene." },
];

/** First-time walkthrough: highlights each control group and explains it */
const GuidedTour = () => {
  const { tourOpen, closeTour } = usePlacement();
  const [i, setI] = useState(0);
  const [rect, setRect] = useState(null);
  const step = STEPS[i];

  useEffect(() => { if (tourOpen) setI(0); }, [tourOpen]);

  useEffect(() => {
    if (!tourOpen) return undefined;
    const el = document.querySelector(`[data-tour="${step.id}"]`);
    if (!el) return undefined;
    const head = el.querySelector(".cp-acc-head");
    if (head && !el.classList.contains("open")) head.click(); // make sure the section is expanded
    el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    const measure = () => {
      const r = el.getBoundingClientRect();
      setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    };
    measure();
    const id = setInterval(measure, 150);
    return () => clearInterval(id);
  }, [tourOpen, step.id]);

  if (!tourOpen || !rect) return null;

  const pad = 5;
  const small = window.innerWidth < 700;
  const W = Math.min(340, window.innerWidth - 24);
  const room = window.innerWidth - (rect.left + rect.width);
  let top, left;
  if (room > W + 24) {
    left = rect.left + rect.width + 18;
    top = Math.min(Math.max(12, rect.top), window.innerHeight - 280);
  } else {
    top = Math.min(rect.top + rect.height + 16, window.innerHeight - 280);
    left = Math.max(12, Math.min(rect.left + rect.width - W, window.innerWidth - W - 12));
  }
  const last = i === STEPS.length - 1;

  return (
    <div className="cp-tour">
      <div className="cp-tour-block" />
      <div
        className="cp-tour-spot"
        style={{ top: rect.top - pad, left: rect.left - pad, width: rect.width + pad * 2, height: rect.height + pad * 2 }}
      />
      <div className={`cp-tour-pop${small ? " cp-tour-pop--sheet" : ""}`} style={small ? undefined : { top, left, width: W }} role="dialog" aria-label="Guided tour">
        <div className="cp-tour-count">Step {i + 1} of {STEPS.length}</div>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
        <div className="cp-tour-foot">
          <div className="cp-tour-dots">
            {STEPS.map((s, n) => <span key={s.id} className={n === i ? "on" : n < i ? "past" : ""} />)}
          </div>
          <div className="cp-tour-actions">
            <button type="button" className="cp-tour-skip" onClick={closeTour}>Skip</button>
            {i > 0 && <button type="button" className="cp-btn" onClick={() => setI(i - 1)}>Back</button>}
            <button type="button" className="cp-btn cp-btn--primary" onClick={() => (last ? closeTour() : setI(i + 1))}>
              {last ? "Done" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidedTour;
