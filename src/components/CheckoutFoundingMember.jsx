export default function CheckoutFoundingMember() {
  // Replace with actual Stripe payment link
  const stripeLink = "https://buy.stripe.com/YOUR_FOUNDING_MEMBER_LINK";

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-card">
          <span className="checkout-badge">Founding Tier</span>
          <p className="checkout-label">Priority Package</p>
          <h1>Founding Member</h1>
          <div className="checkout-price">AUD $700</div>
          <p className="checkout-desc">
            Priority support and structured removal requests submitted on your behalf. Secure your founding member status today.
          </p>
          <ul className="checkout-includes">
            <li>Priority case handling</li>
            <li>Annual exposure re-scan</li>
            <li>Member report archive</li>
            <li>Lifetime pricing lock</li>
          </ul>
          <a href={stripeLink} className="checkout-btn">
            Pay AUD $700
          </a>
          <p className="checkout-note">
            Secure payment via Stripe. You will be redirected to complete payment.
          </p>
        </div>
      </div>
    </main>
  );
}
