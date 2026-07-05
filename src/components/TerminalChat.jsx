import React, { useState, useEffect, useRef } from 'react';

const TerminalChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isBooting, setIsBooting] = useState(false);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);
  const hasBooted = useRef(false);

  const knowledgeBase = [
    {
      keywords: ['skills', 'tech', 'languages', 'frameworks', 'libraries', 'stack', 'tools'],
      response: "Meet specializes in AI/ML engineering. Core Stack:\n- Languages: Python, JavaScript, SQL\n- Frameworks: LangChain, LangGraph, FastAPI, Flask, React.js\n- Tools & DBs: N8N, Docker, Git, FAISS, Pinecone, TensorFlow, OpenCV"
    },
    {
      keywords: ['apex', 'apex-agent', 'autonomous framework', 'mcp'],
      response: "Apex-Agent: A Secure Multi-Modal Autonomous Framework.\n- Overview: Bridges the gap between static LLMs and autonomous execution using a multi-tier memory structure and a human-in-the-loop lifecycle.\n- Stack: FastAPI, LangChain, LangGraph, OpenAI, Pinecone, Model Context Protocol (MCP).\n- GitHub: github.com/Meetvaghela-code/Apex-Agent"
    },
    {
      keywords: ['adaptive rag', 'adaptive', 'knowledge graph', 'faiss'],
      response: "Adaptive RAG: Knowledge Graph-Enhanced RAG System.\n- Overview: A research-to-product prototype that fuses Knowledge Graphs with RAG to deliver faster, more accurate, and explainable AI answers.\n- Stack: FastAPI, LangChain, LangGraph, Gemini, FAISS.\n- GitHub: github.com/Meetvaghela-code/AdaptiveRag"
    },
    {
      keywords: ['youtube chatbot', 'youtube rag', 'video analysis'],
      response: "YouTube RAG Chatbot: AI Video Analysis Ecosystem.\n- Overview: Processes video transcripts to allow natural language Q&A using LangChain embeddings and RetrievalQA flow.\n- Stack: FastAPI, LangChain, Gemini, FAISS.\n- GitHub: github.com/Meetvaghela-code/Youtube-Chatbot"
    },
    {
      keywords: ['webionix', 'chrome extension', 'tab assistant'],
      response: "Webionix Extension: Chrome RAG Assistant.\n- Overview: A Chrome extension that captures active tab context to ask questions about page content using a backend RAG pipeline.\n- Stack: Flask, LangChain, HuggingFace, Chrome API.\n- GitHub: github.com/Meetvaghela-code/Webionix-Chome-Extension"
    },
    {
      keywords: ['doc assistant', 'document chatbot', 'pdf chatbot', 'document query'],
      response: "AI Doc Assistant: Intelligent Document Query.\n- Overview: Upload PDFs or text files to a vector database for semantic search and Q&A.\n- Stack: React, LangChain, Pinecone, Gemini.\n- GitHub: github.com/Meetvaghela-code/Document_Chatbot"
    },
    {
      keywords: ['healthcare', 'medical prediction', 'disease risk'],
      response: "Healthcare AI: Medical Prediction Portal.\n- Overview: Predicts disease risks (Heart, Diabetes, Lung) using ML/DL classifiers combined with an interactive medical chatbot.\n- Stack: React, ML/DL, FastAPI, Bootstrap.\n- GitHub: github.com/Meetvaghela-code/HealthcareAi"
    },
    {
      keywords: ['sentiment', 'feedback classifier', 'tweets', 'nlp classification'],
      response: "Sentiment Analysis: NLP Feedback Classifier.\n- Overview: Real-time text classification for tweets and feedback using TF-IDF and ML classifiers.\n- Stack: Flask, Scikit-learn, NLTK.\n- GitHub: github.com/Meetvaghela-code/Sentiment-Analysis"
    },
    {
      keywords: ['gesture', 'hand tracking', 'computer vision control', 'mediapipe'],
      response: "Gesture Recognizer: Computer Vision Control.\n- Overview: Tracks hand landmarks using MediaPipe and OpenCV to classify gestures and control interfaces in real-time.\n- Stack: OpenCV, MediaPipe, Flask.\n- GitHub: github.com/Meetvaghela-code/Hand-Gesture-Recognizer"
    },
    {
      keywords: ['projects', 'work', 'selected projects', 'portfolio'],
      response: "Key projects in Meet's portfolio:\n- Apex-Agent (MCP Framework)\n- Adaptive RAG (Knowledge Graph RAG)\n- YouTube RAG Chatbot (Video Q&A)\n- Webionix Extension (Chrome RAG)\n- AI Doc Assistant (PDF QA)\n- Healthcare AI (Medical ML)\n- Sentiment Analysis (NLP Classifier)\n- Gesture Recognizer (CV Gesture Control)\nType '[project name]' for details, or visit the Projects page."
    },
    {
      keywords: ['about', 'who are you', 'meet', 'bio', 'vaghela'],
      response: "Meet Vaghela is an AI/ML Engineer with 6 months of industry experience. He specializes in designing autonomous agentic workflows, advanced RAG architectures, and deploying machine learning models to production."
    },
    {
      keywords: ['experience', 'internship', 'job', 'mckh', 'codesoft', 'codecraft'],
      response: "Professional experience:\n1. McKH Technologies (AI/ML Intern, Dec 2025 - Apr 2026): Developed agentic LLM systems and n8n pipelines.\n2. CodeSoft (ML Intern, Jul - Aug 2025): Built and deployed ML/NLP models using Flask.\n3. CODECRAFT INFOTECH (ML Intern, Jul 2025): Built classification & regression pipelines."
    },
    {
      keywords: ['education', 'college', 'university', 'gpa', 'itm', 'cgpa'],
      response: "Meet is pursuing a Bachelor of Computer Science at ITM SLS Baroda University (2022 - 2026). He currently maintains a GPA of 9.05/10."
    },
    {
      keywords: ['certification', 'certificates', 'ibm', 'anthropic', 'forage'],
      response: "Meet's certifications:\n- Python for Data Science (IBM, 2025)\n- Introduction to Data Analytics (IBM, 2024)\n- AI Engineer (United Latino Students Association, 2025)\n- Data Visualisation (Forage, 2024)\n- AI (Anthropic, 2026)"
    },
    {
      keywords: ['contact', 'email', 'phone', 'github', 'linkedin', 'hire', 'instagram', 'socials'],
      response: "Let's connect:\n- Email: meetv8540@gmail.com\n- GitHub: github.com/Meetvaghela-code\n- LinkedIn: linkedin.com/in/vaghelameet\n- Instagram: instagram.com/meett.vaghela\n- Status: Open to AI Engineer opportunities."
    },
    {
      keywords: ['location', 'where do you live', 'vadodara', 'india', 'city'],
      response: "Meet is located in Vadodara, Gujarat, India."
    },
    {
      keywords: ['interests', 'focus', 'agentic', 'rag', 'deep learning'],
      response: "Meet's current focus lies in agentic workflows (building autonomous AI agents), RAG systems (advanced retrieval pipelines), computer vision, and neural network architectures."
    },
    {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'yo'],
      response: "Hello! I am Portfolio-OS. Ask me anything about Meet's technical background, projects, or professional experience."
    }
  ];

  // --- Boot Sequence Logic ---
  useEffect(() => {
    if (isOpen && !hasBooted.current) {
      hasBooted.current = true;
      setIsBooting(true);
      setHistory([]);
      
      const seq = [
        "Initializing...",
        "Loading Memory...",
        "Connecting Agents...",
        "Ready.\n\nMeet's Agentic OS [v1.0.0]\nType 'help' for commands, or select a prompt below:"
      ];
      
      let step = 0;
      const interval = setInterval(() => {
        if (step < seq.length) {
          const currentText = seq[step];
          setHistory(prev => [...prev, { type: 'system', text: currentText }]);
          step++;
        } else {
          setIsBooting(false);
          clearInterval(interval);
        }
      }, 600); // 600ms per boot step
      
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const handleCommand = async (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    
    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmed === 'help') {
      setHistory(prev => [
        ...prev,
        { type: 'output', text: "Available commands:\n  about     - Meet's short bio\n  skills    - List technical stack\n  projects  - Show selected work\n  experience- Professional history\n  contact   - Contact details\n  clear     - Clear screen\n  help      - Show this help menu\n\nYou can also ask natural questions directly (e.g. 'Can you write Python?')" }
      ]);
      return;
    }

    // Direct Match Fallbacks
    const match = knowledgeBase.find(item => item.keywords.includes(trimmed));
    if (match) {
      setHistory(prev => [...prev, { type: 'output', text: match.response }]);
      return;
    }

    setIsThinking(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: cmd })
      });
      const data = await res.json();
      
      if (data.text && data.text.includes("Developer note: The Groq API key is not configured")) {
        throw new Error("API_KEY_NOT_CONFIGURED");
      }

      if (data.text) {
        setHistory(prev => [...prev, { type: 'output', text: data.text }]);
        setIsThinking(false);
        return;
      }
      throw new Error("INVALID_RESPONSE");
    } catch (err) {
      let foundResponse = null;
      for (const item of knowledgeBase) {
        if (item.keywords.some(kw => trimmed.includes(kw))) {
          foundResponse = item.response;
          break;
        }
      }

      if (!foundResponse) {
        foundResponse = "I'm not sure about that. Try asking about 'skills', 'experience', 'projects', 'education', or type 'help' for commands.";
      }

      setHistory(prev => [...prev, { type: 'output', text: foundResponse }]);
      setIsThinking(false);
    }
  };

  const handleSubmit = (e, overrideCommand = null) => {
    if (e) e.preventDefault();
    const userCommand = overrideCommand !== null ? overrideCommand : inputVal;
    
    if (!userCommand.trim()) return;

    setHistory(prev => [...prev, { type: 'input', text: userCommand }]);
    if (overrideCommand === null) setInputVal('');
    handleCommand(userCommand);
  };

  const handleSuggestedPrompt = (promptText) => {
    handleSubmit(null, promptText);
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isThinking, isBooting]);

  useEffect(() => {
    if (isOpen && inputRef.current && !isBooting) {
      inputRef.current.focus();
    }
  }, [isOpen, isBooting]);

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    window.addEventListener('toggle-terminal', handleToggle);
    return () => window.removeEventListener('toggle-terminal', handleToggle);
  }, []);

  // Show suggested prompts only if we have finished booting and haven't typed many commands yet
  const showSuggestions = !isBooting && history.filter(h => h.type === 'input').length < 2;

  return (
    <div className="terminal-widget-container">
      {/* Terminal Window */}
      {isOpen && (
        <>
          <div className="terminal-backdrop" onClick={() => setIsOpen(false)}></div>
          <div className="terminal-window">
            
            {/* Subtle notebook paper texture overlay */}
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ filter: 'url(#pencil-texture)', pointerEvents: 'none', zIndex: 0 }}></div>

            {/* Handwritten Annotation overlapping the header */}
            <span className="position-absolute d-none d-md-block" style={{ top: '-25px', left: '10%', fontFamily: 'var(--font-handwriting)', fontSize: '1.2rem', color: '#DA7756', transform: 'rotate(-5deg)', zIndex: 10 }}>
              System interface
            </span>

            {/* Header Bar */}
            <div className="terminal-header d-flex align-items-center justify-content-between px-3 py-2 position-relative z-1">
              <div className="d-flex align-items-center gap-2">
                {/* Hand-drawn sketch dots instead of perfect circles */}
                <svg width="12" height="12" viewBox="0 0 100 100" className="sketch-dot sketch-dot-red" onClick={() => setIsOpen(false)} style={{ cursor: 'pointer' }}>
                  <path d="M 20 50 Q 50 10 80 50 Q 50 90 20 50" fill="#ff5f56" stroke="#cc3a32" strokeWidth="6" />
                </svg>
                <svg width="12" height="12" viewBox="0 0 100 100" className="sketch-dot sketch-dot-yellow">
                  <circle cx="50" cy="50" r="35" fill="#ffbd2e" stroke="#c9921c" strokeWidth="6" strokeDasharray="50 10" />
                </svg>
                <svg width="12" height="12" viewBox="0 0 100 100" className="sketch-dot sketch-dot-green">
                  <path d="M 50 15 L 85 85 L 15 85 Z" fill="#27c93f" stroke="#1da132" strokeWidth="6" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="terminal-title text-center flex-grow-1" style={{ fontFamily: 'var(--font-mono)' }}>agent_console.exe</div>
            </div>

            {/* Console Body */}
            <div className="terminal-body p-4 position-relative z-1">
              {history.map((line, idx) => (
                <div key={idx} className={`terminal-line ${line.type} mb-2`}>
                  {line.type === 'input' && <span className="prompt">agent@meet:~$ </span>}
                  <span className="text">{line.text}</span>
                </div>
              ))}
              
              {/* Suggested Prompts Block */}
              {showSuggestions && (
                <div className="suggested-prompts mt-3 d-flex flex-column gap-2" style={{ maxWidth: '400px' }}>
                  <button onClick={() => handleSuggestedPrompt("Tell me about Apex-Agent")} className="btn btn-sm text-start prompt-btn sketch-border">
                    <span style={{ color: 'var(--accent-color)' }}>&gt;</span> Tell me about Apex-Agent
                  </button>
                  <button onClick={() => handleSuggestedPrompt("Explain your RAG projects")} className="btn btn-sm text-start prompt-btn sketch-border">
                    <span style={{ color: 'var(--accent-color)' }}>&gt;</span> Explain your RAG projects
                  </button>
                  <button onClick={() => handleSuggestedPrompt("What are your skills?")} className="btn btn-sm text-start prompt-btn sketch-border">
                    <span style={{ color: 'var(--accent-color)' }}>&gt;</span> What are your core skills?
                  </button>
                </div>
              )}

              {isThinking && (
                <div className="terminal-line system mt-2">
                  <span className="thinking-dots">Fetching context...</span>
                </div>
              )}
              <div ref={terminalEndRef} style={{ height: '20px' }} />
            </div>

            {/* Input Form */}
            <form onSubmit={(e) => handleSubmit(e)} className="terminal-input-form px-4 py-3 d-flex align-items-center position-relative z-1">
              <span className="prompt pe-2">agent@meet:~$ </span>
              <input
                ref={inputRef}
                type="text"
                className="terminal-input flex-grow-1"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                disabled={isBooting}
              />
              <span className="cursor-block">█</span>
            </form>
          </div>
        </>
      )}

      <style>{`
        .terminal-widget-container {
          font-family: var(--font-mono, 'Courier New', monospace);
        }
        .terminal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(10, 9, 8, 0.5);
          backdrop-filter: blur(4px);
          z-index: 1045;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .terminal-window {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          max-width: 95vw;
          height: 500px;
          background-color: var(--card-bg); /* Adapts to light/dark mode */
          display: flex;
          flex-direction: column;
          overflow: visible;
          z-index: 1050;
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
          border: 2px solid var(--border-color);
          animation: scaleUp 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        .sketch-border {
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
          border: 2px solid var(--border-color);
        }

        @keyframes scaleUp {
          from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        @media (max-width: 480px) {
          .terminal-window {
            position: fixed;
            bottom: 0;
            right: 0;
            width: 100vw;
            height: 90svh;
            border-radius: 20px 20px 0 0;
            border: 2px solid var(--border-color);
            border-bottom: none;
            z-index: 9999;
            transform: translate(0, 0);
          }
          @keyframes scaleUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
        }
        
        .terminal-header {
          background-color: transparent;
          border-bottom: 2px dashed var(--border-color);
          flex-shrink: 0;
        }
        
        .sketch-dot {
          transition: transform 0.2s;
        }
        .sketch-dot:hover {
          transform: scale(1.2) rotate(15deg);
        }

        .terminal-title {
          font-size: 0.85rem;
          color: var(--text-secondary);
          letter-spacing: 0.1em;
        }
        
        .terminal-body {
          flex-grow: 1;
          overflow-y: auto;
          font-size: 0.95rem;
          display: flex;
          flex-direction: column;
          scrollbar-width: thin;
          scrollbar-color: var(--accent-color) transparent;
        }
        .terminal-body::-webkit-scrollbar {
          width: 8px;
        }
        .terminal-body::-webkit-scrollbar-thumb {
          background-color: var(--accent-color);
          border-radius: 4px;
        }
        
        .terminal-line {
          white-space: pre-wrap;
          line-height: 1.6;
          letter-spacing: 0.02em;
        }
        
        .terminal-line.system {
          color: var(--accent-color);
          opacity: 0.9;
        }
        .terminal-line.input {
          color: var(--text-primary);
          font-weight: bold;
        }
        .terminal-line.output {
          color: var(--text-secondary);
        }
        
        .prompt {
          color: var(--accent-color);
          font-weight: bold;
        }
        
        .terminal-input-form {
          background-color: transparent;
          border-top: 2px dashed var(--border-color);
          flex-shrink: 0;
        }
        
        .terminal-input {
          background: transparent;
          border: none;
          color: var(--text-primary);
          outline: none;
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: bold;
          letter-spacing: 0.02em;
        }
        
        .cursor-block {
          color: var(--accent-color);
          animation: blink 1s step-end infinite;
          margin-left: 2px;
          font-size: 1.1rem;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .thinking-dots {
          color: var(--text-muted);
          font-style: italic;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .prompt-btn {
          background-color: var(--bg-color);
          color: var(--text-secondary);
          font-family: inherit;
          border-color: var(--border-color);
          transition: all 0.2s;
          padding: 8px 12px;
        }
        .prompt-btn:hover {
          background-color: rgba(218, 119, 86, 0.1);
          border-color: var(--accent-color);
          color: var(--text-primary);
          transform: translateX(5px);
        }
      `}</style>
    </div>
  );
};

export default TerminalChat;
