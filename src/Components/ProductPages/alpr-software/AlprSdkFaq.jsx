import React, { useState } from 'react';
import './AlprSdkFaq.css';
const faqData = [
//   {
//     question: 'What is the purpose of e-con Systems’ ALPR SDK?',
//     answer:
// "Our ALPR SDK is a deep-learning-based software development kit that supports the complete ALPR workflow, from vehicle detection, license plate detection/recognition and classification to tracking, vehicle make and model identification, vehicle color detection, and metadata generation. This SDK is optimized for edge and cloud-scale deployments."  },
//   {
//     question: 'What hardware platforms does the SDK support?',
//     answer:
// "The SDK is hardware-agnostic with support for NVIDIA Jetson, Qualcomm, Ambarella, and custom AI accelerators via ONNX/TensorRT. Hence, it can be deployed across diverse infrastructure choices without being locked to a single platform."  },
//   {
//     question: ' How does integration work?',
//     answer:
// "The SDK exposes imaging outputs through REST APIs, making it integration-friendly with existing software stacks and system architectures"  },
//   {
//     question: 'What recognition accuracy does the SDK deliver?',
//     answer:
// "It delivers ~99.1% recognition accuracy on industry-standard datasets. Performance is maintained at low plate pixel densities (30–60 px), up to 60° camera tilt, high vehicle speeds, and in adverse conditions including rain, fog, tunnels, and night-time scenes."  },
//   {
//     question: ' Which country plate formats does the SDK recognize?',
//     answer:
// "The SDK is trained and validated on diverse global datasets. Please contact our team for confirmation of specific regional plate format support for your deployment."  },
//   {
//     question: 'Can the SDK run on edge devices without cloud connectivity?',
//     answer:
// "Yes. The SDK is optimized for on-device edge inference with no cloud dependency. It is perfect for deployments with limited connectivity, data privacy requirements, or lowlatency constraints. It also supports cloud-scale deployments where centralized processing is preferred."  },
//   {
//     question: 'What is CloVis Central?',
//     answer:
// "CloVis Central is e-con Systems’ remote device management platform for ANPR and intelligent vision deployments. It enables remote configuration, monitoring, and maintenance of devices and supports centralized AI model management across large-scale deployment"  },
//   {
//     question: 'What are the primary use cases for the ALPR SDK?',
//     answer:
// "Some of the use cases are traffic enforcement, automated tolling and MLFF systems, and parking lot management."  },
//   {
//     question: 'Is an evaluation version available?',
//     answer:
// "Yes. Please <a href=\"/company/contact-us\">contact e-con Systems</a> for an evaluation license and integration package."  },

{
  question: 'Can the ALPR SDK run completely at the edge?',
   answer:"Yes. e-con Systems’ ALPR SDK processes vehicle and license plate data locally on NVIDIA Jetson, reducing the need to continuously send video to the cloud."
},
{
  question: 'Which edge AI platforms are supported?',
   answer:"e-con Systems’ ALPR SDK is supported on NVIDIA Jetson. Integration with Qualcomm, Ambarella, and custom AI accelerators is available on request."
},
{
  question: 'Does the ALPR SDK support cloud deployment?',
   answer:"Yes. While optimized primarily for edge AI deployments, e-con Systems’ ALPR SDK can also be integrated into cloud-based architectures where centralized processing or multi-site scalability is the need of the hour."
},
{
  question: 'Which regions are supported?',
   answer:"The current online demo supports US license plates. For other countries and plate formats, contact us to discuss your deployment specifics."
},
{
  question: 'Can I evaluate the SDK with my existing camera?',
   answer:"Yes. You can evaluate e-con Systems’ ALPR SDK by using images or video from your existing camera system. Please contact us to evaluate compatibility with your camera and deployment needs."
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
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
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