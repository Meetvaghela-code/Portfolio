import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { SvgFilters } from './LoadingScreenSVGs';
import './Roadmap.css';

const roadmapData = [
  {
    id: 1,
    title: "Foundations & Architecture",
    subtitle: "Python, SQL, Git, Docker, FastAPI",
    description: "The bedrock of reliable AI systems. Building robust, containerized backends and designing scalable database architectures before touching any model.",
    tech: ["Python", "SQL", "Docker", "FastAPI", "Git"],
    projects: "Applied across all projects."
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    subtitle: "Predictive Modeling, Computer Vision",
    description: "Training predictive models, evaluating loss metrics, and deploying real-time computer vision pipelines for gesture tracking.",
    tech: ["Scikit-learn", "OpenCV", "MediaPipe", "TensorFlow"],
    projects: "Healthcare AI, Gesture Recognizer"
  },
  {
    id: 3,
    title: "LLM Engineering & RAG",
    subtitle: "Prompt Engineering, Vector DBs, Semantic Search",
    description: "Fusing external knowledge bases with Large Language Models. Building self-correcting retrieval systems and optimizing embeddings.",
    tech: ["Pinecone", "FAISS", "LangChain", "Gemini"],
    projects: "Adaptive RAG, YouTube RAG Chatbot"
  },
  {
    id: 4,
    title: "Agentic Systems",
    subtitle: "Multi-Agent Routing, MCP, CrewAI",
    description: "Moving beyond static RAG to autonomous execution. Building systems where agents can plan, use tools, and collaborate securely.",
    tech: ["LangGraph", "CrewAI", "MCP", "OpenAI"],
    projects: "Apex-Agent (Autonomous Framework)"
  },
  {
    id: 5,
    title: "Production & Automation",
    subtitle: "n8n, API Deployments, Observability",
    description: "Taking agentic prototypes to production. Orchestrating complex automation workflows and integrating AI directly into business logic.",
    tech: ["n8n", "Webhooks", "Flask", "Render"],
    projects: "McKH Technologies (AI/ML Intern)"
  }
];

const RoadmapNode = ({ node, index, activeNode, setActiveNode }) => {
  const isActive = activeNode === node.id;
  
  return (
    <div className="roadmap-node-container">
      <motion.div 
        className={`system-node ${isActive ? 'active' : ''}`}
        onClick={() => setActiveNode(isActive ? null : node.id)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="node-number">{node.id}</div>
        <h4 className="node-title">{node.title}</h4>
        <div className="node-subtitle">{node.subtitle}</div>
        
        {/* Hand-drawn UI Sketch Decoration */}
        {index % 2 === 0 ? (
          <svg className="node-sketch sketch-top-right" width="40" height="40" viewBox="0 0 100 100">
            <path d="M10,90 Q50,10 90,90" fill="none" stroke="var(--text-secondary)" strokeWidth="3" filter="url(#pencil-texture)" />
            <path d="M75,90 L90,90 L85,75" fill="none" stroke="var(--text-secondary)" strokeWidth="3" filter="url(#pencil-texture)" />
          </svg>
        ) : (
          <svg className="node-sketch sketch-bottom-left" width="40" height="40" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="var(--text-secondary)" strokeWidth="3" filter="url(#pencil-texture)" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="var(--text-secondary)" strokeWidth="3" filter="url(#pencil-texture)" />
          </svg>
        )}

        <AnimatePresence>
          {isActive && (
            <motion.div 
              className="sticky-note-wrapper"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="sticky-note" onClick={(e) => e.stopPropagation()}>
                <div className="sticky-tape"></div>
                <div className="note-heading">{node.title}</div>
                <div className="note-body">{node.description}</div>
                
                <div className="note-tech-list">
                  {node.tech.map(t => (
                    <span key={t} className="note-tech-tag">{t}</span>
                  ))}
                </div>
                
                <div className="note-projects">
                  Ref: {node.projects}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Desktop Connector */}
      {index < 4 && (
        <svg className="d-none d-md-block node-svg-connector" preserveAspectRatio="none" viewBox="0 0 100 100">
          <motion.path 
            d={index % 2 === 0 
               ? "M 0 0 C 0 50, 100 50, 100 100" 
               : "M 100 0 C 100 50, 0 50, 0 100"} 
            fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeDasharray="6 6"
            filter="url(#pencil-texture)"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1 }}
          />
        </svg>
      )}

      {/* Mobile Connector */}
      {index < 4 && (
        <svg className="d-md-none node-svg-connector-mobile" preserveAspectRatio="none" viewBox="0 0 100 100">
           <motion.line x1="50" y1="0" x2="50" y2="100" fill="none" stroke="var(--accent-color)" strokeWidth="4" strokeDasharray="6 6" filter="url(#pencil-texture)" 
           initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1 }} />
        </svg>
      )}
    </div>
  );
};

export default function Roadmap() {
  const [activeNode, setActiveNode] = useState(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section className="roadmap-section py-5" ref={containerRef}>
      <SvgFilters />
      
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h3 className="fw-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Systems Architecture</h3>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            The lifecycle of modern AI engineering. From robust data fundamentals to orchestrating fully autonomous, multi-agent systems.
          </p>
        </motion.div>

        <div className="roadmap-container position-relative">

          {roadmapData.map((node, index) => (
            <RoadmapNode 
              key={node.id} 
              node={node} 
              index={index} 
              activeNode={activeNode} 
              setActiveNode={setActiveNode} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
