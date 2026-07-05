import React, { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  SvgFilters,
  PythonLogoSketch,
  NeuralNetworkSketch,
  DatabaseSketch,
  BlueprintGrid,
  BlueprintNodes,
  SignatureSketch
} from './LoadingScreenSVGs';
import './LoadingScreen.css';

const storySequence = [
  { steps: ["Started with curiosity."], icon: null, delay: 0 },
  { steps: ["Learned Pytjo", -2, "hon."], icon: 'python', delay: 1000 },
  { steps: ["Built Machine Learning models."], icon: 'nn', delay: 2000 },
  { steps: ["Discovered Generative AI."], icon: null, delay: 3000 },
  { steps: ["Explored LangChain."], icon: 'db', delay: 4000 },
  { steps: ["Mastered LangGraph & CrewAI."], icon: null, delay: 5000 },
  { steps: ["Built RAG Systems."], icon: null, delay: 6000 },
  { steps: ["Engineering Intelligence...", -3, " one idea at a time."], icon: null, delay: 7200 }
];

export default function LoadingScreen({ onComplete }) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  const [stage, setStage] = useState('opening'); // opening -> orchestrate -> done
  const [visibleLines, setVisibleLines] = useState([]);
  const [showBlueprints, setShowBlueprints] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showSignature, setShowSignature] = useState(false);

  // Responsive Check
  useEffect(() => {
    const checkMobile = () => {
      const match = window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      setIsMobile(match);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const finishLoading = useCallback(() => {
    setStage('done');
    setTimeout(() => {
      onComplete();
    }, 1200); // Wait for transition
  }, [onComplete]);

  // Skip functionality
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') finishLoading();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [finishLoading]);

  // Organic Orchestrator
  useEffect(() => {
    if (prefersReducedMotion) {
      setTimeout(finishLoading, 2000);
      return;
    }

    let isMounted = true;
    let timeouts = [];
    const schedule = (fn, delay) => {
      const t = setTimeout(() => { if (isMounted) fn(); }, delay);
      timeouts.push(t);
    };

    // 1. Clear opening title
    schedule(() => setStage('orchestrate'), 2000);

    // 2. Start overlapping async drawings
    schedule(() => setShowBlueprints(true), 2500);
    schedule(() => setShowNotes(true), 4000);
    schedule(() => setShowSignature(true), 7500);

    // 3. Queue typing lines
    let baseDelay = 2000;
    storySequence.forEach((line) => {
      schedule(() => {
        setVisibleLines(prev => [...prev, line]);
      }, baseDelay + line.delay);
    });

    // 4. Finish sequence smoothly
    const totalDuration = baseDelay + 9500;
    schedule(() => {
      if (document.readyState === 'complete') {
        finishLoading();
      } else {
        window.addEventListener('load', finishLoading);
      }
    }, totalDuration);

    return () => {
      isMounted = false;
      timeouts.forEach(clearTimeout);
      window.removeEventListener('load', finishLoading);
    };
  }, [prefersReducedMotion, finishLoading]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
    exit: {
      scale: 1.5,
      opacity: 0,
      filter: 'blur(15px)',
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const svgDrawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  const getIcon = (type) => {
    const props = {
      svgProps: { className: isMobile ? "sketch-icon-mobile" : "sketch-icon" },
      pathProps: {
        variants: svgDrawVariants,
        initial: "hidden",
        animate: "visible"
      }
    };
    switch (type) {
      case 'python': return <PythonLogoSketch {...props} />;
      case 'nn': return <NeuralNetworkSketch {...props} />;
      case 'db': return <DatabaseSketch {...props} />;
      default: return null;
    }
  };

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          className="loading-screen-container claude-bg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={finishLoading}
        >
          <div className="grain-overlay" />
          {!isMobile && <SvgFilters />}

          {/* Particle Dust for Desktop */}
          {!isMobile && <PencilDustOverlay />}

          <motion.div
            className="cinematic-camera"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 0.5, -0.5, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {/* Background Blueprints Asynchronously drawn */}
            <motion.div
              className="blueprint-layer"
              initial={{ opacity: 0 }}
              animate={{ opacity: showBlueprints ? (isMobile ? 0.3 : 0.6) : 0 }}
              transition={{ duration: 3 }}
            >
              <BlueprintGrid opacity={isMobile ? 0.05 : 0.1} />
              <BlueprintNodes
                svgProps={{ style: { position: 'absolute', top: '5%', right: '5%', opacity: isMobile ? 0.1 : 0.2 } }}
                pathProps={{ variants: svgDrawVariants, initial: "hidden", animate: showBlueprints ? "visible" : "hidden" }}
              />
            </motion.div>

            {/* Asynchronous Handwritten Notes */}
            <AnimatePresence>
              {showNotes && (
                <>
                  <motion.div
                    className={`margin-note top-right ${isMobile ? 'margin-note-mobile' : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isMobile ? 0.4 : 0.6, scale: 1 }}
                    transition={{ duration: 1.5 }}
                  >
                    v2.0 Architecture
                  </motion.div>
                  <motion.div
                    className={`margin-note bottom-left ${isMobile ? 'margin-note-mobile' : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isMobile ? 0.4 : 0.6, scale: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  >
                    RAG Integration
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            <div className="content-wrapper">
              <AnimatePresence mode="wait">
                {stage === 'opening' && (
                  <motion.div
                    key="opening"
                    className="opening-title font-serif"
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(5px)' }}
                    transition={{ duration: 1 }}
                  >
                    Every engineer has an origin.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Scrolling History Container */}
              <div className="story-container">
                <AnimatePresence>
                  {visibleLines.map((line, i) => (
                    <motion.div
                      key={i}
                      className={`story-line ${i === visibleLines.length - 1 ? 'active-line' : 'history-line'}`}
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      layout // smoothly handles shifting when new items arrive
                    >
                      <span className="terminal-prefix">&gt; </span>
                      <OrganicTypewriter steps={line.steps} speed={isMobile ? 35 : 40} />
                      {line.icon && <div className="icon-wrapper">{getIcon(line.icon)}</div>}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Signature Overlay at bottom */}
              <AnimatePresence>
                {showSignature && (
                  <motion.div
                    className="signature-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <SignatureSketch
                      svgProps={{ className: "signature-svg" }}
                      pathProps={{
                        variants: {
                          hidden: { pathLength: 0 },
                          visible: { pathLength: 1, transition: { duration: 2.5, ease: [0.42, 0, 0.58, 1] } }
                        },
                        initial: "hidden",
                        animate: "visible"
                      }}
                    />
                    <motion.div
                      className="signature-title tracked-sub"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 1 }}
                    >
                      AI ENGINEER
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="skip-hint">Press ESC to skip</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Organic Typewriter supporting "mistake & correct"
// steps: array of strings (to type) or negative numbers (to backspace)
const OrganicTypewriter = ({ steps, speed = 40 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentText = '';
    let stepIndex = 0;
    let charIndex = 0;
    let isMounted = true;

    const processNext = () => {
      if (!isMounted) return;
      if (stepIndex >= steps.length) return;

      const currentStep = steps[stepIndex];

      // If it's a string, type it
      if (typeof currentStep === 'string') {
        if (charIndex < currentStep.length) {
          currentText += currentStep.charAt(charIndex);
          setDisplayedText(currentText);
          charIndex++;

          let delay = speed + (Math.random() * 30);
          // Pause slightly on punctuation
          if (currentText.slice(-1) === '.' || currentText.slice(-1) === ',') delay += 150;

          setTimeout(processNext, delay);
        } else {
          // Finished typing this string step, move to next
          stepIndex++;
          charIndex = 0;
          setTimeout(processNext, 200); // Natural pause between chunks
        }
      }
      // If it's a negative number, backspace
      else if (typeof currentStep === 'number' && currentStep < 0) {
        if (charIndex < Math.abs(currentStep)) {
          currentText = currentText.slice(0, -1);
          setDisplayedText(currentText);
          charIndex++;
          setTimeout(processNext, speed * 1.5); // Backspacing is often slightly slower/deliberate
        } else {
          // Finished backspacing, move to next
          stepIndex++;
          charIndex = 0;
          setTimeout(processNext, 150);
        }
      }
    };

    setTimeout(processNext, 100);
    return () => { isMounted = false; };
  }, [steps, speed]);

  return <span>{displayedText}<span className="cursor">|</span></span>;
};

// Lightweight CSS Particle System for Pencil Dust
const PencilDustOverlay = () => {
  // Generate a few random particles that float via CSS
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    delay: Math.random() * 4 + 's',
    size: Math.random() * 2 + 1 + 'px'
  }));

  return (
    <div className="pencil-dust-container">
      {particles.map(p => (
        <div
          key={p.id}
          className="pencil-dust"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay
          }}
        />
      ))}
    </div>
  );
};
