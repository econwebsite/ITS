import './SchoolBusCameras.css';

const highlights = [
  {
    num: '01',
    title: 'High resolution overview cameras ',
    text: 'High resolution overview cameras to capture the entire violation scene, including the bus, stop-arm, and passing vehicle',
  },
  {
    num: '02',
    title: 'Dedicated ANPR Cameras',
    text: 'Dedicated ANPR (Automatic Number Plate Recognition) cameras for clear plate images at various distances',
  },
  {
    num: '03',
    title: 'Global Shutter Sensors',
    text: 'Global shutter sensors to eliminate motion blur even at fast approach speeds',
  },
  {
    num: '04',
    title: 'High Output IR Illumination',
    text: 'High output IR illumination for consistent night time and low light performance',
  },
  {
    num: '05',
    title: 'Advanced On-Camera ISP Tuning',
    text: 'Advanced on camera ISP tuning to enhance contrast and detail under varied lighting and weather',
  },
];

const SchoolBusCameras = () => {
  return (
    <section className="sbcam" id="cameras">
      <div className="sbcam__inner">

        <div className="sbcam__header">
          {/* <div className="sbcam__label">Camera Hardware</div> */}
          <div className="sbcam__header-grid">
            <h2 className="sbcam__title">
             e-con Systems’ School Bus Stop-arm Cameras
            </h2>
            
          </div>
          <p className="sbcam__intro">
              Our stop-arm vision solutions provide reliable evidence under all conditions. Some of the highlights include:
            </p>
        </div>

        <div className="sbcam__grid">
          {highlights.map((h) => (
            <div className="sbcam__card" key={h.num}>
              <div className="sbcam__card-top">
                <div className="sbcam__card-bar" />
              </div>
              <h3 className="sbcam__card-title">{h.title}</h3>
              <p className="sbcam__card-text">{h.text}</p>
            </div>
          ))}
        </div>
          <p className="sbcam__intro" style={{marginTop: '20px'}}>e-con Systems’ school bus stop-arm cameras also ensure that the captured images are bundled with time stamps, GPS/location metadata, and vehicle trajectory. This delivers robust evidentiary records for supporting enforcement decisions and citations.</p>
      </div>
    </section>
  );
};

export default SchoolBusCameras;