import React from 'react';
import { Link } from 'react-router-dom';

const ExposureRadar = () => {
  const alerts = [
    {
      date: 'March 2026',
      type: 'Investigation Update',
      title: 'Directory Network Mapping Complete',
      content: 'Our ongoing investigation into Australian people-search directory networks has identified 47 distinct sites sharing data across common infrastructure. Many of these sites do not respond to standard opt-out requests. We are documenting formal escalation pathways.',
      related: null
    },
    {
      date: 'March 2026',
      type: 'Broker Alert',
      title: 'New People-Search Site Targeting Australians',
      content: 'A new directory site has been identified indexing Australian residential addresses and phone numbers. The site appears to aggregate data from multiple breach sources and public records. Opt-out mechanisms are currently being tested.',
      related: '/resources'
    },
    {
      date: 'February 2026',
      type: 'Breach Notice',
      title: 'Historical Records Resurfacing',
      content: 'Data from breaches dating back to 2019-2022 is being repackaged and sold through new broker channels. If you have not checked your exposure recently, we recommend running a fresh audit. Old credentials and personal details may be circulating in new contexts.',
      related: '/checkout/audit'
    },
    {
      date: 'February 2026',
      type: 'Policy Change',
      title: 'Major Broker Updates Opt-Out Requirements',
      content: 'One of the largest US-based data brokers has changed its opt-out verification process, now requiring government ID for Australian removal requests. We are evaluating alternative approaches for clients who prefer not to submit identification documents.',
      related: null
    },
    {
      date: 'January 2026',
      type: 'Research Note',
      title: 'Mobile Number Indexing Expanding',
      content: 'Our research indicates increasing indexing of Australian mobile numbers across people-search networks. Numbers previously unlisted are appearing in new contexts. Consider whether your mobile number has been used for verification on compromised services.',
      related: '/checklist'
    }
  ];

  return (
    <main className="radar-page">
      <div className="watchdog-bar">
        <div className="watchdog-inner">
          <div className="watchdog-shield">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="watchdog-shield-pulse"></span>
          </div>
          <div className="watchdog-status">
            <span className="watchdog-label">ADR SECURITY: ACTIVE</span>
            <span className="watchdog-sublabel">Connection Secured</span>
          </div>
        </div>
      </div>

      <div className="radar-header">
        <div className="container">
          <Link to="/" className="back-link">Back to Home</Link>
          <h1>Exposure Radar</h1>
          <p className="radar-intro">
            Short alerts, breach notices, broker discoveries, and investigation updates from our ongoing privacy research. Subscribe via email to receive alerts directly.
          </p>
        </div>
      </div>

      <div className="radar-content container">
        <div className="radar-feed">
          {alerts.map((alert, idx) => (
            <article key={idx} className="radar-alert">
              <div className="alert-meta">
                <span className="alert-type">{alert.type}</span>
                <span className="alert-date">{alert.date}</span>
              </div>
              <h2>{alert.title}</h2>
              <p>{alert.content}</p>
              {alert.related && (
                <Link to={alert.related} className="alert-link">
                  Related resource →
                </Link>
              )}
            </article>
          ))}
        </div>

        <aside className="radar-sidebar">
          <div className="sidebar-card">
            <h3>Stay Informed</h3>
            <p>Exposure alerts and privacy research updates delivered to your inbox.</p>
            <p className="sidebar-note">Email subscription coming soon.</p>
          </div>

          <div className="sidebar-card">
            <h3>Check Your Exposure</h3>
            <p>Concerned about what you've read? Run a free exposure check or request a professional audit.</p>
            <Link to="/checkout/audit" className="cta-link primary small">
              Get an Audit
            </Link>
          </div>

          <div className="sidebar-card">
            <h3>Founding Members</h3>
            <p>Founding Members receive priority alerts and early access to research findings.</p>
            <Link to="/members" className="cta-link secondary small">
              Learn More
            </Link>
          </div>
        </aside>
      </div>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Australian Data Removal Pty Ltd (ACN 695 272 836)</p>
            <Link to="/">Return to Home</Link>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default ExposureRadar;
