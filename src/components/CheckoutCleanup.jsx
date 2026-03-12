export default function CheckoutCleanup() {
  // Replace with actual Stripe payment link
  const stripeLink = "https://buy.stripe.com/YOUR_CLEANUP_LINK";

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-card">
          <p className="checkout-label">Full Service</p>
          <h1>Full Digital Clean-Up</h1>
          <div className="checkout-price">AUD $1,000+</div>
          <p className="checkout-desc">
            Manual removal requests and exposure suppression across major data broker and search platforms.
          </p>
          <ul className="checkout-includes">
            <li>Professional removal request management</li>
            <li>Up to 15 targeted removal submissions</li>
            <li>Post-request follow-up for persistent listings</li>
            <li>Final status report & documentation</li>
          </ul>
          <a href={stripeLink} className="checkout-btn">
            Begin Service
          </a>
          <p className="checkout-note">
            Secure payment via Stripe. You will be redirected to complete payment.
          </p>
        </div>
      </div>
    </main>
  );
}
