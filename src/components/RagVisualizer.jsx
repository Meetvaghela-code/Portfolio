import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

// --- Inline SVG Icons ---
const Cpu = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16"><path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/></svg>
);
const Search = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
);
const Database = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16"><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0zm-8-3c0 1.66-2.01 3-4.5 3S0 9.66 0 8s2.01-3 4.5-3 4.5 1.34 4.5 3zM0 10c0 1.66 2.01 3 4.5 3s4.5-1.34 4.5-3V8.897C8.16 9.546 6.45 10 4.5 10S.84 9.546 0 8.897V10zm0 2.5c0 1.66 2.01 3 4.5 3s4.5-1.34 4.5-3v-1.103C8.16 12.046 6.45 12.5 4.5 12.5S.84 12.046 0 11.397v1.103z"/></svg>
);
const Play = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>
);

const RagVisualizer = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [logs, setLogs] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const prompts = [
    {
      text: "Who is Meet Vaghela and what are his core AI skills?",
      route: "vector",
      steps: [
        { id: 'user', label: 'User Query', desc: 'Analyzing query intent...' },
        { id: 'router', label: 'Query Router', desc: 'Routing query to Local Knowledge Base (FAISS).' },
        { id: 'vector', label: 'Vector DB (FAISS)', desc: 'Retrieving relevant context embeddings.' },
        { id: 'generator', label: 'Generator LLM', desc: 'Synthesizing final response...' },
        { id: 'output', label: 'Response Out', desc: 'Meet is an AI/ML Engineer specializing in LangChain, LangGraph, and RAG pipelines.' }
      ]
    },
    {
      text: "What are the latest benchmarks for Llama 3 models?",
      route: "search",
      steps: [
        { id: 'user', label: 'User Query', desc: 'Analyzing query intent...' },
        { id: 'router', label: 'Query Router', desc: 'Routing query to Web Search (real-time data needed).' },
        { id: 'search', label: 'Web Search API', desc: 'Fetching Tavily search API results.' },
        { id: 'generator', label: 'Generator LLM', desc: 'Filtering search context and formatting output...' },
        { id: 'output', label: 'Response Out', desc: 'Llama 3.3 70B shows a 15% increase in reasoning speed compared to previous architectures.' }
      ]
    }
  ];

  const handleStart = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setLogs([]);
    setActiveStep(null);

    const currentPrompt = prompts[selectedPrompt];
    let stepIndex = 0;

    const runStep = () => {
      if (stepIndex >= currentPrompt.steps.length) {
        setIsProcessing(false);
        return;
      }

      const step = currentPrompt.steps[stepIndex];
      setActiveStep(step.id);
      setLogs(prev => [...prev, `[${step.label.toUpperCase()}] ${step.desc}`]);
      
      stepIndex++;
      setTimeout(runStep, 1500); // 1.5s per node animation
    };

    runStep();
  };

  const currentPrompt = prompts[selectedPrompt];

  return (
    <div className="rag-visualizer-container position-relative p-4 p-md-5 mb-5 overflow-hidden">
      
      {/* Background Texture Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ filter: 'url(#pencil-texture)', pointerEvents: 'none', zIndex: 0 }}></div>
      
      {/* Handwritten Annotation */}
      <span className="position-absolute d-none d-md-block" style={{ top: '15px', right: '30px', fontFamily: 'var(--font-handwriting)', fontSize: '1.2rem', color: '#DA7756', transform: 'rotate(8deg)', zIndex: 10 }}>
        Architecture Flow
      </span>

      <div className="row g-4 align-items-center position-relative z-1">
        
        {/* Left Column: Control Panel & Terminal Logs */}
        <div className="col-lg-5">
          <h3 className="h4 fw-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Adaptive RAG Query Router</h3>
          <p className="small text-secondary mb-4">
            Select a sample query to trigger the routing workflow. Watch how the LangGraph router dynamically determines the best processing pipeline.
          </p>

          {/* Prompt Selector */}
          <div className="d-flex flex-column gap-3 mb-4">
            {prompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isProcessing) {
                    setSelectedPrompt(idx);
                    setActiveStep(null);
                    setLogs([]);
                  }
                }}
                disabled={isProcessing}
                className={`btn text-start p-3 ${selectedPrompt === idx ? 'prompt-btn-active' : 'prompt-btn-idle'}`}
              >
                <div className="d-flex align-items-center gap-2">
                  <span style={{ color: selectedPrompt === idx ? 'var(--accent-color)' : 'var(--text-muted)' }}>&gt;</span>
                  <span>{p.text}</span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleStart}
            disabled={isProcessing}
            className="btn rag-run-btn w-100 py-3 mb-4 d-flex align-items-center justify-content-center gap-2 fw-bold"
          >
            <Play size={14} /> Run Routing Workflow
          </button>

          {/* Real-time Agent Logs (Terminal Style) */}
          <div className="rag-terminal-box">
            {/* Terminal Header */}
            <div className="rag-terminal-header d-flex align-items-center justify-content-between px-3 py-2">
              <div className="d-flex align-items-center gap-2">
                <svg width="10" height="10" viewBox="0 0 100 100" className="sketch-dot sketch-dot-red"><path d="M 20 50 Q 50 10 80 50 Q 50 90 20 50" fill="#ff5f56" stroke="#cc3a32" strokeWidth="6" /></svg>
                <svg width="10" height="10" viewBox="0 0 100 100" className="sketch-dot sketch-dot-yellow"><circle cx="50" cy="50" r="35" fill="#ffbd2e" stroke="#c9921c" strokeWidth="6" strokeDasharray="50 10" /></svg>
                <svg width="10" height="10" viewBox="0 0 100 100" className="sketch-dot sketch-dot-green"><path d="M 50 15 L 85 85 L 15 85 Z" fill="#27c93f" stroke="#1da132" strokeWidth="6" strokeLinejoin="round" /></svg>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>agent_console.exe</div>
            </div>
            
            {/* Terminal Body */}
            <div className="rag-terminal-body p-3">
              {logs.length === 0 ? (
                <span style={{ color: 'var(--text-muted)' }}>agent@meet:~$ Console idle. Click Run to execute...</span>
              ) : (
                logs.map((log, i) => (
                  <div key={i} className="mb-2" style={{ lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--accent-color)' }}>&gt;</span> {log}
                  </div>
                ))
              )}
              {isProcessing && (
                <div className="mt-2" style={{ color: 'var(--text-muted)', fontStyle: 'italic', animation: 'pulse 1.5s infinite' }}>
                  Processing step...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Diagram Flow */}
        <div className="col-lg-7 text-center pt-4 pt-lg-0">
          <div className="d-flex flex-column align-items-center py-3">
            
            {/* 1. User Query */}
            <div className={`flow-node ${activeStep === 'user' ? 'active' : ''}`}>
              <span>❓</span> {currentPrompt.steps[0].label}
            </div>

            <div className={`flow-line-vertical ${['router', 'vector', 'search', 'generator', 'output'].includes(activeStep) ? 'active' : ''}`} />

            {/* 2. Query Router */}
            <div className={`flow-node ${activeStep === 'router' ? 'active' : ''}`}>
              <Cpu size={16} /> {currentPrompt.steps[1].label}
            </div>

            {/* Parallel routing options (Vector DB vs Web Search) */}
            <div className="horizontal-flow d-flex align-items-center justify-content-center gap-3 w-100 my-3">
              
              <div className="d-flex flex-column align-items-center" style={{ width: '160px' }}>
                <div className={`flow-line-vertical short ${['vector', 'generator', 'output'].includes(activeStep) && currentPrompt.route === 'vector' ? 'active' : ''}`} />
                <div className={`flow-node ${activeStep === 'vector' ? 'active' : ''}`}>
                  <Database size={16} /> Vector DB
                </div>
                <div className={`flow-line-vertical short ${['generator', 'output'].includes(activeStep) && currentPrompt.route === 'vector' ? 'active' : ''}`} />
              </div>

              <div className="d-flex flex-column align-items-center" style={{ width: '160px' }}>
                <div className={`flow-line-vertical short ${['search', 'generator', 'output'].includes(activeStep) && currentPrompt.route === 'search' ? 'active' : ''}`} />
                <div className={`flow-node ${activeStep === 'search' ? 'active' : ''}`}>
                  <Search size={16} /> Web Search
                </div>
                <div className={`flow-line-vertical short ${['generator', 'output'].includes(activeStep) && currentPrompt.route === 'search' ? 'active' : ''}`} />
              </div>

            </div>

            {/* 3. Generator LLM */}
            <div className={`flow-node ${activeStep === 'generator' ? 'active' : ''}`}>
              <span>🤖</span> {currentPrompt.route === 'vector' ? currentPrompt.steps[3].label : currentPrompt.steps[3].label}
            </div>

            <div className={`flow-line-vertical ${activeStep === 'output' ? 'active' : ''}`} />

            {/* 4. Output Response Box */}
            <div className={`flow-node output-node text-start p-3 ${activeStep === 'output' ? 'active' : ''}`}>
              <span className="tracked-sub d-block mb-1" style={{ fontSize: '0.65rem' }}>Final Result</span>
              <span className="small d-block" style={{ lineHeight: '1.5' }}>
                {activeStep === 'output' ? currentPrompt.steps[4].desc : 'Waiting for completion...'}
              </span>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        /* Container Styling */
        .rag-visualizer-container {
          background-color: var(--card-bg);
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
          border: 2px solid var(--border-color);
        }

        /* Buttons Styling */
        .prompt-btn-idle, .prompt-btn-active {
          background-color: var(--bg-color);
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
          border: 2px solid var(--border-color);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-primary);
          transition: all 0.3s;
        }
        .prompt-btn-idle:hover {
          border-color: var(--text-secondary);
          transform: translateY(-2px);
        }
        .prompt-btn-active {
          border-color: var(--accent-color);
          background-color: rgba(218, 119, 86, 0.05);
          font-weight: 600;
        }

        .rag-run-btn {
          background-color: transparent;
          color: var(--text-primary);
          border-radius: 15px 225px 15px 255px/255px 15px 225px 15px;
          border: 2px solid var(--accent-color);
          font-family: inherit;
          transition: all 0.3s;
        }
        .rag-run-btn:hover:not(:disabled) {
          background-color: var(--accent-color);
          color: white;
          transform: scale(1.02) rotate(-1deg);
        }
        .rag-run-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          border-color: var(--border-color);
        }

        /* Rag Terminal Box */
        .rag-terminal-box {
          background-color: var(--card-bg);
          border-radius: 15px 255px 15px 225px/225px 15px 255px 15px;
          border: 2px solid var(--border-color);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .rag-terminal-header {
          border-bottom: 2px dashed var(--border-color);
        }
        .rag-terminal-body {
          color: var(--text-secondary);
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          height: 150px;
          overflow-y: auto;
          position: relative;
        }
        
        /* Flow Nodes (Hand-drawn look) */
        .flow-node {
          background-color: var(--bg-color);
          border: 2px solid var(--border-color);
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
          padding: 12px 20px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 550;
          color: var(--text-primary);
          transition: all 0.4s ease;
          position: relative;
          z-index: 2;
        }
        .flow-node.active {
          border-color: var(--accent-color);
          background-color: rgba(218, 119, 86, 0.1);
          color: var(--text-primary);
          transform: scale(1.05) rotate(1deg);
        }
        .output-node {
          max-width: 340px;
          border-radius: 15px 225px 15px 255px/255px 15px 225px 15px;
          border-style: dashed !important;
        }

        /* Flow Lines (Dashed Hand-drawn style) */
        .flow-line-vertical {
          width: 2px;
          height: 35px;
          background-image: linear-gradient(to bottom, var(--border-color) 50%, transparent 50%);
          background-size: 2px 8px;
          background-repeat: repeat-y;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .flow-line-vertical.short {
          height: 25px;
        }
        .flow-line-vertical.active {
          background-image: linear-gradient(to bottom, var(--accent-color) 50%, transparent 50%);
        }
        
        /* Hand-drawn Arrow Indicator at the bottom of the line */
        .flow-line-vertical::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 6px 5px 0 5px;
          border-style: solid;
          border-color: var(--border-color) transparent transparent transparent;
        }
        .flow-line-vertical.active::after {
          border-top-color: var(--accent-color);
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default RagVisualizer;
