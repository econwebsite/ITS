import React, { useState } from "react";
import "./alpr-faq.css";

const ALPRFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Can this camera be used for high-speed traffic or enforcement?",
      answer: "This rolling shutter camera is optimized for low- to medium-speed environments. High-speed traffic may cause motion artifacts, so it is not recommended for highway or enforcement use. For high-speed enforcement applications, refer to our Smart ANPR camera variant designed specifically for such scenarios."
    },
    {
      question: "Does it perform in low-light conditions?",
      answer: "Yes, STARVIS technology and auto-exposure allow the camera to capture clear images day or night."
    },
    {
      question: "Can it run on solar power?",
      answer: "Yes, the camera’s low power consumption (2–10W) makes it compatible with PoE or solar-powered setups."
    },
    {
      question: "Can it detect vehicles and pedestrians simultaneously?",
      answer: "Yes, AI-powered edge analytics enable simultaneous detection of vehicles, pedestrians, and basic traffic events."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="alpr-faq" className="alpr-faq-section">
      <div className="alpr-faq-container">
        <div className="alpr-faq-header">
          <h2 className="alpr-faq-title">Frequently Asked Questions</h2>
          {/* <p className="alpr-faq-subtitle">Find answers to common questions about our AI-enabled ALPR camera</p> */}
        </div>

        <div className="alpr-faq-items">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`alpr-faq-item ${activeIndex === index ? "active" : ""}`}
            >
              {/* Toggle Button with Arrow - Top Right */}
              <button
                className="alpr-faq-toggle-btn"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="alpr-faq-arrow-icon"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {/* Content Wrapper */}
              <div 
                className="alpr-faq-item-content"
                onClick={() => toggleFAQ(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleFAQ(index);
                  }
                }}
              >
                {/* Question Section - Left Column */}
                <div className="alpr-faq-question-section">
                  <h3 className="alpr-faq-question-text">{faq.question}</h3>
                </div>

                {/* Answer Section - Right Column (shows when active) */}
                {activeIndex === index && (
                  <div className="alpr-faq-answer-section">
                    <p className="alpr-faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ALPRFaq;
