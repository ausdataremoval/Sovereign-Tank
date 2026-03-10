import React from 'react';

const Arsenal = () => {
  const products = [
    {
      id: 1,
      name: 'Personal Data Exposure Audit',
      price: 'AUD $200',
      desc: 'A structured manual investigation of where your personal information appears online. We search name, phone, email, and usernames across data brokers and public directories.',
      specs: [
        'Manual investigation of data broker exposure',
        'Comprehensive Digital Risk Summary',
        'Recommended next steps for removal',
        'Delivered within 48 hours'
      ],
      buttonText: 'Start My Exposure Audit',
      paperformId: 't86h5x0u'
    },
    {
      id: 2,
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
      paperformId: 'aus-clean-up'
    },
    {
      id: 3,
      name: 'Founding Member Package',
      price: 'AUD $700',
      desc: 'The ADR Founding Member Package is offered to a limited number of early supporters during the launch of Australian Data Removal. Members receive a full digital exposure audit, comprehensive data removal investigation, priority case handling, and a Founding Member certificate recognising their early support of the ADR platform.',
      specs: [
        'Full digital exposure audit',
        'Comprehensive data removal investigation',
        'Priority case handling',
        'Founding Member certificate',
        'Limited to the first 500 members'
      ],
      buttonText: 'Join the First 500',
      paperformId: 'first-500-founding-members'
    },
  ];

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div className="product-header">
            <h3>{product.name}</h3>
            <div className="price">{product.price}</div>
          </div>
          <p className="product-desc">{product.desc}</p>
          <div className="product-inclusions">
            <p className="inclusions-label">INCLUSIONS</p>
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
  );
};

export default Arsenal;
