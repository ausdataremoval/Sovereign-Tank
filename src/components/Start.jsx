import { useEffect } from "react";

export default function Start() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://paperform.co/__embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="start-page">
      <div className="start-container">
        <h1>Start Your Digital Clean</h1>

        <p className="start-subtitle">
          Complete the secure intake process below so we can begin your
          Australian Data Removal service.
        </p>

        <div className="form-wrapper">
          <div data-paperform-id="azaejfvb"></div>
        </div>
      </div>
    </main>
  );
}
