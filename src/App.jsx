import React, { useEffect, useState } from 'react';
import OperationsTicker from './components/OperationsTicker';
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

    // Check for success URL parameter
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

    // Scroll Reveal Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    window.addEventListener('message', handleMessage);
    const internalSuccessHandler = () => setShowDeed(true);
    window.addEventListener('paymentSuccess', internalSuccessHandler);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('paymentSuccess', internalSuccessHandler);
      observer.disconnect();
    }
  }, []);

  return (
    <div className="app-container">
      {/* System Banner */}
      <div className="system-banner">
        <span><span style={{ color: 'var(--accent-gold)', marginRight: '0.5rem' }}>[SECURE]</span> AUS DATA REMOVAL | CLIENT TERMINAL</span>
        <span>AUDIT_STATUS: <span style={{ color: 'var(--text-main)' }}>READY</span></span>
      </div>

      <main className="container">
        {/* Simple & Clear Hero */}
        <section className="section reveal" id="hero">
          <div className="hero-content">
            <h1 className="hero-title">Your Personal Data Is Already Out There.</h1>
            <p className="hero-subtitle">
              We find it, document it, and help you remove it. Manually. By a real person.
            </p>
            <div className="hero-actions">
              <a
                href="https://buy.stripe.com/test_dR63ee9W54Yk7Is7ss"
                className="primary-btn"
                onClick={() => setIsLoading(true)}
              >
                Start My Exposure Audit →
              </a>
            </div>
          </div>

          <OperationsTicker />
        </section>

        {/* Trust Signals */}
        <TrustSection />

        {/* How It Works Section */}
        <section className="section reveal" id="how-it-works">
          <div className="section-header">
            <h2>How It Works</h2>
            <p className="section-subtitle">A transparent, manual process for absolute data sovereignty.</p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">01</div>
              <p>Book your Personal Data Exposure Audit and pay securely online.</p>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <p>Complete a short intake form.</p>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <p>We investigate manually and deliver your Digital Risk Summary within 48 hours.</p>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <p>You can act on the findings yourself or engage us to perform the Full Digital Clean-Up.</p>
            </div>
          </div>
        </section>

        {/* The Arsenal: Product Tiers */}
        <section className="section reveal" id="the-arsenal">
          <h2>Services</h2>
          <p className="section-intro">
            Professional data removal audits and manual eradication protocols.
          </p>
          <Arsenal />
        </section>
      </main>

      <footer className="system-footer">
        <div className="container footer-content-grid">
          <div className="footer-brand-section">
            <div className="footer-logo">AUS DATA REMOVAL</div>
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
                  <p>3. RETENTION: AUS Data Removal retains zero user data post-audit. All session logs are purged upon completion.</p>
                </>
              ) : (
                <>
                  <p>1. SERVICE: AUS Data Removal provides data removal audits as validated by the ADR-P1 certificate.</p>
                  <p>2. LIABILITY: We provide industrial-grade audits but the user remains the ultimate sovereign of their digital identity.</p>
                  <p>3. REFUNDS: Due to the immediate nature of data eradication protocols, all sales are final upon issuance of the Report.</p>
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
