import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-card">
          <div className="checkout-icon success-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h1>Payment Confirmed</h1>
          <p className="checkout-desc">
            Your payment has been received.
          </p>
          <p className="checkout-desc">
            Please complete your intake form so we can begin reviewing your request.
          </p>
          <Link to="/start" className="checkout-btn">
            Continue to Intake Form
          </Link>
        </div>
      </div>
    </main>
  );
}
