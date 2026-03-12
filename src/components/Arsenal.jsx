import React from 'react';

const Arsenal = () => {
  const primaryProducts = [
    {
      id: 1,
      name: 'Personal Data Exposure Audit',
      price: 'AUD $200',
      desc: 'A structured manual investigation of where your personal information appears online. We search name, phone, email, and usernames across data brokers and public directories.',
      specs: [
        'Manual investigation of data broker exposure',
        'Comprehensive Digital Risk Summary',
        'Recommended next steps for removal',
        'Typically delivered within 48 business hours'
      ],
      buttonText: 'Start My Exposure Audit',
      paperformId: 't86h5x0u',
      recommended: false
    },
    {
      id: 2,
      name: 'Founding Member Package',
      price: 'AUD $700',
      desc: 'The complete privacy solution for early supporters. Includes a full digital exposure audit, comprehensive data removal investigation, priority case handling, and a Founding Member certificate.',
      specs: [
        'Full digital exposure audit',
        'Comprehensive data removal investigation',
        'Priority case handling',
        'Founding Member certificate',
        'Limited to the first 500 members'
      ],
      buttonText: 'Join the First 500',
      paperformId: 'first-500-founding-members',
      recommended: true
    },
    {
      id: 3,
      name: 'Full Digital Clean-Up',
      price: 'AUD $1,000',
      desc: 'Manual removal of the exposures identified in your audit. Includes removal and opt-out submissions, documentation of results, and direct human oversight throughout.',
      specs: [
        'Manual data removal work',
        'Up to 15 manual removal submissions',
        'One follow-up round for persistence issues',
        'Full documentation of removal results'
      ],
      buttonText: 'Remove My Data',
      paperformId: 'aus-clean-up',
      recommended: false
    },
  ];

  const additionalServices = [
    {
      name: 'Ongoing Monitoring',
      desc: 'Quarterly re-scans to detect new exposures as they appear.',
      price: 'Contact for pricing'
    },
    {
      name: 'Executive Privacy Briefing',
      desc: 'One-on-one consultation for high-profile individuals and executives.',
      price: 'Contact for pricing'
    }
  ];

  return (
    <>
      <div className="product-grid">
        {primaryProducts.map(product => (
          <div key={product.id} className={`product-card ${product.recommended ? 'recommended' : ''}`}>
            {product.recommended && <span className="recommended-badge">Recommended</span>}
            <div className="product-header">
              <h3>{product.name}</h3>
              <div className="price">{product.price}</div>
            </div>
            <p className="product-desc">{product.desc}</p>
            <div className="product-inclusions">
              <p className="inclusions-label">Inclusions</p>
              <ul>
                {product.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>
            <button
              className="acquire-btn"
              data-paperform-id={product.paperformId}
              data-popup-button="1"
            >
              {product.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="additional-services">
        <h3 className="additional-services-title">Additional Services</h3>
        <div className="additional-services-grid">
          {additionalServices.map((service, i) => (
            <div key={i} className="additional-service-item">
              <div className="additional-service-header">
                <h4>{service.name}</h4>
                <span className="additional-service-price">{service.price}</span>
              </div>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Arsenal;
