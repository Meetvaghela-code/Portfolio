import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import GlowCard from '../components/GlowCard';
import ScrollReveal from '../components/ScrollReveal';
import RagVisualizer from '../components/RagVisualizer';
import { PaperLiftCard } from '../components/ProjectBento';

// --- Inline SVG Icons ---
const Github = ({ size = 18 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg>
);
const Eye = ({ size = 18 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" /><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" /></svg>
);
const X = ({ size = 24 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /></svg>
);
const StarFill = ({ size = 12 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
);

const projectLogs = {
  'Apex-Agent': [
    '⚡ Booting secure isolated environment (Docker Sandbox)...',
    '🧠 Context engine initialized. Short-term memory sync complete.',
    '🤖 Agent goal: Autonomously edit files & run tests.',
    '🔗 Activating Model Context Protocol (MCP) filesystem server...',
    '🔍 Safety guardrails: Verified file writes inside user workspace.',
    '💻 Running: npm run test',
    '✅ Task successful. Awaiting human-in-the-loop review...'
  ],
  'Adaptive RAG': [
    '⚡ Parsing user query embeddings via SentenceTransformers...',
    '🧠 LangGraph Query Router: Analyzing context parameters...',
    '🌐 Route selected: Hybrid retrieval (Graph Database + Vector Index).',
    '🔗 Querying Neo4j: Fetching graph nodes and entity connections...',
    '📚 Querying FAISS: Retrieving raw document chunks...',
    '⚡ Merging & reranking retrieved chunks using Cross-Encoder...',
    '✅ Generation complete: Generated factual response in 850ms.'
  ],
  'YouTube RAG Chatbot': [
    '⚡ Initializing YouTube API listener...',
    '🎬 Video verified. Loading transcript stream (ID: a8F9dK1s)...',
    '🧠 Running RecursiveCharacterTextSplitter (size: 1000, overlap: 200).',
    '🔥 Vector DB: Creating embeddings with Gemini model...',
    '🔍 Ready: Prompt listener active. Waiting for Q&A query...'
  ],
  'Webionix Extension': [
    '⚡ Browser injection hook: Page DOM parsed successfully.',
    '🧠 Extracting visible text content from active tab...',
    '🌐 Transport: Encoding payload & sending POST request to Flask...',
    '🔍 Embedding chunks and executing retrieval index query...',
    '✅ Injected inline answer bubble directly into viewport.'
  ],
  'AI Doc Assistant': [
    '⚡ File upload listener active. Received document: research_paper.pdf.',
    '📁 Extracted raw text blocks (pages 1-12).',
    '🧠 Chunking document into 24 distinct paragraphs...',
    '🔥 Upserting semantic vector tokens to Pinecone database...',
    '✅ Vector index updated. AI query channel initialized.'
  ],
  'Healthcare AI': [
    '⚡ Healthcare Prediction Portal: Context initialized.',
    '🧠 Loading pre-trained Random Forest & neural network models...',
    '📊 Validation: Checking input vectors for missing values...',
    '🏥 Clinical chatbot safety context validated.',
    '✅ Ready: Predicting heart disease risk with 92% accuracy.'
  ],
  'Sentiment Analysis': [
    '⚡ Twitter API webhook: New feedback stream received.',
    '🧠 Preprocessing text: Removing stopwords, punctuation, and links.',
    '🤖 Vectorizing: Transforming tokens using TF-IDF model...',
    '🔥 Running logistic regression sentiment classifier...',
    '✅ Classified: positive (confidence: 94.7%).'
  ],
  'Gesture Recognizer': [
    '⚡ Starting OpenCV video frame capture thread...',
    '👁️ MediaPipe: Loading hand landmark configuration...',
    '📊 Frame rate locked at 30fps. Low-latency classification active.',
    '🤖 Gesture Classified: "TAP_INDEX". Executing custom command.'
  ]
};

const getProjectSketch = (title) => {
  switch (title) {
    case 'Apex-Agent':
      return (
        <svg viewBox="0 0 1000 300" width="100%" height="100%" preserveAspectRatio="none">
          <circle cx="200" cy="150" r="40" fill="none" stroke="var(--text-secondary)" strokeWidth="3" />
          <circle cx="500" cy="80" r="50" fill="none" stroke="var(--text-secondary)" strokeWidth="3" />
          <circle cx="500" cy="220" r="50" fill="none" stroke="var(--text-secondary)" strokeWidth="3" />
          <circle cx="800" cy="150" r="40" fill="none" stroke="var(--accent-color)" strokeWidth="4" />
          <path d="M 240 150 Q 350 115 450 80" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M 240 150 Q 350 185 450 220" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M 550 80 Q 675 115 760 150" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M 550 220 Q 675 185 760 150" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5 5" />
        </svg>
      );
    case 'Adaptive RAG':
      return (
        <svg viewBox="0 0 600 300" width="100%" height="100%" preserveAspectRatio="none">
          <rect x="50" y="100" width="100" height="100" rx="10" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
          <rect x="250" y="50" width="100" height="60" rx="10" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
          <rect x="250" y="190" width="100" height="60" rx="10" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
          <rect x="450" y="100" width="100" height="100" rx="10" fill="none" stroke="var(--accent-color)" strokeWidth="3" />
          <path d="M 150 150 L 250 80" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
          <path d="M 150 150 L 250 220" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
          <path d="M 350 80 L 450 150" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
          <path d="M 350 220 L 450 150" fill="none" stroke="var(--text-secondary)" strokeWidth="2" />
        </svg>
      );
    case 'YouTube RAG Chatbot':
      return (
        <svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
          <line x1="50" y1="150" x2="350" y2="150" stroke="var(--text-secondary)" strokeWidth="4" />
          <circle cx="100" cy="150" r="10" fill="var(--bg-color)" stroke="var(--accent-color)" strokeWidth="4" />
          <circle cx="200" cy="150" r="10" fill="var(--bg-color)" stroke="var(--text-secondary)" strokeWidth="4" />
          <circle cx="300" cy="150" r="10" fill="var(--bg-color)" stroke="var(--text-secondary)" strokeWidth="4" />
          <rect x="70" y="80" width="60" height="40" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
      );
    case 'Healthcare AI':
      return (
        <svg viewBox="0 0 500 300" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
          <path d="M 50 150 L 150 150 L 170 100 L 210 200 L 250 80 L 290 220 L 320 150 L 450 150" fill="none" stroke="var(--accent-color)" strokeWidth="3" />
          <circle cx="250" cy="150" r="80" fill="none" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      );
    case 'Webionix Extension':
      return (
        <svg viewBox="0 0 500 300" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
          <rect x="50" y="50" width="300" height="200" rx="5" fill="none" stroke="var(--text-secondary)" strokeWidth="3" />
          <line x1="50" y1="80" x2="350" y2="80" stroke="var(--text-secondary)" strokeWidth="2" />
          <rect x="380" y="50" width="100" height="150" rx="5" fill="none" stroke="var(--accent-color)" strokeWidth="3" strokeDasharray="5 5" />
          <path d="M 320 120 L 370 120 L 360 110 M 370 120 L 360 130" fill="none" stroke="var(--accent-color)" strokeWidth="3" />
        </svg>
      );
    case 'AI Doc Assistant':
      return (
        <svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
          <rect x="100" y="50" width="80" height="100" fill="none" stroke="var(--text-secondary)" strokeWidth="3" />
          <line x1="120" y1="70" x2="160" y2="70" stroke="var(--text-secondary)" strokeWidth="2" />
          <line x1="120" y1="90" x2="160" y2="90" stroke="var(--text-secondary)" strokeWidth="2" />
          <path d="M 220 100 L 280 100" fill="none" stroke="var(--accent-color)" strokeWidth="3" strokeDasharray="4 4" />
          <polygon points="270,90 290,100 270,110" fill="var(--accent-color)" />
          <rect x="310" y="50" width="80" height="100" rx="10" fill="none" stroke="var(--text-secondary)" strokeWidth="3" />
          <line x1="310" y1="80" x2="390" y2="80" stroke="var(--text-secondary)" strokeWidth="2" />
        </svg>
      );
    case 'Sentiment Analysis':
      return (
        <svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
          <circle cx="100" cy="150" r="40" fill="none" stroke="var(--accent-color)" strokeWidth="3" />
          <circle cx="85" cy="135" r="5" fill="var(--accent-color)" />
          <circle cx="115" cy="135" r="5" fill="var(--accent-color)" />
          <path d="M 80 160 Q 100 180 120 160" fill="none" stroke="var(--accent-color)" strokeWidth="3" />
          <circle cx="300" cy="150" r="40" fill="none" stroke="var(--text-secondary)" strokeWidth="3" />
          <circle cx="285" cy="135" r="5" fill="var(--text-secondary)" />
          <circle cx="315" cy="135" r="5" fill="var(--text-secondary)" />
          <path d="M 280 170 Q 300 150 320 170" fill="none" stroke="var(--text-secondary)" strokeWidth="3" />
          <line x1="160" y1="150" x2="240" y2="150" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      );
    case 'Gesture Recognizer':
      return (
        <svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
          <circle cx="200" cy="250" r="10" fill="none" stroke="var(--text-secondary)" strokeWidth="3" />
          <line x1="200" y1="240" x2="160" y2="150" stroke="var(--text-secondary)" strokeWidth="2" />
          <line x1="200" y1="240" x2="200" y2="100" stroke="var(--text-secondary)" strokeWidth="2" />
          <line x1="200" y1="240" x2="250" y2="120" stroke="var(--accent-color)" strokeWidth="3" />
          <circle cx="160" cy="150" r="6" fill="var(--bg-color)" stroke="var(--text-secondary)" strokeWidth="2" />
          <circle cx="200" cy="100" r="6" fill="var(--bg-color)" stroke="var(--text-secondary)" strokeWidth="2" />
          <circle cx="250" cy="120" r="8" fill="var(--bg-color)" stroke="var(--accent-color)" strokeWidth="3" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      );
    default:
      return null;
  }
};

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeLogs, setActiveLogs] = useState([]);

  useEffect(() => {
    if (showModal && selectedProject) {
      setActiveLogs([]);
      const logs = projectLogs[selectedProject.title] || [];
      let i = 0;
      const interval = setInterval(() => {
        if (i < logs.length) {
          setActiveLogs(prev => [...prev, logs[i]]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 700);
      return () => clearInterval(interval);
    }
  }, [showModal, selectedProject]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const projectList = [
    {
      id: 1,
      title: 'Apex-Agent',
      subtitle: ' A SECURE MULTI-MODAL AUTONOMOUS FRAMEWORK',
      category: 'Agentic & RAG',
      desc: 'Apex-Agent is an innovative framework designed to bridge the gap between static Large Language Models and autonomous execution. Imagine an AI system securely acting as an autonomous agent that maintains context over long continuous sessions while strictly ensuring operational safety.',
      size: 'col-md-6',
      layout: 'vertical',
      image: '/apex-agent.png',
      technologies: ['FastAPI', 'LangChain', 'Langgraph', 'OpenAI', 'Pinecone', 'MCP'],
      githubUrl: 'https://github.com/Meetvaghela-code/Apex-Agent',
      featured: true,
      details: {
        overview: 'Apex-Agent is an innovative framework designed to bridge the gap between static Large Language Models and autonomous execution. Imagine an AI system securely acting as an autonomous agent that maintains context over long continuous sessions while strictly ensuring operational safety. With Apex-Agent, users benefit from a multi-tier memory structure and a human-in-the-loop action lifecycle that securely manages tasks ranging from friendly interactions to complex automation. The platform leverages Model Context Protocol (MCP) technologies, enabling your AI companion to execute dynamic tasks in an isolated sandbox and adapt to interactions over time without the risk of unverified or hallucinated destructive actions, fostering a trustworthy human-AI system.',
        features: ['Multi-tier memory structure', 'Human-in-the-loop action lifecycle', 'Model Context Protocol (MCP)', 'Isolated sandbox execution'],
        challenges: 'Building a secure and reliable autonomous agent requires careful consideration of safety, context management, and tool integration. The framework must be able to handle complex tasks while ensuring that the agent operates within safe boundaries.',
        learnings: 'I learned about the importance of safety and security in autonomous systems, as well as the need for careful consideration of context management and tool integration. And working with MCP protocol was a great experience.'
      }
    },
    {
      id: 2,
      title: 'Adaptive RAG',
      subtitle: 'Knowledge Graph-Enhanced RAG System',
      category: 'Agentic & RAG',
      desc: 'AdaptiveRAG — a research-to-product prototype that fuses Knowledge Graphs with RAG to deliver faster, more accurate, and explainable AI answers.',
      size: 'col-md-6',
      layout: 'vertical',
      image: '/adaptive.png',
      technologies: ['FastAPI', 'LangChain', 'Langgraph', 'Gemini', 'FAISS'],
      githubUrl: 'https://github.com/Meetvaghela-code/AdaptiveRag',
      featured: true,
      details: {
        overview: 'An innovative RAG architecture that integrates Knowledge Graphs to enhance context retrieval and answer accuracy. Utilizes Langgraph for dynamic graph construction and querying.',
        features: ['Integration with Langgraph', 'External Knowledge Sources', 'Reliability Enhancements', 'Explainable AI Outputs'],
        challenges: 'langgraph integration, ensuring accurate retrieval, and reducing LLM hallucinations.',
        learnings: 'Knowledge graph construction, RAG pipelines, and multimedia LLM accuracy.'
      }
    },
    {
      id: 3,
      title: 'YouTube RAG Chatbot',
      subtitle: 'AI Video Analysis Ecosystem',
      category: 'Agentic & RAG',
      desc: 'Turn any YouTube video into an interactive knowledge base. Ask questions and get context-aware answers instantly.',
      size: 'col-md-6',
      layout: 'vertical',
      image: '/Youtube_chatbot.png',
      technologies: ['FastAPI', 'LangChain', 'Gemini', 'FAISS'],
      githubUrl: 'https://github.com/Meetvaghela-code/Youtube-Chatbot',
      featured: true,
      details: {
        overview: 'An advanced AI ecosystem that processes YouTube video transcripts to allow natural language Q&A. The system creates embeddings using LangChain and runs a RetrievalQA flow for accurate, grounded responses.',
        features: ['Video Analysis via API', 'Multi-Language Support', 'Smart RAG Pipeline', 'Instant Gemini Answers'],
        challenges: 'Handling diverse video content, ensuring accurate retrieval, and reducing LLM hallucinations.',
        learnings: 'Video transcript processing, RAG pipelines, and multimedia LLM accuracy.'
      }
    },
    {
      id: 4,
      title: 'Webionix Extension',
      subtitle: 'Chrome RAG Assistant',
      category: 'Agentic & RAG',
      desc: 'Chat with any active web page. A Chrome extension that brings RAG capabilities to your browser tab.',
      size: 'col-md-6',
      layout: 'vertical',
      image: '/webionix.png',
      technologies: ['Flask', 'LangChain', 'HuggingFace', 'Chrome API'],
      githubUrl: 'https://github.com/Meetvaghela-code/Webionix-Chome-Extension',
      featured: true,
      details: {
        overview: 'A Chrome extension that captures the active tab context and allows users to ask questions about the page content using a backend RAG pipeline.',
        features: ['Context-aware QA', 'Dynamic content fetching', 'Seamless Chrome Integration'],
        challenges: 'Parsing complex DOM structures and managing extension state.',
        learnings: 'Browser extension architecture and real-time backend integration.'
      }
    },
    {
      id: 5,
      title: 'AI Doc Assistant',
      subtitle: 'Intelligent Document Query',
      category: 'Agentic & RAG',
      desc: 'Upload PDFs or text files and query them using natural language with high accuracy.',
      size: 'col-md-6',
      layout: 'vertical',
      image: '/image.png',
      technologies: ['React', 'LangChain', 'Pinecone', 'Gemini'],
      githubUrl: 'https://github.com/Meetvaghela-code/Document_Chatbot',
      featured: false,
      details: {
        overview: 'A document intelligence platform where users upload files to a vector database for semantic search and Q&A.',
        features: ['Multi-format support', 'Vector Search (Pinecone)', 'Context retrieval'],
        challenges: 'Optimizing chunking strategies for large documents.',
        learnings: 'Vector database management and embedding optimization.'
      }
    },
    {
      id: 6,
      title: 'Healthcare AI',
      subtitle: 'Medical Prediction Portal',
      category: 'Machine Learning',
      desc: 'Predict disease risks (Heart, Diabetes, Lung) and get guidance via a medical chatbot.',
      size: 'col-md-6',
      layout: 'vertical',
      image: '/healthcare.webp',
      technologies: ['React', 'ML/DL', 'FastAPI', 'Bootstrap'],
      githubUrl: 'https://github.com/Meetvaghela-code/HealthcareAi',
      featured: true,
      details: {
        overview: 'A unified healthcare portal combining multiple ML models for disease prediction with an interactive chatbot for general medical advice.',
        features: ['Multi-disease models', 'Interactive Chatbot', 'Explainable AI'],
        challenges: 'Model integration and ensuring medical data accuracy.',
        learnings: 'Full-stack healthcare app design and multi-model deployment.'
      }
    },
    {
      id: 7,
      title: 'Sentiment Analysis',
      subtitle: 'NLP Feedback Classifier',
      category: 'NLP & ML',
      desc: 'Real-time text classification for tweets and user feedback.',
      size: 'col-md-6',
      layout: 'vertical',
      image: '/sentiment.jpg',
      technologies: ['Flask', 'Scikit-learn', 'NLTK'],
      githubUrl: 'https://github.com/Meetvaghela-code/Sentiment-Analysis',
      featured: false,
      details: {
        overview: 'An NLP tool using TF-IDF and ML classifiers to detect positive, negative, or neutral sentiment in text.',
        features: ['Real-time classification', 'Visual feedback', 'REST API'],
        challenges: 'Handling sarcasm and noisy text data.',
        learnings: 'NLP preprocessing and feature extraction.'
      }
    },
    {
      id: 8,
      title: 'Gesture Recognizer',
      subtitle: 'Computer Vision Control',
      category: 'Computer Vision',
      desc: 'Control interfaces using real-time hand gesture recognition.',
      size: 'col-md-6',
      layout: 'vertical',
      image: '/hand.jpg',
      technologies: ['OpenCV', 'MediaPipe', 'Flask'],
      githubUrl: 'https://github.com/Meetvaghela-code/Hand-Gesture-Recognizer',
      featured: false,
      details: {
        overview: 'A computer vision application that tracks hand landmarks to classify static gestures in real-time.',
        features: ['Landmark tracking', 'Gesture classification', 'Low latency'],
        challenges: 'Lighting conditions and occlusion handling.',
        learnings: 'MediaPipe integration and real-time inference optimization.'
      }
    }
  ];

  const categories = ['All', 'Agentic & RAG', 'Machine Learning', 'NLP & ML', 'Computer Vision'];

  const filteredProjects = activeFilter === 'All'
    ? projectList
    : projectList.filter(proj => proj.category === activeFilter);

  return (
    <div className="container py-5" style={{ maxWidth: '1200px', marginTop: '25px' }}>

      {/* --- HERO HEADER --- */}
      <div className="mb-5 text-center text-md-start position-relative">

        {/* Handwritten Annotation pointing to title */}
        <div className="position-absolute d-none d-md-block" style={{ top: '-10px', left: '160px', transform: 'rotate(-5deg)', zIndex: 10 }}>
          <span style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.2rem', color: '#DA7756' }}>
            Research & Deployments
          </span>
          <svg width="40" height="40" viewBox="0 0 100 100" style={{ position: 'absolute', top: '15px', left: '-25px', transform: 'rotate(80deg)' }}>
            <path d="M 20 80 Q 50 50 80 20" fill="none" stroke="#DA7756" strokeWidth="3" />
            <path d="M 60 20 L 80 20 L 75 40" fill="none" stroke="#DA7756" strokeWidth="3" />
          </svg>
        </div>

        <ScrollReveal direction="up" delay={0}>
          <div className="tracked-sub mb-2" style={{ color: 'var(--accent-color)' }}>PORTFOLIO // 02</div>
          <h1 className="fw-bold mb-3 display-3" style={{ letterSpacing: '-0.02em', fontFamily: 'var(--font-serif)' }}>Projects</h1>
          <p className="lead" style={{ maxWidth: '650px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            A collection of high-impact AI/ML applications, autonomous agentic frameworks, and full-stack engineering work.
          </p>
        </ScrollReveal>
      </div>

      {/* --- INTERACTIVE AGENTIC RAG FLOW VISUALIZER --- */}
      <ScrollReveal direction="up" delay={100} className="mb-5">
        <RagVisualizer />
      </ScrollReveal>

      {/* --- FILTER TABS --- */}
      <ScrollReveal direction="up" delay={150}>
        <div className="d-flex flex-wrap gap-2 mb-5 justify-content-center justify-content-md-start">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(cat)}
              className="btn rounded-pill px-4 py-2 text-decoration-none"
              style={{
                fontSize: '0.85rem',
                fontWeight: '500',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                backgroundColor: activeFilter === cat ? 'var(--accent-color)' : 'var(--border-color)',
                color: activeFilter === cat ? 'white' : 'var(--text-primary)',
                border: '1px solid transparent',
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== cat) {
                  e.currentTarget.style.backgroundColor = 'var(--border-medium)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== cat) {
                  e.currentTarget.style.backgroundColor = 'var(--border-color)';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* --- BENTO GRID --- */}
      <div className="row g-4">
        {filteredProjects.map((project, index) => (
          <div key={`${project.id}-${index}`} className="col-12 col-md-6 d-flex align-items-stretch" style={{ minHeight: '380px' }}>
            <ScrollReveal direction="up" delay={index * 50} className="w-100">
              <PaperLiftCard
                title={project.title}
                description={project.desc}
                link={project.githubUrl}
                tech={project.technologies.slice(0, 4)}
                status={project.featured ? "Featured" : project.category}
                annotation={project.subtitle}
                isDark={index % 2 === 0}
                onClick={() => handleProjectClick(project)}
                className="w-100"
              >
                {getProjectSketch(project.title)}
              </PaperLiftCard>
            </ScrollReveal>
          </div>
        ))}
      </div>

      {/* --- PROJECT DETAILS MODAL --- */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        contentClassName="border-0 bg-transparent"
        backdropClassName="claude-backdrop"
        animation={true}
      >
        <div className="apple-card p-0 overflow-hidden" style={{ maxHeight: '85vh', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-xl)' }}>

          {/* Header Image */}
          <div className="position-relative" style={{ height: '240px', flexShrink: 0 }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${selectedProject?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="position-absolute top-0 end-0 m-3">
              <button
                onClick={() => setShowModal(false)}
                className="btn rounded-circle p-2"
                style={{
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--card-bg)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              >
                <X />
              </button>
            </div>
            {/* Title Overlay */}
            <div
              className="position-absolute bottom-0 start-0 w-100 p-4"
              style={{ background: 'linear-gradient(to top, rgba(45, 43, 39, 0.9), transparent)' }}
            >
              <h3 className="fw-bold mb-0 text-white" style={{ fontFamily: 'var(--font-serif)' }}>{selectedProject?.title}</h3>
              <p className="small mb-0 text-white-50">{selectedProject?.subtitle}</p>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-4 p-md-5 overflow-auto" style={{ backgroundColor: 'var(--card-bg)' }}>
            {selectedProject && (
              <>
                <p className="lead mb-4" style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: '1.7' }}>
                  {selectedProject.details.overview}
                </p>

                {/* Simulated Agent Terminal Console */}
                <div className="mb-5">
                  <h6 className="tracked-sub mb-2" style={{ color: 'var(--text-muted)' }}>Active Agent Execution Logs</h6>
                  <div
                    className="p-3 rounded-3"
                    style={{
                      backgroundColor: '#1A1915',
                      color: '#B5AFA5',
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: '0.75rem',
                      minHeight: '140px',
                      border: '1px solid rgba(218, 119, 86, 0.2)',
                      maxHeight: '200px',
                      overflowY: 'auto'
                    }}
                  >
                    {activeLogs.map((log, idx) => (
                      <div key={idx} className="mb-1.5" style={{ lineHeight: '1.4' }}>
                        <span style={{ color: '#27c93f', marginRight: '6px' }}>&gt;</span> {log}
                      </div>
                    ))}
                    {activeLogs.length < (projectLogs[selectedProject.title] || []).length && (
                      <div className="thinking-dots mt-1" style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        Executing reasoning step...
                      </div>
                    )}
                  </div>
                </div>

                <div className="row g-5">
                  <div className="col-md-7">
                    <h6 className="tracked-sub mb-3" style={{ color: 'var(--text-muted)' }}>Key Features</h6>
                    <ul className="list-unstyled">
                      {selectedProject.details.features.map((feature, i) => (
                        <li key={i} className="mb-3 d-flex align-items-start gap-2">
                          <div className="mt-1.5 rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-color)', flexShrink: 0 }} />
                          <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-md-5">
                    <div className="p-4 rounded-4 mb-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <h6 className="tracked-sub mb-3" style={{ color: 'var(--text-muted)' }}>Tech Stack</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <span
                            key={tech}
                            className="badge rounded-pill py-2 px-3"
                            style={{
                              backgroundColor: 'var(--card-bg)',
                              color: 'var(--text-primary)',
                              border: '1px solid var(--border-color)',
                              boxShadow: 'var(--shadow-sm)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold small" style={{ color: 'var(--text-muted)' }}>Challenges</h6>
                      <p className="small" style={{ color: 'var(--text-secondary)' }}>{selectedProject.details.challenges}</p>
                    </div>
                    <div>
                      <h6 className="fw-bold small" style={{ color: 'var(--text-muted)' }}>Key Learnings</h6>
                      <p className="small" style={{ color: 'var(--text-secondary)' }}>{selectedProject.details.learnings}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 text-end" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
            <a
              href={selectedProject?.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn rounded-pill px-4 py-2 fw-medium d-inline-flex align-items-center gap-2"
              style={{
                backgroundColor: 'var(--btn-bg)',
                color: 'var(--btn-text)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <Github /> View Source Code
            </a>
          </div>
        </div>
      </Modal>

      <style>{`
        .claude-backdrop {
          backdrop-filter: blur(8px);
          background-color: rgba(45, 43, 39, 0.3);
        }
        [data-theme='dark'] .claude-backdrop {
          background-color: rgba(0, 0, 0, 0.5);
        }
        .apple-card {
          border-radius: 16px !important;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .apple-card:hover {
          transform: translateY(-6px) !important;
          border-color: rgba(218, 119, 86, 0.35) !important;
          box-shadow: 0 20px 40px rgba(218, 119, 86, 0.06) !important;
        }
        [data-theme='dark'] .apple-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
        }
        .apple-card:hover .project-img-hover {
          transform: scale(1.08);
        }
        .apple-card:hover .project-polaroid-frame {
          transform: rotate(2deg) scale(1.02);
          outline-color: var(--accent-color) !important;
        }
        .project-polaroid-frame {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), outline-color 0.4s ease;
          transform: rotate(-1deg);
        }
        .apple-card:hover .explore-arrow {
          transform: translateX(4px);
        }
        .project-desc-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          height: 4.8em;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default Projects;