export default function CheckoutAudit() {
  // Replace with actual Stripe payment link
  const stripeLink = "https://buy.stripe.com/YOUR_AUDIT_LINK";

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-card">
          <h1>Exposure Audit</h1>
          <p className="checkout-desc">
            Complete payment to begin your exposure audit.
          </p>
          <a href={stripeLink} className="checkout-btn">
            Pay AUD $200
          </a>
          <p className="checkout-note">
            Secure payment via Stripe.
          </p>
        </div>
      </div>
    </main>
  );
}
