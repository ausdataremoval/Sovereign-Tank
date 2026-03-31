import React, { useState } from 'react';

const PERIODS = [
    { key: 'monthly', label: 'Monthly' },
    { key: '3month', label: '3 Months' },
    { key: '6month', label: '6 Months' },
    { key: '12month', label: '12 Months' },
];

const Arsenal = () => {
    const [period, setPeriod] = useState('monthly');

    const getActiveShieldPrice = () => {
        switch (period) {
            case 'monthly': return { display: '$149/mo', note: '+ $199 setup fee' };
            case '3month': return { display: '$399 total', note: 'setup fee waived' };
            case '6month': return { display: '$749 total', note: 'setup fee waived' };
            case '12month': return { display: '$1,299 total', note: 'setup fee waived' };
            default: return { display: '$149/mo', note: '+ $199 setup fee' };
        }
    };

    const getFullSovereigntyPrice = () => {
        switch (period) {
            case 'monthly': return { display: '$499/mo', note: '+ $499 setup fee' };
            case '3month': return { display: '$1,299 total', note: 'setup fee waived' };
            case '6month': return { display: '$2,399 total', note: 'setup fee waived' };
            case '12month': return { display: '$3,999 total', note: 'setup fee waived' };
            default: return { display: '$499/mo', note: '+ $499 setup fee' };
        }
    };

    const activeShield = getActiveShieldPrice();
    const fullSovereignty = getFullSovereigntyPrice();

    const products = [
        {
            id: 1,
            name: 'Personal Data Exposure Audit',
            for: 'Individuals wanting a digital risk assessment',
            priceDisplay: 'AUD $199.00',
            priceNote: 'one-off',
            isOneOff: true,
            desc: 'A structured manual investigation of where your personal information appears online. We search name, phone, email, and usernames across data brokers.',
            stripeLink: 'https://buy.stripe.com/test_dR63ee9W54Yk7Is7ss',
            specs: [
                'Manual investigation of data brokers',
                'Comprehensive Digital Risk Summary',
                'Recommended next steps for removal',
                'Delivered within 48 hours'
            ],
            btnLabel: 'Start My Exposure Audit',
            paperformId: 't86h5x0u',
            featured: false,
        },
        {
            id: 2,
            name: 'Active Shield',
            for: 'Ongoing personal data protection',
            priceDisplay: `AUD ${activeShield.display}`,
            priceNote: activeShield.note,
            isOneOff: false,
            desc: 'Continuous monitoring and removal of your personal data from brokers and exposure sites. We handle it so you don\'t have to think about it.',
            specs: [
                'Monthly data broker sweeps',
                'Removal submissions on your behalf',
                'Exposure alert notifications',
                'Dedicated human point of contact'
            ],
            btnLabel: 'Get Active Shield',
            paperformId: 'active-shield',
            isFeatured: period === '12month',
        },
        {
            id: 3,
            name: 'Full Sovereignty',
            for: 'Complete digital privacy control',
            priceDisplay: `AUD ${fullSovereignty.display}`,
            priceNote: fullSovereignty.note,
            isOneOff: false,
            desc: 'Our most comprehensive offering. Everything in Active Shield, plus deep-dive investigations, legal opt-out submissions, and executive-level reporting.',
            specs: [
                'Everything in Active Shield',
                'Legal and formal opt-out submissions',
                'Executive Digital Risk Report',
                'Priority response and escalation'
            ],
            btnLabel: 'Get Full Sovereignty',
            paperformId: 'full-sovereignty',
            isFeatured: period === '12month',
        },
        {
            id: 4,
            name: 'First 500 Founding Members',
            for: 'Limited to 500 spots',
            priceDisplay: 'AUD $500.00',
            priceNote: 'one-off',
            isOneOff: true,
            desc: 'Includes the Personal Data Exposure Audit, priority access to clean-up work, and lightweight ongoing exposure checks.',
            specs: [
                'Lifetime founding member status',
                'Personal Data Exposure Audit included',
                'Priority clean-up scheduling',
                'Periodic lightweight exposure checks'
            ],
            btnLabel: 'Join the First 500',
            paperformId: 'first-500-founding-members',
            featured: false,
        },
    ];

    return (
        <div>
            {/* Period toggle */}
            <div className="pricing-toggle-wrap">
                {PERIODS.map(p => (
                    <button
                        key={p.key}
                        className={`pricing-toggle-btn${period === p.key ? ' active' : ''}`}
                        onClick={() => setPeriod(p.key)}
                    >
                        {p.label}
                    </button>
                ))}
            </div>
            <p className="pricing-toggle-note">
                Monthly plans include a one-off setup fee. Commit to 3 months or more and we waive it entirely. Cancel anytime — we just ask for reasonable notice.
            </p>

            <div className="product-grid">
                {products.map(product => (
                    <div
                        key={product.id}
                        className={`product-card glass-panel${product.isFeatured ? ' featured-plan' : ''}`}
                    >
                        <div className="product-header">
                            <h3>{product.name}</h3>
                            <div className="price">
                                {product.priceDisplay}
                                {product.priceNote && (
                                    <span className="price-note">{product.priceNote}</span>
                                )}
                            </div>
                        </div>

                        <p className="product-for">FOR: {product.for}</p>

                        <p className="product-desc">
                            {product.desc}
                        </p>

                        <div className="product-inclusions">
                            <p className="inclusions-label">INCLUSIONS:</p>
                            <ul>
                                {product.specs.map((spec, i) => (
                                    <li key={i}>{spec}</li>
                                ))}
                            </ul>
                        </div>

                        <button
                            className="acquire-btn"
                            style={{ width: '100%', marginTop: 'auto' }}
                            data-paperform-id={product.paperformId}
                            data-popup-button="1"
                        >
                            {product.btnLabel}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Arsenal;
