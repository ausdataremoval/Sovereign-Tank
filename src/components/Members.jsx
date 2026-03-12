import React from 'react';
import { Link } from 'react-router-dom';

const Members = () => {
  const benefits = [
    {
      title: 'Priority Case Handling',
      desc: 'Founding Members receive priority processing on all audit and removal requests. Your cases move to the front of the queue.'
    },
    {
      title: 'Annual Exposure Re-Scan',
      desc: 'Each year, we conduct a fresh exposure audit to identify any new listings that have appeared since your last review.'
    },
    {
      title: 'Member Report Archive',
      desc: 'All your audit reports and removal documentation are securely archived and accessible upon request.'
    },
    {
      title: 'Lifetime Pricing Lock',
      desc: 'Founding Members lock in current service rates. As our services evolve and prices adjust, your rates remain fixed.'
    },
    {
      title: 'Founding Member Recognition',
      desc: 'Receive a numbered Founding Member certificate and recognition as an early supporter of Australian privacy advocacy.'
    },
    {
      title: 'Early Access',
      desc: 'Be the first to access new tools, features, and services as we expand our privacy protection capabilities.'
    }
  ];

  return (
    <main className="members-page">
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

      <div className="members-header">
        <div className="container">
          <Link to="/" className="back-link">Back to Home</Link>
          <div className="members-seal-wrapper">
            <img 
              src="/images/founding-member-seal.png" 
              alt="ADR Founding Member 2026 Seal" 
              className="members-seal"
            />
          </div>
          <h1>Founding Member</h1>
          <p className="members-intro">
            The Founding Member tier is reserved for early supporters who believe in the mission of Australian Data Removal. This is not simply a service package — it is a stake in building a privacy-first future.
          </p>
        </div>
      </div>

      <div className="members-content container">
        <section className="members-section">
          <h2>What Founding Member Means</h2>
          <p>
            Founding Members are the first cohort of clients who commit to long-term partnership with ADR. In exchange for early trust, Founding Members receive priority service, annual protection, and recognition as part of the inaugural supporter group.
          </p>
          <p>
            This tier will not remain open indefinitely. Once the founding cohort is filled, this package will close to new members.
          </p>
        </section>

        <section className="members-section">
          <h2>Why It Exists</h2>
          <p>
            Launching a privacy service requires trust. Founding Members provide that trust in our earliest days, allowing us to build the infrastructure, expertise, and reputation needed to protect Australians at scale.
          </p>
          <p>
            In return, we commit to treating Founding Members as partners — not just clients. Your feedback shapes our roadmap. Your cases receive our best attention.
          </p>
        </section>

        <section className="members-section">
          <h2>What Members Receive</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="members-section">
          <h2>How Priority Support Works</h2>
          <p>
            When you submit a request, it is flagged as a Founding Member case. Our specialists handle Founding Member cases before standard queue items. This applies to initial audits, removal requests, follow-ups, and annual re-scans.
          </p>
          <p>
            You also receive direct access to specialist consultation. Questions and concerns are addressed by senior investigators, not automated responses.
          </p>
        </section>

        <section className="members-section">
          <h2>The Founding Cohort</h2>
          <p>
            Founding Members are numbered in order of enrollment. Your certificate and records reflect your position in the founding cohort. This recognition is permanent — even as ADR grows, your founding status remains.
          </p>
          <p>
            We anticipate closing the Founding Member tier once initial capacity is reached. If you're considering membership, we encourage you to act while the tier remains open.
          </p>
        </section>

        <section className="members-cta">
          <div className="members-price">
            <span className="price-label">Founding Member</span>
            <span className="price-amount">AUD $700</span>
            <span className="price-note">One-time enrollment</span>
          </div>
          <Link to="/checkout/founding-member" className="cta-link primary large">
            Join as a Founding Member
          </Link>
          <p className="cta-note">
            Secure checkout via Stripe. Your membership begins immediately upon payment.
          </p>
        </section>
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

export default Members;
