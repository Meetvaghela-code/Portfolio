import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import ScrollReveal from '../components/ScrollReveal';
import GlowCard from '../components/GlowCard';

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

      {/* --- HERO SECTION --- */}
      <section className="row align-items-center min-vh-75 py-5">

        {/* Left Col: Text Content */}
        <div className="col-lg-7 order-2 order-lg-1">
          <ScrollReveal direction="up" delay={0}>
            {/* Tracked Label */}
            <div className="tracked-sub mb-3" style={{ color: 'var(--accent-color)' }}>
              AI/ML ENGINEER
            </div>

            {/* Static Greeting — Serif Italic */}
            <h2 className="display-6 fw-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
              Hello, I am <span className="serif-italic" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Meet Vaghela</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            {/* Dynamic Typing Title — Warm accent */}
            <h1 className="display-2 fw-bold mb-4" style={{ minHeight: '1.2em', letterSpacing: '-2px' }}>
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

            <div className="d-flex gap-3">
              <Link to="/projects" className="btn btn-apple d-flex align-items-center gap-2">
                View Work <ArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-apple-secondary">
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Col: Profile Picture */}
        <div className="col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0 text-center">
          <ScrollReveal direction="scale" delay={200}>
            <div className="position-relative d-inline-block">
              {/* Warm Glow Background */}
              <div
                className="position-absolute"
                style={{
                  top: '-10%',
                  left: '-10%',
                  width: '120%',
                  height: '120%',
                  background: 'radial-gradient(circle, rgba(218, 119, 86, 0.12) 0%, rgba(0,0,0,0) 70%)',
                  borderRadius: '50%',
                  filter: 'blur(40px)',
                  zIndex: -1
                }}
              />
              {/* Profile Image */}
              <img
                src="/profile_me.jpg"
                alt="Meet Vaghela"
                className="img-fluid rounded-circle"
                style={{
                  width: '320px',
                  height: '320px',
                  objectFit: 'cover',
                  border: '3px solid var(--border-color)',
                  boxShadow: 'var(--shadow-hover)'
                }}
              />
            </div>
          </ScrollReveal>
        </div>

      </section>

      {/* --- LIVE GPU SANDBOX SECTION --- */}
      <section className="py-4 mb-5">
        <ScrollReveal direction="up" delay={0}>
          <GlowCard className="p-4 overflow-hidden border-0" style={{ background: '#13120F', color: '#E8E4DE', borderRadius: '20px' }} glowColor="rgba(218, 119, 86, 0.15)">
            <div className="row g-4 align-items-center">
              
              {/* Telemetry Column 1: GPU Status */}
              <div className="col-md-4 border-end-custom" style={{ borderRight: '1px solid rgba(232, 228, 222, 0.08)' }}>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="pulsing-green-dot"></span>
                  <span className="tracked-sub text-uppercase text-white-50" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>Inference GPU status</span>
                </div>
                <h4 className="fw-bold h5 mb-2" style={{ fontFamily: 'var(--font-serif)', color: '#E8E4DE' }}>NVIDIA RTX 4090</h4>
                <div className="d-flex flex-column gap-2 mt-3 text-white-50" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono, monospace)' }}>
                  <div className="d-flex justify-content-between">
                    <span>Core Load</span>
                    <span className="text-white">74.2%</span>
                  </div>
                  <div className="w-100 bg-dark rounded-pill overflow-hidden" style={{ height: '5px' }}>
                    <div className="bg-success h-100" style={{ width: '74.2%' }}></div>
                  </div>
                  <div className="d-flex justify-content-between mt-1">
                    <span>VRAM Usage</span>
                    <span className="text-white">18.6 GB / 24 GB</span>
                  </div>
                  <div className="w-100 bg-dark rounded-pill overflow-hidden" style={{ height: '5px' }}>
                    <div className="bg-warning h-100" style={{ width: '77.5%' }}></div>
                  </div>
                </div>
              </div>

              {/* Telemetry Column 2: Loss & Training Sim */}
              <div className="col-md-4 border-end-custom" style={{ borderRight: '1px solid rgba(232, 228, 222, 0.08)' }}>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="pulsing-amber-dot"></span>
                  <span className="tracked-sub text-uppercase text-white-50" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>Fine-tuning execution logs</span>
                </div>
                <h4 className="fw-bold h5 mb-1" style={{ fontFamily: 'var(--font-serif)', color: '#E8E4DE' }}>Llama-3.3-8B-Instruct</h4>
                <div className="mt-3 text-white-50" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono, monospace)', lineHeight: '1.5' }}>
                  <div className="d-flex justify-content-between mb-1">
                    <span>Epoch</span>
                    <span className="text-white">{epoch} / 5</span>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span>Training Loss</span>
                    <span className="text-accent-color fw-bold" style={{ color: 'var(--accent-color)' }}>{loss}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span>Validation Accuracy</span>
                    <span className="text-success fw-bold">{valAcc}%</span>
                  </div>
                  <div className="text-white-50 mt-2" style={{ fontSize: '0.65rem', fontStyle: 'italic' }}>
                    &gt; optimizer: AdamW | lr: 2e-5 | lora_r: 16
                  </div>
                </div>
              </div>

              {/* Telemetry Column 3: Focus stack */}
              <div className="col-md-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span>🧠</span>
                  <span className="tracked-sub text-uppercase text-white-50" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>Research Stack & Focus</span>
                </div>
                <h4 className="fw-bold h5 mb-2" style={{ fontFamily: 'var(--font-serif)', color: '#E8E4DE' }}>Active Workloads</h4>
                <div className="d-flex flex-wrap gap-1.5 mt-3">
                  {['Langfuse Metrics', 'vLLM Serving', 'Ollama Clusters', 'DSPy Prompts', 'Multi-Agent Routing'].map(item => (
                    <span key={item} className="badge fw-normal px-2.5 py-1.5 text-white-50" style={{ fontSize: '0.65rem', backgroundColor: 'rgba(232, 228, 222, 0.05)', border: '1px solid rgba(232, 228, 222, 0.1)', borderRadius: '6px' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </GlowCard>
        </ScrollReveal>
        <style>{`
          .pulsing-green-dot {
            width: 7px;
            height: 7px;
            background-color: #27c93f;
            border-radius: 50%;
            display: inline-block;
            box-shadow: 0 0 6px #27c93f;
            animation: pulse-glow-green 2s infinite ease-in-out;
          }
          .pulsing-amber-dot {
            width: 7px;
            height: 7px;
            background-color: #ffbd2e;
            border-radius: 50%;
            display: inline-block;
            box-shadow: 0 0 6px #ffbd2e;
            animation: pulse-glow-amber 2s infinite ease-in-out;
          }
          @keyframes pulse-glow-green {
            0%, 100% { box-shadow: 0 0 4px #27c93f; opacity: 0.6; }
            50% { box-shadow: 0 0 10px #27c93f; opacity: 1; }
          }
          @keyframes pulse-glow-amber {
            0%, 100% { box-shadow: 0 0 4px #ffbd2e; opacity: 0.6; }
            50% { box-shadow: 0 0 10px #ffbd2e; opacity: 1; }
          }
          @media (max-width: 768px) {
            .border-end-custom {
              border-right: none !important;
              border-bottom: 1px solid rgba(232, 228, 222, 0.08);
              padding-bottom: 20px;
              margin-bottom: 10px;
            }
          }
        `}</style>
      </section>

      {/* --- SELECTED WORK (BENTO GRID) --- */}
      <section className="py-5">
        <ScrollReveal direction="up" delay={0}>
          <div className="d-flex justify-content-between align-items-end mb-4">
            <h3 className="fw-bold mb-0" style={{ fontFamily: 'var(--font-serif)' }}>Selected Work</h3>
            <Link to="/projects" className="text-decoration-none small fw-bold" style={{ color: 'var(--accent-color)' }}>View All &rarr;</Link>
          </div>
        </ScrollReveal>

        <div className="row g-4">

          {/* Featured Project: Adaptive RAG (Full Width) */}
          <div className="col-12">
            <ScrollReveal direction="up" delay={100} className="w-100">
              <a
                href="https://adaptive-rag-frontend.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none w-100 d-block"
                onMouseEnter={() => setHoveredProject('adaptive')}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <GlowCard
                  className="apple-card p-4 p-md-5 d-flex flex-column flex-md-row align-items-md-center justify-content-between position-relative overflow-hidden w-100"
                  glowColor="rgba(218, 119, 86, 0.15)"
                  glowSize={500}
                  style={{
                    background: 'linear-gradient(135deg, #2D2B27 0%, #4A4740 100%)',
                    color: '#E8E4DE',
                    border: 'none',
                    minHeight: '300px'
                  }}
                >
                  <div className="position-relative z-1 col-md-7">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="p-2 rounded-circle" style={{ backgroundColor: 'rgba(218, 119, 86, 0.2)' }}>
                        <Cpu size={28} color="#DA7756" />
                      </div>
                      <span className="badge rounded-pill px-3 py-1" style={{ backgroundColor: 'var(--accent-color)', color: 'white', fontSize: '0.75rem' }}>Flagship Project</span>
                    </div>
                    <h3 className="fw-bold mb-2 display-6" style={{ color: '#E8E4DE', fontFamily: 'var(--font-serif)' }}>Adaptive RAG System</h3>
                    <p className="mb-4" style={{ maxWidth: '90%', fontSize: '1.1rem', color: 'rgba(232, 228, 222, 0.65)' }}>
                      A self-correcting retrieval system that intelligently routes queries between vector stores and web search for optimal accuracy.
                    </p>
                    <div className="d-flex align-items-center gap-2 fw-medium" style={{ color: '#DA7756' }}>
                      Try Live Demo <ArrowRight size={14} />
                    </div>
                  </div>

                  {/* Warm Glow Decoration */}
                  <div
                    className="position-absolute"
                    style={{
                      top: '-20%',
                      right: '-10%',
                      width: '500px',
                      height: '500px',
                      background: 'radial-gradient(circle, rgba(218, 119, 86, 0.12) 0%, rgba(0,0,0,0) 70%)',
                      borderRadius: '50%',
                      filter: 'blur(60px)',
                      transition: 'all 0.6s ease',
                      transform: hoveredProject === 'adaptive' ? 'scale(1.1) translate(-20px, 20px)' : 'scale(1)'
                    }}
                  />
                </GlowCard>
              </a>
            </ScrollReveal>
          </div>

          {/* Secondary Feature: YouTube Chatbot */}
          <div className="col-md-7 d-flex align-items-stretch">
            <ScrollReveal direction="left" delay={200} className="w-100">
              <a
                href="https://youtube-chatbot-page.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none w-100 h-100 d-block"
                onMouseEnter={() => setHoveredProject('youtube')}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <GlowCard
                  className="apple-card h-100 p-4 d-flex flex-column justify-content-between position-relative overflow-hidden w-100"
                  glowColor="rgba(218, 119, 86, 0.18)"
                  glowSize={400}
                  style={{
                    background: 'var(--text-primary)',
                    color: 'var(--bg-color)',
                    border: 'none',
                    minHeight: '280px'
                  }}
                >
                  <div className="position-relative z-1">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <Youtube size={32} color="#DA7756" />
                      <BoxArrowUpRight style={{ opacity: 0.4 }} />
                    </div>
                    <h4 className="fw-bold mb-2" style={{ color: 'var(--bg-color)', fontFamily: 'var(--font-serif)' }}>YouTube RAG Chatbot</h4>
                    <p className="mb-0" style={{ opacity: 0.6 }}>
                      Interact with videos using AI. Ask questions and get instant answers from transcripts via RAG.
                    </p>
                  </div>

                  <div
                    className="position-absolute"
                    style={{
                      top: '50%',
                      right: '-10%',
                      width: '300px',
                      height: '300px',
                      background: 'radial-gradient(circle, rgba(218, 119, 86, 0.12) 0%, rgba(0,0,0,0) 70%)',
                      borderRadius: '50%',
                      filter: 'blur(40px)',
                      transition: 'all 0.5s ease',
                      transform: hoveredProject === 'youtube' ? 'scale(1.2)' : 'scale(1)'
                    }}
                  />
                </GlowCard>
              </a>
            </ScrollReveal>
          </div>

          {/* Tertiary Feature: Webionix Extension */}
          <div className="col-md-5 d-flex align-items-stretch">
            <ScrollReveal direction="right" delay={200} className="w-100">
              <a
                href="https://landingpage-nxi6.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none w-100 h-100 d-block"
                onMouseEnter={() => setHoveredProject('demo')}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <GlowCard
                  className="apple-card h-100 p-4 d-flex flex-column justify-content-between position-relative overflow-hidden w-100"
                  glowColor="rgba(218, 119, 86, 0.15)"
                  glowSize={400}
                  style={{ background: 'var(--card-bg)', minHeight: '280px', border: '1px solid var(--border-color)' }}
                >
                  <div className="position-relative z-1">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="p-2 rounded-circle" style={{ backgroundColor: 'rgba(218, 119, 86, 0.1)' }}>
                        <PlayFill size={24} style={{ color: 'var(--accent-color)' }} />
                      </div>
                      <BoxArrowUpRight style={{ color: 'var(--text-muted)' }} />
                    </div>
                    <h4 className="fw-bold mb-2" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>Webionix Extension</h4>
                    <p className="small mb-0" style={{ color: 'var(--text-secondary)' }}>
                      Live interactive demo of my latest ML model architecture.
                    </p>
                  </div>

                  <div
                    className="position-absolute"
                    style={{
                      bottom: '-20%',
                      left: '-20%',
                      width: '200px',
                      height: '200px',
                      background: 'radial-gradient(circle, rgba(218, 119, 86, 0.08) 0%, rgba(255,255,255,0) 70%)',
                      borderRadius: '50%',
                      transition: 'all 0.5s ease',
                      transform: hoveredProject === 'demo' ? 'scale(1.5)' : 'scale(1)'
                    }}
                  />
                </GlowCard>
              </a>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;