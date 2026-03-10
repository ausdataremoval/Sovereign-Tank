import React from 'react';

const DeedModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>&times;</button>
        <h2>Thank You</h2>
        <p>Your submission has been received successfully.</p>
        <p>We will begin your Digital Exposure Audit and deliver your Digital Risk Summary within 48 hours.</p>
        <p>If you have any questions, please contact us at <a href="mailto:hello@ausdataremoval.com.au">hello@ausdataremoval.com.au</a>.</p>
        <button 
          className="primary" 
          onClick={onClose}
          style={{ marginTop: '1.5rem', width: '100%' }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DeedModal;
