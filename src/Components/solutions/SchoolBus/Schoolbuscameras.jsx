import { useEffect, useRef } from 'react';
import './Schoolbuscameras.css';

const highlights = [
  {
    num: '01',
    title: 'High resolution overview cameras ',
    text: 'High resolution overview cameras to capture the entire violation scene, including the bus, stop-arm, and passing vehicle',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
  },
  {
    num: '02',
    title: 'Dedicated ANPR Cameras',
    text: 'Dedicated ANPR (Automatic Number Plate Recognition) cameras for clear plate images at various distances',
    image:
      'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800&auto=format&fit=crop',
  },
  {
    num: '03',
    title: 'Global Shutter Sensors',
    text: 'Global shutter sensors to eliminate motion blur even at fast approach speeds',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop',
  },
  {
    num: '04',
    title: 'High Output IR Illumination',
    text: 'High output IR illumination for consistent night time and low light performance',
    image:
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
  },
  {
    num: '05',
    title: 'Advanced On-Camera ISP Tuning',
    text: 'Advanced on camera ISP tuning to enhance contrast and detail under varied lighting and weather',
    image:
      'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=800&auto=format&fit=crop',
  },
];

const SchoolBusCameras = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.sbcam__card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sbcam" id="cameras" ref={sectionRef}>
      <div className="sbcam__inner">

        {/* HEADER */}
        <div className="sbcam__header fade-up">

          <div className="sbcam__header-grid">
            <h2 className="sbcam__title">
              e-con Systems’ School Bus Stop-arm Cameras
            </h2>
          </div>

          <p className="sbcam__intro">
            Our stop-arm vision solutions provide reliable evidence under all conditions. Some of the highlights include:
          </p>

        </div>

        {/* CARD GRID */}
        <div className="sbcam__grid">

          {highlights.map((h, index) => (
            <div
              className="sbcam__card"
              key={h.num}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >

              <div className="sbcam__card-image">
                <img src={h.image} alt={h.title} />
              </div>

              <div className="sbcam__card-content">

                <h3 className="sbcam__card-title">{h.title}</h3>

                <p className="sbcam__card-text">{h.text}</p>

              </div>

            </div>
          ))}

        </div>

        {/* BOTTOM PARAGRAPH */}
        <p className="sbcam__bottom-text fade-up">
          e-con Systems’ school bus stop-arm cameras also ensure that the captured images are bundled with time stamps, GPS/location metadata, and vehicle trajectory. This delivers robust evidentiary records for supporting enforcement decisions and citations.
        </p>

      </div>
    </section>
  );
};

export default SchoolBusCameras;