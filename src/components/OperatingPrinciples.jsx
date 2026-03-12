import React from 'react';

export default function OperatingPrinciples() {
  return (
    <main className="expansion-page legal-page">
      <div className="page-header">
        <a href="/" className="back-home">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </a>
        <h1>Our Operating Principles</h1>
        <p className="page-subtitle">How Australian Data Removal handles your digital footprint.</p>
      </div>

      <div className="page-content">
        <div className="principles-container">
          <section className="principle-block">
            <div className="principle-number">01</div>
            <h2>Data Minimisation</h2>
            <p>
              We collect only the information required to process removal requests. We do not request 
              unnecessary identification and we do not retain personal data longer than required to 
              complete a case.
            </p>
          </section>

          <section className="principle-block">
            <div className="principle-number">02</div>
            <h2>Human Investigation</h2>
            <p>
              Exposure audits and removal work are performed manually by a privacy specialist in 
              Western Australia. Client data is not fed into automated scraping systems or third-party 
              AI services.
            </p>
          </section>

          <section className="principle-block">
            <div className="principle-number">03</div>
            <h2>Legal Process</h2>
            <p>
              ADR does not use illicit methods. Removal requests rely on lawful processes including 
              applicable privacy legislation and platform removal procedures.
            </p>
          </section>

          <section className="principle-block">
            <div className="principle-number">04</div>
            <h2>No Data Brokerage</h2>
            <p>
              ADR does not trade, sell, or monetise client information. Client data is used solely 
              for executing removal requests.
            </p>
          </section>
        </div>

        <div className="principles-footer">
          <p>
            These principles guide every engagement. If you have questions about how we handle 
            your data, contact us at{' '}
            <a href="mailto:hello@ausdataremoval.com.au">hello@ausdataremoval.com.au</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
