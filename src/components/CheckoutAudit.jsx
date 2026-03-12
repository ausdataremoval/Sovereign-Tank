export default function CheckoutAudit() {
  // Replace with actual Stripe payment link
  const stripeLink = "https://buy.stripe.com/YOUR_AUDIT_LINK";

  return (
    <main className="checkout-page">
      <div className="checkout-security-bar">
        <span className="security-pulse"></span>
        <span>SECURE CHECKOUT</span>
      </div>
      <div className="checkout-container">
        <div className="checkout-card">
          <h1>Exposure Audit</h1>
          <p className="checkout-desc">
            Complete payment to begin your exposure audit.
          </p>
          <a href={stripeLink} className="checkout-btn">
            Pay AUD $200
          </a>
          <div className="checkout-security">
            <p className="checkout-note">256-bit SSL encryption via Stripe</p>
            <p className="checkout-note">No card data stored on our servers</p>
          </div>
        </div>
      </div>
    </main>
  );
}
