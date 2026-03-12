export default function CheckoutFoundingMember() {
  // Replace with actual Stripe payment link
  const stripeLink = "https://buy.stripe.com/YOUR_FOUNDING_MEMBER_LINK";

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-card">
          <h1>Founding Member</h1>
          <a href={stripeLink} className="checkout-btn">
            Pay AUD $700
          </a>
          <p className="checkout-note">
            Secure payment via Stripe.
          </p>
        </div>
      </div>
    </main>
  );
}
