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
    <div className="avatar-container position-relative mx-auto d-flex justify-content-center align-items-center" style={{ width: '380px', height: '380px', maxWidth: '100%' }}>
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

      {/* --- HERO SECTION --- */}
      <div className="row align-items-center mb-5 pb-lg-4">
        <div className="col-lg-5 text-center mb-4 mb-lg-0 order-lg-2">
          <NeuralAvatar />
        </div>

        <div className="col-lg-7 order-lg-1">
          <div className="tracked-sub mb-3" style={{ color: 'var(--accent-color)' }}>
            AI/ML ENGINEER
          </div>
          <h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
            Architecting intelligent <br />
            <span className="serif-italic" style={{ color: 'var(--text-secondary)' }}>agentic workflows.</span>
          </h1>
          <p className="lead mb-4" style={{ lineHeight: '1.7', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            An <strong>AI/ML Engineer</strong> with <strong>6 months of hands-on industry experience</strong> building production-ready intelligent systems. I specialize in developing <strong>agentic LLM applications</strong>, <strong>RAG pipelines</strong>, and scalable ML solutions using <strong>LangChain</strong>, <strong>LangGraph</strong>, <strong>FastAPI</strong>, and <strong>n8n</strong>. With real-world internship experience in automation workflows and modern AI tooling, I build intelligent agentic assistants focused on practical impact and scalable deployment.
          </p>
          <div className="d-flex gap-2 flex-wrap">
            <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-3" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <span>📍</span> <span className="small fw-bold">Vadodara, India</span>
            </div>
            <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-3" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <span>🎓</span> <span className="small fw-bold">B.Tech (2026)</span>
            </div>
            <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-3" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <span>💼</span> <span className="small fw-bold">Open for Work</span>
            </div>
          </div>
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

      {/* --- SKILLS & INTERESTS --- */}
      <div className="row g-4">

        {/* Left Col: Skills */}
        <div className="col-lg-7">
          <ScrollReveal direction="left" delay={200} className="h-100">
            <GlowCard className="h-100 p-4 p-lg-5" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <h3 className="h4 fw-bold mb-4">Technical Expertise</h3>
              <div className="d-flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 rounded-pill d-flex align-items-center gap-2"
                    style={{
                      background: 'var(--border-color)',
                      border: '1px solid var(--border-light)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div
                      className="rounded-circle"
                      style={{ width: '8px', height: '8px', backgroundColor: skill.color }}
                    />
                    <span className="fw-medium small">{skill.name}</span>
                    <span className="small" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{skill.level}%</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                <h5 className="tracked-sub mb-3" style={{ color: 'var(--text-muted)' }}>CURRENT FOCUS</h5>
                <p className="mb-0 small" style={{ color: 'var(--text-secondary)' }}>
                  My passion lies in transforming traditional AI models into <strong>action-oriented agents</strong> that can reason, plan, and execute complex tasks using Graph-based orchestration.
                </p>
              </div>
            </GlowCard>
          </ScrollReveal>
        </div>

        {/* Right Col: Interests Grid */}
        <div className="col-lg-5">
          <ScrollReveal direction="right" delay={200} className="h-100">
            <div className="row g-3 h-100">
              {interests.map((item, idx) => (
                <div className="col-6" key={idx}>
                  <GlowCard className="h-100 p-3 d-flex flex-column justify-content-center text-center" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
                    <div className="mb-2" style={{ fontSize: '2rem' }}>{item.emoji}</div>
                    <h6 className="fw-bold mb-1" style={{ fontSize: '0.9rem' }}>{item.title}</h6>
                    <p className="mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.4', color: 'var(--text-muted)' }}>{item.desc}</p>
                  </GlowCard>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* --- CTA SECTION --- */}
      <ScrollReveal direction="up" delay={300} className="mt-5 text-center">
        <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>Building the next generation of AI?</p>
        <RouterNavLink to="/contact" className="btn btn-apple">
          Let's Collaborate
        </RouterNavLink>
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
      `}</style>
    </div>
  );
};

export default About;