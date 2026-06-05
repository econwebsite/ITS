import './Styles.css';

const ITSSolutions = () => {
  return (
    <section className="its-solutions" id="solutions">
      <div className="its-solutions__overlay"></div>

      <div className="its-solutions__inner">
        <div className="its-solutions__content">
          
          <h2 className="its-solutions__title">
            e-con Systems’ Vision-Based Enforcement Solutions
          </h2>

          <p className="its-solutions__desc">
           Our traffic enforcement vision solutions easily surpass traditional fixed cameras by incorporating advanced edge AI for real-time vehicle recognition and event classification. This edge-centric intelligence reduces latency, lowers network dependency, and enables on-device decision-making — critical for deployments in locations with limited connectivity or where instantaneous response is essential.
          </p>

          <p className="its-solutions__desc">
           Our solutions also meet evidentiary standards for violation documentation and prosecution, offering reliable, high-quality images and metadata despite challenging environments such as low light, high speeds, and multi-lane traffic conditions.
          </p>

        </div>
      </div>
    </section>
  );
};

export default ITSSolutions;