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
      {/* Watchdog Security Indicator */}
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
          <div className="watchdog-metrics">
            <div className="watchdog-metric">
              <span className="metric-indicator active"></span>
              <span>HTTPS</span>
            </div>
            <div className="watchdog-metric">
              <span className="metric-indicator active"></span>
              <span>No Trackers</span>
            </div>
            <div className="watchdog-metric">
              <span className="metric-indicator active"></span>
              <span>AU Servers</span>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="section reveal" id="hero">
          <div className="hero-layout">
            <div className="hero-main">
              <p className="hero-label">Australian Data Removal</p>
              <h1 className="hero-title">Take Control of Your Personal Data</h1>
              <p className="hero-subtitle">
                Australian specialists helping individuals identify and remove exposed personal information from data brokers, search sites, and public records.
              </p>
              <div className="hero-actions">
                <a href="/checkout/audit" className="cta-link primary">
                  Start Exposure Audit
                </a>
                <a href="#services" className="cta-link secondary">
                  View Services
                </a>
              </div>
              <p className="hero-friction-reducer">Manual investigation. No automated scraping. No data resale.</p>
            </div>
          </div>
        </section>

        {/* Exposure Check Block */}
        <section className="section reveal container" id="exposure-check">
          <h2>Start With a Free Exposure Check</h2>
          <p className="section-intro">
            Before choosing a service, check whether your email address has appeared in known breaches. This free check does not collect or store your personal data.
          </p>
          <div className="gateway-cta-group">
            <a 
              href="https://haveibeenpwned.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-link primary"
            >
              Check My Exposure
            </a>
            <a href="/checkout/audit" className="cta-link secondary">
              Get a Professional Exposure Audit
            </a>
          </div>
        </section>

        {/* Services / Pricing Cards */}
        <section className="section reveal container" id="services">
          <p className="section-label">Services</p>
          <h2>Choose Your Service</h2>
          <p className="section-intro">
            Professional digital exposure audits and manual removal services.
          </p>
          <p className="checkout-reassurance">Secure payment processed by Stripe. No client data is stored in AI systems or sold to third parties.</p>
          <Arsenal />
        </section>

        {/* Trust Section */}
        <TrustSection />
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h4>Australian Data Removal</h4>
              <p>Australian-led digital exposure audit and manual data removal services.</p>
              <p className="footer-company">Australian Data Removal Pty Ltd</p>
              <p className="footer-acn">ACN 695 272 836</p>
              <p className="footer-location">Western Australia</p>
            </div>
            <div className="footer-links">
              <h5>COMPANY</h5>
              <a href="/about">About</a>
              <button onClick={() => setLegalContent('privacy')}>Privacy Policy</button>
              <button onClick={() => setLegalContent('terms')}>Terms of Service</button>
            </div>
            <div className="footer-contact">
              <h5>CONTACT</h5>
              <p><a href="mailto:hello@ausdataremoval.com.au">hello@ausdataremoval.com.au</a></p>
              <p><a href="tel:1300504079">1300 504 079</a></p>
              <p><a href="mailto:research@ausdataremoval.com.au">research@ausdataremoval.com.au</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Australian Data Removal</p>
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
          <div className="modal-content legal-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setLegalContent(null)}>&times;</button>
            <h2>{legalContent === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</h2>
            {legalContent === 'privacy' ? (
              <div className="legal-text">
                <p className="legal-intro">Australian Data Removal Pty Ltd (ACN 695 272 836, "we", "us", "our") is committed to protecting your privacy in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p>
                
                <h3>1. Information We Collect</h3>
                <p>We collect personal information necessary to provide our data exposure audit and removal services, including:</p>
                <ul>
                  <li>Contact details (name, email address, phone number)</li>
                  <li>Search identifiers (names, aliases, usernames, phone numbers, email addresses you wish us to investigate)</li>
                  <li>Payment information (processed securely via Stripe through Paperform)</li>
                  <li>Communications and correspondence with us</li>
                </ul>
                
                <h3>2. How We Collect Information</h3>
                <p>We collect information directly from you when you submit intake forms via Paperform, communicate with us via email or phone, or engage our services. We do not collect information from third parties for marketing purposes.</p>
                
                <h3>3. Purpose of Collection</h3>
                <p>We use your personal information to:</p>
                <ul>
                  <li>Perform data exposure audits on your behalf</li>
                  <li>Submit removal and opt-out requests to data brokers</li>
                  <li>Communicate with you regarding your case</li>
                  <li>Process payments for services</li>
                  <li>Comply with legal obligations</li>
                </ul>
                
                <h3>4. Disclosure to Third Parties</h3>
                <p>We may disclose your information to:</p>
                <ul>
                  <li>Paperform (form processing)</li>
                  <li>Stripe (payment processing)</li>
                  <li>Data brokers and directories (for the purpose of submitting removal requests on your behalf)</li>
                </ul>
                <p>We do not sell, rent, or share your personal information for marketing purposes.</p>
                
                <h3>5. Data Retention</h3>
                <p>We retain your personal information only for as long as necessary to complete your service and comply with legal obligations. Audit data is typically retained for 12 months following service completion, after which it is securely deleted unless you request earlier deletion.</p>
                
                <h3>6. Access and Correction</h3>
                <p>You have the right to access and request correction of your personal information. To make a request, contact us at hello@ausdataremoval.com.au.</p>
                
                <h3>7. Complaints</h3>
                <p>If you believe we have breached your privacy, please contact us at hello@ausdataremoval.com.au. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.</p>
                
                <h3>8. Contact</h3>
                <p>Australian Data Removal Pty Ltd<br />ACN 695 272 836<br />Western Australia<br />hello@ausdataremoval.com.au<br />1300 504 079</p>
                
                <p className="legal-updated">Last updated: March 2026</p>
              </div>
            ) : (
              <div className="legal-text">
                <p className="legal-intro">These Terms of Service ("Terms") govern your use of the services provided by Australian Data Removal Pty Ltd (ACN 695 272 836, "we", "us", "our").</p>
                
                <h3>1. Services</h3>
                <p>Australian Data Removal provides manual data exposure audits and data removal services. We investigate where your personal information appears online and, where engaged, submit removal and opt-out requests on your behalf.</p>
                
                <h3>2. Service Limitations</h3>
                <p>Our services are provided on a best-efforts basis. We cannot guarantee:</p>
                <ul>
                  <li>Complete removal of all personal data from the internet</li>
                  <li>Specific outcomes or response times from third-party data brokers</li>
                  <li>Prevention of future data collection by third parties</li>
                </ul>
                <p>Results depend on the policies and responsiveness of third-party data brokers and directories, which are outside our control.</p>
                
                <h3>3. Consumer Guarantee Rights</h3>
                <p>Our services come with guarantees that cannot be excluded under the Australian Consumer Law. For major failures with the service, you are entitled to cancel your service contract and obtain a refund for the unused portion. You are also entitled to choose a refund or replacement for major failures. If a failure does not amount to a major failure, you are entitled to have the problem corrected in a reasonable time.</p>
                
                <h3>4. Refunds and Cancellations</h3>
                <p>Due to the nature of manual audit work (which commences immediately upon payment), refunds are assessed on a case-by-case basis:</p>
                <ul>
                  <li>If work has not yet commenced, a full refund may be provided</li>
                  <li>If work has commenced, a partial refund may be offered at our discretion</li>
                  <li>Completed services are generally non-refundable unless a major failure has occurred</li>
                </ul>
                <p>To request a refund, contact us at hello@ausdataremoval.com.au within 14 days of purchase.</p>
                
                <h3>5. Payment</h3>
                <p>All prices are in Australian Dollars (AUD) and inclusive of GST where applicable. Payment is processed securely via Stripe through Paperform.</p>
                
                <h3>6. Your Obligations</h3>
                <p>You agree to:</p>
                <ul>
                  <li>Provide accurate and complete information in your intake form</li>
                  <li>Only request audits and removals for your own personal information or information you are legally authorised to manage</li>
                  <li>Not use our services for any unlawful purpose</li>
                </ul>
                
                <h3>7. Limitation of Liability</h3>
                <p>To the maximum extent permitted by law, our liability for any claim arising from or related to our services is limited to the amount you paid for the relevant service. We are not liable for any indirect, incidental, or consequential damages.</p>
                
                <h3>8. Dispute Resolution</h3>
                <p>If you have a dispute regarding our services, please contact us at hello@ausdataremoval.com.au. We will attempt to resolve the matter in good faith. If we cannot reach a resolution, either party may refer the dispute to the relevant consumer protection agency in Western Australia.</p>
                
                <h3>9. Governing Law</h3>
                <p>These Terms are governed by the laws of Western Australia and the Commonwealth of Australia. You submit to the non-exclusive jurisdiction of the courts of Western Australia.</p>
                
                <h3>10. Changes to Terms</h3>
                <p>We may update these Terms from time to time. The current version will always be available on our website.</p>
                
                <h3>11. Contact</h3>
                <p>Australian Data Removal Pty Ltd<br />ACN 695 272 836<br />Western Australia<br />hello@ausdataremoval.com.au<br />1300 504 079</p>
                
                <p className="legal-updated">Last updated: March 2026</p>
              </div>
            )}
          </div>
        </div>
      )}

      {showDeed && <DeedModal onClose={() => setShowDeed(false)} />}
    </div>
  )
}

export default App;
