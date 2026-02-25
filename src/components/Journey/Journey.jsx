import { useState, useRef, useEffect } from 'react';
import './Journey.css';

const stages = [
  {
    id: 1,
    stage: 'Stage 1',
    title: 'Discovery',
    subtitle: 'Tell us about you & your ideal home',
    points: [
      'You can start with the location, budget & purpose',
      "We'll help prioritise your family's top deal-breakers",
      "We'll dig deeper on past homes to tailor the search",
    ],
    video: '/stage1.mp4',
  },
  {
    id: 2,
    stage: 'Stage 2',
    title: 'Shortlisting',
    subtitle: 'Cherry-pick from curated options',
    points: [
      'Explore homes sorted by location, builder & budget',
      'Get insights on areas, return potential & floor plans',
      'Cherry-pick the ones you like & book guided visits',
    ],
    video: '/stage2.mp4',
  },
  {
    id: 3,
    stage: 'Stage 3',
    title: 'Site Visits',
    subtitle: 'Visit sites with our market wizards',
    points: [
      'Assess the project, builder & areas with our wizards',
      'Get latest pricing, availability, offers & legal terms',
    ],
    video: '/stage3.mp4',
  },
  {
    id: 4,
    stage: 'Stage 4',
    title: 'Analysis',
    subtitle: 'Foresee design, legal & financial risks',
    points: [
      'Lighting & Ventilation / Vastu Analysis',
      'Builder Pedigree / Construction Delays',
      'Hidden Costs / Legal Troubles',
    ],
    video: '/stage4.mp4',
  },
  {
    id: 5,
    stage: 'Stage 5',
    title: 'Negotiation',
    subtitle: 'Negotiate & seal the deal confidently',
    points: [
      'Negotiate on your behalf',
      'Secure the best possible offer',
      'Ensure you book with total peace of mind',
    ],
    video: '/stage5.mp4',
  },
  {
    id: 6,
    stage: 'Stage 6',
    title: 'Home Sweet Home',
    subtitle: 'Connect with financial & legal experts',
    points: [
      'Title and encumbrance checks',
      'Agreement reviews',
      'Loan offers & more',
    ],
    video: '/stage6.mp4',
  },
];

function Journey() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Intersection Observer - only load video when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        // Pause video when section goes out of view
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
        // Autoplay when section comes into view
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Autoplay video when stage changes
  useEffect(() => {
    if (videoRef.current && isInView) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [activeStage, isInView]);

  // Switch stage
  const handleStageChange = (idx) => {
    setActiveStage(idx);
  };

  // Toggle video play/pause
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="journey-section" ref={sectionRef}>
      <p className="journey-eyebrow">
        Lost souls fall prey to FOMO, spam & deceit. Not you.
      </p>
      <h2 className="journey-title">
        Our experts will guide you <span className="highlight">home</span>.
      </h2>

      <div className="journey-container">
        <div className="stage-tabs">
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              className={`stage-tab ${idx === activeStage ? 'active' : ''}`}
              onClick={() => handleStageChange(idx)}
            >
              <span className="stage-number">{stage.stage}</span>
              <span className="stage-name">{stage.title}</span>
            </button>
          ))}
        </div>

        <div className="stage-content">
          <div className="stage-details">
            <div className="stage-badge">{stages[activeStage].stage} - {stages[activeStage].title}</div>
            <h3 className="stage-subtitle">{stages[activeStage].subtitle}</h3>
            <ul className="stage-points">
              {stages[activeStage].points.map((point, idx) => (
                <li key={idx}>
                  <span className="check-icon">✦</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="stage-video-container" onClick={handleVideoClick}>
            {isInView && (
              <>
                <video
                  ref={videoRef}
                  key={stages[activeStage].video}
                  className="stage-video"
                  preload="metadata"
                  playsInline
                  muted
                  loop
                  autoPlay
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src={stages[activeStage].video} type="video/mp4" />
                </video>
                {!isPlaying && (
                  <div className="video-play-overlay">
                    <div className="play-button">▶</div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
          />
        </div>
      </div>

      <button className="journey-cta">Book An Appointment</button>
    </section>
  );
}

export default Journey;
