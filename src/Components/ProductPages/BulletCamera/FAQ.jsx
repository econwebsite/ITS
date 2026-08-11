import React, { useState } from 'react';
import './FAQ.css';
const faqData = [
  {
    question: 'What are e-con Systems ANPR/ALPR cameras designed for?',
    answer:
      'e-con Systems ANPR/ALPR cameras are perfect for traffic management, tolling, parking, and enforcement. They can handle fast-moving vehicles, multi-lane traffic, glare, low-light conditions, and adverse weather across highways, toll plazas, parking areas, and intersections.',
  },
  {
    question: 'What is the difference between global shutter and rolling shutter in ALPR cameras?',
    answer:
      'Global shutter captures all pixels simultaneously, eliminating motion blur and distortion for fast-moving vehicles, which is suited for highway enforcement and high-speed tolling. Rolling shutter is suited for lower-speed applications such as traffic analytics and parking monitoring.',
  },
  {
    question: 'Do e-con ALPR cameras support external trigger input for red light and speed enforcement?',
    answer:
      'Yes. The cameras support trigger input, allowing direct integration with intersection signal lines and enabling plate capture at the precise moment a violation occurs.',
  },
  {
    question: 'Does the camera process data on-device or in the cloud?',
    answer:
      'Both. e-con Systems’ ANPR cameras support real-time edge AI analytics on-device and can also stream data to centralized cloud-driven ALPR engines, giving integrators flexibility based on deployment architecture.',
  },
  {
    question: 'Can I deploy my own AI models on the camera?',
    answer:
      'An SDK is available for custom model deployment. However, model complexity is subject to the on-board NPU capacity of the selected variant. Contact us with your use case to confirm compatibility.',
  },
  {
    question: 'Can these cameras integrate with other sensors?',
    answer:
      'Yes. The cameras support multi-sensor fusion and integrate with radar, LiDAR, and trigger sensors for synchronized enforcement and traffic analytics.',
  },
  {
    question: 'What connectivity and power options are supported?',
    answer:
      'PoE-driven Ethernet or wireless connectivity. Power options include PoE or 12V DC. The energy-efficient architecture also supports solar-powered deployments for remote ITS locations.',
  },
  {
    question: 'Are e-con Systems’ cameras rated for outdoor use?',
    answer:
      'Yes. They come with IP67-rated housing for vibration resistance and temperature endurance, driving continuous outdoor operations in harsh roadside environments.',
  },
  {
    question: 'Are e-con Systems’ cameras BABA compliant?',
    answer:
      'Please contact our team to discuss compliance requirements for your deployment. We support custom configurations and can explore options based on your procurement specifications.',
  },
  {
    question: 'Is a compact form factor available for space-constrained deployments?',
    answer:
      'Yes. Custom form factors, lens configurations, and field-of-view options, including narrow FOV for long-range plate capture beyond 50 m, are available through our OEM program.',
  },
  {
    question: 'What compute and software does e-con recommend alongside these cameras?',
    answer:
      'e-con Systems’ Darsi Pro AI Compute Box (based on NVIDIA Jetson Orin NX) and an AI-led ALPR SDK optimized for edge and cloud deployments are available as companion products.',
  },
  {
    question: 'What additional context do the cameras capture beyond the license plate?',
    answer:
      'Overview camera configurations capture the broader scene, such as vehicle make, model, and recognition (MMR), along with surrounding environmental details. This strengthens evidence quality and supports investigations, auditing, and traffic analysis.',
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