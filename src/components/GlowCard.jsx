import React, { useRef, useState, useCallback } from 'react';

/**
 * GlowCard — A card with a radial glow that follows the mouse cursor.
 * Creates a premium, interactive "spotlight" effect on hover.
 */
const GlowCard = ({ 
  children, 
  className = '', 
  style = {}, 
  glowColor = 'rgba(218, 119, 86, 0.08)',
  glowSize = 350,
  onClick,
  as: Component = 'div'
}) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <Component
      ref={cardRef}
      className={`glow-card ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Mouse-following glow */}
      <div
        className="glow-card-spotlight"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.4s ease',
          background: `radial-gradient(${glowSize}px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`,
        }}
      />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </Component>
  );
};

export default GlowCard;
