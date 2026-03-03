import React, { useState, useEffect } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Add Paperform script dynamically
    const script = document.createElement('script');
    script.src = "https://paperform.co/__embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="site-container">
      {/* Navigation */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-text">Australian Data Removal</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('process')} className="nav-link">Process</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>

          <div className="header-cta">
            <a href="tel:1300000000" className="phone-link">
              <PhoneIcon />
              <span>1300 XXX XXX</span>
            </a>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Australian-Owned Privacy Consultancy</div>
            <h1 className="hero-title">
              Your Personal Data.<br />
              <span className="text-accent">Removed Permanently.</span>
            </h1>
            <p className="hero-subtitle">
              Hands-on, manual data removal by Australian privacy specialists. 
              We personally search, locate, and remove your information from data brokers, 
              people-search sites, and online databases.
            </p>
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                data-paperform-id="xmr0dk0c"
                data-popup-button="1"
              >
                Get Started
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('process')}
              >
                How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Exposure Check Tool */}
      <section className="exposure-check">
        <div className="container">
          <div className="exposure-check-inner">
            <div className="exposure-check-content">
              <h3>Check Your Data Exposure</h3>
              <p>Find out if your personal information is being traded online.</p>
            </div>
            <form className="exposure-check-form" onSubmit={checkExposure}>
              <div className="exposure-input-wrap">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={exposureEmail}
                  onChange={(e) => setExposureEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary" disabled={exposureLoading}>
                  {exposureLoading ? 'Checking...' : 'Check Now'}
                </button>
              </div>
              {exposureResult && (
                <div className="exposure-result">
                  <AlertIcon />
                  <div>
                    <p>{exposureResult.message}</p>
                    <button 
                      type="button"
                      className="exposure-cta-link"
                      onClick={() => scrollToSection('contact')}
                    >
                      {exposureResult.action}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <ShieldIcon />
              <span>100% Australian Team</span>
            </div>
            <div className="trust-item">
              <UserIcon />
              <span>Case-by-Case Service</span>
            </div>
            <div className="trust-item">
              <PhoneIcon />
              <span>Always Contactable</span>
            </div>
            <div className="trust-item">
              <CheckIcon />
              <span>Manual, Hands-On Approach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive data removal tailored to your needs</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card featured">
              <div className="service-badge">Most Popular</div>
              <h3>Personal Data Removal</h3>
              <div className="service-price">
                <span className="price">$1,950</span>
                <span className="price-note">One-time service</span>
              </div>
              <p className="service-desc">
                Complete removal of your personal information from data brokers, 
                people-search sites, and online databases across Australia and internationally.
              </p>
              <ul className="service-features">
                <li>Manual search across 100+ data sources</li>
                <li>Personal removal requests on your behalf</li>
                <li>Detailed removal verification report</li>
                <li>30-day post-removal monitoring</li>
                <li>Direct founder consultation</li>
              </ul>
              <button 
                className="btn btn-primary btn-full"
                data-paperform-id="xmr0dk0c"
                data-popup-button="1"
              >
                Get Started
              </button>
            </div>

            <div className="service-card">
              <h3>Business Privacy Audit</h3>
              <div className="service-price">
                <span className="price">Contact Us</span>
                <span className="price-note">Custom quote</span>
              </div>
              <p className="service-desc">
                Comprehensive privacy audit for businesses. Identify data exposure 
                risks and implement removal strategies.
              </p>
              <ul className="service-features">
                <li>Executive team data exposure assessment</li>
                <li>Company data footprint analysis</li>
                <li>Risk mitigation recommendations</li>
                <li>Ongoing monitoring options</li>
              </ul>
              <button 
                className="btn btn-secondary btn-full"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>A straightforward, hands-on approach to protecting your privacy</p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Initial Consultation</h3>
              <p>
                We discuss your specific situation, identify your concerns, 
                and determine the scope of your data exposure.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Manual Search</h3>
              <p>
                Our team personally searches data brokers, people-search sites, 
                and online databases to locate your information.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Removal Requests</h3>
              <p>
                We submit individual removal requests to each site, following up 
                to ensure your data is actually removed.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Verification Report</h3>
              <p>
                You receive a detailed report confirming removals, plus 30 days 
                of monitoring to catch any re-listings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Choose Us</h2>
              <p className="lead">
                We are not a faceless tech company running automated scripts. 
                We are Australian privacy specialists who personally handle every case, 
                because every situation is different.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <h4>Case-by-Case Approach</h4>
                  <p>
                    Every client's situation is unique. We take the time to understand 
                    your specific concerns and tailor our approach accordingly.
                  </p>
                </div>
                <div className="about-feature">
                  <h4>Always Contactable</h4>
                  <p>
                    You can reach us directly. No ticket systems, no chatbots, no waiting. 
                    Real people who answer your questions and keep you updated.
                  </p>
                </div>
                <div className="about-feature">
                  <h4>Founder-Led, Manual Service</h4>
                  <p>
                    Our founder personally oversees every case. We manually search and verify 
                    each data source - no automated tools that miss things.
                  </p>
                </div>
                <div className="about-feature">
                  <h4>100% Australian</h4>
                  <p>
                    Based in Australia, for Australians. We understand local privacy laws 
                    and provide support in your timezone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission: Data Sovereignty for All Australians</h2>
            <p className="mission-lead">
              Most Australians have no idea how much of their personal information is being 
              bought, sold, and traded online without their knowledge or consent.
            </p>
            <p>
              We are committed to raising awareness about data privacy and working with others 
              in the industry to improve data sovereignty for everyday Australians. This is not 
              just a business for us - it is about giving people back control over their own information.
            </p>
            <p>
              If you are a privacy advocate, journalist, researcher, or organisation working to 
              improve data rights in Australia, we would love to collaborate. Together, we can 
              make a real difference.
            </p>
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="guarantee-section">
        <div className="container">
          <div className="guarantee-content">
            <ShieldIcon className="guarantee-icon" />
            <div className="guarantee-text">
              <h3>Our Guarantee</h3>
              <p>
                If we cannot remove your data from a site we identified, 
                we will continue working on it at no additional cost until it is removed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Ready to take control of your personal data?</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <PhoneIcon />
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:1300000000">1300 XXX XXX</a>
                </div>
              </div>
              <div className="contact-item">
                <EmailIcon />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:hello@ausdataremoval.com.au">hello@ausdataremoval.com.au</a>
                </div>
              </div>
              <div className="contact-item">
                <ClockIcon />
                <div>
                  <h4>Hours</h4>
                  <p>Monday - Friday: 9am - 5pm AEST</p>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <h3>Start Your Free Consultation</h3>
              <p>
                We treat every enquiry individually. Book a no-obligation call 
                to discuss your specific situation and we will give you honest 
                advice on how we can help.
              </p>
              <button 
                className="btn btn-primary btn-lg"
                data-paperform-id="xmr0dk0c"
                data-popup-button="1"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-text">Australian Data Removal</span>
              </div>
              <p className="footer-tagline">
                Protecting your privacy, one record at a time.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-col">
                <h4>Services</h4>
                <button onClick={() => scrollToSection('services')}>Personal Data Removal</button>
                <button onClick={() => scrollToSection('services')}>Business Privacy Audit</button>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <button onClick={() => scrollToSection('about')}>About Us</button>
                <button onClick={() => scrollToSection('process')}>How It Works</button>
                <button onClick={() => scrollToSection('contact')}>Contact</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Australian Data Removal. All rights reserved.</p>
            <p>ABN: XX XXX XXX XXX</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Icon Components
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const ShieldIcon = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const LockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

export default App;
