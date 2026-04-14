import './Schoolbusedgeai.css';

const edgeFeatures = [
  { num: '01', title: 'Instant violation verification' },
  { num: '02', title: 'Automated ANPR/OCR recognition' },
  { num: '03', title: 'Multi-frame event packaging for evidentiary completeness' },
  { num: '04', title: 'Secure logs and health monitoring for system diagnostics' },
];

const deployments = [
  {
    num: '01',
    title: 'Bus Mounted Cameras',
    text: 'Cameras mounted directly on school buses provide continuous coverage along routes, capturing violations wherever the bus travels.',
  },
  {
    num: '02',
    title: 'Fixed Stop Zone Cameras',
    text: 'Permanent installations near schools, bus stops, or high incident zones offer static monitoring for increased visibility.',
  },
  {
    num: '03',
    title: 'Hybrid Installations',
    text: 'Combined bus mounted and fixed cameras deliver comprehensive route coverage and serve both dynamic and static enforcement needs.',
  },
];

const SchoolBusEdgeAI = () => {
  return (
    <>
      {/* ── Edge AI Block: dark background, single-row features ── */}
      <section className="sbedge-ai" id="edge-ai">
        <div className="sbedge-ai__inner">
          <div className="sbedge-ai__header">
            <h2 className="sbedge-ai__title">
              Intelligent Edge AI and On-Device Processing
            </h2>
            <p className="sbedge-ai__desc">
              Our stop arm enforcement cameras leverage edge AI for real time event classification and license plate recognition. Their on device processing reduces latency, minimizes reliance on external networks, and enables:
            </p>
          </div>

          {/* 4-column single row feature grid */}
          <div className="sbedge-ai__features">
            {edgeFeatures.map((f) => (
              <div className="sbedge-ai__feat" key={f.num}>
                <div className="sbedge-ai__feat-num">{f.num}</div>
                <div className="sbedge-ai__feat-title">{f.title}</div>
              </div>
            ))}
          </div>

          {/* Architecture note: full-width inline bar */}
          <div className="sbedge-ai__note">
            <p className="sbedge-ai__note-text">
              The architecture of e-con Systems' cameras ensures reliable performance
              in connectivity constrained areas, such as rural routes, temporary
              deployments, and mobile enforcement operations.
            </p>
          </div>

        </div>
      </section>

      {/* ── Deployment Models Block: white background ── */}
      <section className="sbedge-dep" id="deployment">
        <div className="sbedge-dep__inner">
          <h2 className="sbedge-dep__title">
           Flexible Deployment Models of our Vision Solutions
          </h2>

          <div className="sbedge-dep__grid">
            {deployments.map((d) => (
              <div className="sbedge-dep__card" key={d.num}>
                <div className="sbedge-dep__card-top">
                  <span className="sbedge-dep__card-num">{d.num}</span>
                  <div className="sbedge-dep__card-divider" />
                  <span className="sbedge-dep__card-top-title">{d.title}</span>
                </div>
                <div className="sbedge-dep__card-body">
                  <p className="sbedge-dep__card-text">{d.text}</p>
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