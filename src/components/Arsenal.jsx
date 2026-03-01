import React from 'react';

const Arsenal = () => {
    const products = [
        {
            id: 1,
            name: 'ADR Core Patch',
            for: 'High-stakes professionals & executives',
            price: 'AUD $1950.00',
            desc: 'The gold standard for complete digital eradication and sovereignty.',
            slug: 'hve0sbqo',
            specs: [
                'Global metadata & footprint purge',
                'ADR-P1 Certification & Digital Deed',
                'Priority Watchdog Monitoring (30 days)',
                'Zero-knowledge compliance audit'
            ]
        },
        {
            id: 2,
            name: 'Protocol Alpha',
            for: 'Small teams & secure labs',
            price: 'AUD $350.00',
            desc: 'Encrypted communication utility for secure node coordination.',
            slug: 'protocol-alpha',
            specs: [
                'P2P encrypted routing protocol',
                'Lifetime node access license',
                'Zinc-alloy physical auth token',
                'Team-wide secure handshake logic'
            ]
        },
        {
            id: 3,
            name: 'Sentinel Badge',
            for: 'Individual operators',
            price: 'AUD $95.00',
            desc: 'Physical proof of digital sovereignty and ADR-P1 status.',
            slug: 'sentinel-badge',
            specs: [
                'NFC-enabled secure verification',
                'Matte black aerospace-grade finish',
                'Unique serial ID (ADR-P1-001)',
                'Sovereign Tank operative status'
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

                    <button
                        className="acquire-btn"
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
