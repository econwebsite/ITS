import "./Features.css";

import {
  PhotoCameraOutlined,
  CenterFocusStrongOutlined,
  NightlightRoundOutlined,
  MemoryOutlined,
  CameraAltOutlined,
  ShieldOutlined,
} from "@mui/icons-material";

const features = [
  {
    icon: <PhotoCameraOutlined />,
    title: "High Resolution",
    description:
      "To capture license plates and vehicle details clearly, even when vehicles move quickly.",
  },
  {
    icon: <CenterFocusStrongOutlined />,
    title: "Wide Field of View (FoV)",
    description:
      "To cover large parking zones with fewer cameras and reduce blind spots.",
  },
  {
    icon: <NightlightRoundOutlined />,
    title: "Low-Light & HDR Imaging",
    description:
      "To deliver consistent accuracy across glare, shadows, and night conditions.",
  },
  {
    icon: <MemoryOutlined />,
    title: "Edge AI Processing",
    description:
      "To support ANPR, vehicle detection, and occupancy monitoring directly on-device.",
  },
  {
    icon: <CameraAltOutlined />,
    title: "Global Shutter",
    description:
      "To eliminate motion blur for crisp imaging of moving vehicles at entry and exit points.",
  },
  {
    icon: <ShieldOutlined />,
    title: "Rugged, Weather-Proof Design",
    description:
      "To ensure 24×7 outdoor performance with IP66/IP67-rated protection against rain, dust, and temperature swings.",
  },
];

const Features = () => {
  return (
    <section className="parking-features">
      <div className="parking-features-container">
        <h2>Top Features of Our Parking Vision Solutions</h2>

        <p className="parking-features-subtitle">
          Built for reliable parking management across commercial and urban
          environments.
        </p>

        <div className="parking-features-grid">
          {features.map((feature) => (
            <div className="parking-feature-card" key={feature.title}>
              <div className="parking-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;