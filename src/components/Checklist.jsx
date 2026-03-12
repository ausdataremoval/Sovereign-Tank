import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const checklistItems = [
    {
      id: 1,
      title: 'Search your full name in Google',
      desc: 'Use quotation marks around your name. Try variations including middle names, maiden names, and common misspellings.',
      tool: { name: 'Google', url: 'https://www.google.com/' }
    },
    {
      id: 2,
      title: 'Search your phone number',
      desc: 'Search your mobile and landline numbers with and without area codes. Check if they appear in directories or broker listings.',
      tool: { name: 'Google', url: 'https://www.google.com/' }
    },
    {
      id: 3,
      title: 'Search your email addresses',
      desc: 'Search all email addresses you use or have used. Look for forum posts, account registrations, and data broker listings.',
      tool: { name: 'Google', url: 'https://www.google.com/' }
    },
    {
      id: 4,
      title: 'Check breach databases',
      desc: 'Enter your email addresses to see if they have appeared in known data breaches.',
      tool: { name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/' }
    },
    {
      id: 5,
      title: 'Check username reuse',
      desc: 'Search usernames you commonly use to see where accounts may exist that you have forgotten about.',
      tool: { name: 'WhatsMyName', url: 'https://whatsmyname.app/' }
    },
    {
      id: 6,
      title: 'Search public directories',
      desc: 'Check Australian people-search and white pages style sites for your name and address combinations.',
      tool: null
    },
    {
      id: 7,
      title: 'Check archived web pages',
      desc: 'See if old versions of websites still contain your personal information.',
      tool: { name: 'Wayback Machine', url: 'https://web.archive.org/' }
    },
    {
      id: 8,
      title: 'Review social media privacy settings',
      desc: 'Check Facebook, LinkedIn, Instagram and other platforms. Review what is publicly visible on your profiles.',
      tool: null
    },
    {
      id: 9,
      title: 'Search property and business references',
      desc: 'Check if your name appears in public property records, business registrations, or court documents.',
      tool: null
    },
    {
      id: 10,
      title: 'Test browser fingerprinting',
      desc: 'See how uniquely identifiable your browser is and what information it reveals to websites.',
      tool: { name: 'Cover Your Tracks', url: 'https://coveryourtracks.eff.org/' }
    }
  ];

  const toggleItem = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (completedCount / checklistItems.length) * 100;

  return (
    <main className="checklist-page">
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

      <div className="checklist-header">
        <div className="container">
          <Link to="/" className="back-link">Back to Home</Link>
          <h1>Digital Footprint Self-Audit</h1>
          <p className="checklist-intro">
            A guided checklist to help you understand where your personal information may be exposed online. Work through each step to identify potential privacy risks.
          </p>
        </div>
      </div>

      <div className="checklist-content container">
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="progress-text">{completedCount} of {checklistItems.length} steps completed</p>
        </div>

        <div className="checklist-items">
          {checklistItems.map((item) => (
            <div 
              key={item.id} 
              className={`checklist-item ${checkedItems[item.id] ? 'completed' : ''}`}
            >
              <button 
                className="checklist-checkbox"
                onClick={() => toggleItem(item.id)}
                aria-label={checkedItems[item.id] ? 'Mark as incomplete' : 'Mark as complete'}
              >
                {checkedItems[item.id] && (
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              <div className="checklist-item-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {item.tool && (
                  <a 
                    href={item.tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="checklist-tool-link"
                  >
                    Open {item.tool.name} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <section className="checklist-result">
          <h2>What Did You Find?</h2>
          <p>
            If you discovered exposed information that concerns you, you have two options:
          </p>
          <div className="result-options">
            <div className="result-option">
              <h3>Handle It Yourself</h3>
              <p>Use our DIY Data Removal Roadmap to submit removal requests on your own.</p>
              <Link to="/checkout/diy-roadmap" className="cta-link secondary">
                Get DIY Roadmap — $79
              </Link>
            </div>
            <div className="result-option">
              <h3>Get Professional Help</h3>
              <p>Let our specialists document your exposure and handle removal requests for you.</p>
              <Link to="/checkout/audit" className="cta-link primary">
                Get Exposure Audit — $200
              </Link>
            </div>
          </div>
        </section>

        <section className="checklist-note">
          <p>
            This checklist is a starting point. Many data brokers and directories are not easily discoverable through standard searches. A professional audit includes access to specialist databases and investigation techniques beyond what is available through free tools.
          </p>
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

export default Checklist;
