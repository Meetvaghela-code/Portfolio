import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

// --- Inline SVG Icons (No external dependencies) ---
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

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const projectList = [
    {
      id: 1,
      title: 'Apex-Agent',
      subtitle: ' A SECURE MULTI-MODAL AUTONOMOUS FRAMEWORK',
      desc: 'Apex-Agent is an innovative framework designed to bridge the gap between static Large Language Models and autonomous execution. Imagine an AI system securely acting as an autonomous agent that maintains context over long continuous sessions while strictly ensuring operational safety. With Apex-Agent, users benefit from a multi-tier memory structure and a human-in-the-loop action lifecycle that securely manages tasks ranging from friendly interactions to complex automation. The platform leverages Model Context Protocol (MCP) technologies, enabling your AI companion to execute dynamic tasks in an isolated sandbox and adapt to interactions over time without the risk of unverified or hallucinated destructive actions, fostering a trustworthy human-AI system.',
      size: 'col-md-8', // Wide Card
      layout: 'vertical', // Image left, text right
      image: '/apex.png',
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
      id: 1,
      title: 'Adaptive RAG',
      subtitle: 'Knowledge Graph-Enhanced RAG System',
      desc: 'AdaptiveRAG — a research-to-product prototype that fuses Knowledge Graphs with RAG to deliver faster, more accurate, and explainable AI answers.',
      size: 'col-md-8', // Wide Card
      layout: 'horizontal', // Image left, text right
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
      id: 1,
      title: 'YouTube RAG Chatbot',
      subtitle: 'AI Video Analysis Ecosystem',
      desc: 'Turn any YouTube video into an interactive knowledge base. Ask questions and get context-aware answers instantly.',
      size: 'col-md-8', // Wide Card
      layout: 'horizontal', // Image left, text right
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
      id: 2,
      title: 'Webionix Extension',
      subtitle: 'Chrome RAG Assistant',
      desc: 'Chat with any active web page. A Chrome extension that brings RAG capabilities to your browser tab.',
      size: 'col-md-4', // Tall Card
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
      id: 3,
      title: 'AI Doc Assistant',
      subtitle: 'Intelligent Document Query',
      desc: 'Upload PDFs or text files and query them using natural language with high accuracy.',
      size: 'col-md-4',
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
      id: 4,
      title: 'Healthcare AI',
      subtitle: 'Medical Prediction Portal',
      desc: 'Predict disease risks (Heart, Diabetes, Lung) and get guidance via a medical chatbot.',
      size: 'col-md-8', // Wide Card
      layout: 'horizontal',
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
      id: 5,
      title: 'Sentiment Analysis',
      subtitle: 'NLP Feedback Classifier',
      desc: 'Real-time text classification for tweets and user feedback.',
      size: 'col-md-4',
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
      id: 6,
      title: 'Gesture Recognizer',
      subtitle: 'Computer Vision Control',
      desc: 'Control interfaces using real-time hand gesture recognition.',
      size: 'col-md-4',
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

  return (
    <div className="container py-5" style={{ maxWidth: '1200px' }}>

      {/* --- HERO HEADER --- */}
      <div className="mb-5 fade-up text-center text-md-start">
        <h1 className="fw-bold mb-2 display-4" style={{ letterSpacing: '-0.02em' }}>Projects</h1>
        <p className="lead text-secondary" style={{ maxWidth: '600px' }}>
          A collection of high-impact AI/ML applications and full-stack engineering work.
        </p>
      </div>

      {/* --- BENTO GRID --- */}
      <div className="row g-4">
        {projectList.map((project, index) => (
          <div key={project.id} className={`${project.size} fade-up`} style={{ animationDelay: `${index * 0.1}s` }}>
            <div
              className="apple-card h-100 overflow-hidden cursor-pointer border-0"
              onClick={() => handleProjectClick(project)}
              style={{
                cursor: 'pointer',
                minHeight: '320px',
                background: 'white',
                position: 'relative',
                transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
              }}
            >
              {/* Internal Layout Logic */}
              <div className={`d-flex h-100 ${project.layout === 'horizontal' ? 'flex-column flex-md-row' : 'flex-column'}`}>

                {/* Image Section */}
                <div
                  className={`${project.layout === 'horizontal' ? 'col-md-6 order-md-2' : 'col-12'} position-relative overflow-hidden`}
                  style={{ minHeight: '200px' }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.5s ease',
                    }}
                    className="project-img-hover"
                  />
                  {/* Featured Badge Overlay */}
                  {project.featured && (
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-white text-dark shadow-sm d-flex align-items-center gap-1 px-3 py-2 rounded-pill">
                        <StarFill /> Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className={`p-4 d-flex flex-column justify-content-center ${project.layout === 'horizontal' ? 'col-md-6 order-md-1' : 'col-12'}`}>
                  <div className="mb-auto">
                    <span className="text-uppercase small fw-bold text-secondary mb-2 d-block" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                      {project.subtitle}
                    </span>
                    <h3 className="h4 fw-bold mb-2 text-dark">{project.title}</h3>
                    <p className="text-secondary small mb-4" style={{ lineHeight: '1.6' }}>
                      {project.desc}
                    </p>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="badge bg-secondary bg-opacity-10 text-secondary border fw-normal px-2 py-1"
                          style={{ fontSize: '0.7rem', borderRadius: '6px' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="btn btn-sm btn-light rounded-circle p-2 shadow-sm border">
                      <Eye />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- PROJECT DETAILS MODAL (iOS Sheet Style) --- */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        contentClassName="border-0 bg-transparent"
        backdropClassName="glass-backdrop"
        animation={true}
      >
        <div className="apple-card p-0 overflow-hidden shadow-2xl" style={{ maxHeight: '85vh', display: 'flex', flexDirection: 'column' }}>

          {/* Header Image Area */}
          <div className="position-relative" style={{ height: '200px' }}>
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
                className="btn btn-light rounded-circle p-2 shadow-sm"
                style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X />
              </button>
            </div>
            {/* Title Overlay */}
            <div
              className="position-absolute bottom-0 start-0 w-100 p-4"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
            >
              <h3 className="text-white fw-bold mb-0">{selectedProject?.title}</h3>
              <p className="text-white-50 small mb-0">{selectedProject?.subtitle}</p>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-4 p-md-5 overflow-auto bg-white">
            {selectedProject && (
              <>
                <p className="lead text-dark mb-5" style={{ fontSize: '1.1rem' }}>
                  {selectedProject.details.overview}
                </p>

                <div className="row g-5">
                  <div className="col-md-7">
                    <h6 className="fw-bold text-uppercase small text-secondary mb-3">Key Features</h6>
                    <ul className="list-unstyled">
                      {selectedProject.details.features.map((feature, i) => (
                        <li key={i} className="mb-3 d-flex align-items-start gap-2">
                          <div className="mt-1 bg-primary rounded-circle" style={{ width: '6px', height: '6px' }} />
                          <span className="text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-md-5">
                    <div className="p-4 bg-light rounded-4 mb-4">
                      <h6 className="fw-bold text-uppercase small text-secondary mb-3">Tech Stack</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <span key={tech} className="badge bg-white text-dark border shadow-sm rounded-pill py-2 px-3">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold small text-secondary">Challenges</h6>
                      <p className="small text-muted">{selectedProject.details.challenges}</p>
                    </div>
                    <div>
                      <h6 className="fw-bold small text-secondary">Key Learnings</h6>
                      <p className="small text-muted">{selectedProject.details.learnings}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Action */}
          <div className="p-4 bg-light border-top text-end">
            <a
              href={selectedProject?.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark rounded-pill px-4 py-2 fw-medium d-inline-flex align-items-center gap-2"
            >
              <Github /> View Source Code
            </a>
          </div>
        </div>
      </Modal>

      <style>{`
        .glass-backdrop {
          backdrop-filter: blur(12px);
          background-color: rgba(255, 255, 255, 0.2);
        }
        .apple-card:hover .project-img-hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Projects;