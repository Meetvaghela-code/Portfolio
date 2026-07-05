import React, { useEffect, useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import Lottie from 'lottie-react';
import GlowCard from '../components/GlowCard';
import ScrollReveal from '../components/ScrollReveal';
import { useCountUp, useScrollReveal } from '../hooks/useInteractive';

// --- Abstract AI Avatar (Warm Claude style) ---
const NeuralAvatar = () => {
  const [lottieData, setLottieData] = useState(null);

  useEffect(() => {
    // Fetch the lottie json from the public folder
    fetch('/avatar.json')
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => setLottieData(data))
      .catch(err => console.log('Place your Lottie file at public/avatar.json'));
  }, []);

  return (
    <div className="avatar-container position-relative mx-auto d-flex justify-content-center align-items-center" style={{ width: '100%', maxWidth: '380px', aspectRatio: '1/1' }}>
      {lottieData ? (
        <Lottie animationData={lottieData} loop={true} style={{ width: '100%', height: '100%' }} />
      ) : (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', textAlign: 'center' }}>
          Missing avatar.json
        </div>
      )}
    </div>
  );
};

// --- Stats Item Component ---
const StatItem = ({ target, label, suffix = '' }) => {
  const { count, start } = useCountUp(target, 1500, true);
  const [revealRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      start();
    }
  }, [isVisible, start]);

  return (
    <div ref={revealRef} className="text-center p-3">
      <h3 className="display-4 fw-bold mb-1" style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-serif)' }}>
        {count}{suffix}
      </h3>
      <p className="small text-uppercase tracked-sub m-0" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </p>
    </div>
  );
};

