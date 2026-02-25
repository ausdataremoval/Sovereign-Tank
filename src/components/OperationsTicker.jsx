import React, { useState, useEffect } from 'react';

const mockLogs = [
    "DELETING RECORD #882: STATUS PURGED",
    "SCRUBBING METADATA X-9: COMPLETE",
    "OVERWRITING SECTOR 7G: VERIFIED",
    "REVOKING THIRD-PARTY ACCESS: SUCCESS",
    "ENCRYPTING REMAINING FRAGMENTS: DONE",
    "PURGING CACHE BLOCKS 0X00A: CLEARED",
    "INITIALIZING VAULT PROTOCOL: SECURE"
];

const OperationsTicker = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Create a very long array to ensure seamless infinite scroll
        setLogs([...mockLogs, ...mockLogs, ...mockLogs, ...mockLogs]);
    }, []);

    return (
        <div className="ticker-wrap">
            <div className="ticker-content" style={{ animationDuration: '40s' }}>
                {logs.map((log, index) => {
                    const splitLog = log.split(':');
                    return (
                        <div key={index} className="ticker-item">
                            <span style={{ color: 'var(--steel)' }}>{splitLog[0]}: </span>
                            {splitLog[1] && <span className="ticker-status-success">{splitLog[1]}</span>}
                            <span style={{ color: 'rgba(255,255,255,0.1)', margin: '0 2rem' }}>///</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OperationsTicker;
