import React from 'react';

const Arsenal = () => {
  const primaryProducts = [
    {
      id: 1,
      name: 'Personal Data Exposure Audit',
      price: 'AUD $200',
      desc: 'A specialist manual investigation to find the personal data you didn\'t know was public. We identify your exposure across data brokers and directories so you can close the gaps.',
      specs: [
        'Manual investigation of data broker exposure',
        'Digital Risk Summary',
        'Identification of public listing exposures',
        'Recommended next steps',
        'Typically delivered within 48 business hours'
      ],
      buttonText: 'Start My Exposure Audit',
      href: '/checkout/audit',
      recommended: false
    },
    {
      id: 2,
      name: 'Founding Member Privacy Package',
      price: 'AUD $700',
      desc: 'Limited to the first 50 supporters. Secure priority status and direct access to our investigators while we establish the ADR network.',
      specs: [
        'Full digital exposure audit',
        'Expanded investigation of data listings',
        'Priority case handling',
        'Founding Member certificate recognising early support',
        'Direct access to lead investigators'
      ],
      buttonText: 'Join as a Founding Member',
      href: '/checkout/founding-member',
      recommended: true
    },
    {
      id: 3,
      name: 'Digital Clean-Up Advocacy',
      price: 'AUD $1,000',
      desc: 'Human-led removal requests and opt-out submissions for identified exposures, with documentation and oversight throughout the process.',
      specs: [
        'Manual removal submissions to data brokers and listing sites',
        'Opt-out and correction requests',
        'One follow-up round where required',
        'Documentation of removal actions'
      ],
      buttonText: 'Start Removal Advocacy',
      href: '/checkout/cleanup',
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
            <a
              href={product.href}
              className="acquire-btn"
            >
              {product.buttonText}
            </a>
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
