import React from 'react';
import { NavLink } from 'react-router-dom';

// --- Inline SVG Icons ---
const Github = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const Linkedin = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
  </svg>
);

const Envelope = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
  </svg>
);

const ArrowUp = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto apple-footer border-top border-light position-relative overflow-hidden">
      <div className="container py-4" style={{ maxWidth: '1000px' }}>
        
        {/* Main Footer Content */}
        <div className="row gy-3 justify-content-between mb-3">
          
          {/* Brand Column */}
          <div className="col-md-4">
            <h6 className="fw-bold text-dark mb-2">Meet Vaghela<span style={{ color: '#0071e3' }}>.</span></h6>
            <p className="small text-secondary mb-0" style={{ maxWidth: '280px', lineHeight: '1.5', fontSize: '0.85rem' }}>
              Building intelligent web applications and AI solutions with a focus on design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold text-uppercase text-secondary mb-2" style={{ fontSize: '0.7rem', letterSpacing: '0.05em' }}>Navigate</h6>
            <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-decoration-none small text-muted nav-hover"
                    style={{ fontSize: '0.85rem' }}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold text-uppercase text-secondary mb-2" style={{ fontSize: '0.7rem', letterSpacing: '0.05em' }}>Connect</h6>
            <div className="d-flex gap-3">
              <a href="https://github.com/Meetvaghela-code" target="_blank" rel="noreferrer" className="text-secondary icon-hover" aria-label="GitHub">
                <Github />
              </a>
              <a href="https://linkedin.com/in/vaghelameet" target="_blank" rel="noreferrer" className="text-secondary icon-hover" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="mailto:meetv8540@gmail.com" className="text-secondary icon-hover" aria-label="Email">
                <Envelope />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-3" style={{ opacity: 0.08 }} />

        {/* Copyright & Scroll Top */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div className="text-center text-md-start">
            <p className="text-secondary mb-0" style={{ fontSize: '0.75rem' }}>
              &copy; {new Date().getFullYear()} Meet Vaghela. All rights reserved.
            </p>
          </div>

          <button 
            onClick={scrollToTop} 
            className="btn btn-light rounded-circle p-0 shadow-sm d-flex align-items-center justify-content-center hover-lift"
            style={{ width: '32px', height: '32px', border: '1px solid rgba(0,0,0,0.05)' }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .apple-footer {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .nav-hover {
          transition: color 0.2s ease;
        }
        .nav-hover:hover {
          color: #0071e3 !important;
        }
        .icon-hover {
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.2s;
        }
        .icon-hover:hover {
          transform: translateY(-2px);
          color: #1d1d1f !important;
        }
        .hover-lift {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.08) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;