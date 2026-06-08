// RLVDHowItWorks.jsx

import './rlvdhowitworks.css';
import trafficSignal from '../../../../assets/solutionpage/rlvd/traffic-signal-img.png';
import vehicleTrigger from '../../../../assets/solutionpage/rlvd/vehicle-trigger-img.png';
import multiFrame from '../../../../assets/solutionpage/rlvd/multi-frame-img.png';
import edgeAI from '../../../../assets/solutionpage/rlvd/edge-ai-img.png';
import metadata from '../../../../assets/solutionpage/rlvd/metadata-img.png';

const steps = [
  {
    num: '01',
    title: 'Traffic Signal Integration',
    text: 'The system receives real time signal phase data from the traffic controller, ensuring capture logic aligns with red signal duration.',
    image: trafficSignal,
  },
  {
    num: '02',
    title: 'Intelligent Triggering',
    text: 'When a vehicle crosses the stop line after the light changes to red, the integrated detection logic (vision + sensor triggers) activates capture.',
    image: vehicleTrigger,
  },
  {
    num: '03',
    title: 'Multi-Frame Capture',
    text: 'A sequence of frames is recorded before, during, and after the violation, providing context and supporting legal defensibility.',
    image: multiFrame,
  },
  {
    num: '04',
    title: 'Edge AI Processing',
    text: 'On-device AI performs license plate recognition, event validation, and vehicle classification directly at the camera — with minimal latency and no cloud dependency.',
    image: edgeAI,
  },
  {
    num: '05',
    title: 'Metadata Packaging',
    text: 'Images, timestamps, signal state, lane data, and recognition results are securely packaged for back office integration and enforcement workflows.',
    image: metadata,
  },
];

const RLVDHowItWorks = () => {
  return (
    <section className="rlvd-how" id="how-it-works">

      <div className="rlvd-how-container">

        {/* Heading */}
        <div className="rlvd-how-header fade-up">
          <h2>How RLVD Works</h2>
        </div>

        {/* Cards */}
        <div className="rlvd-how-grid">

          {steps.map((item) => (
            <div className="rlvd-card fade-card" key={item.num}>

              <div className="rlvd-card-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="rlvd-card-content">

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <div className="rlvd-bottom-note fade-up">
          <p>
            External triggers, including induction loops, radar, or vision based sensor fusion, ensure precise event capture and minimal false positives.
          </p>
        </div>

      </div>

    </section>
  );
};

export default RLVDHowItWorks;