import React from 'react';

const TrustSection = () => {
  const markers = [
    'Australian-owned',
    'Perth-based',
    'Encrypted connections',
    'No tracking cookies',
    'Manual case review'
  ];

  return (
    <section className="trust-strip-section">
      <div className="container">
        <div className="trust-markers">
          {markers.map((marker, index) => (
            <React.Fragment key={marker}>
              <span className="trust-marker">{marker}</span>
              {index < markers.length - 1 && <span className="trust-separator">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
