import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>About Australian Data Removal</h1>
          <p className="about-intro">
            A personal note from our founder on why we built this service and how we approach every case.
          </p>
        </div>

        <div className="about-content">
          <div className="founder-portrait-large">
            <img src="/chris-robinson.jpg" alt="Chris Robinson, Founder of Australian Data Removal" />
            <p className="founder-name-large">Chris Robinson</p>
            <p className="founder-role-large">Founder</p>
          </div>

          <div className="founder-statement">
            <section className="statement-section">
              <h2>The Problem</h2>
              <p>
                Every day, Australians discover their personal information has been exposed online without their consent. 
                Phone numbers, addresses, employment history, family connections — all scraped, aggregated, and sold by data brokers 
                who profit from your digital footprint.
              </p>
              <p>
                Most people don't know where to start. They Google their own name and feel overwhelmed by what they find. 
                Automated "privacy protection" tools promise results but often miss the mark, leaving profiles active on sites 
                that actually matter.
              </p>
            </section>

            <section className="statement-section">
              <h2>How ADR Works</h2>
              <p>
                Australian Data Removal takes a different approach. We don't rely on bots or bulk-submission tools. 
                Every case is handled manually by a real person who understands the Australian privacy landscape.
              </p>
              <p>
                We start with a comprehensive audit — searching the same databases, directories, and broker sites 
                that your information appears on. We document everything and present it clearly in your Digital Risk Summary.
              </p>
              <p>
                From there, you can act on the findings yourself, or engage us to handle the removal process. 
                We submit opt-out requests, follow up with data brokers, and keep you informed every step of the way.
              </p>
            </section>

            <section className="statement-section">
              <h2>Our Commitment</h2>
              <p>
                I started Australian Data Removal because good people were being punished for other people's data breaches. 
                Every case we take on is treated like it's our own information on the line.
              </p>
              <p>
                We're Australian-owned and operated, based in Perth. No offshore call centres. No AI making decisions about your privacy. 
                Just careful, manual work by someone who understands what's at stake.
              </p>
              <p>
                If you're not sure where to start, the Personal Data Exposure Audit is the right first step. 
                It gives you clarity on your current exposure and a clear path forward — whether that's taking action yourself 
                or working with us to clean things up.
              </p>
            </section>

            <div className="founder-signature">
              <p>Chris Robinson</p>
              <p>Founder, Australian Data Removal</p>
              <p>Perth, Western Australia</p>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <h3>Ready to understand your digital exposure?</h3>
          <button
            className="primary"
            data-paperform-id="t86h5x0u"
            data-popup-button="1"
          >
            Start My Exposure Audit
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
