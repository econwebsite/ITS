import './RLVDOverview.css';

const outcomes = [
  {
    num: '01',
    label: 'Enhance intersection safety',
  },
  {
    num: '02',
    label: 'Improve compliance',
  },
  {
    num: '03',
    label: 'Reduce angle collisions across urban and suburban road networks',
  },
];

const RLVDOverview = () => {
  return (
    <section className="rlvd-overview">

      {/* Heading */}
      <div className="rlvd-header fade-up">
        <h2>
          Vision-Based <span>Red Light Violation</span> Detection (RLVD) Cameras
        </h2>

        <p>
          Red Light Violation Detection (RLVD) cameras are automated, AI powered imaging solutions that identify, capture, and document vehicles that enter intersections after the traffic signal has turned red.
        </p>
      </div>

      {/* Main Row */}
      <div className="rlvd-row">

        {/* Left Side Image */}
        <div className="rlvd-left fade-left">
          <div className="rlvd-image-box">
            {/* Replace with your actual image */}
            <img
              src="/images/rlvd-camera.png"
              alt="RLVD Camera"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="rlvd-right fade-right">

          <p className="rlvd-right-text">
            They bring together precise imaging, intelligent triggering, and intelligent analytics, helping agencies to:
          </p>

          <div className="rlvd-points">
            {outcomes.map((item) => (
              <div className="rlvd-point" key={item.num}>

                <div className="rlvd-icon-box">
                  <span>{item.num}</span>
                </div>

                <div className="rlvd-label">
                  {item.label}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default RLVDOverview;