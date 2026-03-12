export default function CheckoutDIY() {
  // Replace with actual Stripe payment link
  const stripeLink = "https://buy.stripe.com/YOUR_DIY_LINK";

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-card">
          <p className="checkout-label">Self-Service</p>
          <h1>DIY Data Removal Roadmap</h1>
          <div className="checkout-price">AUD $79</div>
          <p className="checkout-desc">
            Pay once and download instantly. Follow the steps yourself or upgrade later to a full service.
          </p>
          <ul className="checkout-includes">
            <li>PDF roadmap</li>
            <li>Direct removal links</li>
            <li>Copy-paste request templates</li>
            <li>Progress checklist</li>
            <li>AUD $79 credit if upgrading to a manual service</li>
          </ul>
          <a href={stripeLink} className="checkout-btn">
            Pay AUD $79 and Download
          </a>
          <p className="checkout-note">
            Instant download after payment. Secure payment via Stripe.
          </p>
        </div>
      </div>
    </main>
  );
}
