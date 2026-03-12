import React, { useEffect, useState } from 'react';
import Arsenal from './components/Arsenal';
import DeedModal from './components/DeedModal';
import TrustSection from './components/TrustSection';
import FounderCard from './components/FounderCard';

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
          <div className="hero-layout">
            <div className="hero-main">
              <h1 className="hero-title">Your Personal Data Is Already Out There.</h1>
              <p className="hero-subtitle">
                We find it, document it, and help you remove it. Manually. By a real person.
              </p>
              <div className="hero-actions">
                <a href="/start" className="cta-link primary">
                  Start My Exposure Audit
                </a>
              </div>
              <p className="hero-note">
                Secure checkout. Manual handling. Digital Risk Summary typically delivered within 48 business hours.
              </p>
              <p className="hero-reassurance">
                A specialist reviews every request and replies within 48 business hours. No AI decisions. No offshore call centres.
              </p>
            </div>
            <div className="hero-aside">
              <FounderCard />
            </div>
          </div>
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
              <p>We investigate manually and typically deliver your Digital Risk Summary within 48 business hours.</p>
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

        {/* How We Use Technology */}
        <section className="section reveal container" id="technology">
          <h2>How We Use Technology</h2>
          <div className="technology-content">
            <p>Australian Data Removal combines careful human investigation with modern tools to locate and remove personal data from the internet.</p>
            <p>Technology helps us scan large volumes of public information quickly, identify potential exposures, and organise removal requests. Automated tools alone cannot reliably assess context, legality, or the real-world impact of online information.</p>
            <p>Every case we handle involves human review. Our analysts verify whether the information actually relates to you and determine the appropriate removal approach.</p>
            <p>We do not rely on "magic button" solutions that promise instant results. The internet does not work that way.</p>
            <p>Instead, our process is transparent. You receive a clear record of what was found, what actions were taken, and what information cannot be removed at this time.</p>
            <blockquote className="technology-quote">
              We don't do scare tactics, and we don't sell magic buttons. You always know what we found, what we removed, and what can't be removed yet — in plain English.
            </blockquote>
          </div>
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
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Australian Data Removal Pty Ltd (ACN 695 272 836). All rights reserved.</p>
            <p>Australian-owned and operated. Manual case handling. Best-efforts data removal advocacy.</p>
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
