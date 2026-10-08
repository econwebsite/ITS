import React, { useEffect, useState } from "react";

/**
 * Number input that keeps its own text while typing (so "1." or an empty box works)
 * and only commits valid numbers to the parent.
 */
const NumberInput = ({ value, onCommit, min, step = 1, id }) => {
  const [text, setText] = useState(String(value));

  useEffect(() => {
    if (parseFloat(text) !== value) setText(String(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = (e) => {
    setText(e.target.value);
    const v = parseFloat(e.target.value);
    if (Number.isFinite(v) && (min === undefined || v >= min)) onCommit(v);
  };

  return (
    <input
      id={id}
      type="number"
      value={text}
      min={min}
      step={step}
      onChange={handleChange}
      onBlur={() => setText(String(value))}
    />
  );
};

export default NumberInput;
