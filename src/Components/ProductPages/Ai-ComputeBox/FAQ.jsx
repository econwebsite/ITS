import React, { useState } from 'react';
import './FAQ.css';
const faqData = [
  {
    question: 'What is e-con Systems’ AI Vision Box?',
    answer:
      'e-con Systems’ AI Vision Box is a ruggedized edge AI computing platform for intelligent transportation systems. It enables on-device vehicle detection, pedestrian detection, ANPR, incident detection, and intersection analytics while transmitting only final metadata to the cloud instead of raw video.',
  },
  {
    question: 'What processor variants are available?',
    answer:
      'Three variants are available based on performance and power requirements: Ambarella CV72s with 15 TOPS for low-power and solar deployments, Qualcomm QCS8550 with 48 TOPS for mid-power multi-camera applications, and NVIDIA Orin NX with up to 100 TOPS for high-performance multi-camera workloads.',
  },
  {
    question: 'What AI analytics does the Vision Box support?',
    answer:
      'It supports on-device ANPR, vehicle classification, red-light and speed violation detection, pedestrian and vulnerable road user (VRU) detection, adaptive traffic signal control, and congestion and flow analytics using deep learning, CNN-based object detection, and multi-object tracking.',
  },
  {
    question: 'Is the AI Vision Box NEMA-compliant?',
    answer:
      'Yes. The AI Vision Box is built to meet NEMA standards for traffic cabinet environments, including vibration tolerance, environmental resilience, and long-term reliability for roadside deployment.',
  },
  {
    question: 'What connectivity options does it support?',
    answer:
      'The AI Vision Box supports Ethernet, Wi-Fi, and 4G/5G connectivity for edge-to-cloud data transmission and integration with smart city analytics platforms and centralized ITS backends.',
  },
  {
    question: 'Does it support multi-sensor fusion?',
    answer:
      'Yes. The AI Vision Box supports fusion with radar, LiDAR, and cameras for synchronized multi-sensor enforcement and intersection analytics.',
  },
  {
    question: 'Is the AI Vision Box V2X ready?',
    answer:
      'Yes. The platform supports V2X readiness as part of its future-ready architecture for next-generation intelligent intersections.',
  },
  {
    question: 'Can I deploy custom AI models on the Vision Box?',
    answer:
      'Yes. An SDK is available for custom model deployment. Model complexity and performance depend on the selected processor variant. Please contact our team to confirm the right variant and SDK configuration for your use case.',
  },
  {
    question: 'Is it suitable for outdoor deployment?',
    answer:
      'Yes. The AI Vision Box features weatherproof housing designed for thermal stability across extreme temperatures, making it suitable for continuous outdoor operation on gantries, poles, and roadside cabinets.',
  },
  {
    question: 'Are BABA-compliant configurations available?',
    answer:
      'Please contact our team to discuss compliance requirements for your deployment. We support custom configurations and can explore options based on your procurement specifications.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              key={index}
            >
              <div
                className="faq-question"
                onClick={() => handleToggle(index)}
              >
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {openIndex === index ? '−' : '+'}
                </span>
                
              </div>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;