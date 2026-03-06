import React from 'react';

const Arsenal = () => {
    const products = [
        {
            id: 1,
            name: 'Personal Data Exposure Audit',
            for: 'Individuals wanting a digital risk assessment',
            price: 'AUD $199.00',
            desc: 'A structured manual investigation of where your personal information appears online. We search name, phone, email, and usernames across data brokers.',
            stripeLink: 'https://buy.stripe.com/test_dR63ee9W54Yk7Is7ss', // PLACEHOLDER $199
            specs: [
                'Manual investigation of data brokers',
                'Comprehensive Digital Risk Summary',
                'Recommended next steps for removal',
                'Delivered within 48 hours'
            ]
        },
        {
            id: 2,
            name: 'Full Digital Clean-Up',
            for: 'Complete manual data eradication',
            price: 'AUD $997.00',
            desc: 'Manual removal of the exposures identified in your audit. Includes removal and opt-out submissions, and documentation of results.',
            stripeLink: 'https://buy.stripe.com/test_dR63ee9W54Yk7Is7ss', // PLACEHOLDER $997
            specs: [
                'Up to 15 manual removal submissions',
                'One follow-up round for persistence',
                'Full documentation of removal results',
                'Direct human oversight throughout'
            ]
        },
        {
            id: 3,
            name: 'First 500 Founding Members',
            for: 'Limited to 500 spots',
            price: 'AUD $500.00',
            desc: 'Includes the Personal Data Exposure Audit, priority access to clean-up work, and lightweight ongoing exposure checks.',
            stripeLink: 'https://buy.stripe.com/test_dR63ee9W54Yk7Is7ss', // PLACEHOLDER $500
            specs: [
                'Lifetime founding member status',
                'Personal Data Exposure Audit included',
                'Priority clean-up scheduling',
                'Periodic lightweight exposure checks'
            ]
        },
    ];

    return (
        <div className="product-grid">
            {products.map(product => (
                <div key={product.id} className="product-card glass-panel">
                    <div className="product-header">
                        <h3>{product.name}</h3>
                        <div className="price">{product.price}</div>
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

                    <a
                        href={product.stripeLink}
                        className="acquire-btn"
                        style={{ width: '100%', marginTop: 'auto', textDecoration: 'none', display: 'block', textAlign: 'center' }}
                    >
                        {product.id === 1 ? 'Start My Exposure Audit' : product.id === 2 ? 'Remove My Data' : 'Join the First 500'}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Arsenal;
