import React from 'react';

const Arsenal = () => {
    const products = [
        {
            id: 1,
            name: 'ADR Core Patch',
            price: 'AUD $1950.00',
            desc: 'Complete digital eradication & sovereignty audit.',
            slug: 'hve0sbqo', // Client's provided production slug
            specs: ['Global purge', 'ADR-P1 Certified', 'Full Deed']
        },
        {
            id: 2,
            name: 'Protocol Alpha',
            price: 'AUD $350.00',
            desc: 'Encrypted communication utility for teams.',
            slug: 'protocol-alpha', // Placeholder for duplicated form slug
            specs: ['P2P routing', 'Zero-knowledge', 'Lifetime access']
        },
        {
            id: 3,
            name: 'Sentinel Badge',
            price: 'AUD $95.00',
            desc: 'Physical proof of digital sovereignty.',
            slug: 'sentinel-badge', // Placeholder for duplicated form slug
            specs: ['NFC Enabled', 'Matte Black Finish', 'ID: ADR-P1-001']
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

                    <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)', fontSize: '0.9rem' }}>
                        {product.desc}
                    </p>

                    <ul>
                        {product.specs.map((spec, i) => (
                            <li key={i}>{spec}</li>
                        ))}
                    </ul>

                    <button
                        style={{ width: '100%', marginTop: 'auto' }}
                        data-paperform-id={product.slug}
                        data-popup-button="1"
                    >
                        Acquire [GST Inc.]
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Arsenal;
