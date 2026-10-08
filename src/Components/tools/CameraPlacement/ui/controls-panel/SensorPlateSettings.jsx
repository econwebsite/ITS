import React from "react";
import { DEFAULT_PARAMS as D, PRESET_OPTIONS } from "../../config/toolSettings";
import { usePlacement } from "../../state/PlacementContext";
import InfoTooltip from "../shared/InfoTooltip";
import NumberInput from "../shared/NumberInput";
import SliderField from "../shared/SliderField";

const SensorPlateSettings = () => {
  const {
    params, setParam, setPreset, setPlateSize,
    uploadPlate, togglePlateSource, customPlate, useSynthetic,
  } = usePlacement();

  return (
    <>
      <div className="cp-ctrl">
        <label>
          <span className="cp-lbl">Sensor resolution (px)<InfoTooltip text="The camera's real streaming resolution. All pixel results depend on it." /></span>
        </label>
        <div className="cp-numrow">
          <NumberInput value={params.sw} min={320} onCommit={(v) => setParam("sw", Math.round(v))} />
          <span className="cp-numrow-x">×</span>
          <NumberInput value={params.sh} min={240} onCommit={(v) => setParam("sh", Math.round(v))} />
        </div>
      </div>

      <div className="cp-ctrl">
        <label>
          <span className="cp-lbl">Plate type<InfoTooltip text="Standard plate size for a region. Changing the size below switches this to Custom." /></span>
        </label>
        <select value={params.preset} onChange={(e) => setPreset(e.target.value)}>
          {PRESET_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div className="cp-ctrl">
        <label>
          <span className="cp-lbl">Plate size (in) — W × H<InfoTooltip text="Physical plate size in inches. It directly scales the pixel result." /></span>
        </label>
        <div className="cp-numrow">
          <NumberInput value={params.pw} min={1} step={0.1} onCommit={(v) => setPlateSize("pw", v)} />
          <span className="cp-numrow-x">×</span>
          <NumberInput value={params.ph} min={1} step={0.1} onCommit={(v) => setPlateSize("ph", v)} />
        </div>
      </div>

      <SliderField
        label="Plate mount height (m)" tip="Height of the plate centre above the road. 0.5 m suits most cars; raise it for trucks and buses."
        value={params.pmh} min={0} max={2} step={0.05} decimals={2} defaultValue={D.pmh} onChange={(v) => setParam("pmh", v)}
      />
      <SliderField
        label="Approach angle (deg)" tip="Vehicle yaw relative to the lane. Non-zero values foreshorten the plate and reduce readable width."
        value={params.yaw} min={-60} max={60} step={1} decimals={0} defaultValue={D.yaw} onChange={(v) => setParam("yaw", v)}
      />
      <SliderField
        label="Char / plate height ratio" tip="Fraction of the plate height the characters occupy. Converts plate height into character height."
        value={params.charRatio} min={0.3} max={0.95} step={0.01} decimals={2} defaultValue={D.charRatio} onChange={(v) => setParam("charRatio", v)}
      />

      <div className="cp-ctrl">
        <label>
          <span className="cp-lbl">Plate image (optional)<InfoTooltip text="Upload a photo of a real plate to see it mapped onto the vehicles." /></span>
        </label>
        <input
          key={customPlate ? "custom" : "none"}
          type="file"
          accept="image/*"
          onChange={(e) => uploadPlate(e.target.files && e.target.files[0])}
        />
        <button type="button" className="cp-btn cp-btn--block" style={{ marginTop: 8 }} onClick={togglePlateSource}>
          {useSynthetic ? "Use real plate photo" : "Use synthetic plate"}
        </button>
      </div>
    </>
  );
};

export default SensorPlateSettings;
