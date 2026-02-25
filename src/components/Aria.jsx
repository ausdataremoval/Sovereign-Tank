import React, { useState, useEffect } from 'react';

const Aria = () => {
    const [message, setMessage] = useState("Awaiting input.");
    const [isSpeaking, setIsSpeaking] = useState(false);

    // Helper to use Web Speech API
    const speakVoice = (text, callback) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // kill any currently playing speech
            const utterance = new SpeechSynthesisUtterance(text);

            // Try to find a robotic/female or english voice
            const voices = window.speechSynthesis.getVoices();
            const preferredVoice = voices.find(v => v.name.includes("Google UK English Female") || v.name.includes("Samantha") || v.name.includes("Female"));
            if (preferredVoice) utterance.voice = preferredVoice;

            utterance.pitch = 0.8;
            utterance.rate = 0.9;

            utterance.onend = () => {
                setIsSpeaking(false);
                if (callback) callback();
            };

            setIsSpeaking(true);
            window.speechSynthesis.speak(utterance);
        } else {
            // Fallback if no speech synthesis
            setTimeout(() => {
                setIsSpeaking(false);
                if (callback) callback();
            }, 2000);
        }
    };

    const handleTalk = () => {
        if (isSpeaking) return;
        setMessage("Processing request...");

        // Trigger 1: On button click -> "Secure connection established."
        setTimeout(() => {
            setMessage("Secure connection established.");
            speakVoice("Secure connection established.");
        }, 500);
    };

    useEffect(() => {
        // Listen for custom simulated payment success event
        const handlePaymentSuccess = () => {
            setMessage("Welcome to the Tank.");
            speakVoice("Welcome to the Tank.");
        };

        const handleButtonTrigger = () => {
            if (isSpeaking) return;
            setMessage("Secure connection established.");
            speakVoice("Secure connection established.");
        };

        window.addEventListener('paymentSuccess', handlePaymentSuccess);
        window.addEventListener('buttonTriggered', handleButtonTrigger);
        return () => {
            window.removeEventListener('paymentSuccess', handlePaymentSuccess);
            window.removeEventListener('buttonTriggered', handleButtonTrigger);
        };
    }, [isSpeaking]);

    return (
        <div className="aria-container">
            <div className={`aria-visual ${isSpeaking ? 'speaking' : ''}`}>
                <div className="aria-core"></div>
            </div>
            <div style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-gold)',
                marginBottom: 'var(--space-md)',
                minHeight: '24px',
                fontSize: '0.85rem'
            }}>
                {message}
            </div>
            <button
                data-paperform-id="hve0sbqo"
                data-popup-button="1"
                onClick={handleTalk}
            >
                Talk to Aria
            </button>
        </div>
    );
};

export default Aria;
