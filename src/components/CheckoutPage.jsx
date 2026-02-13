// src/components/CheckoutPage.jsx
import React from 'react';
import '../styles/CheckoutPage.css'
// src/components/CheckoutPage.jsx


export default function CheckoutPage() {
  return (
    <div className="checkout-container">
      <div className="checkout-layout">

        {/* Left column - Plan info */}
        <div className="plan-column">
          <div className="header">
            <div className="logo">𝕏</div>
            <h1>Subscribe to Premium</h1>
            <div className="price-row">
              <span className="price">€9.99</span>
              <span className="period">/ month</span>
            </div>
          </div>

          <div className="plan-features">
            <ul>
              <li>✓ Edit posts</li>
              <li>✓ Longer posts & videos</li>
              <li>✓ Reply boost</li>
              <li>✓ Blue checkmark</li>
              <li>✓ Fewer ads</li>
              <li>✓ Access to Grok</li>
              <li>✓ Monetization options</li>
            </ul>
          </div>
        </div>

        {/* Right column - Payment form */}
        <div className="payment-column">
          <div className="payment-section">
            <h3>Pay with card</h3>

            <div className="form-group">
              <label>Card number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="card-number"
              />
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Expiration date</label>
                <input type="text" placeholder="MM / YY" maxLength={5} />
              </div>
              <div className="form-group half">
                <label>CVC</label>
                <input type="text" placeholder="123" maxLength={4} />
              </div>
            </div>

            <div className="form-group">
              <label>Name on card</label>
              <input type="text" placeholder="Daniel Russell" />
            </div>

            <div className="form-group">
              <label>Country or region</label>
              <select defaultValue="DE">
                <option value="DE">Germany</option>
                <option value="NL">Netherlands</option>
                <option value="FR">France</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
              </select>
            </div>

            <button className="pay-button">
              Subscribe • €9.99 / month
            </button>
          </div>
        </div>

      </div>

      {/* Full-width footer content - appears below both columns */}
      <div className="checkout-footer">
        <p className="terms">
          By subscribing, you agree to the <a href="#">Terms</a> and  
          <a href="#"> Privacy Policy</a>. Subscription auto-renews.  
          Cancel anytime in settings.
        </p>

        <div className="secure-note">
          <span>🔒 Secure payment powered by Stripe</span>
        </div>
      </div>
    </div>
  );
}