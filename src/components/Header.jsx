import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// Inline SVG Icons
const ListIcon = ({ size = 26, color = "currentColor" }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
);

const XIcon = ({ size = 26, color = "currentColor" }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
);

const SunIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 16 16">
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
  </svg>
);

const MoonIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 16 16">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
  </svg>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track visibility state
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  
  // Theme State - Initialize from localStorage or System Pref
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  const navListRef = useRef(null);
  const lastScrollY = useRef(0); // Track last scroll position
  const location = useLocation();

  // Apply Theme Effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Scroll Effect for Visibility & Style
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction and toggle visibility
      // Hide if scrolling down more than 70px, show if scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 70) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock Body Scroll when Menu is Open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Handle Sliding Indicator and Menu Close
  useEffect(() => {
    setIsOpen(false);

    // Calculate position of the active link
    if (navListRef.current) {
      const activeLink = navListRef.current.querySelector('.active');
      if (activeLink) {
        setIndicatorStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
          opacity: 1
        });
      } else {
        setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
      }
    }
  }, [location.pathname]);

  // Update slider on resize
  useEffect(() => {
    const handleResize = () => {
      if (navListRef.current) {
        const activeLink = navListRef.current.querySelector('.active');
        if (activeLink) {
          setIndicatorStyle({
            left: activeLink.offsetLeft,
            width: activeLink.offsetWidth,
            opacity: 1
          });
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <>
      <style>
        {`
          /* Mobile Menu Overlay Animation */
          .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: var(--bg-color, #ffffff); /* Adapts to theme */
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            z-index: 1040;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .mobile-menu-overlay.open {
            opacity: 1;
            pointer-events: all;
          }
          
          /* Staggered Text Animation */
          .mobile-link {
            font-size: 2rem;
            font-weight: 600;
            color: var(--text-primary, #1d1d1f);
            text-decoration: none;
            margin: 1rem 0;
            transform: translateY(20px);
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .mobile-menu-overlay.open .mobile-link {
            transform: translateY(0);
            opacity: 1;
          }
          
          /* Sliding Glass Pill */
          .nav-slider-bg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            height: 36px;
            background: rgba(120, 120, 120, 0.1);
            border-radius: 99px;
            z-index: 0;
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            pointer-events: none;
          }

          /* Link Styles */
          .nav-pill-link {
            position: relative;
            z-index: 1;
            padding: 0.5rem 1.2rem !important;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text-secondary, #6e6e73) !important;
            transition: color 0.3s ease;
          }
          
          .nav-pill-link:hover {
            color: var(--text-primary, #1d1d1f) !important;
          }
          
          .nav-pill-link.active {
            color: var(--text-primary, #1d1d1f) !important;
            font-weight: 600;
          }

          /* Theme Toggle Animation */
          .theme-toggle-btn svg {
            transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
          }
          .theme-toggle-btn:hover svg {
            transform: rotate(45deg);
          }
          .theme-toggle-btn:active svg {
            transform: scale(0.9);
          }
        `}
      </style>

      <nav 
        className={`navbar navbar-expand-lg fixed-top apple-navbar ${scrolled ? 'scrolled' : ''}`}
        style={{ 
          zIndex: 1050,
          transform: isVisible || isOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Logo with Profile Pic */}
          <NavLink 
            className="navbar-brand fw-bold d-flex align-items-center gap-2" 
            to="/" 
            style={{ color: 'var(--text-primary, #1d1d1f)', fontSize: '1.25rem', letterSpacing: '-0.5px', zIndex: 1060 }}
          >
            <img 
              src="/profile_me.jpg" 
              alt="Profile" 
              className="rounded-circle"
              style={{ width: '36px', height: '36px', objectFit: 'cover' }}
            />
            Meet Vaghela<span style={{ color: '#0071e3' }}>.</span>
          </NavLink>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="collapse navbar-collapse justify-content-center d-none d-lg-block">
            {/* Nav Container with Ref */}
            <ul className="navbar-nav position-relative align-items-center bg-light bg-opacity-10 rounded-pill px-1 py-1" ref={navListRef} style={{ backdropFilter: 'blur(10px)' }}>
              
              {/* The Sliding Glass Cover */}
              <div 
                className="nav-slider-bg"
                style={{ 
                  left: indicatorStyle.left, 
                  width: indicatorStyle.width,
                  opacity: indicatorStyle.opacity
                }}
              />

              {navLinks.map((item) => (
                <li className="nav-item" key={item.name}>
                  <NavLink 
                    className="nav-link nav-pill-link" 
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Actions */}
          <div className="d-flex align-items-center gap-2 gap-lg-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn rounded-circle p-2 d-flex align-items-center justify-content-center theme-toggle-btn border-0"
              style={{ 
                width: '40px', 
                height: '40px', 
                color: 'var(--text-primary, #1d1d1f)',
                backgroundColor: 'rgba(120,120,120,0.1)',
                zIndex: 1060
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
            </button>

            {/* Desktop Contact Button */}
            <NavLink 
              to="/contact" 
              className="btn btn-sm rounded-pill px-4 py-2 d-none d-lg-block fw-medium"
              style={{ 
                backgroundColor: 'var(--text-primary, #1d1d1f)', 
                color: 'var(--bg-color, white)', 
                fontSize: '0.85rem',
                border: 'none',
                transition: 'transform 0.2s',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Get in Touch
            </NavLink>

            {/* Mobile Toggle Button */}
            <button 
              className="d-lg-none border-0 p-0 bg-transparent" 
              type="button" 
              onClick={() => setIsOpen(!isOpen)}
              style={{ zIndex: 1060, color: 'var(--text-primary, #1d1d1f)' }}
            >
              {isOpen ? <XIcon size={26} /> : <ListIcon size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        {navLinks.map((item, index) => (
          <NavLink 
            key={item.name}
            to={item.path} 
            className="mobile-link"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {item.name}
          </NavLink>
        ))}
        <NavLink 
          to="/contact" 
          className="mobile-link mt-4"
          style={{ 
            color: '#0071e3', 
            transitionDelay: '200ms',
            fontSize: '1.5rem' 
          }}
        >
          Get in Touch
        </NavLink>
      </div>
    </>
  );
};

export default Header;