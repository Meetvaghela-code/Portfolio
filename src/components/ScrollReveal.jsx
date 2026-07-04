import React from 'react';
import { useScrollReveal } from '../hooks/useInteractive';

/**
 * ScrollReveal — Wrapper component that animates children into view on scroll.
 * Supports multiple animation directions and staggered delays.
 */
const ScrollReveal = ({ 
  children, 
  direction = 'up',  // 'up' | 'down' | 'left' | 'right' | 'scale'
  delay = 0,         // ms
  duration = 700,    // ms
  distance = 40,     // px
  className = '',
  style = {},
  threshold = 0.1,
  as: Component = 'div'
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold });

  const transforms = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
    scale: `scale(0.92)`,
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) translateX(0) scale(1)' : transforms[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.8, 0.25, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.8, 0.25, 1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
