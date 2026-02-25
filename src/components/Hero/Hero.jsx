import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const YOUTUBE_VIDEO_ID = 'RqBYQJRqUXs';
const YOUTUBE_THUMBNAIL = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/mqdefault.jpg`;

const Hero = () => {
  const [selectedCity, setSelectedCity] = useState('bangalore');
  const [isAutoDetecting, setIsAutoDetecting] = useState(false);
  const [detectedCity, setDetectedCity] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Lazy load YouTube
  const dropdownRef = useRef(null);

  const cities = [
    { id: 'bangalore', name: 'Bangalore' },
    { id: 'mumbai', name: 'Mumbai' },
    { id: 'delhi', name: 'Delhi NCR' },
    { id: 'hyderabad', name: 'Hyderabad' },
    { id: 'chennai', name: 'Chennai' },
    { id: 'pune', name: 'Pune' },
    { id: 'kolkata', name: 'Kolkata' },
    { id: 'ahmedabad', name: 'Ahmedabad' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Auto-detect location function
  const handleAutoDetect = async () => {
    setIsAutoDetecting(true);
    setDetectedCity(null);
    
    try {
      // Using ipapi.co which has CORS support
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      if (data.city) {
        const cityName = data.city.toLowerCase();
        
        // Map of city name patterns to city IDs
        const cityMatches = [
          { patterns: ['bengaluru', 'bangalore'], id: 'bangalore', name: 'Bangalore' },
          { patterns: ['mumbai', 'bombay'], id: 'mumbai', name: 'Mumbai' },
          { patterns: ['delhi', 'noida', 'gurgaon', 'gurugram'], id: 'delhi', name: 'Delhi NCR' },
          { patterns: ['hyderabad'], id: 'hyderabad', name: 'Hyderabad' },
          { patterns: ['chennai', 'madras'], id: 'chennai', name: 'Chennai' },
          { patterns: ['pune'], id: 'pune', name: 'Pune' },
          { patterns: ['kolkata', 'calcutta'], id: 'kolkata', name: 'Kolkata' },
          { patterns: ['ahmedabad'], id: 'ahmedabad', name: 'Ahmedabad' }
        ];

        // Find matching city
        const matchedCity = cityMatches.find(city => 
          city.patterns.some(pattern => cityName.includes(pattern))
        );

        if (matchedCity) {
          // Check if this city exists in our available cities list
          const isAvailable = cities.some(c => c.id === matchedCity.id);
          
          if (isAvailable) {
            setSelectedCity(matchedCity.id);
            setDetectedCity(matchedCity.name);
          } else {
            // City detected but not available in our service area
            setDetectedCity('Unavailable');
          }
        } else {
          // City not recognized at all
          setDetectedCity('Unavailable');
        }
      } else {
        throw new Error('City not found');
      }
    } catch (error) {
      // Silently handle location detection failures
      setDetectedCity('Unavailable');
    } finally {
      setTimeout(() => {
        setIsAutoDetecting(false);
      }, 500);
    }
  };

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-container">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-title">
            Buy Your Next Home <span className="gradient-text">Smarter</span> — With Data & Expert Negotiation.
          </h1>
          
          <p className="hero-subtitle">
            We shortlist the right homes, analyze fair pricing, and help you negotiate confidently — saving you time, money, and stress.
          </p>

          <div className="city-selector">
            <label className="city-label" id="city-label">Select City</label>
            <div className="city-dropdown-wrapper" ref={dropdownRef}>
              <button
                className="city-dropdown-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="listbox"
                aria-labelledby="city-label"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{cities.find(c => c.id === selectedCity)?.name}</span>
                <svg 
                  className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {isDropdownOpen && (
                <ul className="city-dropdown-list" role="listbox">
                  {cities.map(city => (
                    <li
                      key={city.id}
                      className={`city-option ${selectedCity === city.id ? 'selected' : ''}`}
                      role="option"
                      aria-selected={selectedCity === city.id}
                      onClick={() => {
                        setSelectedCity(city.id);
                        setDetectedCity(null);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {city.name}
                      {selectedCity === city.id && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button 
              className="auto-detect-btn"
              onClick={handleAutoDetect}
              disabled={isAutoDetecting}
              aria-label="Auto detect my location"
            >
              {isAutoDetecting ? (
                <>
                  <span className="spinner"></span>
                  Detecting...
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="3"></circle>
                    <line x1="12" y1="2" x2="12" y2="4"></line>
                    <line x1="12" y1="20" x2="12" y2="22"></line>
                    <line x1="2" y1="12" x2="4" y2="12"></line>
                    <line x1="20" y1="12" x2="22" y2="12"></line>
                  </svg>
                  Auto detect my location
                </>
              )}
            </button>

            {detectedCity && (
              <p className={`detected-message ${detectedCity === 'Unavailable' ? 'unavailable' : ''}`}>
                {detectedCity === 'Unavailable' ? (
                  <>⚠️ Location: <strong>Unavailable</strong></>
                ) : (
                  <>📍 Detected: <strong>{detectedCity}</strong></>
                )}
              </p>
            )}
          </div>

          <a 
            href="/get-started" 
            className="btn btn-primary"
            aria-label="Explore curated homes in your selected city"
          >
            Explore Curated Homes
          </a>

          <p className="login-prompt">
            Already a member? <a href="/login" className="login-link">Login</a>
          </p>
        </div>

        <div className="hero-media">
          <div className="video-thumbnail">
            <div className="video-container">
              {isVideoLoaded ? (
                <iframe
                  className="youtube-video"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&autoplay=1&playsinline=1`}
                  title="PropSoch - Guided Home Buying Program"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              ) : (
                <button 
                  className="youtube-facade"
                  onClick={() => setIsVideoLoaded(true)}
                  onTouchEnd={(e) => { e.preventDefault(); setIsVideoLoaded(true); }}
                  aria-label="Play PropSoch introduction video"
                >
                  <img 
                    src={YOUTUBE_THUMBNAIL} 
                    alt="PropSoch Video Thumbnail"
                    className="youtube-thumbnail"
                    width="480"
                    height="360"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="play-button-hero">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#fff">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-value">1000+</span>
            <span className="stat-label">Intelligent Homebuyers</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">2750+</span>
            <span className="stat-label">Hours of Advice</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">520M+</span>
            <span className="stat-label">Sq. Feet Analyzed</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">210+</span>
            <span className="stat-label">Partner Builders</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">500+</span>
            <span className="stat-label">Projects Analyzed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
