import React, { useEffect, useState } from 'react';
import OperationsTicker from './components/OperationsTicker';
import Aria from './components/Aria';
import Arsenal from './components/Arsenal';
import DeedModal from './components/DeedModal';
import TrustSection from './components/TrustSection';

const App = () => {
  const [showDeed, setShowDeed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [legalContent, setLegalContent] = useState(null); // 'privacy' | 'terms' | null

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
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => setIsLoading(false), 2500);
                }}
              >
                Initialize Sovereignty Protocol
              </button>
            </div>
          </div>

          <OperationsTicker />
        </section>

        {/* Trust Signals */}
        <TrustSection />

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
        <div className="container footer-content-grid">
          <div className="footer-brand-section">
            <div className="footer-logo">SOVEREIGN TANK</div>
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} OPERATIONS. ALL RIGHTS RESERVED.
            </div>
          </div>

          <div className="footer-links-section">
            <p className="footer-label">COMPLIANCE PROTOCOLS</p>
            <div className="link-group">
              <button
                className="text-link"
                onClick={() => setLegalContent('privacy')}
              >
                PRIVACY_PROT
              </button>
              <button
                className="text-link"
                onClick={() => setLegalContent('terms')}
              >
                TERMS_OF_SERV
              </button>
              <a href="mailto:hello@ausdataremoval.com.au" className="footer-email">
                CONTACT: hello@ausdataremoval.com.au
              </a>
            </div>
          </div>

          <div className="footer-security-section">
            <div className="watchdog-badge">
              <div className="pulse-indicator"></div>
              <span className="badge-text">WATCHDOG: SECURE</span>
              <span className="badge-id">ID: ADR-P1-ALPHA</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="modal-overlay loading-overlay">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <p className="loading-text">CONNECTING TO SECURE NODE...</p>
            <p className="loading-sub">ESTABLISHING ADR-P1 PROTOCOL</p>
          </div>
        </div>
      )}

      {/* Legal Modal */}
      {legalContent && (
        <div className="modal-overlay" onClick={() => setLegalContent(null)}>
          <div className="deed-container legal-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setLegalContent(null)}>&times;</button>
            <div className="deed-header">
              <h1>{legalContent === 'privacy' ? 'PRIVACY PROTOCOL' : 'TERMS OF SERVICE'}</h1>
            </div>
            <div className="deed-body" style={{ fontSize: '0.8rem' }}>
              {legalContent === 'privacy' ? (
                <>
                  <p>1. DATA COLLECTION: We operate on a zero-knowledge basis. Local parameters are used solely for the eradication process.</p>
                  <p>2. ENCRYPTION: All transition data is encrypted via 256-bit AES industrial standards.</p>
                  <p>3. RETENTION: Sovereign Tank retains zero user data post-audit. All session logs are purged upon completion of The Deed.</p>
                </>
              ) : (
                <>
                  <p>1. SERVICE: Sovereign Tank provides data removal audits as validated by the ADR-P1 certificate.</p>
                  <p>2. LIABILITY: We provide industrial-grade audits but the user remains the ultimate sovereign of their digital identity.</p>
                  <p>3. REFUNDS: Due to the immediate nature of data eradication protocols, all sales are final upon issuance of the Deed.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {showDeed && <DeedModal onClose={() => setShowDeed(false)} />}
    </div>
  )
}

export default App;
