import React, { useEffect } from "react";
import "./ProductVariants.css";
import AOS from "aos";
import "aos/dist/aos.css";

const variants = [
  {
    id: 1,
    title: "Core AI",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&h=750&w=1600", // full-width background
    specs: [
      { label: "Resolution", value: "2MP" },
      { label: "On-board NPU", value: "1.2 TOPS" },
      { label: "IR Illumination", value: "Yes" },
      { label: "Zoom", value: "4x" },
      { label: "PTZ Range", value: "355° / 80°" },
      { label: "Storage", value: "SD Card" },
    ],
  },
  {
    id: 2,
    title: "Edge AI+",
    image:
      "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&h=750&w=1600", // full-width background
    specs: [
      { label: "Resolution", value: "8MP" },
      { label: "On-board NPU", value: "15 TOPS" },
      { label: "IR Illumination", value: "Yes" },
      { label: "Zoom", value: "4x" },
      { label: "PTZ Range", value: "355° / 80°" },
      { label: "Storage", value: "SD Card" },
    ],
  },
];

const ProductVariants = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="product-variants-section">
      <h2 className="section-title" data-aos="fade-up">
        Product Variants
      </h2>

      {variants.map((variant, index) => (
        <div
          key={variant.id}
          className={`variant-block ${index % 2 === 0 ? "align-left" : "align-right"}`}
          style={{ backgroundImage: `url(${variant.image})` }}
        >
          <div
            className="variant-specs"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <table>
              <thead>
                <tr>
                  <th>Variant</th>
                  <th>{variant.title}</th>
                </tr>
              </thead>
              <tbody>
                {variant.specs.map((spec, i) => (
                  <tr key={i}>
                    <td>{spec.label}</td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductVariants;
