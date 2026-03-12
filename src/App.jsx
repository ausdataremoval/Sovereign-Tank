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
        {/* Trust Strip - Above fold on mobile */}
        <div className="mobile-trust-strip">
          <TrustSection />
        </div>

        {/* Hero Section */}
        <section className="section reveal" id="hero">
          <div className="hero-layout">
            <div className="hero-main">
              <p className="hero-label">Australian Data Removal</p>
              <h1 className="hero-title">Your Personal Data Is Already Out There. We Help You Take It Back.</h1>
              <p className="hero-subtitle">
                We find it, document it, and help you remove it — manually, by a real person.
              </p>
              <p className="hero-desc">
                Australian Data Removal provides structured digital exposure audits and human-led removal services for individuals, families, and professionals concerned about their online privacy.
              </p>
              <div className="hero-actions">
                <a href="/start" className="cta-link primary">
                  Start My Exposure Audit
                </a>
              </div>
              <p className="hero-note">
                Secure checkout. Human-reviewed service. Digital Risk Summary typically delivered within 48 hours.
              </p>
            </div>
            <div className="hero-aside">
              <div className="research-panel">
                <p className="panel-label">Privacy Research & Collaboration</p>
                <p className="panel-intro">Australian Data Removal supports responsible data practices through research and collaboration.</p>
                <ul className="research-list">
                  <li>Policy partnerships with Australian privacy advocates</li>
                  <li>Academic collaboration on data broker behaviour</li>
                  <li>Data breach research and public awareness initiatives</li>
                </ul>
                <p className="panel-note">A portion of annual net profits is allocated to privacy research, education, and initiatives that improve digital privacy outcomes.</p>
                <div className="panel-contact">
                  <p className="panel-contact-label">Research & Partnerships</p>
                  <a href="mailto:research@ausdataremoval.com.au">research@ausdataremoval.com.au</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section - Desktop */}
        <div className="desktop-trust-strip">
          <TrustSection />
        </div>

        {/* Free Gateway Section */}
        <section className="section reveal container" id="gateway">
          <h2>Check Your Breach Status</h2>
          <p className="section-intro">
            Before requesting a manual audit, use this industry-standard tool to see if your email has appeared in a known data breach.
          </p>
          <div className="gateway-cta">
            <a 
              href="https://haveibeenpwned.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-link secondary"
            >
              Check My Email (Free)
            </a>
          </div>

          <div className="gateway-comparison">
            <div className="gateway-comparison-header">
              <div className="gateway-col-free">Free Breach Check (HIBP)</div>
              <div className="gateway-col-adr">ADR Specialist Audit ($200)</div>
            </div>
            <div className="gateway-comparison-row">
              <div className="gateway-col-free">Checks known email-based leaks.</div>
              <div className="gateway-col-adr">Maps your total digital footprint (Address, Phone, Public Records).</div>
            </div>
            <div className="gateway-comparison-row">
              <div className="gateway-col-free">Automated, instant results.</div>
              <div className="gateway-col-adr"><strong>Manual review</strong> by a Perth-based specialist.</div>
            </div>
            <div className="gateway-comparison-row">
              <div className="gateway-col-free">Shows <em>that</em> you were breached.</div>
              <div className="gateway-col-adr">Identifies <strong>where</strong> your data is currently exposed on broker sites.</div>
            </div>
            <div className="gateway-comparison-row">
              <div className="gateway-col-free">No remediation or strategy.</div>
              <div className="gateway-col-adr">Provides a tailored removal and advocacy strategy.</div>
            </div>
          </div>
        </section>

        {/* Services / Pricing Cards */}
        <section className="section reveal container" id="services">
          <p className="section-label">Services</p>
          <h2>Choose Your Service</h2>
          <p className="section-intro">
            Professional digital exposure audits and manual removal services.
          </p>
          <Arsenal />
        </section>

        {/* How It Works */}
        <section className="section reveal container" id="how-it-works">
          <p className="section-label">Process</p>
          <h2>How It Works</h2>
          <p className="section-intro">
            A transparent, manual process for understanding and controlling your digital exposure.
          </p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">01</div>
              <h3>Book Your Audit</h3>
              <p>Book your Personal Data Exposure Audit and complete secure payment online.</p>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <h3>Complete Intake</h3>
              <p>Complete a short intake form with the information required for investigation.</p>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <h3>Receive Your Report</h3>
              <p>We conduct a manual investigation and typically deliver your Digital Risk Summary within 48 business hours.</p>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <h3>Take Action</h3>
              <p>Act on the findings yourself or engage us to perform the full Digital Clean-Up service.</p>
            </div>
          </div>
        </section>

        {/* How We Use Technology */}
        <section className="section reveal container" id="technology">
          <p className="section-label">Our Approach</p>
          <h2>How We Use Technology</h2>
          <div className="technology-content">
            <p>Australian Data Removal uses technology to support careful human investigation — not to replace it.</p>
            <p>Modern tools help us scan large volumes of publicly available information, organise findings, and track removal requests. They do not make decisions or act on your behalf without a specialist reviewing the case.</p>
            <p>Every engagement involves manual review. We confirm whether information actually relates to you, assess the potential real-world risk, and determine the appropriate removal approach for each platform.</p>
            <p>We do not offer "magic button" privacy or bulk automation services. The internet does not work that way.</p>
            <p>Instead, our process focuses on clarity and transparency. You receive a clear record of what was found, what removal requests were made, and which items cannot currently be removed — explained in plain English.</p>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="section reveal container" id="audience">
          <p className="section-label">Clients</p>
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
          <p className="section-label">Deliverables</p>
          <h2>What You Receive</h2>
          <div className="receive-list">
            <div className="receive-item">Digital Risk Summary</div>
            <div className="receive-item">Identified broker and public directory exposures</div>
            <div className="receive-item">Recommended next steps</div>
            <div className="receive-item">Optional clean-up pathway</div>
            <div className="receive-item">Human follow-up where required</div>
          </div>
        </section>

        {/* AI and Your Privacy */}
        <section className="section reveal container" id="ai-privacy">
          <h2>AI and Your Privacy</h2>
          <div className="ai-privacy-content">
            <p>We use AI tools for administrative research and drafting, but never as a repository for your sensitive personal identifiers.</p>
            <p>While AI helps us refine our internal processes and communication, all exposure audits and removal actions are executed by human investigators.</p>
            <p>Your identifying data remains within our secure, Australian-governed infrastructure. We do not feed client PII into third-party AI models for training or processing.</p>
          </div>
        </section>

        {/* Service Principles */}
        <section className="values-section">
          <div className="container">
            <div className="values-grid">
              <div className="values-item">
                <h4>Local Oversight</h4>
                <p>All investigations are conducted from our Perth office.</p>
              </div>
              <div className="values-item">
                <h4>Manual Verification</h4>
                <p>Data broker listings are reviewed by a person to confirm they actually belong to you.</p>
              </div>
              <div className="values-item">
                <h4>No Data Reselling</h4>
                <p>Your intake information is used only for the purposes of investigation and removal requests. It is never sold or shared.</p>
              </div>
            </div>
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
