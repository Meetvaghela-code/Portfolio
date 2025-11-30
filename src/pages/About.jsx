import React from 'react';
import { NavLink } from 'react-router-dom';

// --- New Abstract AI Avatar (Neural Core) ---
const NeuralAvatar = () => (
  <div className="avatar-container position-relative mx-auto" style={{ width: '240px', height: '240px' }}>
    <style>
      {`
        @keyframes spin-orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-orbit-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes pulse-core { 0%, 100% { transform: scale(1); filter: brightness(1); } 50% { transform: scale(0.95); filter: brightness(1.2); } }
        @keyframes float-y { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        
        .orbit-cw { animation: spin-orbit 20s linear infinite; }
        .orbit-ccw { animation: spin-orbit-rev 25s linear infinite; }
        .core-pulse { animation: pulse-core 4s ease-in-out infinite; }
        .float-anim { animation: float-y 6s ease-in-out infinite; }
      `}
    </style>
    
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="float-anim">
      <defs>
        <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0071e3" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0, 113, 227, 0.15)" />
          <stop offset="100%" stopColor="rgba(0, 113, 227, 0)" />
        </radialGradient>
      </defs>

      {/* Ambient Glow */}
      <circle cx="100" cy="100" r="90" fill="url(#glowGrad)" className="core-pulse" />

      {/* Outer Data Ring (Dashed) */}
      <g className="orbit-cw" style={{ transformOrigin: '100px 100px', opacity: 0.3 }}>
        <circle cx="100" cy="100" r="75" fill="none" stroke="#1d1d1f" strokeWidth="0.5" strokeDasharray="4 6" />
        <circle cx="175" cy="100" r="2" fill="#0071e3" />
        <circle cx="25" cy="100" r="2" fill="#0071e3" />
      </g>

      {/* Electron Orbit 1 */}
      <g className="orbit-ccw" style={{ transformOrigin: '100px 100px' }}>
        <ellipse cx="100" cy="100" rx="70" ry="25" fill="none" stroke="rgba(29, 29, 31, 0.2)" strokeWidth="1" transform="rotate(45 100 100)" />
        <circle cx="150" cy="150" r="4" fill="#a855f7">
           <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>

       {/* Electron Orbit 2 */}
       <g className="orbit-cw" style={{ transformOrigin: '100px 100px' }}>
        <ellipse cx="100" cy="100" rx="70" ry="25" fill="none" stroke="rgba(29, 29, 31, 0.2)" strokeWidth="1" transform="rotate(-45 100 100)" />
        <circle cx="50" cy="150" r="4" fill="#ec4899">
           <animate attributeName="opacity" values="1;0.5;1" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Central Neural Core */}
      <g className="core-pulse">
        <circle cx="100" cy="100" r="32" fill="url(#coreGrad)" />
        <path d="M 85 85 Q 100 75 115 85" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="85" cy="85" r="4" fill="rgba(255,255,255,0.6)" />
        <path d="M 85 100 L 115 100 M 100 85 L 100 115 M 90 90 L 110 110 M 110 90 L 90 110" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      </g>
      
      {/* Floating Tech Icons */}
      <g className="float-anim" style={{ animationDelay: '1s' }}>
        <text x="160" y="80" fontSize="14" fill="#6e6e73" fontWeight="bold">AI</text>
        <text x="30" y="120" fontSize="14" fill="#6e6e73" fontWeight="bold">ML</text>
      </g>
    </svg>
  </div>
);

