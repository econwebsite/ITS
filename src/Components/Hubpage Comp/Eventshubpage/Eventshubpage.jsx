import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Eventshubpage.css';
import AnimatedButton from '../../Button comp/AnimatedButton';
import itsAmericaBanner from '../../../assets/Hubpages/its-america-2026-banner-en-800.jpg';

const upcomingEvents = [
  {
    id: 1,
    title: 'ITS India Congress / Traffic Infratech Expo',
    dateDay: '07',
    dateMonth: 'OCT',
    time: 'Oct 7 to 8, 2026',
    locationFull: '@ Hall 1, Bharat Mandapam, New Delhi',
    bannerImage: 'https://www.e-consystems.com/images/map_image-new.jpg',
  },
];

const concludedEvents = [
  {
    id: 1,
    title: 'ITS America 2026',
    dateRange: 'June 10–12, 2026',
    venue: 'Huntington Place, Detroit, Michigan',
    boothInfo: 'Booth #6071',
    description:
      'At the ITS America Conference & Expo 2026, held June 10-12 at Huntington Place in Detroit, Michigan, e-con Systems exhibited its AI-Powered embedded vision solutions for ITS markets at Booth #6071, with a focus on traffic management, traffic enforcement, tolling, parking, and urban mobility.',
    bannerImage: itsAmericaBanner,
    knowMoreUrl: 'https://www.e-consystems.com/events/its-america-2026.asp',
    region: 'USA',
  },
];

/* ── Map Component for Event Location ────────────────────────────────── */
const MapMarker = ({ region, venue }) => (
  <div className="eventshub-map-container">
    <div className="eventshub-map-wrapper">
      {/* World Map Background Image */}
      <img 
        src="https://www.e-consystems.com/images/map_image-new.jpg" 
        alt="Event location map" 
        className="eventshub-world-map"
      />
    </div>
  </div>
);

/* ── SVG icons (no extra dependency) ─────────────────────────────────── */
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const TicketIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
  </svg>
);

const Eventshubpage = () => {
  return (
    <div className="eventshub-page">
      <Helmet>
        <title>ITS Events | e-con Systems Intelligent Transportation</title>
        <meta
          name="description"
          content="Stay updated on upcoming and concluded ITS events where e-con Systems showcases AI-powered embedded vision solutions for traffic management, enforcement, tolling, and smart cities."
        />
      </Helmet>

      {/* ── Simple Banner Title ─────────────────────────────────── */}
      <section className="eventshub-banner">
        <h1>Tradeshows & events</h1>
      </section>

      <div className="mainContainer eventshub-container">

        {/* ── Upcoming Events ─────────────────────────────── */}
        <section className="eventshub-section" aria-labelledby="upcoming-heading">
          <div className="eventshub-section-label upcoming">
            <h2 id="upcoming-heading">Upcoming Events</h2>
          </div>

          <div className="eventshub-upcoming-grid">
            {upcomingEvents.map((evt, index) => (
              <article key={evt.id} className={`eventshub-upcoming-card ${index === 0 ? 'featured' : ''}`} data-aos="fade-up">
                {/* Background Image Overlay */}
                <div className="eventshub-card-bg" style={{ backgroundImage: `url(${evt.bannerImage})` }} />
                
                <div className="eventshub-card-content">
                  {/* Date Section */}
                  <div className={`eventshub-date-box ${index === 0 ? 'featured-date' : ''}`}>
                    <div className="eventshub-date-day">{evt.dateDay}</div>
                    <div className="eventshub-date-month">{evt.dateMonth}</div>
                  </div>

                  {/* Event Info */}
                  <div className="eventshub-event-info">
                    <h3 className="eventshub-compact-title">{evt.title}</h3>
                    <div className="eventshub-compact-time">{evt.time}</div>
                    <div className="eventshub-compact-location">{evt.locationFull}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Concluded Events ────────────────────────────── */}
        <section className="eventshub-section" aria-labelledby="concluded-heading">
          <div className="eventshub-section-label concluded">
            <h2 id="concluded-heading">Concluded Events</h2>
          </div>

          <div className="eventshub-concluded-grid">
            {concludedEvents.map((evt) => (
              <article key={evt.id} className="eventshub-concluded-card" data-aos="fade-up">
                {/* Banner Image */}
                <div className="eventshub-concluded-banner">
                  <img src={evt.bannerImage} alt={evt.title} />
                  <span className="eventshub-region-badge concluded-region-banner">{evt.region}</span>
                </div>

                <div className="eventshub-concluded-body">
                  <div className="eventshub-concluded-header">
                    <h3 className="eventshub-concluded-title">{evt.title}</h3>
                  </div>

                  <ul className="eventshub-meta-list concluded-meta">
                    <li>
                      <span className="eventshub-meta-icon concluded-icon">
                        <CalendarIcon />
                      </span>
                      <span className="eventshub-meta-text">{evt.dateRange}</span>
                    </li>
                    <li>
                      <span className="eventshub-meta-icon concluded-icon">
                        <LocationIcon />
                      </span>
                      <span className="eventshub-meta-text">{evt.venue}</span>
                    </li>
                    {evt.boothInfo && (
                      <li>
                        <span className="eventshub-meta-icon concluded-icon">
                          <TicketIcon />
                        </span>
                        <span className="eventshub-meta-text">{evt.boothInfo}</span>
                      </li>
                    )}
                  </ul>

                  <p className="eventshub-concluded-desc">{evt.description}</p>

                  <div className="eventshub-concluded-footer">
                    <AnimatedButton
                      text="Know More"
                      backgroundColor="#00aeef"
                      animationColor="#69ba2f"
                      hoverColor="#003873"
                      to={evt.knowMoreUrl}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Eventshubpage;
