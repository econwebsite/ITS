import './rlvdoutcomes.css';

const outcomes = [
  {
    title: 'Reduction in red light violations and unsafe intersection behavior',
    text: 'Reduction in red light violations and unsafe intersection behavior',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Decline in Angle Collisions',
    text: 'Measurable declines in angle collisions and serious injury rates',
    image:
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Enhanced Driver Compliance',
    text: 'Enhanced intersection compliance and driver awareness',
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Data-Driven Safety Programs',
    text: 'Rich analytics for data driven traffic safety programs',
    image:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop',
  },
];

const RLVDOutcomes = () => {
  return (
    <section className="rlvd-outcomes" id="outcomes">
      <div className="rlvd-outcomes__inner">

        <div className="rlvd-outcomes__header">
          <h2 className="rlvd-outcomes__title">
            Proven Safety Outcomes of Our RLVD Cameras
          </h2>
        </div>

        <div className="rlvd-outcomes__grid">

          {outcomes.map((o) => (
            <div className="rlvd-out-card" key={o.title}>

              <div className="rlvd-out-card__image-wrap">
                <img
                  src={o.image}
                  alt={o.title}
                  className="rlvd-out-card__image"
                />
              </div>

              <div className="rlvd-out-card__content">
                <p className="rlvd-out-card__text">
                  {o.text}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default RLVDOutcomes;