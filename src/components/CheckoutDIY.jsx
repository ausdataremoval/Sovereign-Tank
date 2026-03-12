export default function CheckoutDIY() {
  // Replace with actual Stripe payment link
  const stripeLink = "https://buy.stripe.com/YOUR_DIY_LINK";

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-card">
          <h1>DIY Data Removal Roadmap</h1>
          <p className="checkout-desc">
            Pay once and download instantly. Follow the steps yourself or upgrade later to a full service.
          </p>
          <a href={stripeLink} className="checkout-btn">
            Pay AUD $79 and Download
          </a>
          <p className="checkout-note">
            Secure payment via Stripe.
          </p>
        </div>
      </div>
    </main>
  );
}