const About = () => {
  const skills = [
    { name: 'LangChain & LangGraph', level: 90, color: '#DA7756' },
    { name: 'Crew AI', level: 90, color: '#6e640aff' },
    { name: 'Autogen', level: 90, color: '#7b4b0fff' },
    { name: 'Python', level: 95, color: '#8B6E4E' },
    { name: 'TensorFlow', level: 75, color: '#C4613F' },
    { name: 'Generative AI', level: 85, color: '#A8522E' },
    { name: 'OpenCV', level: 80, color: '#6B6560' },
    { name: 'Pandas/NumPy', level: 90, color: '#4A4740' },
    { name: 'Docker', level: 75, color: '#7A6F63' },
    { name: 'N8N', level: 75, color: '#9C7A5B' },
  ];

  const interests = [
    { emoji: '🔗', title: 'Agentic Workflows', desc: 'Building autonomous AI agents' },
    { emoji: '🤖', title: 'RAG Systems', desc: 'Advanced retrieval pipelines' },
    { emoji: '👁️', title: 'Computer Vision', desc: 'Image recognition & processing' },
    { emoji: '⚡', title: 'Deep Learning', desc: 'Neural network architectures' }
  ];

  return (
    <div className="container py-5 fade-up" style={{ maxWidth: '1100px', marginTop: '25px' }}>

      {/* --- HERO SECTION (NOTEBOOK STYLE) --- */}
      <div className="row align-items-center mb-5 pb-lg-4 position-relative">

        {/* Subtle Background Texture for Hero */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ filter: 'url(#pencil-texture)', pointerEvents: 'none', zIndex: -1 }}></div>

        <div className="col-lg-5 text-center mb-5 mb-lg-0 order-lg-2">
          {/* Polaroid Frame for Lottie */}
          <ScrollReveal direction="scale" delay={100}>
            <div
              className="p-3 mx-auto position-relative"
              style={{
                maxWidth: '400px',
                backgroundColor: '#FDFCFA', // polaroid white
                border: '1px solid rgba(0,0,0,0.1)',
                boxShadow: '4px 6px 12px rgba(0,0,0,0.08), 1px 1px 2px rgba(0,0,0,0.05)',
                transform: 'rotate(2deg)',
                borderRadius: '2px'
              }}
            >
              {/* Tape at top */}
              <div
                className="position-absolute top-0 start-50 translate-middle"
                style={{
                  width: '70px',
                  height: '25px',
                  backgroundColor: 'rgba(230, 225, 215, 0.6)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transform: 'rotate(-3deg)',
                  boxShadow: '1px 1px 3px rgba(0,0,0,0.05)',
                  backdropFilter: 'blur(2px)'
                }}
              ></div>

              <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <NeuralAvatar />
              </div>

              <div className="mt-3 text-center" style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.4rem', color: '#1A1915', opacity: 0.8 }}>
                Building intelligence.
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="col-lg-7 order-lg-1 position-relative z-1">
          <ScrollReveal direction="up" delay={0}>
            <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
              <div className="tracked-sub" style={{ color: 'var(--accent-color)' }}>
                ABOUT // 01
              </div>
              {/* Availability Chip */}
              <div className="px-3 py-1 sketch-border d-inline-flex align-items-center gap-2" style={{ border: '2px solid var(--accent-color)', backgroundColor: 'transparent' }}>
                <div className="pulse-indicator" style={{ width: '8px', height: '8px', backgroundColor: '#27c93f', borderRadius: '50%', boxShadow: '0 0 6px #27c93f', animation: 'pulse-green 2s infinite' }}></div>
                <span className="small fw-bold" style={{ color: 'var(--text-primary)' }}>Open to Freelancing Opportunities</span>
              </div>
            </div>

            <h1 className="display-4 fw-bold mb-4 position-relative" style={{ letterSpacing: '-0.03em', fontFamily: 'var(--font-serif)' }}>
              Architecting intelligent <br />
              <span className="serif-italic" style={{ color: 'var(--accent-color)' }}>agentic workflows.</span>
              {/* Handwritten annotation */}
              <span className="position-absolute d-none d-md-block" style={{ top: '-15px', right: '15%', fontFamily: 'var(--font-handwriting)', fontSize: '1.3rem', color: 'var(--text-muted)', transform: 'rotate(8deg)' }}>
                Scale & optimize!
              </span>
            </h1>

            <p className="lead mb-4" style={{ lineHeight: '1.7', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
              I am an <strong>AI/ML Engineer</strong> passionate about moving beyond traditional models to build <strong>autonomous, reasoning agents</strong>.
              With hands-on industry experience, I specialize in developing production-ready <strong>RAG pipelines</strong>, multi-agent orchestrations, and scalable deep learning architectures using modern frameworks.
            </p>

            {/* Quick Highlights / Mini-Resume Grid */}
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <div className="p-3 sketch-border h-100" style={{ border: '2px solid var(--border-color)', backgroundColor: 'var(--card-bg)' }}>
                  <div className="fw-bold fs-5 mb-1" style={{ color: 'var(--accent-color)' }}>6+ Months</div>
                  <div className="small text-muted tracked-sub">Industry Exp.</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 sketch-border h-100" style={{ border: '2px solid var(--border-color)', backgroundColor: 'var(--card-bg)' }}>
                  <div className="fw-bold fs-5 mb-1" style={{ color: 'var(--accent-color)' }}>8+ Projects</div>
                  <div className="small text-muted tracked-sub">End-to-end AI Apps</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 sketch-border h-100" style={{ border: '2px solid var(--border-color)', backgroundColor: 'var(--card-bg)' }}>
                  <div className="fw-bold fs-5 mb-1" style={{ color: 'var(--accent-color)' }}>LangGraph</div>
                  <div className="small text-muted tracked-sub">Core Focus Area</div>
                </div>
              </div>
            </div>

            <div className="d-flex gap-2 flex-wrap mt-2">
              <div className="d-flex align-items-center gap-2 px-3 py-2 sketch-border" style={{ backgroundColor: 'transparent', border: '1px solid var(--border-color)' }}>
                <span>📍</span> <span className="small fw-bold">Vadodara, India</span>
              </div>
              <div className="d-flex align-items-center gap-2 px-3 py-2 sketch-border" style={{ backgroundColor: 'transparent', border: '1px solid var(--border-color)' }}>
                <span>🎓</span> <span className="small fw-bold">B.Tech (2026)</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* --- STATS SECTION --- */}
      <ScrollReveal direction="up" delay={100} className="mb-5">
        <GlowCard className="p-4" style={{ border: '1px solid var(--border-color)', background: 'var(--card-bg)' }}>
          <div className="row justify-content-around align-items-center">
            <div className="col-6 col-md-3 border-end-custom">
              <StatItem target={6} label="Months Experience" suffix="+" />
            </div>
            <div className="col-6 col-md-3 border-end-custom">
              <StatItem target={8} label="Completed Projects" suffix="+" />
            </div>
            <div className="col-6 col-md-3 border-end-custom-md">
              <StatItem target={12} label="Core Technologies" suffix="+" />
            </div>
            <div className="col-6 col-md-3">
              <StatItem target={9} label="B.Tech CGPA" suffix=".20" />
            </div>
          </div>
        </GlowCard>
      </ScrollReveal>

      {/* --- SKILLS & INTERESTS (NOTEBOOK DESIGN) --- */}
      <div className="row g-4 mt-2">

        {/* Left Col: Master Blueprint (Skills) */}
        <div className="col-lg-7">
          <ScrollReveal direction="left" delay={200} className="h-100">
            <div
              className="h-100 p-4 p-md-5 rounded-4 position-relative overflow-hidden d-flex flex-column"
              style={{
                background: 'var(--card-bg)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.1)',
              }}
            >
              {/* Paper Texture Overlay */}
              <div className="position-absolute top-0 start-0 w-100 h-100 opacity-50" style={{ filter: 'url(#pencil-texture)', pointerEvents: 'none' }}></div>

              <div className="position-relative z-1 mb-4">
                <h3 className="fw-bold display-6 mb-1" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>Technical Toolkit</h3>
                <p className="mb-0" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>// Core stack and architecture capabilities</p>
              </div>

              {/* Responsive Skill Chips with Hand-drawn CSS Borders */}
              <div className="position-relative z-1 flex-grow-1 d-flex flex-column justify-content-center py-3">
                <div className="d-flex flex-wrap gap-3 mb-5">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 d-flex align-items-center gap-2 sketch-border"
                      style={{
                        backgroundColor: 'transparent',
                        color: 'var(--text-primary)',
                        border: `2px solid ${skill.color}`,
                        transform: `rotate(${Math.random() * 4 - 2}deg)`
                      }}
                    >
                      <div className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: skill.color }}></div>
                      <span className="fw-bold small" style={{ fontFamily: 'var(--font-sans)' }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sticky Note for Current Focus */}
              <div className="position-relative z-1 mt-auto pt-3">
                <div
                  className="p-4 rounded-3 shadow-sm mx-auto mx-md-0 ms-md-auto"
                  style={{
                    backgroundColor: '#F9F09E',
                    color: '#4A4740',
                    maxWidth: '100%',
                    width: '320px',
                    transform: 'rotate(-1deg)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    position: 'relative'
                  }}
                >
                  <div className="position-absolute top-0 start-50 translate-middle-x" style={{ width: '40px', height: '15px', backgroundColor: 'rgba(0,0,0,0.08)', transform: 'translateY(-5px) rotate(1deg)' }}></div>
                  <h5 className="fw-bold mb-2" style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.4rem', color: '#DA7756' }}>Current Focus</h5>
                  <p className="mb-0" style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.1rem', lineHeight: '1.4' }}>
                    Transforming traditional models into action-oriented agents via Graph orchestration!
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Col: Concept Sketches Grid */}
        <div className="col-lg-5">
          <ScrollReveal direction="right" delay={200} className="h-100">
            <div className="row g-3 h-100">

              {/* Card 1: Agentic Workflows */}
              <div className="col-6">
                <div className="h-100 p-3 p-md-4 rounded-4 position-relative overflow-hidden hover-lift-card d-flex flex-column align-items-center justify-content-center" style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
                  <div className="mb-3" style={{ height: '50px', width: '50px' }}>
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                      <circle cx="30" cy="50" r="15" fill="none" stroke="var(--accent-color)" strokeWidth="4" />
                      <circle cx="70" cy="30" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
                      <circle cx="70" cy="70" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
                      <path d="M 45 45 L 58 35 M 45 55 L 58 65" stroke="currentColor" strokeWidth="3" strokeDasharray="4 4" />
                    </svg>
                  </div>
                  <h6 className="fw-bold mb-1 text-center" style={{ fontFamily: 'var(--font-serif)' }}>Agentic Workflows</h6>
                  <p className="mb-0 text-center small" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>Building autonomous agents</p>
                </div>
              </div>

              {/* Card 2: RAG Systems */}
              <div className="col-6">
                <div className="h-100 p-3 p-md-4 rounded-4 position-relative overflow-hidden hover-lift-card d-flex flex-column align-items-center justify-content-center" style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
                  <div className="mb-3" style={{ height: '50px', width: '50px' }}>
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                      <rect x="20" y="20" width="40" height="50" fill="none" stroke="currentColor" strokeWidth="3" />
                      <line x1="25" y1="30" x2="55" y2="30" stroke="currentColor" strokeWidth="3" />
                      <line x1="25" y1="40" x2="45" y2="40" stroke="currentColor" strokeWidth="3" />
                      <circle cx="65" cy="70" r="15" fill="none" stroke="var(--accent-color)" strokeWidth="4" />
                      <line x1="75" y1="80" x2="90" y2="95" stroke="var(--accent-color)" strokeWidth="4" />
                    </svg>
                  </div>
                  <h6 className="fw-bold mb-1 text-center" style={{ fontFamily: 'var(--font-serif)' }}>RAG Systems</h6>
                  <p className="mb-0 text-center small" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>Advanced retrieval pipelines</p>
                </div>
              </div>

              {/* Card 3: Computer Vision */}
              <div className="col-6">
                <div className="h-100 p-3 p-md-4 rounded-4 position-relative overflow-hidden hover-lift-card d-flex flex-column align-items-center justify-content-center" style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
                  <div className="mb-3" style={{ height: '50px', width: '50px' }}>
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                      <path d="M 10 50 Q 50 20 90 50 Q 50 80 10 50" fill="none" stroke="currentColor" strokeWidth="3" />
                      <circle cx="50" cy="50" r="14" fill="none" stroke="var(--accent-color)" strokeWidth="4" />
                      <circle cx="50" cy="50" r="4" fill="var(--accent-color)" />
                    </svg>
                  </div>
                  <h6 className="fw-bold mb-1 text-center" style={{ fontFamily: 'var(--font-serif)' }}>Computer Vision</h6>
                  <p className="mb-0 text-center small" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>Image recognition models</p>
                </div>
              </div>

              {/* Card 4: Deep Learning */}
              <div className="col-6">
                <div className="h-100 p-3 p-md-4 rounded-4 position-relative overflow-hidden hover-lift-card d-flex flex-column align-items-center justify-content-center" style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
                  <div className="mb-3" style={{ height: '50px', width: '50px' }}>
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                      <path d="M 20 20 L 50 50 L 20 80 M 50 50 L 80 20 M 50 50 L 80 80" stroke="currentColor" strokeWidth="3" fill="none" />
                      <circle cx="50" cy="50" r="10" fill="var(--card-bg)" stroke="var(--accent-color)" strokeWidth="4" />
                      <circle cx="20" cy="20" r="5" fill="currentColor" />
                      <circle cx="20" cy="80" r="5" fill="currentColor" />
                      <circle cx="80" cy="20" r="5" fill="currentColor" />
                      <circle cx="80" cy="80" r="5" fill="currentColor" />
                    </svg>
                  </div>
                  <h6 className="fw-bold mb-1 text-center" style={{ fontFamily: 'var(--font-serif)' }}>Deep Learning</h6>
                  <p className="mb-0 text-center small" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>Neural network architectures</p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* --- CTA SECTION (NOTEBOOK STYLE) --- */}
      <ScrollReveal direction="up" delay={300} className="mt-5 pt-2 mb-4 text-center">
        <div className="d-flex flex-column align-items-center justify-content-center p-4 rounded-4 position-relative overflow-hidden" style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)', maxWidth: '550px', margin: '0 auto' }}>

          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-50" style={{ filter: 'url(#pencil-texture)', pointerEvents: 'none' }}></div>

          <div className="position-relative z-1 mb-2">
            <svg width="45" height="45" viewBox="0 0 100 100">
              {/* Coffee cup sketch */}
              <path d="M 25 35 L 25 70 Q 25 85 45 85 Q 65 85 65 70 L 65 35 Z" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M 20 35 L 70 35" stroke="currentColor" strokeWidth="4" />
              <path d="M 65 45 Q 85 45 85 60 Q 85 75 65 70" fill="none" stroke="currentColor" strokeWidth="4" />
              {/* Steam */}
              <path d="M 35 25 Q 40 15 30 5" fill="none" stroke="var(--accent-color)" strokeWidth="3" strokeDasharray="4 4" />
              <path d="M 45 20 Q 50 10 40 0" fill="none" stroke="var(--accent-color)" strokeWidth="3" strokeDasharray="4 4" />
              <path d="M 55 25 Q 60 15 50 5" fill="none" stroke="var(--accent-color)" strokeWidth="3" strokeDasharray="4 4" />
            </svg>
          </div>

          <h4 className="position-relative z-1 mb-3" style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.75rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
            Building the next generation of AI? <br /> Let's grab a coffee & collaborate!
          </h4>

          <div className="position-relative z-1">
            <RouterNavLink
              to="/contact"
              className="btn px-4 py-2 sketch-border fw-bold d-inline-flex align-items-center gap-2"
              style={{ backgroundColor: 'var(--accent-color)', color: '#FDFCFA', border: '2px solid var(--accent-color)', fontSize: '1rem' }}
            >
              Get in touch
            </RouterNavLink>
          </div>

        </div>
      </ScrollReveal>

      <style>{`
        .border-end-custom {
          border-right: 1px solid var(--border-color);
        }
        @media (max-width: 767.98px) {
          .border-end-custom {
            border-right: none;
            border-bottom: 1px solid var(--border-color);
          }
          .border-end-custom-md {
            border-bottom: 1px solid var(--border-color);
          }
        }
        @media (min-width: 768px) {
          .border-end-custom-md {
            border-right: 1px solid var(--border-color);
          }
        }
        .sketch-border {
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
          transition: transform 0.2s;
        }
        .sketch-border:hover {
          transform: scale(1.05) rotate(0deg) !important;
        }
        .hover-lift-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease !important;
        }
        .hover-lift-card:hover {
          transform: translateY(-5px) rotate(1deg);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          border-color: var(--accent-color) !important;
        }
        [data-theme='dark'] .hover-lift-card:hover {
          box-shadow: 0 15px 30px rgba(0,0,0,0.4);
        }
      `}</style>
    </div>
  );
};

export default About;