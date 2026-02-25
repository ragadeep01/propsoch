import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Rahul M.',
    image: null,
    initial: 'R',
    color: '#FF6B35',
    text: 'I was randomly moving around the city with different channel partners which finally led me to exhaustion. One of my friends suggested Propsoch and to my surprise, it has been a very pleasant experience from the very first day with the team. Propsoch took the time to understand exactly what I needed.',
  },
  {
    id: 2,
    name: 'Ashish K.',
    image: null,
    initial: 'A',
    color: '#9B59B6',
    text: 'Ashish and his colleague Stuti are quite professional and structured in their approach. We had sought their help in scouting for villa & land projects. They organized a call to understand our requirements and non-negotiables and then followed us through the entire process with patience.',
  },
  {
    id: 3,
    name: 'Deepika S.',
    image: null,
    initial: 'D',
    color: '#9B59B6',
    text: 'Absolutely amazing experience with Propsoch team!!! I was looking for a plot to invest in North Bangalore and trust me, these guys know what they\'re doing. I wasn\'t sure where to start but they guided me through the whole thing with so much patience & detail.',
  },
  {
    id: 4,
    name: 'Vikram P.',
    image: null,
    initial: 'V',
    color: '#3498DB',
    text: 'The data-driven approach of Propsoch helped me understand the true value of properties. Their fair price analysis saved me from overpaying. Highly recommend their services to anyone looking for transparency in real estate.',
  },
  {
    id: 5,
    name: 'Priya N.',
    image: null,
    initial: 'P',
    color: '#E74C3C',
    text: 'What impressed me the most was their honest feedback about properties. They didn\'t just try to sell me anything - they genuinely helped me find a home that fit my budget and requirements. The negotiation support was invaluable!',
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationRef = useRef(null);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Animation for smooth drag
  const animation = () => {
    if (trackRef.current && isDragging) {
      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
    if (isDragging) {
      animationRef.current = requestAnimationFrame(animation);
    }
  };

  // Mouse/Touch drag handlers
  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    startX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    prevTranslate.current = 0;
    currentTranslate.current = 0;
    setIsAutoPlaying(false);
    
    animationRef.current = requestAnimationFrame(animation);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    currentTranslate.current = currentX - startX.current;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    cancelAnimationFrame(animationRef.current);
    
    // Reset transform
    if (trackRef.current) {
      trackRef.current.style.transform = '';
    }

    // Swipe threshold of 50px
    if (currentTranslate.current < -50) {
      goToNext();
    } else if (currentTranslate.current > 50) {
      goToPrev();
    }
    
    currentTranslate.current = 0;
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Mouse wheel horizontal scroll
  const handleWheel = (e) => {
    // Check if scrolling horizontally or if shift is held
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
      e.preventDefault();
      setIsAutoPlaying(false);
      
      if (e.deltaX > 30 || (e.shiftKey && e.deltaY > 30)) {
        goToNext();
      } else if (e.deltaX < -30 || (e.shiftKey && e.deltaY < -30)) {
        goToPrev();
      }
    }
  };

  // Get visible testimonials (3 at a time on desktop)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="testimonials-section">
      <span className="testimonials-eyebrow">Hear from your fellow homeowners.</span>
      <h2 className="testimonials-title">
        1000+ intelligent homebuyers trusted us with their biggest life decision because we helped them{' '}
        <span className="highlight-text">know if</span> it was the right one.
      </h2>

      <div className="testimonials-nav">
        <button 
          className="nav-arrow" 
          onClick={goToPrev}
          aria-label="Previous testimonials"
        >
          ←
        </button>
        <button 
          className="nav-arrow" 
          onClick={goToNext}
          aria-label="Next testimonials"
        >
          →
        </button>
      </div>

      <div 
        className={`testimonials-slider ${isDragging ? 'dragging' : ''}`}
        ref={sliderRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onWheel={handleWheel}
      >
        <div className="testimonials-track" ref={trackRef}>
          {getVisibleTestimonials().map((testimonial, idx) => (
            <div key={`${testimonial.id}-${idx}`} className="testimonial-card">
              <div className="testimonial-avatar">
                {testimonial.image ? (
                  <img src={testimonial.image} alt={testimonial.name} />
                ) : (
                  <div 
                    className="avatar-initial" 
                    style={{ backgroundColor: testimonial.color }}
                  >
                    {testimonial.initial}
                  </div>
                )}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-dots">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(idx);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
