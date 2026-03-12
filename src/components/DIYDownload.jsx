export default function DIYDownload() {
  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-card">
          <div className="checkout-icon success-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <h1>Download Your DIY Data Removal Roadmap</h1>
          <p className="checkout-desc">
            Thank you for your purchase. Click below to download your roadmap.
          </p>
          <a href="/files/ADR-DIY-Roadmap.pdf" download className="checkout-btn">
            Download PDF
          </a>
          <p className="checkout-note">
            Need help? Contact us at hello@ausdataremoval.com.au
          </p>
        </div>
      </div>
    </main>
  );
}
