import React from 'react';

export default function Terms() {
  return (
    <main className="expansion-page legal-page">
      <div className="page-header">
        <a href="/" className="back-home">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </a>
        <h1>Terms of Service</h1>
        <p className="page-subtitle">Terms and conditions governing your use of our services.</p>
      </div>

      <div className="page-content">
        <div className="legal-placeholder">
          <p className="placeholder-notice">Final legal text will be inserted prior to launch.</p>
          <p className="placeholder-sub">
            This page will contain our complete Terms of Service outlining the agreement between 
            Australian Data Removal Pty Ltd and our clients.
          </p>
        </div>
      </div>
    </main>
  );
}
