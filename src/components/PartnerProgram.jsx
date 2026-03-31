import React from 'react';

const blocks = [
  {
    title: 'The Infrastructure',
    desc: "Access to our platform stack, delivery processes, intake systems, and AI tools. You don't need to build anything from scratch.",
  },
  {
    title: 'The Brand',
    desc: "You operate under Sovereign Tank — an established name with existing positioning. You're not starting from zero.",
  },
  {
    title: 'The Support',
    desc: "We work with you directly, especially early on. You're not handed a manual and left to figure it out.",
  },
];

const PartnerProgram = () => {
  return (
    <section className="section reveal" id="partner-program">
      <div className="section-divider" aria-hidden="true" />

      <div className="section-header">
        <h2>Operate With Us</h2>
        <p className="section-subtitle">For people who want to run their own AI services operation.</p>
      </div>

      <p className="pitch-opening">
        We&rsquo;ve built the platform, the processes, and the brand. We&rsquo;re looking for a
        small number of people who want to operate under the Sovereign Tank name in their own
        region — handling client relationships, delivering services, and building something locally
        with real support behind them.
      </p>
      <p className="pitch-opening" style={{ marginTop: '1rem' }}>
        This isn&rsquo;t a franchise in the traditional sense. There are no territory fees or locked
        contracts. It&rsquo;s a working arrangement between people who want the same thing: a
        well-run, reputable AI services operation that actually delivers.
      </p>

      <div className="partner-blocks">
        {blocks.map((block) => (
          <div key={block.title} className="partner-block glass-panel">
            <h3>{block.title}</h3>
            <p>{block.desc}</p>
          </div>
        ))}
      </div>

      <div className="pitch-block glass-panel expectation-block">
        <h3>What We Expect From You</h3>
        <p style={{ marginBottom: '1rem' }}>
          You&rsquo;ll be the face of Sovereign Tank in your area. That means:
        </p>
        <ul className="expectation-list">
          <li>Taking client relationships seriously</li>
          <li>Delivering what&rsquo;s promised, on time</li>
          <li>Communicating clearly — with clients and with us</li>
          <li>Building the operation steadily, not rushing it</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          We&rsquo;re not looking for salespeople. We&rsquo;re looking for people who are capable,
          credible, and take pride in good work.
        </p>
      </div>

      <div className="pitch-block glass-panel">
        <h3>The Arrangement</h3>
        <p>
          Revenue is split. Costs are shared fairly. The exact structure depends on the arrangement
          and what you&rsquo;re bringing to it — we discuss that openly before anything is
          formalised.
        </p>
        <p style={{ marginTop: '1rem' }}>
          There&rsquo;s no pressure. If it&rsquo;s the right fit, it will be obvious to both sides.
        </p>
      </div>

      <div className="pitch-cta-area">
        <button
          className="primary"
          data-paperform-id="t86h5x0u"
          data-popup-button="1"
        >
          Express Your Interest
        </button>
        <p className="pitch-disclaimer">
          We read every enquiry personally. We&rsquo;ll respond within a few days if we think
          there&rsquo;s a fit.
        </p>
      </div>
    </section>
  );
};

export default PartnerProgram;
