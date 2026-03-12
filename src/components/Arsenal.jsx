import React from 'react';

const Arsenal = () => {
  const primaryProducts = [
    {
      id: 1,
      name: 'Personal Data Exposure Audit',
      price: 'AUD $200',
      focus: 'Mapping the Problem',
      desc: 'A comprehensive manual investigation of your digital footprint across data brokers and search sites.',
      specs: [
        'Specialist investigation of broker exposure',
        'Digital Risk Summary & findings',
        'Strategic advice for manual removal',
        'Typically delivered within 48 business hours'
      ],
      buttonText: 'Start Manual Audit',
      href: '/checkout/audit',
      recommended: false
    },
    {
      id: 2,
      name: 'Founding Member Package',
      price: 'AUD $700',
      focus: 'Active Protection',
      desc: 'Full exposure audit plus 12 months of active removal advocacy and ongoing monitoring.',
      specs: [
        'Priority Digital Exposure Audit',
        'Comprehensive removal advocacy',
        'Direct specialist consultation',
        'Founding Member certificate',
        '12 months ongoing monitoring'
      ],
      buttonText: 'Secure My Identity',
      href: '/checkout/founding-member',
      recommended: true,
      badge: 'Founding Tier'
    },
    {
      id: 3,
      name: 'Full Digital Clean-Up',
      price: 'AUD $1,000',
      focus: 'Total Resolution',
      desc: 'Enterprise-grade eradication of your personal data from public sources and specialist investigation.',
      specs: [
        'Professional removal request management',
        'Up to 15 targeted removal submissions',
        'Post-request follow-up for persistent listings',
        'Final status report & documentation'
      ],
      buttonText: 'Request Full Clean-Up',
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
            {product.badge && <span className="recommended-badge">{product.badge}</span>}
            <p className="product-focus">{product.focus}</p>
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
