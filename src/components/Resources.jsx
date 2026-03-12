import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const resourceSections = [
    {
      title: 'Free Exposure Checks',
      desc: 'Check if your email or personal data has appeared in known breaches.',
      links: [
        { name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/', desc: 'Check email addresses against known data breaches' },
        { name: 'Mozilla Monitor', url: 'https://monitor.mozilla.org/', desc: 'Monitor your email for exposure in breaches' }
      ]
    },
    {
      title: 'Scam & Fraud Verification',
      desc: 'Verify suspicious contacts, websites, and communications.',
      links: [
        { name: 'Scamwatch', url: 'https://www.scamwatch.gov.au/', desc: 'ACCC scam reporting and verification' },
        { name: 'National Anti-Scam Centre', url: 'https://www.accc.gov.au/national-anti-scam-centre', desc: 'Australian Government anti-scam resources' }
      ]
    },
    {
      title: 'Identity Protection Support',
      desc: 'Get help if your identity has been compromised.',
      links: [
        { name: 'IDCARE', url: 'https://www.idcare.org/', desc: 'Australia and New Zealand identity and cyber support service' },
        { name: 'Services Australia', url: 'https://www.servicesaustralia.gov.au/identity-theft', desc: 'Government identity theft support' },
        { name: 'ACSC', url: 'https://www.cyber.gov.au/', desc: 'Australian Cyber Security Centre' }
      ]
    },
    {
      title: 'Tracking & Privacy Tests',
      desc: 'Test how trackable your browser and devices are.',
      links: [
        { name: 'Cover Your Tracks', url: 'https://coveryourtracks.eff.org/', desc: 'EFF browser fingerprinting test' },
        { name: 'Browser Leaks', url: 'https://browserleaks.com/', desc: 'Comprehensive browser privacy test' }
      ]
    },
    {
      title: 'Website Safety Tools',
      desc: 'Check if websites or files are safe.',
      links: [
        { name: 'VirusTotal', url: 'https://www.virustotal.com/', desc: 'Scan URLs and files for malware' },
        { name: 'ICANN Lookup', url: 'https://lookup.icann.org/', desc: 'Domain registration information' }
      ]
    },
    {
      title: 'Public Footprint Search',
      desc: 'Tools to help understand your public digital footprint.',
      links: [
        { name: 'WhatsMyName', url: 'https://whatsmyname.app/', desc: 'Username search across platforms' },
        { name: 'Wayback Machine', url: 'https://web.archive.org/', desc: 'View archived versions of websites' },
        { name: 'EXIF.tools', url: 'https://exif.tools/', desc: 'View metadata in images' }
      ]
    },
    {
      title: 'Advanced Investigation Tools',
      desc: 'Professional-grade OSINT and research tools.',
      links: [
        { name: 'Shodan', url: 'https://www.shodan.io/', desc: 'Internet-connected device search engine' },
        { name: 'Epieos', url: 'https://epieos.com/', desc: 'Email and phone investigation' },
        { name: 'IntelTechniques', url: 'https://inteltechniques.com/tools/', desc: 'OSINT research tools' }
      ]
    },
    {
      title: 'Learning & Official Guidance',
      desc: 'Educational resources and official government guidance.',
      links: [
        { name: 'ACSC Guidance', url: 'https://www.cyber.gov.au/learn', desc: 'Australian Cyber Security Centre learning resources' },
        { name: 'Cyber Wardens', url: 'https://www.cyberwardens.com.au/', desc: 'Free cyber security training for small business' },
        { name: 'eSafety Commissioner', url: 'https://www.esafety.gov.au/', desc: 'Online safety resources and reporting' }
      ]
    }
  ];

  return (
    <main className="resource-page">
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

      <div className="resource-header">
        <div className="container">
          <Link to="/" className="back-link">Back to Home</Link>
          <h1>Privacy Resources</h1>
          <p className="resource-intro">
            A curated library of free tools, official guidance, and research resources for understanding and managing your digital exposure. These resources are provided as a public service. Australian Data Removal does not control or endorse third-party tools.
          </p>
        </div>
      </div>

      <div className="resource-content container">
        {resourceSections.map((section, idx) => (
          <section key={idx} className="resource-section">
            <h2>{section.title}</h2>
            <p className="resource-section-desc">{section.desc}</p>
            <div className="resource-links">
              {section.links.map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  <span className="resource-link-name">{link.name}</span>
                  <span className="resource-link-desc">{link.desc}</span>
                  <span className="resource-link-arrow">→</span>
                </a>
              ))}
            </div>
          </section>
        ))}

        <section className="resource-section resource-cta-section">
          <h2>Digital Footprint Self-Audit</h2>
          <p className="resource-section-desc">
            Run through our step-by-step checklist to identify where your personal information may be exposed online.
          </p>
          <Link to="/checklist" className="cta-link primary">
            View Self-Audit Checklist
          </Link>
        </section>

        <section className="resource-section resource-cta-section">
          <h2>Need Professional Help?</h2>
          <p className="resource-section-desc">
            If you've discovered concerning exposure and need expert assistance, our specialists can help document and remove your data.
          </p>
          <Link to="/checkout/audit" className="cta-link primary">
            Get a Professional Exposure Audit
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

export default Resources;
