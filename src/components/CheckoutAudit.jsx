export default function CheckoutAudit() {
  // Replace with actual Stripe payment link
  const stripeLink = "https://buy.stripe.com/YOUR_AUDIT_LINK";

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-card">
          <p className="checkout-label">Exposure Audit</p>
          <h1>Personal Data Exposure Audit</h1>
          <div className="checkout-price">AUD $200</div>
          <p className="checkout-desc">
            Complete payment to begin your exposure audit. A specialist will manually investigate your digital footprint across data brokers and public directories.
          </p>
          <ul className="checkout-includes">
            <li>Specialist investigation of broker exposure</li>
            <li>Digital Risk Summary & findings</li>
            <li>Strategic advice for manual removal</li>
            <li>Typically delivered within 48 business hours</li>
          </ul>
          <a href={stripeLink} className="checkout-btn">
            Pay AUD $200
          </a>
          <p className="checkout-note">
            Secure payment via Stripe. You will be redirected to complete payment.
          </p>
        </div>
      </div>
    </main>
  );
}
