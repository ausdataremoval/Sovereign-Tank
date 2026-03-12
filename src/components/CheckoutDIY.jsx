export default function CheckoutDIY() {
  // Replace with actual Stripe payment link
  const stripeLink = "https://buy.stripe.com/YOUR_DIY_LINK";

  return (
    <main className="checkout-page">
      <div className="checkout-security-bar">
        <div className="checkout-shield">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="checkout-security-label">SECURE CHECKOUT</span>
        <span className="checkout-security-sub">256-bit Encryption Active</span>
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
