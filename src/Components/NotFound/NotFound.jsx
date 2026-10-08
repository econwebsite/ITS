import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const pageGroups = [
  {
    title: 'Products',
    links: [
      { label: 'ALPR Cameras', to: '/products/anpr-alpr-bullet-cameras' },
      { label: 'AI Vision Box', to: '/products/ai-vision-box' },
      { label: 'ALPR SDK', to: '/products/license-plate-recognition-software' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blogs', to: '/blog' },
      { label: 'Case Studies', to: '/case-study' },
    ],
  },
];

const NotFound = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-card">
        <p className="not-found-code">404</p>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-text">
          The page you are looking for does not exist or the link is incorrect.
        </p>
        <Link to="/" className="not-found-home-link">
          Go to Home
        </Link>

        <div className="not-found-links-section" role="navigation" aria-label="Available menu pages">
          

          <div className="not-found-link-groups">
            {pageGroups.map((group) => (
              <div key={group.title} className="not-found-link-group">
                <h3 className="not-found-link-group-title">{group.title}</h3>
                <div className="not-found-link-list">
                  {group.links.map((link) => (
                    <Link key={link.to} to={link.to} className="not-found-page-link">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
