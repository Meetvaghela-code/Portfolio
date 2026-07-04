import React, { useState, useEffect, useRef } from 'react';

const TerminalChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: 'system', text: "Meet's Portfolio OS [Version 1.0.0]" },
    { type: 'system', text: "(c) 2026 Meet Vaghela. All rights reserved." },
    { type: 'system', text: "Type 'help' to see a list of commands or ask a question directly (e.g., 'What are your skills?')." },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

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
      response: "Let's connect:\n- Email: meetv8540@gmail.com\n- GitHub: github.com/Meetvaghela-code\n- LinkedIn: linkedin.com/in/vaghelameet\n- Instagram: instagram.com/meett.vaghela\n- Status: Open for AI/ML Engineer opportunities."
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

    if (trimmed === 'about') {
      const match = knowledgeBase.find(item => item.keywords.includes('about'));
      setHistory(prev => [...prev, { type: 'output', text: match.response }]);
      return;
    }

    if (trimmed === 'skills') {
      const match = knowledgeBase.find(item => item.keywords.includes('skills'));
      setHistory(prev => [...prev, { type: 'output', text: match.response }]);
      return;
    }

    if (trimmed === 'projects') {
      const match = knowledgeBase.find(item => item.keywords.includes('projects'));
      setHistory(prev => [...prev, { type: 'output', text: match.response }]);
      return;
    }

    if (trimmed === 'experience') {
      const match = knowledgeBase.find(item => item.keywords.includes('experience'));
      setHistory(prev => [...prev, { type: 'output', text: match.response }]);
      return;
    }

    if (trimmed === 'contact') {
      const match = knowledgeBase.find(item => item.keywords.includes('contact'));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userCommand = inputVal;
    setHistory(prev => [...prev, { type: 'input', text: userCommand }]);
    setInputVal('');
    handleCommand(userCommand);
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isThinking]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    window.addEventListener('toggle-terminal', handleToggle);
    return () => window.removeEventListener('toggle-terminal', handleToggle);
  }, []);

  return (
    <div className="terminal-widget-container">
      {/* Floating Toggle Button */}
      <button 
        className="terminal-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle terminal OS"
      >
        <span className="terminal-pulse"></span>
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M6 12.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v9zM5 4H2v8h3V4zM10.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-4zM14 12h-3V5h3v7z"/>
        </svg>
        <span>meet-terminal.sh</span>
      </button>

      {/* Terminal Window */}
      {isOpen && (
        <div className="terminal-window">
          {/* Header Bar */}
          <div className="terminal-header d-flex align-items-center justify-content-between px-3 py-2">
            <div className="d-flex align-items-center gap-1.5">
              <span className="dot dot-red" onClick={() => setIsOpen(false)}></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="terminal-title text-center flex-grow-1">meet@portfolio: ~</div>
          </div>

          {/* Console Body */}
          <div className="terminal-body p-3">
            {history.map((line, idx) => (
              <div key={idx} className={`terminal-line ${line.type}`}>
                {line.type === 'input' && <span className="prompt">meet$ </span>}
                <span className="text">{line.text}</span>
              </div>
            ))}
            {isThinking && (
              <div className="terminal-line system">
                <span className="thinking-dots">Analyzing query...</span>
              </div>
            )}
            <div ref={terminalEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="terminal-input-form px-3 py-2 d-flex align-items-center">
            <span className="prompt">meet$ </span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input flex-grow-1"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask a question..."
              autoFocus
            />
          </form>
        </div>
      )}

      <style>{`
        .terminal-widget-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          zIndex: 1040;
          font-family: var(--font-mono, monospace);
        }
        .terminal-toggle-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--btn-bg, #2D2B27);
          color: var(--btn-text, #FDFCFA);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 10px 18px;
          font-size: 0.85rem;
          cursor: pointer;
          box-shadow: var(--shadow-lg);
          transition: all 0.25s ease;
        }
        .terminal-toggle-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-xl);
          background-color: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
        }
        .terminal-pulse {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #27c93f;
          border-radius: 50%;
          box-shadow: 0 0 8px #27c93f;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(39, 201, 63, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(39, 201, 63, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(39, 201, 63, 0); }
        }
        .terminal-window {
          position: absolute;
          bottom: 56px;
          right: 0;
          width: 380px;
          height: 400px;
          background-color: #1A1915;
          border: 1px solid rgba(218, 119, 86, 0.25);
          border-radius: 12px;
          box-shadow: var(--shadow-xl);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 480px) {
          .terminal-window {
            width: calc(100vw - 32px);
            right: -8px;
          }
        }
        .terminal-header {
          background-color: #23211C;
          border-bottom: 1px solid var(--border-color);
          flex-shrink: 0;
        }
        .dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          cursor: pointer;
        }
        .dot-red { background-color: #ff5f56; }
        .dot-yellow { background-color: #ffbd2e; }
        .dot-green { background-color: #27c93f; }
        .terminal-title {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .terminal-body {
          flex-grow: 1;
          overflow-y: auto;
          font-size: 0.8rem;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .terminal-line {
          white-space: pre-wrap;
          line-height: 1.5;
        }
        .terminal-line.system {
          color: var(--accent-color);
        }
        .terminal-line.input {
          color: #E8E4DE;
        }
        .terminal-line.output {
          color: #B5AFA5;
        }
        .prompt {
          color: #27c93f;
          font-weight: bold;
        }
        .terminal-input-form {
          background-color: #23211C;
          border-top: 1px solid var(--border-color);
          flex-shrink: 0;
        }
        .terminal-input {
          background: transparent;
          border: none;
          color: #E8E4DE;
          outline: none;
          font-family: inherit;
          font-size: 0.8rem;
          padding-left: 6px;
        }
        .thinking-dots {
          color: var(--text-muted);
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default TerminalChat;
