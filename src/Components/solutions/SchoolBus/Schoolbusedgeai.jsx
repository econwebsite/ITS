import { useEffect, useRef } from 'react';
import './Schoolbusedgeai.css';

const edgeFeatures = [
  {
    num: '01',
    title: 'Instant violation verification',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
  },
  {
    num: '02',
    title: 'Automated ANPR/OCR recognition',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
  },
  {
    num: '03',
    title: 'Multi-frame event packaging for evidentiary completeness',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&auto=format&fit=crop',
  },
  {
    num: '04',
    title: 'Secure logs and health monitoring for system diagnostics',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
  },
];

const deployments = [
  {
    num: '01',
    title: 'Bus Mounted Cameras',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    text:
      'Cameras mounted directly on school buses provide continuous coverage along routes, capturing violations wherever the bus travels.',
  },
  {
    num: '02',
    title: 'Fixed Stop Zone Cameras',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    text:
      'Permanent installations near schools, bus stops, or high incident zones offer static monitoring for increased visibility.',
  },
  {
    num: '03',
    title: 'Hybrid Installations',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
    text:
      'Combined bus mounted and fixed cameras deliver comprehensive route coverage and serve both dynamic and static enforcement needs.',
  },
];

const SchoolBusEdgeAI = () => {
  const sectionRef = useRef(null);
  const deploymentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'edge-ai') {
            entry.target.classList.add('sbedge-ai--show');
          }

          if (entry.target.id === 'deployment') {
            entry.target.classList.add('sbedge-dep--show');
          }

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (deploymentRef.current) {
      observer.observe(deploymentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ───────────────── EDGE AI SECTION ───────────────── */}
      <section className="sbedge-ai" id="edge-ai" ref={sectionRef}>
        <div className="sbedge-ai__inner">

          {/* Header */}
          <div className="sbedge-ai__header">
            <h2 className="sbedge-ai__title">
              Intelligent Edge AI and On-Device Processing
            </h2>

            <p className="sbedge-ai__desc">
              Our stop arm enforcement cameras leverage edge AI for real time event classification and license plate recognition. Their on device processing reduces latency, minimizes reliance on external networks, and enables:
            </p>
          </div>

          {/* Content */}
          <div className="sbedge-ai__content">

            {/* Left Image */}
            <div className="sbedge-ai__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Edge AI Processing"
                className="sbedge-ai__image"
              />
            </div>

            {/* Right Features */}
            <div className="sbedge-ai__features">
              {edgeFeatures.map((f, index) => (
                <div
                  className="sbedge-ai__feat"
                  key={f.num}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div
                    className="sbedge-ai__feat-image"
                    style={{ backgroundImage: `url(${f.image})` }}
                  />

                  <div className="sbedge-ai__feat-title">
                    {f.title}
                  </div>

                  {index !== edgeFeatures.length - 1 && (
                    <div className="sbedge-ai__divider" />
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ───────────────── DEPLOYMENT SECTION ───────────────── */}
      <section className="sbedge-dep" id="deployment" ref={deploymentRef}>
        <div className="sbedge-dep__inner">

          <h2 className="sbedge-dep__title">
            Flexible Deployment Models of our Vision Solutions
          </h2>

          <div className="sbedge-dep__grid">
            {deployments.map((d) => (
              <div className="sbedge-dep__card" key={d.num}>
                <div className="sbedge-dep__card-image-wrap">
                  <img
                    src={d.image}
                    alt={d.title}
                    className="sbedge-dep__card-image"
                    loading="lazy"
                  />
                </div>

                <div className="sbedge-dep__card-body">
                  <h3 className="sbedge-dep__card-title">
                    {d.title}
                  </h3>
                  <p className="sbedge-dep__card-text">
                    {d.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default SchoolBusEdgeAI;