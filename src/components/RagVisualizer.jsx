import React, { useState, useEffect } from 'react';
import GlowCard from './GlowCard';
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
    <GlowCard className="p-4 p-md-5 mb-5" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
      <div className="row g-4 align-items-center">
        
        {/* Left Column: Control Panel & Terminal Logs */}
        <div className="col-lg-5">
          <h3 className="h4 fw-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Adaptive RAG Query Router</h3>
          <p className="small text-secondary mb-4">
            Select a sample query to trigger the routing workflow. Watch how the LangGraph router dynamically determines the best processing pipeline.
          </p>

          {/* Prompt Selector */}
          <div className="d-flex flex-column gap-2 mb-4">
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
                className="btn text-start p-3 rounded-3"
                style={{
                  fontSize: '0.85rem',
                  border: '1px solid var(--border-color)',
                  backgroundColor: selectedPrompt === idx ? 'var(--accent-glow)' : 'var(--bg-color)',
                  color: selectedPrompt === idx ? 'var(--accent-color)' : 'var(--text-primary)',
                  fontWeight: selectedPrompt === idx ? '600' : '400',
                  transition: 'all 0.25s ease'
                }}
              >
                {p.text}
              </button>
            ))}
          </div>

          <button
            onClick={handleStart}
            disabled={isProcessing}
            className="btn btn-apple w-100 py-3 mb-4 d-flex align-items-center justify-content-center gap-2"
          >
            <Play size={14} /> Run Routing Workflow
          </button>

          {/* Real-time Agent Logs */}
          <div 
            className="p-3 rounded-3"
            style={{ 
              backgroundColor: '#1A1915', 
              color: '#B5AFA5', 
              fontFamily: 'var(--font-mono, monospace)', 
              fontSize: '0.75rem',
              height: '140px',
              overflowY: 'auto',
              border: '1px solid rgba(218, 119, 86, 0.2)'
            }}
          >
            {logs.length === 0 ? (
              <span style={{ color: 'var(--text-muted)' }}>Console idle. Click Run to view routing execution logs...</span>
            ) : (
              logs.map((log, i) => (
                <div key={i} className="mb-2" style={{ lineHeight: '1.4' }}>
                  {log}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Column: Interactive Diagram Flow */}
        <div className="col-lg-7 text-center">
          <style>{`
            .flow-node {
              border: 1px solid var(--border-color);
              background: var(--bg-color);
              border-radius: 10px;
              padding: 12px 20px;
              display: inline-flex;
              align-items: center;
              gap: 8px;
              font-size: 0.8rem;
              font-weight: 550;
              transition: all 0.4s ease;
              position: relative;
            }
            .flow-node.active {
              border-color: var(--accent-color);
              box-shadow: 0 0 15px var(--accent-glow);
              background-color: var(--accent-glow);
              color: var(--accent-color);
              transform: scale(1.05);
            }
            .flow-line {
              width: 2px;
              height: 35px;
              background-color: var(--border-color);
              margin: 0 auto;
              position: relative;
              transition: background-color 0.4s ease;
            }
            .flow-line.active {
              background-color: var(--accent-color);
            }
            /* Arrow indicators */
            .flow-line::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              border-width: 5px 4px 0 4px;
              border-style: solid;
              border-color: var(--border-color) transparent transparent transparent;
            }
            .flow-line.active::after {
              border-top-color: var(--accent-color);
            }
            /* Horizontal flows */
            .horizontal-flow {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 15px;
              width: 100%;
              margin: 15px 0;
            }
            .flow-line-horiz {
              height: 2px;
              width: 40px;
              background-color: var(--border-color);
              position: relative;
              transition: background-color 0.4s ease;
            }
            .flow-line-horiz.active {
              background-color: var(--accent-color);
            }
            .flow-line-horiz::after {
              content: '';
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
              border-width: 4px 0 4px 5px;
              border-style: solid;
              border-color: transparent transparent transparent var(--border-color);
            }
            .flow-line-horiz.active::after {
              border-left-color: var(--accent-color);
            }
          `}</style>

          <div className="d-flex flex-column align-items-center py-3">
            
            {/* 1. User Query */}
            <div className={`flow-node ${activeStep === 'user' ? 'active' : ''}`}>
              <span>❓</span> {currentPrompt.steps[0].label}
            </div>

            <div className={`flow-line ${['router', 'vector', 'search', 'generator', 'output'].includes(activeStep) ? 'active' : ''}`} />

            {/* 2. Query Router */}
            <div className={`flow-node ${activeStep === 'router' ? 'active' : ''}`}>
              <Cpu size={16} /> {currentPrompt.steps[1].label}
            </div>

            {/* Parallel routing options (Vector DB vs Web Search) */}
            <div className="horizontal-flow">
              
              <div className="d-flex flex-column align-items-center">
                <div className={`flow-line ${['vector', 'generator', 'output'].includes(activeStep) && currentPrompt.route === 'vector' ? 'active' : ''}`} />
                <div className={`flow-node ${activeStep === 'vector' ? 'active' : ''}`}>
                  <Database size={16} /> Vector DB (FAISS)
                </div>
                <div className={`flow-line ${['generator', 'output'].includes(activeStep) && currentPrompt.route === 'vector' ? 'active' : ''}`} />
              </div>

              <div className="d-flex flex-column align-items-center">
                <div className={`flow-line ${['search', 'generator', 'output'].includes(activeStep) && currentPrompt.route === 'search' ? 'active' : ''}`} />
                <div className={`flow-node ${activeStep === 'search' ? 'active' : ''}`}>
                  <Search size={16} /> Web Search API
                </div>
                <div className={`flow-line ${['generator', 'output'].includes(activeStep) && currentPrompt.route === 'search' ? 'active' : ''}`} />
              </div>

            </div>

            {/* 3. Generator LLM */}
            <div className={`flow-node ${activeStep === 'generator' ? 'active' : ''}`}>
              <span>🤖</span> {currentPrompt.route === 'vector' ? currentPrompt.steps[3].label : currentPrompt.steps[3].label}
            </div>

            <div className={`flow-line ${activeStep === 'output' ? 'active' : ''}`} />

            {/* 4. Output Response Box */}
            <div 
              className={`flow-node p-3 ${activeStep === 'output' ? 'active' : ''}`}
              style={{ maxWidth: '340px', borderStyle: 'dashed' }}
            >
              <div className="text-start">
                <span className="tracked-sub d-block mb-1" style={{ fontSize: '0.65rem' }}>Final Result</span>
                <span className="small" style={{ lineHeight: '1.4' }}>
                  {activeStep === 'output' ? currentPrompt.steps[4].desc : 'Waiting for completion...'}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </GlowCard>
  );
};

export default RagVisualizer;
