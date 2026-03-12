export default function CheckoutCleanup() {
  // Replace with actual Stripe payment link
  const stripeLink = "https://buy.stripe.com/YOUR_CLEANUP_LINK";

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-card">
          <h1>Full Digital Clean-Up</h1>
          <a href={stripeLink} className="checkout-btn">
            Begin Service
          </a>
          <p className="checkout-note">
            Secure payment via Stripe.
          </p>
        </div>
      </div>
    </main>
  );
}
