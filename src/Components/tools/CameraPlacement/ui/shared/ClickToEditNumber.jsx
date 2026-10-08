import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Click-to-type numeric readout. Enter/blur commits, Esc cancels.
 * The value is clamped by the parent's `onCommit`.
 */
const ClickToEditNumber = ({ value, locked = false, onCommit, decimals = 1, title = "click to type" }) => {
  const ref = useRef(null);
  const [editing, setEditing] = useState(false);
  const fmt = (v) => (+v).toFixed(decimals);

  useEffect(() => {
    if (!editing && ref.current) ref.current.textContent = fmt(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, editing]);

  useLayoutEffect(() => {
    if (!editing || !ref.current) return;
    const el = ref.current;
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
  }, [editing]);

  const handleBlur = () => {
    const v = parseFloat(ref.current.textContent);
    setEditing(false);
    if (Number.isNaN(v)) {
      ref.current.textContent = fmt(value);
      return;
    }
    onCommit(v);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ref.current.blur();
    } else if (e.key === "Escape") {
      ref.current.textContent = fmt(value);
      ref.current.blur();
    }
  };

  return (
    <span
      ref={ref}
      className={`cp-fovval${locked ? " locked" : ""}`}
      title={title}
      contentEditable={editing}
      suppressContentEditableWarning
      onClick={() => { if (!locked && !editing) setEditing(true); }}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    />
  );
};

export default ClickToEditNumber;
