import React from 'react';

const Arsenal = () => {
  const primaryProducts = [
    {
      id: 1,
      name: 'Exposure Audit',
      price: 'AUD $200',
      desc: 'Identify where your personal data is exposed online and understand the risks to your privacy.',
      buttonText: 'Start Audit',
      href: '/checkout/audit',
      recommended: false
    },
    {
      id: 2,
      name: 'Founding Member',
      price: 'AUD $700',
      desc: 'Priority support and structured removal requests submitted on your behalf.',
      specs: [
        'Priority case handling',
        'Annual exposure re-scan',
        'Member report archive',
        'Lifetime pricing lock'
      ],
      buttonText: 'Join Founding Member',
      href: '/checkout/founding-member',
      recommended: true,
      badge: 'Recommended'
    },
    {
      id: 3,
      name: 'Full Digital Clean-Up',
      price: 'AUD $1,000+',
      desc: 'Manual removal requests and exposure suppression across major data broker and search platforms.',
      buttonText: 'Start Clean-Up',
      href: '/checkout/cleanup',
      recommended: false
    },
  ];

  const diyProduct = {
    name: 'DIY Data Removal Roadmap',
    price: 'AUD $79',
    desc: 'Step-by-step guide for requesting removal from major data brokers and public directory sites yourself.',
    specs: [
      'PDF roadmap',
      'Direct removal links',
      'Copy-paste request templates',
      'Progress checklist',
      'AUD $79 credit if upgrading to a manual service'
    ],
    buttonText: 'Get the DIY Roadmap',
    href: '/checkout/diy-roadmap'
  };

  return (
    <>
      <div className="product-grid">
        {primaryProducts.map(product => (
          <div key={product.id} className={`product-card ${product.recommended ? 'recommended' : ''}`}>
            {product.badge && <span className="recommended-badge">{product.badge}</span>}
            <div className="product-header">
              <h3>{product.name}</h3>
              <div className="price">{product.price}</div>
            </div>
            <p className="product-desc">{product.desc}</p>
            {product.specs && (
              <div className="product-inclusions">
                <ul>
                  {product.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.id === 2 ? (
              <a href={product.href} className="seal-btn-wrapper">
                <img 
                  src="/images/founding-member-seal.png" 
                  alt="ADR Founding Member 2026 Seal" 
                  className="seal-btn"
                />
                <span className="seal-caption">Become a Founding Member</span>
              </a>
            ) : (
              <a
                href={product.href}
                className="acquire-btn"
              >
                {product.buttonText}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="diy-section">
        <div className="diy-card">
          <div className="diy-header">
            <h4>{diyProduct.name}</h4>
            <span className="diy-price">{diyProduct.price}</span>
          </div>
          <p className="diy-desc">{diyProduct.desc}</p>
          <div className="diy-inclusions">
            <ul>
              {diyProduct.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>
          <a href={diyProduct.href} className="diy-btn">
            {diyProduct.buttonText}
          </a>
        </div>
      </div>

      <div className="legal-disclaimer">
        <p>We submit formal removal requests using official opt-out channels. Some sites and records cannot be removed; additional escalation work may require further service engagement.</p>
      </div>
    </>
  );
};

export default Arsenal;
