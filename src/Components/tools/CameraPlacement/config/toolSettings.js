import usPlate from "../../../../assets/tools/plates/us.jpg";
import euPlate from "../../../../assets/tools/plates/eu.jpg";
import inPlate from "../../../../assets/tools/plates/in.jpg";

export const PRESETS = {
  us: { w: 12, h: 6 },
  eu: { w: 20.47, h: 4.33 },
  in: { w: 19.69, h: 4.72 },
};

// Region photographs used as the default plate look (aspect ratios match PRESETS).
export const PLATE_PHOTO_URLS = { US: usPlate, EU: euPlate, IN: inPlate };

export const PRESET_OPTIONS = [
  { value: "us", label: "US / North America" },
  { value: "eu", label: "EU standard" },
  { value: "in", label: "Indian" },
  { value: "custom", label: "Custom" },
];

export const PRESET_REGION = { us: "US", eu: "EU", in: "IN", custom: "US" };

export const CAR_PALETTE = [0x3b6ea5, 0xb5482f, 0x2f8f6b, 0xc9a13b, 0x6a5acd, 0x8894a6];

export const MANUAL_URL = "/tools/camera-placement-manual.html";

export const DEFAULT_PARAMS = {
  lanes: 3,
  laneW: 3.5,
  camH: 6,
  camX: -7,
  tilt: 15,
  pan: 19,
  aim: 20,
  hfov: 45,
  vfov: 26.2,
  teleHfov: 9,
  teleVfov: 5.1,
  sw: 1920,
  sh: 1080,
  preset: "us",
  pw: 12,
  ph: 6,
  pmh: 0.5,
  yaw: 0,
  charRatio: 0.65,
};

// Keys written to / read from an exported config file
export const CFG_KEYS = [
  "lanes", "laneW", "camH", "camX", "tilt", "pan", "aim", "hfov", "vfov",
  "sw", "sh", "pw", "ph", "pmh", "yaw", "charRatio", "preset", "teleHfov", "teleVfov",
];

// Decimal places shown for each slider value
export const DECIMALS = {
  lanes: 0, laneW: 1, camH: 1, camX: 1, tilt: 1, pan: 1, aim: 0,
  hfov: 1, vfov: 1, pmh: 2, yaw: 0, charRatio: 2, teleHfov: 1, teleVfov: 1,
};

export const DEFAULT_SOLVER = {
  reqPx: 100,
  metric: "width",
  speed: 100,
  fps: 30,
  covFull: true,
  cPixels: true,
  cCapture: true,
  binding: "pixels",
  free: { camH: false, camX: false, tilt: true, pan: true, hfov: false, vfov: false, laneW: false, pmh: false },
};

export const SOLVER_FREE_OPTIONS = [
  { key: "camH", label: "Height" },
  { key: "camX", label: "Lateral X" },
  { key: "tilt", label: "Tilt" },
  { key: "pan", label: "Pan" },
  { key: "hfov", label: "H-FOV" },
  { key: "vfov", label: "V-FOV" },
  { key: "laneW", label: "Lane width" },
  { key: "pmh", label: "Mount height" },
];

// Slider limits used by the solver for each free parameter (camX is derived from road width)
export const SLIDER_LIMITS = {
  camH: [1, 12], tilt: [0, 89], pan: [-90, 90],
  hfov: [1, 120], vfov: [1, 90], laneW: [2.5, 4.5], pmh: [0, 2],
};
