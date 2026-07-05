import React from 'react';
import { NavLink } from 'react-router-dom';

// --- Inline SVG Icons ---
const Github = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const Linkedin = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
  </svg>
);

const Envelope = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
  </svg>
);

const ArrowUp = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto position-relative overflow-hidden" style={{ backgroundColor: 'var(--bg-color)', borderTop: '1px solid var(--border-color)' }}>
      {/* Background Blueprint Grid Texture */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ backgroundImage: 'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>

      <div className="container position-relative z-1 pt-5 pb-4" style={{ maxWidth: '1000px' }}>

        {/* Main Footer Content */}
        <div className="row gy-5 justify-content-between mb-5">

          {/* Brand Column */}
          <div className="col-lg-5">
            <h4
              className="fw-bold mb-3 d-flex align-items-center gap-2"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', letterSpacing: '-0.02em' }}
            >
              Meet Vaghela<span style={{ color: 'var(--accent-color, #DA7756)' }}>.</span>
            </h4>
            <p className="mb-4" style={{ maxWidth: '340px', lineHeight: '1.7', fontSize: '1rem', color: 'var(--text-secondary)' }}>
              Architecting intelligent agentic workflows and premium web applications. Turning complex AI into seamless user experiences.
            </p>
            <div className="d-flex gap-3">
              <a href="https://github.com/Meetvaghela-code" target="_blank" rel="noreferrer" className="footer-icon-link" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/vaghelameet" target="_blank" rel="noreferrer" className="footer-icon-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:meetv8540@gmail.com" className="footer-icon-link" aria-label="Email">
                <Envelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2 offset-lg-1">
            <h6 className="mb-4 text-uppercase fw-bold" style={{ fontSize: '0.85rem', letterSpacing: '2px', color: 'var(--text-muted)' }}>Navigate</h6>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-decoration-none footer-link"
                    style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Location */}
          <div className="col-6 col-lg-3">
            <h6 className="mb-4 text-uppercase fw-bold" style={{ fontSize: '0.85rem', letterSpacing: '2px', color: 'var(--text-muted)' }}>Status</h6>
            <div className="d-flex flex-column gap-3" style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
              <div className="d-flex align-items-center gap-3">
                <span style={{ color: 'var(--accent-color)' }}>📍</span> Vadodara, India
              </div>
              <div className="d-flex align-items-center gap-3">
                <span style={{ color: 'var(--accent-color)' }}>🎓</span> B.Tech (2026)
              </div>
            </div>
          </div>
        </div>

        {/* Huge Typography Background / Brand */}
        <div className="text-center mt-3 mb-2 position-relative">
          <h1 className="fw-bold m-0 footer-massive-text" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', opacity: 0.03, fontSize: 'clamp(2.5rem, 9vw, 8rem)', letterSpacing: '-0.02em', userSelect: 'none' }}>
            MEET VAGHELA
          </h1>
        </div>

        {/* Divider */}
        <hr className="mb-4 mt-0" style={{ opacity: 0.1, borderColor: 'var(--text-primary)' }} />

        {/* Copyright & Scroll Top */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="text-center text-md-start">
            <p className="mb-0 fw-bold" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              &copy; {new Date().getFullYear()} // Crafted By Meet.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="btn p-0 d-flex align-items-center justify-content-center sketch-border footer-scroll-btn"
            style={{
              width: '45px',
              height: '45px',
              border: '2px solid var(--border-color)',
              backgroundColor: 'transparent',
              color: 'var(--text-primary)'
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Extra padding to prevent floating dock from covering footer content */}
        <div style={{ height: '80px' }}></div>
      </div>

      <style>{`
        .footer-link {
          transition: all 0.2s ease;
          position: relative;
          display: inline-block;
          font-family: var(--font-sans);
        }
        .footer-link:hover {
          color: var(--text-primary) !important;
          transform: translateX(8px);
        }
        .footer-link::before {
          content: '→';
          position: absolute;
          left: -20px;
          opacity: 0;
          color: var(--accent-color);
          transition: all 0.2s ease;
          font-weight: bold;
        }
        .footer-link:hover::before {
          opacity: 1;
          left: -22px;
        }
        
        .footer-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .footer-icon-link:hover {
          background: var(--accent-color);
          color: #fff;
          border-color: var(--accent-color);
          transform: translateY(-5px) rotate(8deg);
          box-shadow: 0 10px 20px rgba(218,119,86,0.3);
        }
        
        .pulse-indicator {
          width: 10px;
          height: 10px;
          background-color: #27c93f;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(39, 201, 63, 0.7);
          animation: pulse-green 2s infinite;
        }
        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(39, 201, 63, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(39, 201, 63, 0); }
          100% { box-shadow: 0 0 0 0 rgba(39, 201, 63, 0); }
        }

        .sketch-border {
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }
        .footer-scroll-btn:hover {
          border-color: var(--accent-color) !important;
          color: var(--accent-color) !important;
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
      `}</style>
    </footer>
  );
};

export default Footer;