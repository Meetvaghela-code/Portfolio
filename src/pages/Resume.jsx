import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

// --- Inline SVG Icons ---
const Download = ({ size = 18 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
  </svg>
);

const Briefcase = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} fill="currentColor" className={className} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
  </svg>
);

const Mortarboard = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} fill="currentColor" className={className} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
  </svg>
);

const Calendar3 = ({ size = 12 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

const GeoAlt = ({ size = 12 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
);

const Award = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} fill="currentColor" className={className} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072.138 1.486.457 5.189-4.319-3.24-4.319 3.24.457-5.189.138-1.486 1.086-1.072.684-1.365 1.512-.229L8 1.126l1.355.702 1.512.229z" />
    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
  </svg>
);

const CheckCircle = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
  </svg>
);

const Resume = () => {
  const experienceData = [
    {
      role: 'AI/ML Intern',
      company: 'McKH Technologies',
      location: 'Hybrid',
      date: 'Dec 2025 - Apr 2026',
      description: 'Gaining hands-on experience at McKH Technologies in developing and deploying AI agents, RAG-based applications, and automated workflows using cutting-edge LLM frameworks.',
      highlights: [
        'Designed and deployed intelligent agentic workflows bridging LLMs with API integrations.',
        'Engineered scalable Retrieval-Augmented Generation (RAG) pipelines for complex document structures.',
        'Automated business logic and data extraction using n8n and LangChain.'
      ],
      tags: ["Python", "N8N", "Agentic Frameworks", "RAG"]
    },
    {
      role: "Machine Learning Intern",
      company: "CodeSoft",
      location: "Remote",
      date: "July 2025 - Aug 2025",
      description: "Worked as an ML Developer Intern, gaining hands-on experience in building, deploying, and optimizing machine learning and NLP applications.",
      highlights: [
        "Architected and deployed ML models using Flask for real-world text classification.",
        "Optimized NLP workflows resulting in faster preprocessing and tokenization pipelines.",
        "Conducted extensive model evaluation and tuning to enhance prediction accuracy."
      ],
      tags: ["Python", "Flask", "NLP"]
    },
    {
      role: "ML Engineer Intern",
      company: "CODECRAFT INFOTECH",
      location: "Remote",
      date: "July 2025",
      description: "Worked on machine learning projects encompassing classification, regression, and pattern recognition, with end-to-end model deployment.",
      highlights: [
        "Implemented end-to-end ML workflows including rigorous data preprocessing and feature engineering.",
        "Deployed interactive predictive models via Streamlit and built robust backend APIs with Flask.",
        "Trained high-accuracy models using Scikit-Learn and TensorFlow on structured datasets."
      ],
      tags: ["TensorFlow", "Scikit-Learn", "Streamlit"]
    }
  ];

  const educationData = [
    {
      degree: "Bachelor of Computer Science",
      school: "ITM SLS Baroda University",
      location: "Vadodara, India",
      year: "2022 - 2026",
      gpa: "9.20/10",
      description: "Focused on software engineering, algorithms, and web technologies."
    }
  ];

  const certificationsData = [
    { name: "Python for Data Science", issuer: "IBM", year: "2025" },
    { name: "Introduction to Data Analytics", issuer: "IBM", year: "2024" },
    { name: "AI Engineer", issuer: "United Latino Students Association", year: "2025" },
    { name: "Data Visualisation", issuer: "Forage", year: "2024" },
    { name: "AI", issuer: "Anthropic", year: "2026" },
  ];

  const engineeringToolbox = [
    { category: "Languages", skills: ["Python", "JavaScript / TypeScript", "SQL"] },
    { category: "AI & ML", skills: ["TensorFlow", "Scikit-Learn", "OpenCV", "Pandas", "NumPy"] },
    { category: "LLM Engineering", skills: ["LangChain", "LangGraph", "Crew AI", "Autogen", "RAG Systems", "Generative AI"] },
    { category: "Backend & Automation", skills: ["Flask", "FastAPI", "N8N", "Docker", "Git"] }
  ];

  return (
    <div className="container py-5 fade-up" style={{ maxWidth: '1100px', marginTop: '25px' }}>

      {/* --- HEADER SECTION --- */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-3 pb-3 border-bottom position-relative" style={{ borderColor: 'var(--border-color)' }}>

        {/* Handwritten Annotation pointing to title */}
        <div className="position-absolute d-none d-md-block" style={{ top: '-10px', left: '160px', transform: 'rotate(-5deg)', zIndex: 10 }}>
          <span style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.2rem', color: '#DA7756' }}>
            Career history!
          </span>
          <svg width="40" height="40" viewBox="0 0 100 100" style={{ position: 'absolute', top: '15px', left: '-25px', transform: 'rotate(80deg)' }}>
            <path d="M 20 80 Q 50 50 80 20" fill="none" stroke="#DA7756" strokeWidth="3" />
            <path d="M 60 20 L 80 20 L 75 40" fill="none" stroke="#DA7756" strokeWidth="3" />
          </svg>
        </div>

        <div className="w-100 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <ScrollReveal direction="up" delay={0}>
            <div className="tracked-sub mb-2" style={{ color: 'var(--accent-color)' }}>RESUME // 03</div>
            <h1 className="fw-bold mb-1 display-3" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-0.02em' }}>Professional Log</h1>
            <p className="text-secondary mb-0 lead" style={{ fontSize: '1.1rem' }}>A record of projects, roles, and technical milestones.</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <a
              href="public/Meet_Vaghela_Resume.pdf"
              download
              className="btn sketch-border d-flex align-items-center gap-2 fw-bold px-4 py-2"
              style={{
                backgroundColor: 'var(--accent-color)',
                color: '#FDFCFA',
                border: '2px solid var(--accent-color)',
                boxShadow: '0 4px 15px rgba(218, 119, 86, 0.2)'
              }}
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </ScrollReveal>
        </div>
      </div>

      <div className="row g-5">

        {/* --- LEFT COLUMN: EXPERIENCE TIMELINE --- */}
        <div className="col-lg-7">
          <ScrollReveal direction="up" delay={150}>
            <h4 className="mb-4 d-flex align-items-center gap-2 fw-bold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
              <Briefcase size={22} style={{ color: 'var(--accent-color)' }} /> Experience Log
            </h4>
          </ScrollReveal>

          <div className="d-flex flex-column gap-5 position-relative">
            {/* Dashed Timeline Line */}
            <div className="position-absolute h-100 d-none d-md-block" style={{ left: '1.5rem', top: '2rem', width: '2px', borderLeft: '2px dashed var(--border-color)', zIndex: 0 }}></div>

            {experienceData.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100 + 200} className="w-100">
                <div className="d-flex flex-column flex-md-row gap-4 position-relative z-1">

                  {/* Timeline Node & Date */}
                  <div className="d-flex flex-md-column align-items-center align-items-md-end gap-3 pt-3" style={{ minWidth: '130px' }}>
                    <div className="d-none d-md-flex align-items-center justify-content-center bg-body" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid var(--accent-color)', zIndex: 2 }}>
                      <Briefcase size={20} style={{ color: 'var(--accent-color)' }} />
                    </div>
                    <span
                      className="text-md-end"
                      style={{
                        fontFamily: 'var(--font-handwriting)',
                        fontSize: '1.1rem',
                        color: 'var(--accent-color)',
                        transform: 'rotate(-2deg)'
                      }}
                    >
                      {item.date}
                    </span>
                  </div>

                  {/* Experience Card (Notebook Paper) */}
                  <div
                    className="p-4 p-md-5 rounded-4 flex-grow-1 position-relative hover-lift-card"
                    style={{
                      background: 'var(--card-bg, #FDFCFA)',
                      border: '1px solid var(--border-color)',
                      boxShadow: '4px 4px 0px rgba(0,0,0,0.05)'
                    }}
                  >
                    <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ filter: 'url(#pencil-texture)', pointerEvents: 'none' }}></div>

                    <div className="position-relative z-1">
                      <h4 className="mb-1 fw-bold" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>{item.role}</h4>

                      <div className="d-flex flex-wrap align-items-center gap-3 mb-3 small fw-bold" style={{ color: 'var(--text-secondary)' }}>
                        <span className="d-flex align-items-center gap-1">
                          <span style={{ color: 'var(--accent-color)' }}>@</span> {item.company}
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <GeoAlt size={12} /> {item.location}
                        </span>
                      </div>

                      <p className="mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>

                      <div className="mb-4">
                        <h6 className="small text-uppercase tracked-sub mb-3" style={{ color: 'var(--text-muted)' }}>Project Highlights & Impact</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className="d-flex align-items-start gap-2" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                              <CheckCircle size={14} className="mt-1" style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="d-flex flex-wrap gap-2 mt-auto">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="sketch-border px-3 py-1 fw-bold"
                            style={{
                              fontSize: '0.75rem',
                              color: 'var(--text-secondary)',
                              border: '1px solid var(--border-color)',
                              background: 'transparent'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN: EDUCATION & SKILLS --- */}
        <div className="col-lg-5">

          {/* Education (Certificate Style) */}
          <div className="mb-5">
            <ScrollReveal direction="up" delay={200}>
              <h4 className="mb-4 d-flex align-items-center gap-2 fw-bold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
                <Mortarboard size={22} style={{ color: 'var(--accent-color)' }} /> Academic Record
              </h4>
            </ScrollReveal>

            {educationData.map((edu, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100 + 250}>
                <div
                  className="p-4 rounded-3 position-relative hover-lift-card d-flex flex-column"
                  style={{
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-color)',
                    boxShadow: 'inset 0 0 0 4px var(--card-bg), 0 4px 20px rgba(0,0,0,0.03)'
                  }}
                >
                  <div className="position-absolute top-0 end-0 m-3 opacity-25">
                    <Award size={40} style={{ color: 'var(--accent-color)' }} />
                  </div>
                  <h5 className="fw-bold mb-2 pe-5" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>{edu.degree}</h5>
                  <h6 className="mb-3" style={{ color: 'var(--text-secondary)' }}>{edu.school}</h6>

                  <p className="small mb-4" style={{ color: 'var(--text-muted)' }}>{edu.description}</p>

                  <div className="d-flex justify-content-between align-items-end mt-auto pt-3 border-top" style={{ borderColor: 'var(--border-light)' }}>
                    <div>
                      <div className="small fw-bold text-uppercase mb-1" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>Timeline</div>
                      <div className="small" style={{ color: 'var(--text-secondary)' }}>{edu.year}</div>
                    </div>
                    <div className="text-end">
                      <div className="small fw-bold text-uppercase mb-1" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>CGPA</div>
                      <div className="fw-bold" style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>{edu.gpa}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Engineering Toolbox (Categorized Skills) */}
          <div className="mb-5">
            <ScrollReveal direction="up" delay={300}>
              <h4 className="mb-4 d-flex align-items-center gap-2 fw-bold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
                Engineering Toolbox
              </h4>
            </ScrollReveal>

            <div className="d-flex flex-column gap-4">
              {engineeringToolbox.map((group, index) => (
                <ScrollReveal key={index} direction="up" delay={350 + (index * 50)}>
                  <div>
                    <h6 className="small text-uppercase tracked-sub mb-3" style={{ color: 'var(--accent-color)' }}>{group.category}</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {group.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="sketch-border px-3 py-1"
                          style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border-color)',
                            background: 'var(--card-bg)'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Certifications (Stacked Cards) */}
          <div className="mb-5">
            <ScrollReveal direction="up" delay={450}>
              <h4 className="mb-4 d-flex align-items-center gap-2 fw-bold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
                <Award size={22} style={{ color: 'var(--accent-color)' }} /> Certifications
              </h4>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={500}>
              <div className="position-relative">
                {certificationsData.map((cert, index) => (
                  <div
                    key={index}
                    className="p-3 mb-2 rounded-3 hover-lift-card d-flex justify-content-between align-items-center"
                    style={{
                      background: 'var(--card-bg)',
                      border: '1px solid var(--border-color)',
                      transform: index % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)',
                      boxShadow: '2px 2px 0 rgba(0,0,0,0.03)'
                    }}
                  >
                    <div>
                      <h6 className="mb-1 fw-bold" style={{ fontSize: '0.9rem' }}>{cert.name}</h6>
                      <div className="small" style={{ color: 'var(--text-secondary)' }}>{cert.issuer}</div>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-handwriting)',
                        color: 'var(--accent-color)',
                        fontSize: '1.1rem'
                      }}
                    >
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      <style>{`
        .sketch-border {
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
          transition: transform 0.2s;
        }
        .sketch-border:hover {
          transform: scale(1.05) rotate(-1deg);
          border-color: var(--accent-color) !important;
        }
        .hover-lift-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .hover-lift-card:hover {
          transform: translateY(-4px) rotate(0deg) !important;
          box-shadow: 0 12px 24px rgba(0,0,0,0.08) !important;
          border-color: var(--accent-color) !important;
        }
        [data-theme='dark'] .hover-lift-card:hover {
          box-shadow: 0 12px 24px rgba(0,0,0,0.3) !important;
        }
      `}</style>
    </div>
  );
};

export default Resume;