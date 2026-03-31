import React from 'react';

const SecurityEducation = () => {
  const openAria = () => {
    window.dispatchEvent(new CustomEvent('openAria'));
  };

  const cards = [
    {
      icon: '◈',
      title: 'YOUR ROUTER IS YOUR FRONT DOOR',
      body: 'Most home routers still use the password they came with from the factory. That password is publicly listed online for every router model. Changing it takes three minutes and closes the most common entry point into a home network. We can walk you through it.',
    },
    {
      icon: '◉',
      title: 'YOUR PHONE KNOWS MORE THAN YOU THINK',
      body: 'Every app you install asks for permissions — sometimes more than it needs. Your location, your microphone, your contacts. Most people have never checked what they\'ve allowed. A fifteen-minute audit of your app permissions is one of the most useful things you can do. It\'s simpler than it sounds.',
    },
    {
      icon: '◎',
      title: 'THE CALLS THAT KNOW YOUR NAME',
      body: 'Scammers today often know your name, your suburb, sometimes your provider. That information comes from data brokers — companies that collect and sell personal information. Understanding where your data goes is the first step to controlling it. That\'s part of what we do.',
    },
    {
      icon: '◇',
      title: 'THE DEVICES THAT ARE ALWAYS LISTENING',
      body: 'Smart speakers, TVs, and doorbells are designed to be always-on. That\'s how they work. But it also means they\'re always connected — and not always as secure as they could be. A few simple settings changes can significantly reduce your exposure without losing any of the convenience.',
    },
    {
      icon: '◆',
      title: 'YOU ALREADY KNOW THE IMPORTANT PART',
      body: 'The most important thing in device security isn\'t technical knowledge. It\'s paying attention. If something feels wrong — an email, a call, a message — it probably is. You already have that instinct. We just help you trust it, and give you the context to act on it.',
    },
  ];

  return (
    <section className="section reveal" id="security-education">
      <div className="section-header" style={{ textAlign: 'center' }}>
        <h2 style={{ justifyContent: 'center' }}>Your Devices. Your Rules.</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>
          A few things worth knowing — explained plainly, without the technical noise.
        </p>
      </div>

      <div className="edu-grid">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`edu-card glass-panel${cards.length % 2 !== 0 && i === cards.length - 1 ? ' edu-card-last' : ''}`}
          >
            <div className="edu-icon">{card.icon}</div>
            <div className="edu-title">{card.title}</div>
            <p className="edu-body">{card.body}</p>
          </div>
        ))}
      </div>

      <div className="edu-footer">
        <p>
          If any of this raised a question about your own setup — that's exactly why we're here. There's
          no such thing as a stupid question in this space. The people who get taken advantage of are
          rarely foolish — they're just missing one piece of information. We'd rather give you that
          piece than have you find out without it.
        </p>
        <div style={{ marginTop: 'var(--space-md)' }}>
          <button className="companion-btn" onClick={openAria} style={{ cursor: 'pointer' }}>
            Ask Aria
          </button>
        </div>
        <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--steel)' }}>
          Or reach out directly —{' '}
          <a href="mailto:hello@ausdataremoval.com.au">hello@ausdataremoval.com.au</a>
        </p>
      </div>
    </section>
  );
};

export default SecurityEducation;
