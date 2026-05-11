import React from "react";
import "./BulletVariants.css";
import Modelbutton from "../../Button comp/Modelbutton";
const variants = [
  {
    name: "Traffic Monitoring",
    resolution: "8 MP",
    shutter:"Rolling",
    chroma: "Color",
    zoom: "3× Zoom",
    npu:"4 TOPS",
    processor: "Neuron",
    storage: "-",
    network: "-",
    interface: "GigE",
    useCase: "Traffic analytics & parking monitoring",
    power: "PoE or 12 V DC"
  },
  {
    name: "High-Speed Enforcement",
    resolution: "5 MP",
    shutter:"Global",
    chroma: "Color",
    zoom: "18× Zoom",
    npu:"12 TOPS",
    processor: "Ambarella",
    storage: "SSD / SD Card",
    network: "LTE/ WIFI",
    interface: "GigE",
    useCase: "Highway speed enforcement & Tolling ",
    power: "PoE or 12 V DC"
  },
  {
    name: "Urban ITS",
    resolution: "3 MP",
    shutter:"Global",
    chroma: "Color / Mono",
    zoom: "10× Zoom",
    npu:"4 TOPS",
    processor: "Neuron",
    storage: "SSD",
    network: "-",
    interface: "GigE",
    useCase: "Tolling, intersections & multi-lane urban roads",
    power: "PoE or 12 V DC"
  },
];

const BulletVariants = () => {
  return (
    <section className="bullet-variants-wrapper">
      <h2 className="variants-title">AI-Powered Smart ANPR Camera Variants</h2>
      {/* <p className="variants-subtitle">
        Choose the ideal bullet camera variant for your traffic enforcement and 
        ANPR/ALPR applications.
      </p> */}

      <div className="variants-container">
        {variants.map((variant, index) => (
          <div key={index} className="variant-card">
            <div className="variant-header">
              <h3>{variant.name}</h3>
              {/* <span className="variant-tag">{variant.resolution}</span> */}
            </div>

                    <div className="variant-features">
                 <div className="variant-label">Resolution</div>
                <div className="variant-value">{variant.resolution}</div> 
                <div className="variant-label">Shutter Type</div>
                <div className="variant-value">{variant.shutter}</div>
                <div className="variant-label">Chroma</div>
                <div className="variant-value">{variant.chroma}</div>
                <div className="variant-label">Optical Zoom</div>
                <div className="variant-value">{variant.zoom}</div>
                <div className="variant-label">On-board NPU</div>
                <div className="variant-value">{variant.npu}</div>
                <div className="variant-label"> Storage</div>
                <div className="variant-value">{variant.storage}</div>
                <div className="variant-label">Network </div>
                <div className="variant-value">{variant.network}</div>
                <div className="variant-label">Interface</div>
                <div className="variant-value">{variant.interface}</div>
                
                <div className="variant-label">Power</div>
                <div className="variant-value">{variant.power}</div>
                <div className="variant-label full">Primary Use Case</div>
                <div className="variant-value full">{variant.useCase}</div>

            </div>

           <div className="variant-button-wrapper mb-4">
              {variant.name === "Traffic Monitoring" ? (
                <a 
                  href="/products/automatic-license-plate-recognition-camera" 
                  className="bullet-cameravariant-link gtm-btn"
                  style={{
                    display: "inline-block",
                    padding: "2px 10px",
                    backgroundColor: "#69ba2f",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "600",
                    borderRadius: "6px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#00aeef";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#69ba2f";
                  }}
                >
                  To Learn More
                </a>
              ) : (
                <Modelbutton 
                  className="bullet-cameravariant-button gtm-btn" 
                  text="Contact Us" 
                  backgroundColor="#69ba2f" 
                  animationColor="#00aeef" 
                  hoverColor="#00aeef"
                  padding="2px 10px"
                  fontSize="14px" 
                  productName={`Bullet Camera - ${variant.name}`}
                  title={`Bullet Camera - ${variant.name}`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BulletVariants;
