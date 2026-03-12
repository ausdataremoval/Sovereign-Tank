export default function CheckoutDIY() {
  // Replace with actual Stripe payment link
  const stripeLink = "https://buy.stripe.com/YOUR_DIY_LINK";

  return (
    <main className="checkout-page">
      <div className="checkout-security-bar">
        <span className="security-pulse"></span>
        <span>SECURE CHECKOUT</span>
      </div>
      <div className="checkout-container">
        <div className="checkout-card">
          <h1>DIY Data Removal Roadmap</h1>
          <p className="checkout-desc">
            Pay once and download instantly. Follow the steps yourself or upgrade later to a full service.
          </p>
          <a href={stripeLink} className="checkout-btn">
            Pay AUD $79 and Download
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
