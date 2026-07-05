import React from 'react';

// Common sketch stroke properties to mimic pencil
const sketchStroke = {
  stroke: 'var(--text-primary)',
  strokeWidth: 2,
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  filter: 'url(#pencil-texture)',
  opacity: 0.85
};

// SVG Filters for paper & pencil texture
export const SvgFilters = () => (
  <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
    <defs>
      {/* Pencil Texture Filter */}
      <filter id="pencil-texture" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" result="displaced" />
        <feGaussianBlur in="displaced" stdDeviation="0.4" result="blurred" />
        <feMerge>
          <feMergeNode in="blurred" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Ink Smudge Filter */}
      <filter id="ink-smudge" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
        <feComponentTransfer in="blur" result="smudge">
          <feFuncA type="linear" slope="0.5" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="smudge" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

// Custom imperfect paths for sketches
// These accept motion.path props if passed
export const PythonLogoSketch = (props) => (
  <svg viewBox="0 0 100 100" width="80" height="80" {...props.svgProps}>
    <path d="M48 10 C30 11, 25 20, 25 35 C25 45, 30 50, 48 50 C60 50, 65 45, 65 35" {...sketchStroke} {...props.pathProps} />
    <path d="M52 90 C70 89, 75 80, 75 65 C75 55, 70 50, 52 50 C40 50, 35 55, 35 65" {...sketchStroke} {...props.pathProps} />
    <circle cx="40" cy="25" r="4" {...sketchStroke} fill="var(--text-primary)" {...props.pathProps} />
    <circle cx="60" cy="75" r="4" {...sketchStroke} fill="var(--text-primary)" {...props.pathProps} />
  </svg>
);

export const NeuralNetworkSketch = (props) => (
  <svg viewBox="0 0 200 150" width="150" height="100" {...props.svgProps}>
    {/* Nodes */}
    <circle cx="40" cy="40" r="12" {...sketchStroke} {...props.pathProps} />
    <circle cx="40" cy="110" r="14" {...sketchStroke} {...props.pathProps} />
    <circle cx="100" cy="20" r="10" {...sketchStroke} {...props.pathProps} />
    <circle cx="100" cy="75" r="12" {...sketchStroke} {...props.pathProps} />
    <circle cx="100" cy="130" r="11" {...sketchStroke} {...props.pathProps} />
    <circle cx="160" cy="40" r="13" {...sketchStroke} {...props.pathProps} />
    <circle cx="160" cy="110" r="12" {...sketchStroke} {...props.pathProps} />

    {/* Messy Connections */}
    <path d="M52 40 L90 20 M52 40 L88 75 M52 40 L90 130" {...sketchStroke} opacity={0.6} strokeWidth={1.5} {...props.pathProps} />
    <path d="M54 110 L90 20 M54 110 L88 75 M54 110 L90 130" {...sketchStroke} opacity={0.6} strokeWidth={1.5} {...props.pathProps} />
    <path d="M112 20 L148 40 M112 20 L148 110" {...sketchStroke} opacity={0.6} strokeWidth={1.5} {...props.pathProps} />
    <path d="M112 75 L148 40 M112 75 L148 110" {...sketchStroke} opacity={0.6} strokeWidth={1.5} {...props.pathProps} />
    <path d="M112 130 L148 40 M112 130 L148 110" {...sketchStroke} opacity={0.6} strokeWidth={1.5} {...props.pathProps} />
  </svg>
);

export const DatabaseSketch = (props) => (
  <svg viewBox="0 0 100 120" width="80" height="100" {...props.svgProps}>
    <ellipse cx="50" cy="25" rx="35" ry="12" {...sketchStroke} {...props.pathProps} />
    <ellipse cx="50" cy="55" rx="35" ry="12" {...sketchStroke} opacity={0.5} strokeDasharray="4 4" {...props.pathProps} />
    <ellipse cx="50" cy="85" rx="35" ry="12" {...sketchStroke} {...props.pathProps} />
    <path d="M15 25 L15 85 M85 25 L85 85" {...sketchStroke} {...props.pathProps} />
  </svg>
);

export const BlueprintGrid = (props) => (
  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.1, pointerEvents: 'none', zIndex: 0 }} {...props}>
    <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--accent-color)" strokeWidth="0.5" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
  </svg>
);

export const BlueprintNodes = (props) => (
  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.15, pointerEvents: 'none', zIndex: 0 }} {...props.svgProps}>
    <path d="M 100 100 h 150 v 50 h -150 Z" {...sketchStroke} stroke="var(--accent-color)" {...props.pathProps} />
    <path d="M 250 125 h 100" {...sketchStroke} stroke="var(--accent-color)" {...props.pathProps} />
    <path d="M 350 75 h 120 v 100 h -120 Z" {...sketchStroke} stroke="var(--accent-color)" {...props.pathProps} />
    <path d="M 470 125 h 80" {...sketchStroke} stroke="var(--accent-color)" {...props.pathProps} />
    <circle cx="600" cy="125" r="50" {...sketchStroke} stroke="var(--accent-color)" {...props.pathProps} />
  </svg>
)

export const SignatureSketch = (props) => (
  <svg viewBox="0 0 400 150" width="300" height="120" {...props.svgProps}>
    <path d="M50 80 C 60 50, 70 30, 80 80 C 90 120, 100 60, 110 90 C 120 100, 140 70, 160 85 C 180 100, 160 120, 150 110 C 140 100, 170 50, 190 70 C 210 90, 200 110, 220 100 C 240 90, 260 70, 280 80 C 300 90, 290 110, 320 95" 
      fill="none" 
      stroke="var(--text-primary)" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      filter="url(#ink-smudge)"
      {...props.pathProps}
    />
    <path d="M150 100 L 330 100" stroke="var(--text-primary)" strokeWidth="1.5" opacity="0.4" strokeDasharray="5 5" />
  </svg>
);
