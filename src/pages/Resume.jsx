import React from 'react';

// --- Inline SVG Icons (No external dependencies) ---
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

const Resume = () => {
  const experienceData = [
    {
      role: 'AI/ML Intern',
      company: 'McKH Technologies',
      location: 'Hybrid',
      date: 'Dec 2025 - Apr 2026',
      description: 'Gaining hands-on experience at McKH Technologies in developing and deploying AI agents, RAG-based applications, and automated workflows using cutting-edge LLM frameworks.',
      achievements: [
        'Contributed to the design and deployment of AI-powered solutions, gaining hands-on experience across the full development lifecycle.',
        'Applied LLM frameworks and automation tools to solve real-world business problems, improving workflow efficiency across multiple use cases.',
        'Collaborated on building intelligent systems that combined retrieval, reasoning, and automation to deliver practical, production-ready outcomes.'
      ],
      tags: ["Python", "N8N", "Agentic Frameworks", "RAG"]
    },
    {
      role: "Machine Learning Intern",
      company: "CodeSoft",
      location: "Remote",
      date: "July - Aug 2025",
      description: "Worked as an ML Developer Intern, gaining hands-on experience in building, deploying, and optimizing machine learning and NLP applications.",
      achievements: [
        "Developed and deployed ML models using Flask for real-world applications.",
        "Gained practical exposure to NLP and machine learning workflows.",
        "Enhanced problem-solving skills by breaking down complex ML tasks."
      ],
      tags: ["Python", "Flask", "NLP"]
    },
    {
      role: "ML Engineer Intern",
      company: "CODECRAFT INFOTECH",
      location: "Remote",
      date: "July 2025",
      description: "Worked on machine learning projects encompassing classification, regression, and pattern recognition, with end-to-end model deployment.",
      achievements: [
        "Implemented ML workflows: preprocessing, training, and evaluation.",
        "Deployed ML models using Flask and Streamlit.",
        "Built and optimized predictive models using Scikit-Learn and TensorFlow."
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
      gpa: "9.05/10",
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

  const skills = [
    "Python", "Machine Learning", "Deep Learning",
    "LangChain", "NLP", "Computer Vision", "Langgraph",
    "Flask", "React.js", "Docker", "Git", "N8N"
  ];

  return (
    <div className="container py-5 fade-up" style={{ maxWidth: '1000px' }}>

      {/* --- HEADER SECTION --- */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-3">
        <div>
          <h1 className="fw-bold mb-1 display-5">Resume</h1>
          <p className="text-secondary mb-0 lead">My professional journey and milestones.</p>
        </div>

        <a
          href="public/Resume.pdf"
          download
          className="btn btn-apple d-flex align-items-center gap-2 shadow-sm"
        >
          <Download size={18} />
          <span>Download CV</span>
        </a>
      </div>

      <div className="row g-5">

        {/* --- LEFT COLUMN: EXPERIENCE --- */}
        <div className="col-lg-8">
          <h4 className="mb-4 d-flex align-items-center gap-2 text-primary fw-bold">
            <Briefcase size={22} /> Experience
          </h4>

          <div className="d-flex flex-column gap-4">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="apple-card p-4 position-relative overflow-hidden"
                style={{ transition: 'transform 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {/* Connector Line */}
                {index !== experienceData.length - 1 && (
                  <div
                    className="position-absolute d-none d-md-block"
                    style={{
                      left: '2rem',
                      bottom: '-2rem',
                      width: '2px',
                      height: '2rem',
                      background: 'rgba(0,0,0,0.05)',
                      zIndex: 0
                    }}
                  />
                )}

                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start mb-3 gap-2">
                  <div>
                    <h5 className="mb-1 fw-bold">{item.role}</h5>
                    <div className="d-flex align-items-center gap-3 text-secondary small">
                      <span className="d-flex align-items-center gap-1">
                        <Briefcase size={12} /> {item.company}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <GeoAlt size={12} /> {item.location}
                      </span>
                    </div>
                  </div>
                  <span className="badge bg-light text-dark border rounded-pill px-3 py-2 fw-medium">
                    {item.date}
                  </span>
                </div>

                <p className="mb-2 text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {item.description}
                </p>

                {/* Achievements List */}
                <ul className="mb-3 text-secondary small ps-3">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="mb-1">{achievement}</li>
                  ))}
                </ul>

                <div className="d-flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="badge bg-secondary bg-opacity-10 text-secondary border fw-normal rounded-pill px-2 py-1"
                      style={{ fontSize: '0.75rem' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN: EDUCATION & SKILLS --- */}
        <div className="col-lg-4">

          {/* Education */}
          <div className="mb-5">
            <h4 className="mb-4 d-flex align-items-center gap-2 text-primary fw-bold">
              <Mortarboard size={22} /> Education
            </h4>
            {educationData.map((edu, index) => (
              <div key={index} className="apple-card p-4 mb-3">
                <h6 className="fw-bold mb-1">{edu.degree}</h6>
                <p className="mb-1 text-dark fw-medium">{edu.school}</p>
                <div className="text-secondary small mb-2">{edu.location}</div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="d-inline-flex align-items-center gap-2 px-2 py-1 bg-light rounded text-secondary small">
                    <Calendar3 size={12} /> {edu.year}
                  </div>
                  <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mb-5">
            <h4 className="mb-4 d-flex align-items-center gap-2 text-primary fw-bold">
              <Award size={22} /> Certifications
            </h4>
            <div className="apple-card p-3">
              {certificationsData.map((cert, index) => (
                <div key={index} className={`d-flex align-items-start gap-3 ${index !== certificationsData.length - 1 ? 'mb-3 border-bottom pb-3' : ''}`}>
                  <div className="mt-1">
                    <Award className="text-warning" size={16} />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold small">{cert.name}</h6>
                    <div className="text-secondary small d-flex justify-content-between w-100 gap-3">
                      <span>{cert.issuer}</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="mb-4 d-flex align-items-center gap-2 text-primary fw-bold">
              Skills
            </h4>
            <div className="apple-card p-4">
              <div className="d-flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="badge bg-white border text-dark py-2 px-3 rounded-pill fw-medium shadow-sm transition-hover"
                    style={{ fontSize: '0.85rem' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;