import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useScrollProgress } from '../hooks/useInteractive';

// --- SVGs for Dock Icons ---
const HomeIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
    <path d="m8 3.293 6 6V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V9.293l6-6Z" />
  </svg>
);

const AboutIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
);

const ProjectsIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 1 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
  </svg>
);

const ResumeIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 1.5 13 5H9.5V1.5zM3 9h10v1H3V9zm0 2h10v1H3v-1zm0-4h4v1H3V7z" />
  </svg>
);

const ContactIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
  </svg>
);

const TerminalIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.244 8 1.166 5.83a.25.25 0 0 1 .184-.426h1.228a.25.25 0 0 1 .184.09l2.25 2.316a.25.25 0 0 1 0 .34L2.762 10.46a.25.25 0 0 1-.184.09H1.35a.25.25 0 0 1-.184-.426L3.244 8Zm2.978 2.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5Z" />
  </svg>
);

const SunIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
  </svg>
);

const Header = () => {
  const scrollProgress = useScrollProgress();
  const location = useLocation();

  // Theme State
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  // Apply Theme Effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const triggerTerminal = () => {
    window.dispatchEvent(new Event('toggle-terminal'));
  };

  const dockLinks = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'About', path: '/about', icon: AboutIcon },
    { name: 'Projects', path: '/projects', icon: ProjectsIcon },
    { name: 'Resume', path: '/resume', icon: ResumeIcon },
    { name: 'Contact', path: '/contact', icon: ContactIcon }
  ];

  return (
    <>
      <style>
        {`
          /* Top Slim Header */
          .apple-top-header {
            position: absolute;
            top: 24px;
            left: 0;
            width: 100%;
            z-index: 1000;
          }
          
          /* MacOS bottom Dock styling */
          .apple-dock-container {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1050;
            display: flex;
            align-items: center;
            padding: 8px 12px;
            background: rgba(253, 252, 250, 0.65);
            backdrop-filter: blur(20px) saturate(140%);
            -webkit-backdrop-filter: blur(20px) saturate(140%);
            border: 1px solid rgba(45, 43, 39, 0.08);
            border-radius: 24px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
            gap: 10px;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          }

          [data-theme='dark'] .apple-dock-container {
            background: rgba(35, 33, 28, 0.65);
            border-color: rgba(232, 228, 222, 0.08);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
          }

          .apple-dock-container:hover {
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.08);
            border-color: rgba(218, 119, 86, 0.15);
          }
          [data-theme='dark'] .apple-dock-container:hover {
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.35);
            border-color: rgba(218, 119, 86, 0.2);
          }

          /* Dock items */
          .dock-item-wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .dock-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            border-radius: 12px;
            color: var(--text-secondary);
            background: transparent;
            border: none;
            cursor: pointer;
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, color 0.2s ease;
          }

          .dock-item:hover {
            transform: scale(1.2) translateY(-6px);
            background-color: rgba(218, 119, 86, 0.08);
            color: var(--accent-color);
          }
          [data-theme='dark'] .dock-item:hover {
            background-color: rgba(218, 119, 86, 0.15);
          }

          /* Active dot indicator */
          .dock-active-dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: var(--accent-color);
            position: absolute;
            bottom: -5px;
            transition: all 0.3s ease;
          }

          /* Tooltip styling */
          .dock-tooltip {
            position: absolute;
            top: -45px;
            background: rgba(45, 43, 39, 0.9);
            color: #E8E4DE;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 0.7rem;
            font-weight: 550;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease, transform 0.2s ease;
            transform: translateY(5px);
            white-space: nowrap;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          [data-theme='dark'] .dock-tooltip {
            background: rgba(232, 228, 222, 0.95);
            color: #1A1915;
          }

          .dock-item-wrapper:hover .dock-tooltip {
            opacity: 1;
            transform: translateY(0);
          }

          /* Divider in dock */
          .dock-divider {
            width: 1px;
            height: 28px;
            background-color: var(--border-color);
            margin: 0 4px;
          }
        `}
      </style>

      {/* Global Scroll Progress Bar at the top of viewport */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress * 100}%`,
          background: 'linear-gradient(90deg, var(--accent-color, #DA7756), var(--accent-hover, #C4613F))',
          transition: 'width 0.05s linear',
          zIndex: 1100,
          borderRadius: '0 1px 1px 0',
        }}
      />

      {/* Minimal Top Brand Bar */}
      <header className="apple-top-header">
        <div className="container d-flex justify-content-between align-items-center" style={{ maxWidth: '1000px' }}>
          <NavLink
            className="navbar-brand fw-bold d-flex align-items-center gap-2"
            to="/"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              letterSpacing: '-0.02em',
              textDecoration: 'none'
            }}
          >
            Meet Vaghela<span style={{ color: 'var(--accent-color, #DA7756)' }}>.</span>
          </NavLink>

          {/* <div className="d-flex align-items-center gap-2 px-3 py-1.5 rounded-pill border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', fontSize: '0.75rem', fontWeight: 550 }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#27c93f', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #27c93f' }}></span>
            <span style={{ color: 'var(--text-secondary)' }}>Open for AI/ML Roles</span>
          </div> */}
        </div>
      </header>

      {/* Floating Bottom MacOS App Dock */}
      <nav className="apple-dock-container">
        {dockLinks.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div className="dock-item-wrapper" key={item.name}>
              <div className="dock-tooltip">{item.name}</div>
              <NavLink
                to={item.path}
                className={`dock-item ${isActive ? 'active' : ''}`}
                style={{ color: isActive ? 'var(--accent-color)' : 'var(--text-secondary)' }}
              >
                <item.icon />
              </NavLink>
              {isActive && <div className="dock-active-dot" />}
            </div>
          );
        })}

        {/* Divider */}
        <div className="dock-divider" />

        {/* Terminal Toggle Button */}
        <div className="dock-item-wrapper">
          <div className="dock-tooltip">Terminal Chat</div>
          <button
            onClick={triggerTerminal}
            className="dock-item"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle terminal chat"
          >
            <TerminalIcon />
          </button>
        </div>

        {/* Theme Toggle Button */}
        <div className="dock-item-wrapper">
          <div className="dock-tooltip">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</div>
          <button
            onClick={toggleTheme}
            className="dock-item"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;