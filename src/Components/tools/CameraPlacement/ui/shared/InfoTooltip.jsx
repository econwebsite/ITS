import React from "react";
import { Info } from "lucide-react";

/** Small "i" icon that shows a short explanation on hover or keyboard focus */
const InfoTooltip = ({ text }) => (
  <span className="cp-tip" tabIndex={0} aria-label={text}>
    <Info size={13} />
    <span className="cp-tip-box" role="tooltip">{text}</span>
  </span>
);

export default InfoTooltip;
