import "./Features.css";



import highResolution from "../../../../assets/solutionpage/smart-parking-management/high-resolution.svg";
import wideFieldOfView from "../../../../assets/solutionpage/smart-parking-management/wide-field-of-view.svg";
import lowLightHDR from "../../../../assets/solutionpage/smart-parking-management/low-light-hdr-imaging.svg";
import edgeAI from "../../../../assets/solutionpage/smart-parking-management/edge-ai-processing.svg";
import globalShutter from "../../../../assets/solutionpage/smart-parking-management/global-shutter.svg";
import ruggedWeatherproof from "../../../../assets/solutionpage/smart-parking-management/rugged-weatherproof-design.svg";

const features = [
  {
    icon: highResolution,
    title: "High Resolution",
    description:
      "To capture license plates and vehicle details clearly, even when vehicles move quickly.",
  },
  {
    icon: wideFieldOfView,
    title: "Wide Field of View (FoV)",
    description:
      "To cover large parking zones with fewer cameras and reduce blind spots.",
  },
  {
    icon: lowLightHDR,
    title: "Low-Light & HDR Imaging",
    description:
      "To deliver consistent accuracy across glare, shadows, and night conditions.",
  },
  {
    icon: edgeAI,
    title: "Edge AI Processing",
    description:
      "To perform ANPR, vehicle detection, and occupancy monitoring directly on the camera for faster response and reduced bandwidth usage.",
  },
  {
    icon: globalShutter,
    title: "Global Shutter",
    description:
      "To eliminate motion blur for crisp imaging of moving vehicles at entry and exit points.",
  },
  {
    icon: ruggedWeatherproof,
    title: "Rugged, Weather-Proof Design",
    description:
      "To ensure 24×7 outdoor performance with IP66/IP67-rated protection against rain, dust, and temperature swings.",
  },
];

const Features = () => {
  return (
    <section className="parking-features">
      <div className="parking-features-container">
        <h3> Top Features of Our Parking Vision Solutions </h3>

        {/* <p className="parking-features-subtitle">
          Built for reliable parking management across commercial and urban
          environments.
        </p> */}

        <div className="parking-features-grid">
          {features.map((feature) => (
            <div className="parking-feature-card" key={feature.title}>
              <div className="parking-feature-icon">
                  <img src={feature.icon} alt="" />

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