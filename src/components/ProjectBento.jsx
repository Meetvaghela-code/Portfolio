import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
  </svg>
);

const BoxArrowUpRight = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
  </svg>
);

export const PaperLiftCard = ({ 
  title, 
  description, 
  link, 
  tech, 
  status, 
  className = "", 
  children, // The underlying sketch SVG
  annotation, // Handwritten note
  isDark = true,
  onClick // Added onClick handler
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // If onClick is provided, it acts as a button, otherwise a link
  const Wrapper = onClick ? 'div' : 'a';
  const wrapperProps = onClick 
    ? { onClick, style: { cursor: 'pointer' } } 
    : { href: link, target: "_blank", rel: "noreferrer" };

  return (
    <Wrapper 
      {...wrapperProps}
      className={`text-decoration-none d-block h-100 position-relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: '1000px', ...wrapperProps.style }}
    >
      {/* 1. The Under-layer (Architecture Sketch) */}
      <div 
        className="position-absolute w-100 h-100 rounded-4 overflow-hidden d-flex align-items-center justify-content-center"
        style={{
          background: 'var(--bg-color)',
          border: '1px solid var(--border-color)',
          zIndex: 1
        }}
      >
        <div className="sketch-layer w-100 h-100 position-relative opacity-50" style={{ filter: 'url(#pencil-texture)' }}>
          {children}
        </div>
        
        {/* The Handwritten Annotation (revealed on hover) */}
        <motion.div 
          className="position-absolute bottom-0 end-0 p-4 text-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
          transition={{ delay: 0.1, type: 'spring' }}
          style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.4rem', color: 'var(--accent-color)' }}
        >
          {annotation}
          <div className="d-flex align-items-center justify-content-end gap-2 mt-2" style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>
            Open Project <ArrowRight size={14} />
          </div>
        </motion.div>
      </div>

      {/* 2. The Top Layer (The Paper Card) */}
      <motion.div
        className={`w-100 h-100 rounded-4 p-4 p-md-5 d-flex flex-column justify-content-between position-relative overflow-hidden`}
        style={{
          background: 'var(--card-bg)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-color)',
          boxShadow: isHovered ? '0 30px 60px -12px rgba(0,0,0,0.5)' : '4px 4px 0px rgba(0,0,0,0.2)',
          zIndex: 2,
          transformOrigin: 'bottom left'
        }}
        animate={{
          y: isHovered ? -40 : 0,
          rotateX: isHovered ? 4 : 0,
          rotateZ: isHovered ? -2 : 0,
          x: isHovered ? -10 : 0
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Badges */}
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div className="d-flex flex-wrap gap-2">
            {tech.map(t => (
              <span key={t} className="badge rounded-pill fw-normal" style={{ 
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem'
              }}>
                {t}
              </span>
            ))}
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="badge rounded-pill fw-bold" style={{ backgroundColor: 'var(--accent-color)', color: 'white', fontSize: '0.7rem' }}>
              {status}
            </span>
            <BoxArrowUpRight style={{ opacity: 0.5 }} />
          </div>
        </div>

        {/* Content */}
        <div className="mt-auto">
          <h3 className="fw-bold mb-3 display-6" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'inherit' }}>
            {title}
          </h3>
          <p className="mb-0" style={{ opacity: 0.8, fontSize: '1rem', lineHeight: '1.6', color: 'inherit' }}>
            {description}
          </p>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default function ProjectBento() {
  return (
    <div className="row g-4">
      {/* 1. Apex-Agent (12 col) */}
      <div className="col-12" style={{ minHeight: '380px' }}>
        <PaperLiftCard
          title="Apex-Agent"
          description="A Secure Multi-Modal Autonomous Framework bridging the gap between static LLMs and dynamic autonomous execution using MCP and LangGraph."
          link="https://github.com/Meetvaghela-code/Apex-Agent"
          tech={["LangGraph", "FastAPI", "MCP", "Pinecone"]}
          status="Flagship"
          annotation="Multi-agent routing node architecture!"
          isDark={true}
        >
          <svg viewBox="0 0 1000 300" width="100%" height="100%" preserveAspectRatio="none">
            {/* Agent Nodes Sketch */}
            <circle cx="200" cy="150" r="40" fill="none" stroke="var(--text-secondary)" strokeWidth="3" />
            <circle cx="500" cy="80" r="50" fill="none" stroke="var(--text-secondary)" strokeWidth="3" />
            <circle cx="500" cy="220" r="50" fill="none" stroke="var(--text-secondary)" strokeWidth="3" />
            <circle cx="800" cy="150" r="40" fill="none" stroke="var(--accent-color)" strokeWidth="4" />
            
            {/* Connecting lines */}
            <path d="M 240 150 Q 350 115 450 80" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M 240 150 Q 350 185 450 220" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M 550 80 Q 675 115 760 150" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M 550 220 Q 675 185 760 150" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5 5" />
            
            <text x="175" y="155" fontFamily="var(--font-mono)" fontSize="14" fill="var(--text-secondary)">USER</text>
            <text x="470" y="85" fontFamily="var(--font-mono)" fontSize="14" fill="var(--text-secondary)">PLANNER</text>
            <text x="475" y="225" fontFamily="var(--font-mono)" fontSize="14" fill="var(--text-secondary)">EXECUTOR</text>
            <text x="770" y="155" fontFamily="var(--font-mono)" fontSize="14" fill="var(--accent-color)">ACTION</text>
          </svg>
        </PaperLiftCard>
      </div>

      {/* 2. Adaptive RAG (6 col) */}
      <div className="col-lg-6" style={{ minHeight: '320px' }}>
        <PaperLiftCard
          title="Adaptive RAG System"
          description="Self-correcting retrieval system that intelligently routes queries between vector stores and web search for optimal accuracy."
          link="https://adaptive-rag-frontend.onrender.com/"
          tech={["LangChain", "FAISS", "Gemini"]}
          status="Live"
          annotation="Self-correcting pipeline"
          isDark={true}
        >
          <svg viewBox="0 0 600 300" width="100%" height="100%" preserveAspectRatio="none">
            {/* Retrieval Pipeline Sketch */}
            <rect x="50" y="100" width="100" height="100" rx="10" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
            <rect x="250" y="50" width="100" height="60" rx="10" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
            <rect x="250" y="190" width="100" height="60" rx="10" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
            <rect x="450" y="100" width="100" height="100" rx="10" fill="none" stroke="var(--accent-color)" strokeWidth="3" />
            
            <path d="M 150 150 L 250 80" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
            <path d="M 150 150 L 250 220" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
            <path d="M 350 80 L 450 150" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
            <path d="M 350 220 L 450 150" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
            
            <text x="80" y="155" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text-secondary)">QUERY</text>
            <text x="260" y="85" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text-secondary)">VECTOR DB</text>
            <text x="270" y="225" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text-secondary)">WEB SRCH</text>
            <text x="480" y="155" fontFamily="var(--font-mono)" fontSize="12" fill="var(--accent-color)">GENERATE</text>
          </svg>
        </PaperLiftCard>
      </div>

      {/* 3. Healthcare AI (6 col) */}
      <div className="col-lg-6" style={{ minHeight: '320px' }}>
        <PaperLiftCard
          title="Healthcare AI"
          description="Predict disease risks (Heart, Diabetes, Lung) using ML classifiers combined with a medical chatbot."
          link="https://github.com/Meetvaghela-code/HealthcareAi"
          tech={["Scikit-Learn", "Bootstrap", "ML"]}
          status="Research"
          annotation="Ensemble classifier model"
          isDark={false}
        >
          <svg viewBox="0 0 500 300" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
            {/* Medical Diagram Sketch */}
            <path d="M 50 150 L 150 150 L 170 100 L 210 200 L 250 80 L 290 220 L 320 150 L 450 150" fill="none" stroke="var(--accent-color)" strokeWidth="3" />
            <circle cx="250" cy="150" r="80" fill="none" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </PaperLiftCard>
      </div>
    </div>
  );
}
