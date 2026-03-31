import React from 'react';

const stats = [
  {
    label: 'Market',
    number: '$600B+',
    desc: 'The AI assistant market is projected to exceed AUD $600B globally by 2032. Australia and New Zealand remain largely unaddressed at the consumer and SMB level.',
  },
  {
    label: 'Timing',
    number: '2024',
    desc: 'Real-time avatar technology only became commercially viable in 2024. We are among the first to deploy it as a service model in this region.',
  },
  {
    label: 'Model',
    number: '65–84%',
    desc: 'Three revenue streams: setup fees, recurring monthly retainers, and event engagements. Margins sit between 65–84% gross depending on product tier.',
  },
  {
    label: 'Traction',
    number: 'Active',
    desc: 'Currently in active development. Founding operator positions are being allocated. Early client interest has been organic and unsolicited.',
  },
];

const InvestorPitch = () => {
  return (
    <section className="section reveal" id="investor-pitch">
      <div className="section-divider" aria-hidden="true" />

      <div className="section-header">
        <h2>The Opportunity</h2>
        <p className="section-subtitle">A note for those considering a position in Sovereign Tank.</p>
      </div>

      <p className="pitch-opening">
        We&rsquo;re not here to sell you on a vision. We&rsquo;re here to show you what we&rsquo;ve
        already built, why the market timing is right, and what we&rsquo;re looking for in people
        who want to be part of it. If it makes sense for you, we can talk. If it doesn&rsquo;t,
        that&rsquo;s fine too.
      </p>

      <div className="pitch-stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="pitch-stat-card glass-panel">
            <div className="pitch-stat-label">{stat.label}</div>
            <div className="pitch-stat-number">{stat.number}</div>
            <p className="pitch-stat-desc">{stat.desc}</p>
          </div>
        ))}
      </div>

      <div className="pitch-block glass-panel">
        <h3>What We&rsquo;re Building</h3>
        <p>
          Sovereign Tank is an AI assistant and automation studio. We build lifelike AI assistants
          for businesses, interactive AI hosts for events, and personal AI assistants for individuals.
          The delivery is largely automated. The brand and client relationships are ours. We are not
          building a product to sell — we are building an operation to run.
        </p>
      </div>

      <div className="pitch-block glass-panel">
        <h3>What We&rsquo;re Looking For</h3>
        <p>
          We are open to conversations with people who understand early-stage positioning and are
          comfortable with a measured, long-horizon approach. We&rsquo;re not raising a round.
          We&rsquo;re not pitching to a room. We are selectively identifying people who see what
          we see — and want to be involved before it&rsquo;s obvious to everyone else.
        </p>
      </div>

      <div className="pitch-cta-area">
        <button
          className="primary"
          data-paperform-id="t86h5x0u"
          data-popup-button="1"
        >
          Request a Conversation
        </button>
        <p className="pitch-disclaimer">All enquiries are treated with complete discretion.</p>
      </div>
    </section>
  );
};

export default InvestorPitch;
