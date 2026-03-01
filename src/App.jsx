import React, { useEffect, useState } from 'react';
import OperationsTicker from './components/OperationsTicker';
import Aria from './components/Aria';
import Arsenal from './components/Arsenal';
import DeedModal from './components/DeedModal';

const App = () => {
  const [showDeed, setShowDeed] = useState(false);

  useEffect(() => {
    const triggerSuccess = () => {
      setShowDeed(true);
      const customEvent = new CustomEvent('paymentSuccess');
      window.dispatchEvent(customEvent);
    };

    // Check for success URL parameter (Fallback for popups)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      triggerSuccess();
      window.history.replaceState({}, document.title, "/");
    }

    // Add Paperform script dynamically
    const script = document.createElement('script');
    script.src = "https://paperform.co/__embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Robust Message Listener
    const handleMessage = (event) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data.event === 'PaperformSubmission' || data.type === 'PaperformSubmission') {
          triggerSuccess();
        }
      } catch (e) {
        if (event.data === 'PaperformSubmission') triggerSuccess();
      }
    };

    window.addEventListener('message', handleMessage);
    const internalSuccessHandler = () => setShowDeed(true);
    window.addEventListener('paymentSuccess', internalSuccessHandler);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('paymentSuccess', internalSuccessHandler);
    }
  }, []);

  return (
    <div className="app-container">
      {/* System Banner */}
      <div className="system-banner">
        <span><span style={{ color: 'var(--accent-gold)', marginRight: '0.5rem' }}>[SECURE]</span> SOVEREIGN TANK LAB TERMINAL</span>
        <span>PATCH_ID: <span style={{ color: 'var(--text-main)' }}>ADR-P1-001</span></span>
      </div>

      <main className="container">
        {/* Structured Hero for immediate value proposition */}
        <section className="section" id="hero">
          <div className="hero-content">
            <h1 className="hero-title">Eradicate Your Digital Footprint.</h1>
            <p className="hero-subtitle">
              Sovereign Tank provides industrial-grade data removal and digital autonomy audits for high-stakes professionals. Secure your sovereignty today.
            </p>
            <div className="hero-actions">
              <button
                className="primary"
                data-paperform-id="hve0sbqo"
                data-popup-button="1"
              >
                Initialize Sovereignty Protocol
              </button>
            </div>
          </div>

          <OperationsTicker />
        </section>

        {/* The Laboratory */}
        <section className="section" id="the-lab">
          <h2>The Laboratory</h2>
          <div className="glass-panel lab-panel">
            <p className="lab-status">
              System processing environmental parameters. Connect with operator for manual override.
            </p>
            <Aria />
          </div>
        </section>

        {/* The Arsenal: Product Tiers */}
        <section className="section" id="the-arsenal">
          <h2>The Arsenal</h2>
          <p className="section-intro">
            Select your tier of digital autonomy. Each patch is ADR-certified and precision-engineered.
          </p>
          <Arsenal />
        </section>
      </main>

      <footer className="system-footer">
        <div className="container footer-content">
          <div className="footer-links">
            <p className="footer-label">LEGAL & COMPLIANCE</p>
            <div className="link-group">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="mailto:support@sovereigntank.com">Contact: support@sovereigntank.com</a>
            </div>
          </div>
          <div className="watchdog-footer">
            <div className="watchdog-status-static">
              <div className="pulse-indicator"></div>
              [WATCHDOG: SECURE]
            </div>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} SOVEREIGN TANK OPERATIONS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {showDeed && <DeedModal onClose={() => setShowDeed(false)} />}
    </div>
  )
}

export default App;