const About = () => {
  const skills = [
    { name: 'LangChain & LangGraph', level: 90, color: '#0071e3' },
    { name: 'Python', level: 95, color: '#3776ab' },
    { name: 'TensorFlow', level: 75, color: '#eca400' },
    { name: 'Generative AI', level: 85, color: '#a855f7' },
    { name: 'OpenCV', level: 80, color: '#5c3ee8' },
    { name: 'Pandas/NumPy', level: 90, color: '#150458' },
    { name: 'Docker', level: 75, color: '#2496ed' }
  ];

  const interests = [
    { emoji: '🔗', title: 'Agentic Workflows', desc: 'Building autonomous AI agents' },
    { emoji: '🤖', title: 'RAG Systems', desc: 'Advanced retrieval pipelines' },
    { emoji: '👁️', title: 'Computer Vision', desc: 'Image recognition & processing' },
    { emoji: '⚡', title: 'Deep Learning', desc: 'Neural network architectures' }
  ];

  return (
    <div className="container py-5 fade-up" style={{ maxWidth: '1100px' }}>
      
      {/* --- HERO SECTION --- */}
      <div className="row align-items-center mb-5 pb-lg-5">
        <div className="col-lg-5 text-center mb-4 mb-lg-0 order-lg-2">
          <NeuralAvatar />
        </div>
        
        <div className="col-lg-7 order-lg-1">
          <div className="d-inline-block px-3 py-1 mb-3 rounded-pill bg-white border shadow-sm">
            <span className="small fw-bold text-gradient">AI/ML ENGINEER</span>
          </div>
          <h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
            Architecting intelligent <br/>
            <span className="text-secondary">agentic workflows.</span>
          </h1>
          <p className="lead text-secondary mb-4" style={{ lineHeight: '1.7', fontSize: '1.15rem' }}>
            I’m a final-year <strong>B.Tech </strong> student specializing in Information Technology. 
            Currently, I am deeply focused on building advanced <strong>RAG agents</strong> and autonomous workflows using <strong>LangChain</strong> and <strong>LangGraph</strong>, while leveraging my foundation in <strong>TensorFlow</strong> and Computer Vision.
          </p>
          <div className="d-flex gap-2 flex-wrap">
            <div className="d-flex align-items-center gap-2 px-3 py-2 bg-white rounded-3 border">
              <span>📍</span> <span className="small fw-bold">Vadodara, India</span>
            </div>
            <div className="d-flex align-items-center gap-2 px-3 py-2 bg-white rounded-3 border">
              <span>🎓</span> <span className="small fw-bold">B.Tech (Current)</span>
            </div>
            <div className="d-flex align-items-center gap-2 px-3 py-2 bg-white rounded-3 border">
              <span>💼</span> <span className="small fw-bold">Open for Work</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- SKILLS & INTERESTS BENTO GRID --- */}
      <div className="row g-4">
        
        {/* Left Col: Skills Cloud */}
        <div className="col-lg-7">
          <div className="apple-card h-100 p-4 p-lg-5">
            <h3 className="h4 fw-bold mb-4">Technical Expertise</h3>
            <div className="d-flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="px-3 py-2 rounded-pill d-flex align-items-center gap-2"
                  style={{ 
                    background: 'rgba(0,0,0,0.03)', 
                    border: '1px solid rgba(0,0,0,0.05)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div 
                    className="rounded-circle" 
                    style={{ width: '8px', height: '8px', backgroundColor: skill.color }} 
                  />
                  <span className="fw-medium small">{skill.name}</span>
                  <span className="text-secondary small" style={{ fontSize: '0.75rem' }}>{skill.level}%</span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-top">
               <h5 className="h6 text-secondary mb-3">CURRENT FOCUS</h5>
               <p className="mb-0 small text-secondary">
                 My passion lies in transforming traditional AI models into <strong>action-oriented agents</strong> that can reason, plan, and execute complex tasks using Graph-based orchestration.
               </p>
            </div>
          </div>
        </div>

        {/* Right Col: Interests Grid */}
        <div className="col-lg-5">
           <div className="row g-3 h-100">
             {interests.map((item, idx) => (
               <div className="col-6" key={idx}>
                 <div className="apple-card h-100 p-3 d-flex flex-column justify-content-center text-center">
                   <div className="mb-2" style={{ fontSize: '2rem' }}>{item.emoji}</div>
                   <h6 className="fw-bold mb-1" style={{ fontSize: '0.9rem' }}>{item.title}</h6>
                   <p className="text-secondary mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>

      </div>

      {/* --- CTA SECTION --- */}
      <div className="mt-5 text-center fade-up" style={{ animationDelay: '0.2s' }}>
        <p className="mb-3 text-secondary">Building the next generation of AI?</p>
        <NavLink to="/contact" className="btn btn-apple shadow-lg">
          Let's Collaborate
        </NavLink>
      </div>

    </div>
  );
};

export default About;