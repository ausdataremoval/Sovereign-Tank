import React from 'react';

const SoloLiving = () => {
  return (
    <section className="section reveal" id="solo-living">
      <div className="section-header" style={{ textAlign: 'center' }}>
        <h2 style={{ justifyContent: 'center' }}>For People Who Live On Their Own Terms</h2>
        <p className="solo-section-subtitle">Some of our most meaningful work happens one conversation at a time.</p>
      </div>

      {/* Opening prose block */}
      <p className="solo-living-intro">
        "Living on your own can be exactly what you want it to be. Your pace. Your rules. Your space.
        But technology — the thing that's supposed to make life easier — often makes it feel more
        complicated than it needs to be. We think that's worth fixing."
      </p>

      {/* Three story cards */}
      <div className="story-grid">
        <div className="story-card glass-panel">
          <div className="story-label">A CONVERSATION AT 11PM</div>
          <p className="story-body">
            "She'd been awake since 9. Not worried about anything in particular — just awake. She asked
            about the tomatoes she'd planted last spring, whether they'd do better if she moved them.
            Twenty minutes later she knew exactly what to do, had laughed twice, and went back to bed.
            Nobody was disturbed. Nobody had to feel bad about calling late."
          </p>
        </div>

        <div className="story-card glass-panel">
          <div className="story-label">A SON IN BRISBANE</div>
          <p className="story-body">
            "His mum is in Geraldton. Sharp as a tack, completely capable — but her laptop kept doing
            something she couldn't explain and she didn't want to keep asking him. Now she asks Aria.
            He set it up in an afternoon. She hasn't called him frustrated about technology since.
            He calls her now just to talk."
          </p>
        </div>

        <div className="story-card glass-panel">
          <div className="story-label">SIX MONTHS IN</div>
          <p className="story-body">
            "He'd been on his own for two years after his wife passed. He wasn't struggling — he just
            missed having someone to think out loud with. Someone who'd remember what he said last week.
            Someone patient. He told us recently he'd recommended it to four people at his bowls club.
            We hadn't asked him to."
          </p>
        </div>
      </div>

      {/* Questions people usually have */}
      <div className="solo-questions-section">
        <div className="questions-heading">QUESTIONS PEOPLE USUALLY HAVE</div>
        <div className="questions-grid">
          <div className="question-row">
            <div className="question-concern">"What does it know about me?"</div>
            <div className="question-answer">
              Only what you choose to tell it. Nothing is collected, stored, or shared without your
              knowledge. You decide what it knows and what it forgets.
            </div>
          </div>
          <div className="question-row">
            <div className="question-concern">"Can I turn it off?"</div>
            <div className="question-answer">
              Completely. Any time. No process, no phone call, no form to fill out. You are always in control.
            </div>
          </div>
          <div className="question-row">
            <div className="question-concern">"What if I don't want it anymore?"</div>
            <div className="question-answer">
              Then it's gone. No hard feelings, no lock-in. We'd rather you cancel than stay in something
              that isn't working for you.
            </div>
          </div>
          <div className="question-row">
            <div className="question-concern">"Is it recording me?"</div>
            <div className="question-answer">
              No. Conversations are processed in real time and not retained. Your voice stays yours.
            </div>
          </div>
          <div className="question-row">
            <div className="question-concern">"What if I'm not good with technology?"</div>
            <div className="question-answer">
              Most people who say that are surprised. We set everything up. You just talk. That's it.
            </div>
          </div>
          <div className="question-row">
            <div className="question-concern">"What if I want to set it up for someone I care about?"</div>
            <div className="question-answer">
              Get in touch privately. Tell us about them — their setup, their day, what would make a
              difference. We'll work through it together. No rush.
            </div>
          </div>
        </div>
      </div>

      {/* The quiet gift */}
      <div className="section-divider" style={{ marginTop: 'var(--space-xl)' }}></div>
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
        <div className="solo-statement">"AI is more human than most people realise."</div>
        <p className="solo-sub">
          We think that's worth knowing. Not because we're trying to sell you something — but because
          the people we've set this up for have told us it's changed their day. Sometimes quietly.
          Sometimes significantly. We let them tell their own people in their own time.
        </p>
      </div>

      {/* CTA */}
      <div className="pitch-cta-area" style={{ marginTop: 'var(--space-lg)' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:hello@ausdataremoval.com.au?subject=Personal%20Setup%20Enquiry"
            className="companion-btn"
            style={{ display: 'inline-block', padding: '0.85rem 1.75rem' }}
          >
            Get in touch privately
          </a>
          <a
            href="#services"
            className="companion-btn"
            onClick={e => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ display: 'inline-block', padding: '0.85rem 1.75rem' }}
          >
            See our personal plans
          </a>
        </div>
        <p className="pitch-disclaimer" style={{ marginTop: '1rem' }}>
          We read every message personally. There's no autoresponder.
        </p>
      </div>
    </section>
  );
};

export default SoloLiving;
