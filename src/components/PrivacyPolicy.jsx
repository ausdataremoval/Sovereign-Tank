import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="expansion-page legal-page">
      <div className="page-header">
        <a href="/" className="back-home">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </a>
        <h1>Privacy Policy</h1>
        <p className="page-subtitle">How we collect, use, and protect your personal information.</p>
      </div>

      <div className="page-content">
        <div className="legal-placeholder">
          <p className="placeholder-notice">Final legal text will be inserted prior to launch.</p>
          <p className="placeholder-sub">
            This page will contain our complete Privacy Policy in accordance with the Privacy Act 1988 (Cth) 
            and the Australian Privacy Principles (APPs).
          </p>
        </div>
      </div>
    </main>
  );
}
