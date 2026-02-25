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
      {/* Simulation Content Warning & Manual Test Trigger */}
      <div className="system-banner" style={{
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        color: 'var(--text-muted)',
        textAlign: 'center',
        padding: '0.75rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        letterSpacing: '0.05em',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem'
      }}>
        <span><span style={{ color: 'var(--accent-gold)', marginRight: '0.5rem' }}>[SECURE]</span> SOVEREIGN TANK LAB TERMINAL</span>
        <span>PATCH_ID: <span style={{ color: 'var(--text-main)' }}>ADR-P1-001</span></span>
      </div>

      <main className="container">
        {/* Webflow Instruction 2: Keep hero section focused on Data Removal / ROI Utility */}
        <section className="section" id="hero">
          <h1>Decline Digital Subjugation</h1>
          <p>
            Data removal is the ultimate ROI utility. Eradicate your digital footprint and secure your sovereignty.
          </p>
          <button className="primary" data-paperform-id="hve0sbqo" data-popup-button="1">Initialize Transaction</button>

          {/* Webflow Instruction 3: Active Operations Ticker. Display below the hero. */}
          <OperationsTicker />
        </section>

        {/* Webflow Instruction 2 & 3: Reposition Aria character to "The Lab" section at the bottom */}
        <section className="section" id="the-lab" style={{ marginTop: 'var(--space-md)' }}>
          <h2>The Laboratory</h2>
          <div className="glass-panel" style={{ padding: 'var(--space-md)' }}>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              System processing environmental parameters. Connect with operator for manual override.
            </p>
            <Aria />
          </div>
        </section>

        {/* Webflow Instruction 4: The Arsenal – Product / Hardware Section */}
        <section className="section" id="the-arsenal">
          <h2>The Arsenal</h2>
          <p style={{ color: 'var(--steel-light)', marginBottom: 'var(--space-md)' }}>Minimalist boutique hardware layout.</p>
          <Arsenal />
        </section>

      </main>

      <div className="watchdog-status">
        <div className="pulse-indicator"></div>
        [WATCHDOG: SECURE]
      </div>

      {showDeed && <DeedModal onClose={() => setShowDeed(false)} />}
    </div>
  )
}

export default App;
