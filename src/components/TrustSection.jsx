import React from 'react';

const TrustSection = () => {
  const trustMarkers = [
    { label: 'ABN 86 921 751 764' },
    { label: 'Perth-based' },
    { label: 'Secure payment' },
    { label: 'Privacy-first approach' },
    { label: 'Manual case handling' }
  ];

  return (
    <section className="trust-strip-section">
      <div className="container">
        <div className="trust-markers">
          {trustMarkers.map((marker, index) => (
            <span key={index} className="trust-marker">
              {marker.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
