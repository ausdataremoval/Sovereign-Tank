import React from 'react';

const FounderCard = () => {
  return (
    <div className="founder-card">
      <div className="founder-portrait">
        <img src="/chris-robinson.jpg" alt="Chris Robinson, Founder of Australian Data Removal" />
      </div>
      <div className="founder-content">
        <p className="founder-tagline">Your data. Your privacy.</p>
        <blockquote className="founder-quote">
          "I started Australian Data Removal because good people were being punished for other people's data breaches. Every case we take on is treated like it's our own information on the line."
        </blockquote>
        <p className="founder-name">Chris Robinson</p>
        <p className="founder-role">Founder, Australian Data Removal</p>
      </div>
    </div>
  );
};

export default FounderCard;
