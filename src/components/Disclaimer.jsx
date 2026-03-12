import React from 'react';

export default function Disclaimer() {
  return (
    <main className="expansion-page legal-page">
      <div className="page-header">
        <a href="/" className="back-home">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </a>
        <h1>Disclaimer</h1>
        <p className="page-subtitle">Important information about our services and limitations.</p>
      </div>

      <div className="page-content">
        <div className="legal-placeholder">
          <p className="placeholder-notice">Final legal text will be inserted prior to launch.</p>
          <p className="placeholder-sub">
            This page will contain disclaimers regarding service limitations, removal success rates, 
            and other important notices for prospective clients.
          </p>
        </div>
      </div>
    </main>
  );
}
