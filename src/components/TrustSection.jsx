import React from 'react';

const TrustSection = () => {
  const signals = [
    {
      title: 'Manual Audit',
      desc: 'Each case is reviewed by a real operator using structured search and documentation methods.'
    },
    {
      title: 'Documented Findings',
      desc: 'You receive a Digital Risk Summary showing where your personal information appears and what can be done next.'
    },
    {
      title: 'Australian-Led Process',
      desc: 'Australian-led service with human handling, direct communication, and structured removal workflows.'
    }
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-grid">
          {signals.map((signal, index) => (
            <div key={index} className="trust-card">
              <h4>{signal.title}</h4>
              <p>{signal.desc}</p>
            </div>
          ))}
        </div>
        <div className="trust-strip">
          Secure payment, manual case handling, documented removal workflows, and direct follow-up where required.
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
