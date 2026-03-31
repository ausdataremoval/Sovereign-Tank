import React, { useState, useEffect, useRef } from 'react';

const TREE = {
  start: {
    text: "Hello. I'm Aria — your guide to Sovereign Tank. What brings you here today?",
    options: [
      { label: "I want AI for my business", next: 'business' },
      { label: "I need an AI event host", next: 'event' },
      { label: "I'm interested in investing", next: 'investor' },
      { label: "I want to run my own operation", next: 'partner' },
      { label: "Just exploring", next: 'explore' },
    ],
  },
  business: {
    text: "Good choice. We build custom AI assistants that handle enquiries, qualify leads, and represent your brand 24/7. Want to see how it works or get a quote?",
    options: [
      { label: "Show me how it works", action: 'scroll', target: '#how-it-works' },
      { label: "Get a quote", action: 'paperform' },
    ],
  },
  event: {
    text: "AI hosts for birthdays, weddings, corporate events, and more. We handle the entire setup. Want to enquire about an event?",
    options: [
      { label: "Yes, enquire", action: 'paperform' },
      { label: "Tell me more", action: 'scroll', target: '#services' },
    ],
  },
  investor: {
    text: "We'd be glad to share the opportunity. Our investor pitch is available on this page — scroll down to the Investor section, or I can take you there now.",
    options: [
      { label: "Take me there", action: 'scroll', target: '#investor-pitch' },
      { label: "I'll look around first", action: 'close' },
    ],
  },
  partner: {
    text: "We're selectively onboarding operators who want to run a Sovereign Tank operation in their region. It's a genuine business opportunity. The details are on this page.",
    options: [
      { label: "Show me", action: 'scroll', target: '#partner-program' },
      { label: "Not yet", action: 'close' },
    ],
  },
  explore: {
    text: "Take your time. I'm here if you have questions. Our services are below — or feel free to ask me anything.",
    options: [
      { label: "Thanks", action: 'close' },
    ],
  },
};

const Aria = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const messagesEndRef = useRef(null);
  const msgIdRef = useRef(0);
  const startedRef = useRef(false);

  const nextId = () => {
    return ++msgIdRef.current;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (open && !startedRef.current) {
      startedRef.current = true;
      const timer = setTimeout(() => {
        const node = TREE.start;
        setMessages([{ from: 'aria', text: node.text, id: nextId() }]);
        setCurrentNode('start');
        setTimeout(() => setOptionsVisible(true), 300);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const triggerPaperform = (formId) => {
    setTimeout(() => {
      const btn = document.createElement('button');
      btn.setAttribute('data-paperform-id', formId);
      btn.setAttribute('data-popup-button', '1');
      btn.style.cssText = 'display:none;position:absolute;';
      document.body.appendChild(btn);
      btn.click();
      document.body.removeChild(btn);
    }, 400);
  };

  const handleOption = (option) => {
    setOptionsVisible(false);
    const userMsg = { from: 'user', text: option.label, id: nextId() };
    setMessages(prev => [...prev, userMsg]);

    if (option.action === 'scroll') {
      setTimeout(() => {
        setOpen(false);
        const el = document.querySelector(option.target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 400);
      return;
    }

    if (option.action === 'paperform') {
      triggerPaperform('t86h5x0u');
      return;
    }

    if (option.action === 'close') {
      setTimeout(() => setOpen(false), 400);
      return;
    }

    if (option.next && TREE[option.next]) {
      const nextNode = TREE[option.next];
      setTimeout(() => {
        setMessages(prev => [...prev, { from: 'aria', text: nextNode.text, id: nextId() }]);
        setCurrentNode(option.next);
        setTimeout(() => setOptionsVisible(true), 300);
      }, 500);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const currentOptions = (currentNode && optionsVisible) ? TREE[currentNode]?.options : [];

  return (
    <div className="aria-chat-widget">
      {!open && (
        <button
          className="aria-chat-toggle"
          onClick={() => setOpen(true)}
          aria-label="Talk to Aria"
        >
          <span className="aria-toggle-orb" aria-hidden="true" />
          <span className="aria-toggle-label">Talk to Aria</span>
        </button>
      )}

      {open && (
        <div className="aria-chat-panel glass-panel" role="dialog" aria-label="Aria chat">
          <div className="aria-chat-header">
            <span className="aria-chat-label">ARIA</span>
            <button
              className="aria-close-btn"
              onClick={handleClose}
              aria-label="Close Aria chat"
            >
              &times;
            </button>
          </div>

          <div className="aria-messages" aria-live="polite">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`aria-message ${msg.from === 'aria' ? 'from-aria' : 'from-user'}`}
              >
                {msg.from === 'aria' && (
                  <span className="aria-msg-indicator" aria-hidden="true" />
                )}
                <span className="aria-msg-text">{msg.text}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {currentOptions && currentOptions.length > 0 && (
            <div className="aria-options" role="group" aria-label="Response options">
              {currentOptions.map((opt, i) => (
                <button
                  key={i}
                  className="aria-option-btn"
                  onClick={() => handleOption(opt)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Aria;
