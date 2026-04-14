import { useEffect, useRef, useState, useCallback } from 'react';
import './SchoolBusHowItWorks.css';

const triggers = [
  {
    tag: 'Method 01',
    num: '01',
    title: 'Direct Signal Input',
    text: 'Direct signal input from the bus stop arm system',
  },
  {
    tag: 'Method 02',
    num: '02',
    title: 'Vision-Based Detection',
    text: 'Vision based detection of stop-arm state',
  },
  {
    tag: 'Method 03',
    num: '03',
    title: 'Auxiliary Sensor Triggers',
    text: 'Auxiliary sensor triggers (e.g., radar or ultrasonic verification)',
  },
];

const PROG_WIDTHS = ['33%', '66%', '100%'];
const PROG_LABELS = ['Step 1 of 3', 'Step 2 of 3', 'Step 3 of 3'];

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
    stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3,9 7,13 15,5" />
  </svg>
);

const SchoolBusHowItWorks = () => {
  const [current, setCurrent] = useState(0);
  const dirRef   = useRef(1);
  const timerRef = useRef(null);

  const getState = (idx) => {
    if (idx < current)   return 'done';
    if (idx === current) return 'active';
    return 'idle';
  };

  const connectorFilled = (connIdx) => current > connIdx;

  const startLoop = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        let next = prev + dirRef.current;
        if (next > triggers.length - 1) { dirRef.current = -1; return triggers.length - 1; }
        if (next < 0)                   { dirRef.current =  1; return 0; }
        return next;
      });
    }, 1800);
  }, []);

  const jumpTo = (idx) => {
    setCurrent(idx);
    dirRef.current = 1;
    startLoop();
  };

  useEffect(() => {
    const boot = setTimeout(() => startLoop(), 900);
    return () => { clearTimeout(boot); clearInterval(timerRef.current); };
  }, [startLoop]);

  return (
    <section className="sbhiw" id="how-it-works">
      <div className="sbhiw__inner">

        {/* ── ROW 1: Title + Description ── */}
        <div className="sbhiw__row1">
          <div className="sbhiw__row1-grid">
            <h2 className="sbhiw__title">
              How School Bus Stop-arm Enforcement Vision Works
            </h2>
            <div>
              <p className="sbhiw__desc">
               A stop arm event is defined by the deployment of the bus’s stop-arm and activation of amber/red warning lights. The system integrates with the bus wiring or sensor inputs to activate enforcement logic only when the stop-arm is extended, ensuring accurate capture of illegal pass bys.
              </p>
              
            </div>
          </div>
        </div>

        {/* ── ROW 2: Horizontal Trigger Flow ── */}
        <div className="sbhiw__row2">
          <div className="sbhiw__row2-label">The camera system supports multiple triggering methods</div>
          {/* <p className="sbhiw__row2-sub">
            The camera system supports multiple triggering methods:
          </p> */}

          <div className="sbhiw__hflow">
            {triggers.map((t, i) => {
              const state = getState(i);
              return (
                <div key={t.num} className="sbhiw__hflow-item">

                  {/* Step node + card */}
                  <div
                    className={`sbhiw__step sbhiw__step--${state}`}
                    onClick={() => jumpTo(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && jumpTo(i)}
                  >
                    <div className="sbhiw__node">
                      {state === 'done'   && <CheckIcon />}
                      {state === 'active' && <span className="sbhiw__pulse" />}
                      {state === 'idle'   && <span className="sbhiw__node-num">{t.num}</span>}
                    </div>
                    <div className="sbhiw__card">
                      <div className="sbhiw__card-tag">{t.tag}</div>
                      <div className="sbhiw__card-title">{t.title}</div>
                      <div className="sbhiw__card-text">{t.text}</div>
                    </div>
                  </div>

                  {/* Connector after each step except last */}
                  {i < triggers.length - 1 && (
                    <div className="sbhiw__connector">
                      <div className="sbhiw__conn-track">
                        <div
                          className="sbhiw__conn-fill"
                          style={{ width: connectorFilled(i) ? '100%' : '0%' }}
                        />
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Progress bar */}
          {/* <div className="sbhiw__progress-wrap">
            <div className="sbhiw__progress-track">
              <div
                className="sbhiw__progress-fill"
                style={{ width: PROG_WIDTHS[current] }}
              />
            </div>
            <span className="sbhiw__progress-label">{PROG_LABELS[current]}</span>
          </div> */}
          <p className="sbhiw__note">
                This ensures the camera only captures violations when a vehicle illegally
                enters the defined stop arm zone.
              </p>
        </div>

      </div>
    </section>
  );
};

export default SchoolBusHowItWorks;