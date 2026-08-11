import React, { useState } from 'react';
import './FAQ.css';
const faqData = [
  {
    question: 'What is the purpose of e-con Systems’ ALPR SDK?',
    answer:
      'Our ALPR SDK is a deep-learning-based software development kit that supports the complete ALPR workflow, from vehicle detection, license plate detection and recognition, and classification to tracking, vehicle make and model identification, vehicle color detection, and metadata generation. It is optimized for edge and cloud-scale deployments.',
  },
  {
    question: 'What hardware platforms does the SDK support?',
    answer:
      'The SDK is hardware-agnostic and supports NVIDIA Jetson, Qualcomm, Ambarella, and custom AI accelerators via ONNX/TensorRT. It can be deployed across diverse infrastructure choices without being locked to a single platform.',
  },
  {
    question: 'How does integration work?',
    answer:
      'The SDK exposes imaging outputs through REST APIs, making it easy to integrate with existing software stacks and system architectures.',
  },
  {
    question: 'What recognition accuracy does the SDK deliver?',
    answer:
      'It delivers approximately 99.1% recognition accuracy on industry-standard datasets and maintains performance at low plate pixel densities, up to 60° camera tilt, high vehicle speeds, and adverse conditions including rain, fog, tunnels, and night-time scenes.',
  },
  {
    question: 'Which country plate formats does the SDK recognize?',
    answer:
      'The SDK is trained and validated on diverse global datasets. Please contact our team for confirmation of specific regional plate format support for your deployment.',
  },
  {
    question: 'Can the SDK run on edge devices without cloud connectivity?',
    answer:
      'Yes. The SDK supports on-device edge inference without cloud dependency, making it suitable for limited connectivity, data privacy, and low-latency requirements. It also supports cloud-scale deployments where centralized processing is preferred.',
  },
  {
    question: 'What is CloVis Central?',
    answer:
      'CloVis Central is e-con Systems’ remote device management platform for ANPR and intelligent vision deployments. It enables remote configuration, monitoring, maintenance, and centralized AI model management across large-scale deployments.',
  },
  {
    question: 'What are the primary use cases for the ALPR SDK?',
    answer:
      'Primary use cases include traffic enforcement, automated tolling and MLFF systems, and parking lot management.',
  },
  {
    question: 'Is an evaluation version available?',
    answer:
      'Yes. Please contact e-con Systems for an evaluation license and integration package.',
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