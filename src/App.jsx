import React, { useEffect, useState } from 'react';
import Arsenal from './components/Arsenal';
import DeedModal from './components/DeedModal';
import TrustSection from './components/TrustSection';

const App = () => {
  const [showDeed, setShowDeed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [legalContent, setLegalContent] = useState(null);

  useEffect(() => {
    const triggerSuccess = () => {
      setShowDeed(true);
      const customEvent = new CustomEvent('paymentSuccess');
      window.dispatchEvent(customEvent);
    };

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      triggerSuccess();
      window.history.replaceState({}, document.title, "/");
    }

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
      <main>
        {/* Hero Section */}
        <section className="section reveal" id="hero">
          <h1 className="hero-title">Your Personal Data Is Already Out There.</h1>
          <p className="hero-subtitle">
            We find it, document it, and help you remove it. Manually. By a real person.
          </p>
          <div className="hero-actions">
            <button
              className="primary"
              data-paperform-id="t86h5x0u"
              data-popup-button="1"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 3000);
              }}
            >
              Start My Exposure Audit
            </button>
          </div>
          <p className="hero-note">
            Secure checkout. Manual handling. Digital Risk Summary delivered within 48 hours.
          </p>
        </section>

        {/* Trust Section */}
        <TrustSection />

        {/* How It Works */}
        <section className="section reveal container" id="how-it-works">
          <h2>How It Works</h2>
          <p className="section-intro">
            A transparent, manual process for understanding and controlling your digital exposure.
          </p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">01</div>
              <h3>Book Your Audit</h3>
              <p>Book your Personal Data Exposure Audit and pay securely online.</p>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <h3>Complete Intake</h3>
              <p>Complete a short intake form with the details we need to investigate.</p>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <h3>Receive Your Report</h3>
              <p>We investigate manually and deliver your Digital Risk Summary within 48 hours.</p>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <h3>Take Action</h3>
              <p>Act on the findings yourself or engage us to perform the Full Digital Clean-Up.</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section reveal container" id="services">
          <h2>Services</h2>
          <p className="section-intro">
            Professional data exposure audits and manual removal services.
          </p>
          <Arsenal />
        </section>

        {/* Who This Is For */}
        <section className="section reveal container" id="audience">
          <h2>Who This Is For</h2>
          <div className="audience-grid">
            <div className="audience-item">Individuals wanting to understand their digital exposure</div>
            <div className="audience-item">Families concerned about public listing sites</div>
            <div className="audience-item">Professionals and executives seeking privacy control</div>
            <div className="audience-item">People wanting a manual, human-led alternative to automated tools</div>
          </div>
        </section>

        {/* What You Receive */}
        <section className="section reveal container" id="receive">
          <h2>What You Receive</h2>
          <div className="receive-list">
            <div className="receive-item">Digital Risk Summary</div>
            <div className="receive-item">Identified broker and public directory exposures</div>
            <div className="receive-item">Recommended next steps</div>
            <div className="receive-item">Optional clean-up pathway</div>
            <div className="receive-item">Human follow-up where required</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h4>Australian Data Removal</h4>
              <p>Australian-led digital exposure audit and manual data removal services.</p>
            </div>
            <div className="footer-links">
              <h5>LEGAL</h5>
              <button onClick={() => setLegalContent('privacy')}>Privacy Policy</button>
              <button onClick={() => setLegalContent('terms')}>Terms of Service</button>
            </div>
            <div className="footer-contact">
              <h5>CONTACT</h5>
              <p><a href="mailto:hello@ausdataremoval.com.au">hello@ausdataremoval.com.au</a></p>
              <p>1300 XXX XXX</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Australian Data Removal. All rights reserved.</p>
            <p>Australian-owned. Manual case handling. Structured digital risk documentation.</p>
          </div>
        </div>
      </footer>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: 'var(--text-muted)' }}>Connecting to secure checkout...</p>
          </div>
        </div>
      )}

      {/* Legal Modal */}
      {legalContent && (
        <div className="modal-overlay" onClick={() => setLegalContent(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setLegalContent(null)}>&times;</button>
            <h2>{legalContent === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</h2>
            {legalContent === 'privacy' ? (
              <>
                <p>We collect only the information necessary to perform your data exposure audit and removal services.</p>
                <p>Your personal information is handled securely and is never shared with third parties for marketing purposes.</p>
                <p>All audit data is retained only for the duration required to complete your service and is securely deleted thereafter.</p>
              </>
            ) : (
              <>
                <p>Australian Data Removal provides data exposure audits and manual removal services as described on this website.</p>
                <p>Results may vary depending on individual circumstances and the responsiveness of third-party data brokers.</p>
                <p>Due to the nature of manual audit work, refunds are assessed on a case-by-case basis after service delivery.</p>
              </>
            )}
          </div>
        </div>
      )}

      {showDeed && <DeedModal onClose={() => setShowDeed(false)} />}
    </div>
  )
}

export default App;
