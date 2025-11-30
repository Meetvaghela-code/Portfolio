import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

// --- Inline SVG Icons (No external dependencies) ---
const ArrowRight = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} fill="currentColor" className={className} viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
);

const BoxArrowUpRight = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} fill="currentColor" className={className} viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
  </svg>
);

const PlayFill = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
  </svg>
);

const Youtube = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
  </svg>
);

const Cpu = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 16 16">
    <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>
  </svg>
);

const Home = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="container py-5" style={{ maxWidth: '1200px' }}>
      
      {/* --- HERO SECTION --- */}
      <section className="row align-items-center min-vh-75 py-5 fade-up">
        
        {/* Left Col: Text Content */}
        <div className="col-lg-7 order-2 order-lg-1">
          
          

          {/* Static Greeting */}
          <h2 className="display-6 fw-medium text-secondary mb-2">
            Hello, I am <span style={{ color: '#1d1d1f' }}>Meet Vaghela</span>
          </h2>

          {/* Dynamic Typing Title */}
          <h1 className="display-2 fw-bold mb-4" style={{ minHeight: '1.2em', letterSpacing: '-2px' }}>
            <span className="text-gradient">
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

          {/* Bio Text */}
          <p className="lead mb-5 text-secondary" style={{ maxWidth: '600px', lineHeight: '1.6' }}>
            Passionate about advancing artificial intelligence and machine learning technologies. 
            I specialize in building intelligent systems, neural networks, and AI-powered applications 
            that solve real-world problems with cutting-edge algorithms.
          </p>

          <div className="d-flex gap-3">
            <Link to="/projects" className="btn btn-apple d-flex align-items-center gap-2 shadow-lg">
              View Work <ArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-apple-secondary">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right Col: Profile Picture */}
        <div className="col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0 text-center">
          <div className="position-relative d-inline-block">
            {/* Abstract Background Blob */}
            <div 
              className="position-absolute" 
              style={{
                top: '-10%',
                left: '-10%',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle, rgba(0,113,227,0.15) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                zIndex: -1
              }}
            />
            {/* The Image */}
            <img 
              src="/profile_me.jpg" 
              alt="Meet Vaghela" 
              className="img-fluid rounded-circle shadow-lg border border-4 border-white"
              style={{ 
                width: '320px', 
                height: '320px', 
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

      </section>

      {/* --- SELECTED WORK (BENTO GRID) --- */}
      <section className="py-5 fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h3 className="fw-bold mb-0">Selected Work</h3>
          <Link to="/projects" className="text-decoration-none small fw-bold text-primary">View All &rarr;</Link>
        </div>

        <div className="row g-4">
          
          {/* Featured Project: Adaptive RAG (Full Width) */}
          <div className="col-12">
            <a 
              href="https://adaptive-rag-frontend.onrender.com/" 
              target="_blank" 
              rel="noreferrer"
              className="text-decoration-none"
              onMouseEnter={() => setHoveredProject('adaptive')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className="apple-card p-4 p-md-5 d-flex flex-column flex-md-row align-items-md-center justify-content-between position-relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #000428 0%, #004e92 100%)', // Premium Deep Blue Gradient
                  color: 'white',
                  border: 'none',
                  minHeight: '300px'
                }}
              >
                <div className="position-relative z-1 col-md-7">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="p-2 rounded-circle bg-white bg-opacity-25 backdrop-blur">
                      <Cpu size={28} color="white" />
                    </div>
                    <span className="badge bg-white text-primary rounded-pill px-3 py-1">Flagship Project</span>
                  </div>
                  <h3 className="fw-bold mb-2 display-6 text-white">Adaptive RAG System</h3>
                  <p className="text-white-50 mb-4" style={{ maxWidth: '90%', fontSize: '1.1rem' }}>
                    A self-correcting retrieval system that intelligently routes queries between vector stores and web search for optimal accuracy.
                  </p>
                  <div className="d-flex align-items-center gap-2 text-white fw-medium">
                    Try Live Demo <ArrowRight size={14} />
                  </div>
                </div>

                {/* Abstract Visual Decoration */}
                <div 
                  className="position-absolute" 
                  style={{ 
                    top: '-20%', 
                    right: '-10%', 
                    width: '500px', 
                    height: '500px', 
                    background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    transition: 'all 0.6s ease',
                    transform: hoveredProject === 'adaptive' ? 'scale(1.1) translate(-20px, 20px)' : 'scale(1)'
                  }}
                />
              </div>
            </a>
          </div>

          {/* Secondary Feature: YouTube Chatbot */}
          <div className="col-md-7">
            <a 
              href="https://youtube-chatbot-page.vercel.app/" 
              target="_blank" 
              rel="noreferrer"
              className="text-decoration-none"
              onMouseEnter={() => setHoveredProject('youtube')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className="apple-card h-100 p-4 d-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{ 
                  background: '#1d1d1f', // Dark Theme
                  color: 'white',
                  border: 'none',
                  minHeight: '280px'
                }}
              >
                <div className="position-relative z-1">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <Youtube size={32} color="#ff0000" />
                    <BoxArrowUpRight className="text-white-50" />
                  </div>
                  <h4 className="fw-bold mb-2 text-white">YouTube RAG Chatbot</h4>
                  <p className="text-white-50 mb-0">
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
                    background: 'radial-gradient(circle, rgba(255,0,0,0.15) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    transition: 'all 0.5s ease',
                    transform: hoveredProject === 'youtube' ? 'scale(1.2)' : 'scale(1)'
                  }}
                />
              </div>
            </a>
          </div>

          {/* Tertiary Feature: AI Demo */}
          <div className="col-md-5">
            <a 
              href="https://landingpage-nxi6.onrender.com/" 
              target="_blank" 
              rel="noreferrer"
              className="text-decoration-none"
              onMouseEnter={() => setHoveredProject('demo')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className="apple-card h-100 p-4 d-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{ background: '#ffffff', minHeight: '280px' }}
              >
                <div className="position-relative z-1">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="p-2 rounded-circle bg-light">
                      <PlayFill size={24} className="text-primary" />
                    </div>
                    <BoxArrowUpRight className="text-muted" />
                  </div>
                  <h4 className="fw-bold text-dark mb-2">Webionix Extension</h4>
                  <p className="text-secondary small mb-0">
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
                    background: 'radial-gradient(circle, rgba(0,113,227,0.1) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '50%',
                    transition: 'all 0.5s ease',
                    transform: hoveredProject === 'demo' ? 'scale(1.5)' : 'scale(1)'
                  }}
                />
              </div>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;