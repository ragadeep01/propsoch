import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownHover = (menu) => {
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="top-banner">
        <a href="/fair-price-calculator" className="banner-link">
          Check any property's <span className="highlight">fair price</span> & negotiate confidently.
        </a>
      </div>

      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-container">
          <a href="/" className="navbar-logo" aria-label="PropSoch Home">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#FF6B35"/>
              <path d="M20 10L8 20H12V30H28V20H32L20 10Z" fill="white"/>
              <rect x="17" y="22" width="6" height="8" fill="#FF6B35"/>
            </svg>
            <span className="logo-text">Propsoch</span>
          </a>

          <div className="navbar-links">
            <div 
              className="nav-item"
              onMouseEnter={() => handleDropdownHover('properties')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="nav-link">
                Properties
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>
              {activeDropdown === 'properties' && (
                <div className="dropdown-menu">
                  <a href="/buy/bangalore">Bangalore Properties</a>
                  <a href="/buy/mumbai">Mumbai Properties</a>
                  <a href="/compare-properties">Compare Properties</a>
                </div>
              )}
            </div>

            <div 
              className="nav-item"
              onMouseEnter={() => handleDropdownHover('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="nav-link">
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div className="dropdown-menu">
                  <a href="/guided-home-buying">Guided Home Buying</a>
                  <a href="/peace-of-mind">Peace of Mind Report</a>
                  <a href="/fair-price-calculator">Fair Price Calculator</a>
                </div>
              )}
            </div>

            <div 
              className="nav-item"
              onMouseEnter={() => handleDropdownHover('resources')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="nav-link">
                Resources
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>
              {activeDropdown === 'resources' && (
                <div className="dropdown-menu">
                  <a href="/blogs">Blogs</a>
                  <a href="/blogs/homebuying-checklist">Home Buying Checklist</a>
                  <a href="/loyalty-reward-calculator">Loyalty Rewards</a>
                </div>
              )}
            </div>

            <div 
              className="nav-item"
              onMouseEnter={() => handleDropdownHover('company')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="nav-link">
                Company
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>
              {activeDropdown === 'company' && (
                <div className="dropdown-menu">
                  <a href="/about">About Us</a>
                  <a href="/careers">Careers</a>
                  <a href="/contact">Contact</a>
                </div>
              )}
            </div>
          </div>

          <div className="navbar-right">
            <button className="navbar-icon-btn" aria-label="Search" title="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
            </button>

            <button className="navbar-icon-btn" aria-label="Share" title="Share">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"></path>
              </svg>
            </button>

            <button className="navbar-icon-btn" aria-label="View wishlist" title="Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>

            <a href="/get-started" className="navbar-cta" aria-label="Get Started">
              Get Started
            </a>

            <button 
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} role="menu">
          <a href="/buy" className="mobile-nav-link" role="menuitem">Properties</a>
          <a href="/services" className="mobile-nav-link" role="menuitem">Services</a>
          <a href="/blogs" className="mobile-nav-link" role="menuitem">Resources</a>
          <a href="/about" className="mobile-nav-link" role="menuitem">Company</a>
          <a href="/get-started" className="mobile-cta" role="menuitem">Get Started</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
