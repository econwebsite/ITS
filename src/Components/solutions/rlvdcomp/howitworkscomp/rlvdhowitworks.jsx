// RLVDHowItWorks.jsx

import './rlvdhowitworks.css';

const steps = [
  {
    num: '01',
    title: 'Traffic Signal Integration',
    text: 'The system receives real time signal phase data from the traffic controller, ensuring capture logic aligns with red signal duration.',
    image:
      'https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1200&auto=format&fit=crop',
  },
  {
    num: '02',
    title: 'Intelligent Triggering',
    text: 'When a vehicle crosses the stop line after the light changes to red, the integrated detection logic (vision + sensor triggers) activates capture.',
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    num: '03',
    title: 'Multi-Frame Capture',
    text: 'A sequence of frames is recorded before, during, and after the violation, providing context and supporting legal defensibility.',
    image:
      'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1200&auto=format&fit=crop',
  },
  {
    num: '04',
    title: 'Edge AI Processing',
    text: 'AI processing performs license plate recognition, event validation, and classification directly on the device with minimal latency.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    num: '05',
    title: 'Metadata Packaging',
    text: 'Images, timestamps, signal state, lane data, and recognition results are securely packaged for back office integration and enforcement workflows.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
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