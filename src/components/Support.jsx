import React from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
  const cryptoAssets = [
    {
      name: 'Bitcoin (BTC)',
      address: 'Coming soon',
      network: 'Bitcoin Network'
    },
    {
      name: 'Ethereum (ETH)',
      address: 'Coming soon',
      network: 'Ethereum Mainnet'
    },
    {
      name: 'USDT',
      address: 'Coming soon',
      network: 'ERC-20 (Ethereum)'
    },
    {
      name: 'USDC',
      address: 'Coming soon',
      network: 'ERC-20 (Ethereum)'
    }
  ];

  const usageExamples = [
    'Data broker ecosystem research and mapping',
    'Public educational guides and briefings',
    'Digital rights advocacy and donations',
    'OSINT tool access and development',
    'Community digital safety initiatives',
    'New educational material creation'
  ];

  return (
    <main className="support-page">
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

      <div className="support-header">
        <div className="container">
          <Link to="/" className="back-link">Back to Home</Link>
          <h1>Support Privacy Research</h1>
          <p className="support-intro">
            These resources are provided freely to help Australians understand and manage their digital exposure. If you find them useful and wish to support this work, you can make a voluntary contribution.
          </p>
        </div>
      </div>

      <div className="support-content container">
        <section className="support-section">
          <h2>Why Support Matters</h2>
          <p>
            Investigating data broker networks, documenting privacy threats, and creating educational resources takes time and specialist expertise. Your contributions help us continue this work independently, without relying on advertising or data monetisation.
          </p>
          <p>
            All contributions directly support privacy education, investigative research, and community digital safety initiatives.
          </p>
        </section>

        <section className="support-section">
          <h2>Contribution Methods</h2>
          <p className="support-note">
            We accept contributions via cryptocurrency. Addresses will be published once wallet infrastructure is finalised.
          </p>
          <div className="crypto-grid">
            {cryptoAssets.map((asset, idx) => (
              <div key={idx} className="crypto-card">
                <h3>{asset.name}</h3>
                <p className="crypto-network">{asset.network}</p>
                <div className="crypto-address">
                  <code>{asset.address}</code>
                </div>
              </div>
            ))}
          </div>
          <p className="crypto-disclaimer">
            Please verify addresses before sending. Cryptocurrency transactions are irreversible. We are not responsible for funds sent to incorrect addresses.
          </p>
        </section>

        <section className="support-section">
          <h2>How Contributions Are Used</h2>
          <div className="usage-list">
            {usageExamples.map((usage, idx) => (
              <div key={idx} className="usage-item">
                <span className="usage-bullet"></span>
                <span>{usage}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="support-section">
          <h2>Contribution Ledger</h2>
          <p>
            We maintain a transparent record of how contributions are allocated. As research projects and educational materials are completed, updates will be published here and in our Exposure Radar briefings.
          </p>
          <div className="ledger-placeholder">
            <p>Contribution allocations will be published once contributions are received.</p>
          </div>
        </section>

        <section className="support-section support-disclaimer">
          <h2>Important Notice</h2>
          <p>
            Contributions are voluntary and do not constitute payment for services. They are not tax-deductible. Contributors do not receive preferential treatment or access to client data. For professional privacy services, please visit our <Link to="/#services">Services page</Link>.
          </p>
        </section>

        <section className="support-cta">
          <h2>Prefer a Service Instead?</h2>
          <p>
            If you need professional assistance with your digital exposure, our paid services include comprehensive audits and manual removal advocacy.
          </p>
          <Link to="/checkout/audit" className="cta-link primary">
            Get an Exposure Audit
          </Link>
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

export default Support;
