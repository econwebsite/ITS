import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

/** Accordion card used for each group of controls in the side panel */
const AccordionSection = ({ title, icon: Icon, defaultOpen = true, tourId, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [settled, setSettled] = useState(defaultOpen); // open animation finished -> tooltips may overflow
  useEffect(() => {
    if (!open) { setSettled(false); return undefined; }
    const t = setTimeout(() => setSettled(true), 320);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <section className={`cp-acc${open ? " open" : ""}${settled ? " settled" : ""}`} data-tour={tourId}>
      <button type="button" className="cp-acc-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {Icon && <span className="cp-acc-icon"><Icon size={16} /></span>}
        <span className="cp-acc-title">{title}</span>
        <ChevronDown size={16} className="cp-acc-chevron" />
      </button>
      <div className="cp-acc-body">
        <div className="cp-acc-inner">
          <div className="cp-acc-content">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
