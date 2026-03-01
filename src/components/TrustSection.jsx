import React from 'react';

const TrustSection = () => {
    const signals = [
        {
            icon: '🛡️',
            title: 'ADR-Certified',
            desc: 'All data removal protocols are certified by the Autonomous Data Registry (ADR-P1).'
        },
        {
            icon: '🔒',
            title: 'Zero-Knowledge',
            desc: 'We never see your raw data. Our audits are performed using zero-knowledge proof cryptography.'
        },
        {
            icon: '⚡',
            title: 'Permanent Purge',
            desc: 'Once eradicated, data is non-recoverable via standard forensic tools. Guaranteed.'
        }
    ];

    return (
        <section className="section trust-section">
            <div className="trust-grid">
                {signals.map((signal, index) => (
                    <div key={index} className="trust-card glass-panel">
                        <div className="trust-icon">{signal.icon}</div>
                        <h4 className="trust-title">{signal.title}</h4>
                        <p className="trust-desc">{signal.desc}</p>
                    </div>
                ))}
            </div>
            <div className="security-guarantee">
                <p>
                    <span className="guarantee-badge">GUARANTEE</span> Our service is backed by a 100% data-sovereignty assurance. If a footprint remains, we re-run the protocol at zero cost.
                </p>
            </div>
        </section>
    );
};

export default TrustSection;
