import React from 'react';

const DeedModal = ({ onClose, submissionId = "ST-9982-X" }) => {
    return (
        <div className="modal-overlay">
            <div className="deed-container">
                <button className="close-modal" onClick={onClose}>&times;</button>

                <div className="deed-seal">SEAL</div>

                <div className="deed-header">
                    <h1>DEED OF DIGITAL SOVEREIGNTY</h1>
                    <div className="deed-meta">
                        <span>SERIAL #{submissionId}</span>
                        <span>PATCH ID: ADR-P1-001</span>
                    </div>
                </div>

                <div className="deed-body">
                    {`This document serves as formal certification of successful Data Eradication.

Under the protocols of Sovereign Tank, all identified digital traces, metadata fragments, and third-party tracking vectors associated with the signatory have been purged from host environments.

VERIFICATION PROTOCOL:
- Status: PURGED
- Encryption: 256-bit AES
- Recovery Potential: 0.00%
- Watchdog Status: SECURE

By the power of distributed verification, you are hereby granted complete digital autonomy over the identified nodes.`}
                </div>

                <div className="deed-footer">
                    <div>DATE: {new Date().toLocaleDateString()}</div>
                    <div>ST-LABS VERIFIED</div>
                    <div>AUTHORIZED BY ARIA</div>
                </div>
            </div>
        </div>
    );
};

export default DeedModal;
