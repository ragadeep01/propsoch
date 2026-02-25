import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">🏠</div>
              <span className="logo-text">Propsoch</span>
            </div>
            <p className="footer-tagline">
              Propsoch is the most advanced real estate research platform for homebuyers in India
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/propsoch.club" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/propsoch" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.youtube.com/@club.propsoch" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="mailto:club@propsoch.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4>Developers</h4>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-bengaluru?developers=2">Prestige</a>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-bengaluru?developers=3">Godrej Properties</a>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-bengaluru?developers=10">Brigade</a>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-bengaluru?developers=6">Sobha</a>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-bengaluru?developers=15">Assetz</a>
            </div>

            <div className="link-column">
              <h4>Locations</h4>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-whitefield-bengaluru">Whitefield</a>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-sarjapur-road-bengaluru">Sarjapur Road</a>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-bellandur-bengaluru">Bellandur</a>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-yelahanka-bengaluru">Yelahanka</a>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-hsr-layout-bengaluru">HSR Layout</a>
            </div>

            <div className="link-column">
              <h4>Budget</h4>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-bengaluru?minBudget=30000000">Luxury Homes</a>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-bengaluru?maxBudget=30000000">Properties &lt;3Cr</a>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-bengaluru?maxBudget=20000000">Properties &lt;2Cr</a>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-bengaluru?possession=readyToMoveIn">Ready To Move In</a>
              <a href="https://www.propsoch.com/buy/property-for-sale-in-bengaluru?projectArea=large">Townships</a>
            </div>

            <div className="link-column">
              <h4>Resources</h4>
              <a href="https://www.propsoch.com/blogs/homebuying-checklist/">Home Buying Guide</a>
              <a href="https://www.propsoch.com/blogs">Blog</a>
              <a href="https://www.propsoch.com/compare-properties/bengaluru">Compare Properties</a>
              <a href="https://www.propsoch.com/peace-of-mind">Peace of Mind Report</a>
              <a href="https://www.propsoch.com/fair-price-calculator">Fair Price Calculator</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-info">
            <p><strong>Thinkr Proptech Private Limited</strong></p>
            <p>RERA: PRM/KA/RERA/1251/446/AG/220927/003103</p>
            <p>GSTIN: 29AADCT1234A1Z5 | CIN: U72900KA2022PTC123456</p>
          </div>
          <div className="footer-legal-links">
            <a href="https://www.propsoch.com/meta/privacy">Privacy Policy</a>
            <a href="https://www.propsoch.com/meta/terms">Terms & Conditions</a>
          </div>
          <p className="copyright">© Copyright Thinkr Proptech Pvt. Ltd. 2026</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
