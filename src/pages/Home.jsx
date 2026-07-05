import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import ScrollReveal from '../components/ScrollReveal';
import GlowCard from '../components/GlowCard';
import Roadmap from '../components/Roadmap';
import ProjectBento from '../components/ProjectBento';

// --- Inline SVG Icons ---
const ArrowRight = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} fill="currentColor" className={className} viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
  </svg>
);

const BoxArrowUpRight = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} fill="currentColor" className={className} viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
  </svg>
);

const PlayFill = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
  </svg>
);

const Youtube = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
  </svg>
);

const Cpu = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 16 16">
    <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z" />
  </svg>
);

const Home = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  // Simulated ML training telemetry
  const [loss, setLoss] = useState(0.1852);
  const [epoch, setEpoch] = useState(1);
  const [valAcc, setValAcc] = useState(91.85);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoss(prev => {
        const next = prev - 0.0018 * Math.random();
        return next > 0.038 ? parseFloat(next.toFixed(4)) : 0.038;
      });
      setValAcc(prev => {
        const next = prev + 0.045 * Math.random();
        return next < 98.45 ? parseFloat(next.toFixed(2)) : 98.45;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Epoch scheduler
  useEffect(() => {
    const interval = setInterval(() => {
      setEpoch(prev => (prev < 5 ? prev + 1 : 1));
      setLoss(0.1852 - 0.03 * Math.random());
      setValAcc(91.85 + 1.2 * Math.random());
    }, 20000); // cycle epoch every 20s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-5" style={{ maxWidth: '1200px' }}>

      {/* --- HERO SECTION (NOTEBOOK STYLE) --- */}
      <section className="row align-items-center min-vh-75 py-5 position-relative">
        
        {/* Subtle Background Texture for Hero */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ filter: 'url(#pencil-texture)', pointerEvents: 'none', zIndex: -1 }}></div>

        {/* Left Col: Text Content */}
        <div className="col-lg-7 order-2 order-lg-1 position-relative z-1">
          
          {/* Handwritten Annotation pointing to Name */}
          <div className="position-absolute d-none d-md-block" style={{ top: '-15px', left: '200px', transform: 'rotate(-5deg)', zIndex: 10 }}>
            <span style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.2rem', color: '#DA7756' }}>
              That's me!
            </span>
            <svg width="40" height="40" viewBox="0 0 100 100" style={{ position: 'absolute', top: '15px', left: '-25px', transform: 'rotate(80deg)' }}>
              <path d="M 20 80 Q 50 50 80 20" fill="none" stroke="#DA7756" strokeWidth="3" />
              <path d="M 60 20 L 80 20 L 75 40" fill="none" stroke="#DA7756" strokeWidth="3" />
            </svg>
          </div>

          <ScrollReveal direction="up" delay={0}>
            {/* Tracked Label */}
            <div className="tracked-sub mb-3" style={{ color: 'var(--accent-color)' }}>
              MEET VAGHELA // 00
            </div>

            {/* Static Greeting — Serif Italic */}
            <h2 className="display-6 fw-bold mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              Hello, I am <span className="serif-italic" style={{ color: 'var(--text-primary)' }}>Meet Vaghela</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            {/* Dynamic Typing Title — Warm accent */}
            <h1 className="display-2 fw-bold mb-4 position-relative d-inline-block" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-0.02em', minHeight: '1.2em' }}>
              <span style={{ color: 'var(--accent-color)' }}>
                <TypeAnimation
                  sequence={[
                    'AI/ML Engineer',
                    1500,
                    'Deep Learning Specialist',
                    1500,
                    'Neural Network Architect',
                    1500,
                    'Data Scientist',
                    1500,
                    'Computer Vision Expert',
                    1500
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            {/* Bio Text */}
            <p className="lead mb-5" style={{ maxWidth: '600px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              Passionate about advancing artificial intelligence and machine learning technologies.
              I specialize in building intelligent systems, neural networks, and AI-powered applications
              that solve real-world problems with cutting-edge algorithms.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <Link 
                to="/projects" 
                className="btn px-4 py-2 sketch-border fw-bold d-inline-flex align-items-center gap-2 hover-lift-card" 
                style={{ backgroundColor: 'var(--accent-color)', color: '#FDFCFA', border: '2px solid var(--accent-color)' }}
              >
                View Work <ArrowRight />
              </Link>
              <Link 
                to="/contact" 
                className="btn px-4 py-2 sketch-border fw-bold d-inline-flex align-items-center gap-2 hover-lift-card" 
                style={{ backgroundColor: 'transparent', color: 'var(--text-primary)', border: '2px solid var(--border-color)' }}
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Col: Profile Picture (Polaroid Style) */}
        <div className="col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0 text-center">
          <ScrollReveal direction="scale" delay={200}>
            <div 
              className="p-3 mx-auto position-relative"
              style={{ 
                maxWidth: '350px', 
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
                  width: '80px', 
                  height: '25px', 
                  backgroundColor: 'rgba(230, 225, 215, 0.6)', 
                  border: '1px solid rgba(0,0,0,0.05)',
                  transform: 'rotate(-3deg)',
                  boxShadow: '1px 1px 3px rgba(0,0,0,0.05)',
                  backdropFilter: 'blur(2px)'
                }}
              ></div>
              
              <div style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
                <img
                  src="/profile_me.jpg"
                  alt="Meet Vaghela"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    aspectRatio: '1/1',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <div className="mt-3 text-center fw-bold" style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.4rem', color: '#1A1915', opacity: 0.8 }}>
                Vadodara, India
              </div>
            </div>
          </ScrollReveal>
        </div>

      </section>

      {/* --- LIVE GPU SANDBOX SECTION (NOTEBOOK TELEMETRY PRINTOUT) --- */}
      <section className="py-4 mb-5 position-relative">
        
        {/* Handwritten tape holding the printout */}
        <div className="position-absolute top-0 start-50 translate-middle" style={{ width: '120px', height: '35px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', opacity: 0.9, transform: 'rotate(2deg)', zIndex: 10, boxShadow: 'var(--shadow-sm)' }}></div>
        
        <ScrollReveal direction="up" delay={0}>
          <div className="p-4 p-md-5 position-relative overflow-hidden sketch-border" style={{ background: 'var(--card-bg)', color: 'var(--text-primary)' }}>
            
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-50" style={{ filter: 'url(#pencil-texture)', pointerEvents: 'none' }}></div>
            
            {/* Watermark */}
            <div className="position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-10deg)', fontSize: '8rem', color: 'var(--text-primary)', opacity: 0.03, fontFamily: 'var(--font-serif)', fontWeight: 900, whiteSpace: 'nowrap', pointerEvents: 'none' }}>
              SYSTEM LOG
            </div>

            <div className="row g-4 align-items-center position-relative z-1">
              
              {/* Telemetry Column 1: GPU Status */}
              <div className="col-md-4 border-end-custom" style={{ borderRight: '2px dashed var(--border-color)' }}>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <svg width="14" height="14" viewBox="0 0 100 100">
                    <path d="M 20 50 L 40 75 L 80 20" fill="none" stroke="#27c93f" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="tracked-sub text-uppercase text-muted fw-bold" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>Inference GPU status</span>
                </div>
                <h4 className="fw-bold h5 mb-3" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>NVIDIA RTX 4090</h4>
                <div className="d-flex flex-column gap-3 mt-3 text-secondary" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono, monospace)' }}>
                  
                  <div>
                    <div className="d-flex justify-content-between mb-1 fw-bold" style={{ color: 'var(--text-primary)' }}>
                      <span>Core Load</span>
                      <span>74.2%</span>
                    </div>
                    {/* Sketched Progress Bar */}
                    <div className="w-100 sketch-border overflow-hidden p-1" style={{ height: '14px', background: 'transparent' }}>
                      <div className="h-100" style={{ width: '74.2%', backgroundColor: '#DA7756', opacity: 0.8, borderRadius: '2px' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="d-flex justify-content-between mb-1 fw-bold" style={{ color: 'var(--text-primary)' }}>
                      <span>VRAM Usage</span>
                      <span>18.6 GB / 24 GB</span>
                    </div>
                    {/* Sketched Progress Bar */}
                    <div className="w-100 sketch-border overflow-hidden p-1" style={{ height: '14px', background: 'transparent' }}>
                      <div className="h-100" style={{ width: '77.5%', backgroundColor: '#27c93f', opacity: 0.8, borderRadius: '2px' }}></div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Telemetry Column 2: Loss & Training Sim */}
              <div className="col-md-4 border-end-custom" style={{ borderRight: '2px dashed var(--border-color)' }}>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <svg width="14" height="14" viewBox="0 0 100 100">
                    <circle cx="50" cy="75" r="10" fill="#ffbd2e" />
                    <path d="M 50 15 L 50 55" stroke="#ffbd2e" strokeWidth="12" strokeLinecap="round" />
                  </svg>
                  <span className="tracked-sub text-uppercase text-muted fw-bold" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>Fine-tuning execution logs</span>
                </div>
                <h4 className="fw-bold h5 mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>Llama-3.3-8B-Instruct</h4>
                <div className="mt-3 text-secondary" style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono, monospace)', lineHeight: '1.7' }}>
                  <div className="d-flex justify-content-between mb-1 border-bottom pb-1" style={{ borderBottomColor: 'var(--border-color)' }}>
                    <span>Epoch</span>
                    <span className="fw-bold text-primary">{epoch} / 5</span>
                  </div>
                  <div className="d-flex justify-content-between mb-1 border-bottom pb-1" style={{ borderBottomColor: 'var(--border-color)' }}>
                    <span>Training Loss</span>
                    <span className="fw-bold" style={{ color: 'var(--accent-color)' }}>{loss}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-1 border-bottom pb-1" style={{ borderBottomColor: 'var(--border-color)' }}>
                    <span>Validation Accuracy</span>
                    <span className="fw-bold" style={{ color: '#27c93f' }}>{valAcc}%</span>
                  </div>
                  <div className="mt-2 fw-bold" style={{ fontSize: '0.7rem', color: 'var(--text-primary)', opacity: 0.7 }}>
                    &gt; optimizer: AdamW | lr: 2e-5 | lora_r: 16
                  </div>
                </div>
              </div>

              {/* Telemetry Column 3: Focus stack */}
              <div className="col-md-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span style={{ fontSize: '0.8rem' }}>📌</span>
                  <span className="tracked-sub text-uppercase text-muted fw-bold" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>Research Stack & Focus</span>
                </div>
                <h4 className="fw-bold h5 mb-3" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>Active Workloads</h4>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {['Langfuse Metrics', 'vLLM Serving', 'Ollama Clusters', 'DSPy Prompts', 'Multi-Agent Routing'].map((item, i) => (
                    <span 
                      key={item} 
                      className="sketch-border fw-bold px-2 py-1" 
                      style={{ 
                        fontSize: '0.7rem', 
                        backgroundColor: 'var(--bg-color)', 
                        color: 'var(--text-primary)', 
                        boxShadow: '2px 2px 0px rgba(0,0,0,0.1)', 
                        transform: `rotate(${i % 2 === 0 ? 1 : -1.5}deg)` 
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
        <style>{`
          @media (max-width: 768px) {
            .border-end-custom {
              border-right: none !important;
              border-bottom: 2px dashed var(--border-color);
              padding-bottom: 20px;
              margin-bottom: 10px;
            }
          }
        `}</style>
      </section>

      {/* --- AI SYSTEMS ARCHITECTURE ROADMAP --- */}
      <Roadmap />

      {/* --- SELECTED WORK (BENTO GRID) --- */}
      <section className="py-5">
        <ScrollReveal direction="up" delay={0}>
          <div className="d-flex justify-content-between align-items-end mb-4">
            <h3 className="fw-bold mb-0" style={{ fontFamily: 'var(--font-serif)' }}>Selected Work</h3>
            <Link to="/projects" className="text-decoration-none small fw-bold" style={{ color: 'var(--accent-color)' }}>+ More Experiments &rarr;</Link>
          </div>
        </ScrollReveal>

        <ProjectBento />
      </section>
    </div>
  );
};

export default Home;