import * as THREE from "three";

const plateCache = {};
const laneMarkTex = {};

// Synthetic (drawn) plate texture for a region, sized to the plate's aspect ratio
export function makePlateTexture(region, wIn, hIn) {
  const key = `${region}_${wIn}_${hIn}`;
  if (plateCache[key]) return plateCache[key];
  const W = 512, H = Math.max(64, Math.round((512 * hIn) / wIn));
  const c = document.createElement("canvas");
  c.width = W; c.height = H;
  const x = c.getContext("2d");

  // set the largest font that fits text within maxW x maxH
  const fit = (text, maxW, maxH, weight, stack) => {
    let size = maxH;
    x.font = `${weight} ${size}px ${stack}`;
    const w = x.measureText(text).width;
    if (w > maxW) size = (size * maxW) / w;
    size = Math.max(6, Math.floor(size));
    x.font = `${weight} ${size}px ${stack}`;
    return size;
  };

  x.fillStyle = "#f6f6f1";
  x.fillRect(0, 0, W, H);

  if (region === "EU") {
    const sw = W * 0.13;
    x.fillStyle = "#003399"; x.fillRect(0, 0, sw, H);
    x.fillStyle = "#ffcc00";
    const r = sw * 0.3;
    x.save(); x.translate(sw / 2, H * 0.34);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      x.beginPath(); x.arc(Math.cos(a) * r, Math.sin(a) * r, sw * 0.05, 0, 7); x.fill();
    }
    x.restore();
    x.fillStyle = "#ffffff";
    x.font = `bold ${Math.round(H * 0.22)}px system-ui`;
    x.textAlign = "center"; x.textBaseline = "middle";
    x.fillText("D", sw / 2, H * 0.8);
    x.fillStyle = "#111";
    fit("B·AB 1234", (W - sw) * 0.9, H * 0.66, "900", '"Arial Narrow",Arial,system-ui');
    x.textAlign = "center"; x.textBaseline = "middle";
    x.fillText("B·AB 1234", sw + (W - sw) / 2, H * 0.52);
  } else if (region === "IN") {
    x.strokeStyle = "#111";
    const lw = Math.max(3, H * 0.05);
    x.lineWidth = lw; x.strokeRect(lw, lw, W - 2 * lw, H - 2 * lw);
    x.fillStyle = "#111";
    fit("MH 12 AB 1234", W - 4 * lw - W * 0.06, H * 0.62, "900", '"Arial Narrow",Arial,system-ui');
    x.textAlign = "center"; x.textBaseline = "middle";
    x.fillText("MH 12 AB 1234", W / 2, H * 0.54);
  } else {
    x.strokeStyle = "#12357a";
    const lw = Math.max(3, H * 0.05);
    x.lineWidth = lw; x.strokeRect(lw * 1.5, lw * 1.5, W - 3 * lw, H - 3 * lw);
    x.fillStyle = "#12357a";
    fit("CALIFORNIA", W * 0.7, H * 0.18, "bold", "system-ui");
    x.textAlign = "center"; x.textBaseline = "alphabetic";
    x.fillText("CALIFORNIA", W / 2, H * 0.26);
    x.fillStyle = "#16213e";
    fit("7ABC123", W * 0.82, H * 0.5, "900", '"Arial Black",Arial,system-ui');
    x.textAlign = "center"; x.textBaseline = "middle";
    x.fillText("7ABC123", W / 2, H * 0.64);
  }
  const t = new THREE.CanvasTexture(c);
  t.anisotropy = 4;
  plateCache[key] = t;
  return t;
}

// "LANE n" painted on the tarmac, elongated like a real road marking
export function makeLaneMark(num) {
  if (laneMarkTex[num]) return laneMarkTex[num];
  const W = 256, H = 384;
  const c = document.createElement("canvas");
  c.width = W; c.height = H;
  const x = c.getContext("2d");
  x.clearRect(0, 0, W, H);
  x.fillStyle = "rgba(235,235,235,0.85)";
  x.textAlign = "center"; x.textBaseline = "middle";
  x.font = "900 66px system-ui"; x.fillText("LANE", W / 2, H * 0.3);
  x.font = "900 150px system-ui"; x.fillText(String(num), W / 2, H * 0.66);
  const t = new THREE.CanvasTexture(c);
  t.anisotropy = 4;
  laneMarkTex[num] = t;
  return t;
}
