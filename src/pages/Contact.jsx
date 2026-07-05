import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

// --- Inline SVG Icons ---
const Envelope = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
  </svg>
);

const Phone = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

const GeoAlt = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
);

const Github = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const Linkedin = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
  </svg>
);

const Twitter = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
  </svg>
);

const Instagram = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546-.453-.92.598-.282.11-.705.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.486-.276a2.478 2.478 0 0 1-.919-.598 2.48 2.48 0 0 1-.599-.92c-.11-.281-.24-.705-.276-1.485-.038-.843-.047-1.096-.047-3.232 0-2.136.009-2.388.047-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
  </svg>
);

const Send = ({ size = 18 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
  </svg>
);

const CheckCircle = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
  </svg>
);

const Clock = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
  </svg>
);

const CustomAirplaneSVG = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ maxWidth: '350px' }}>
    {/* Flight path dashed line */}
    <path d="M 10,85 Q 25,100 45,75 T 85,35" fill="none" stroke="var(--accent-color)" strokeWidth="3" strokeDasharray="6,6" style={{ opacity: 0.6 }} />
    {/* Outline Shadow (for depth in dark mode) */}
    <path d="M 22,42 L 87,22 L 62,87 L 52,57 Z" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="6" strokeLinejoin="round" />
    {/* Main Paper Airplane */}
    <path d="M 20,40 L 85,20 L 60,85 L 50,55 Z" fill="var(--card-bg)" stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round" />
    {/* Folds */}
    <path d="M 85,20 L 50,55 L 40,75 L 60,85" fill="none" stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round" />
    <path d="M 20,40 L 50,55" fill="none" stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round" />

    {/* Small decorative stars/sparks */}
    <circle cx="85" cy="10" r="1.5" fill="var(--accent-color)" />
    <circle cx="95" cy="25" r="2" fill="var(--accent-color)" />
    <circle cx="75" cy="5" r="1" fill="var(--accent-color)" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: Envelope,
      title: 'Email',
      value: 'meetv8540@gmail.com',
      href: 'mailto:meetv8540@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: GeoAlt,
      title: 'Location',
      value: 'Vadodara, India',
      href: 'https://maps.google.com/?q=Vadodara,India',
    }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: 'https://github.com/Meetvaghela-code' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/vaghelameet' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/meett.vaghela' }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message should be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Placeholder for your backend endpoint that will run NodeMailer
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...formData
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
      setTimeout(() => setSubmitStatus(null), 6000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-5 fade-up" style={{ maxWidth: '1100px', marginTop: '25px' }}>

      {/* Header & Animation */}
      <div className="row align-items-center mb-5 pb-3 border-bottom position-relative" style={{ borderColor: 'var(--border-color)' }}>

        {/* Handwritten Annotation pointing to title */}
        <div className="position-absolute d-none d-md-block" style={{ top: '-10px', left: '160px', transform: 'rotate(-5deg)', zIndex: 10 }}>
          <span style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.2rem', color: '#DA7756' }}>
            Always online!
          </span>
          <svg width="40" height="40" viewBox="0 0 100 100" style={{ position: 'absolute', top: '15px', left: '-25px', transform: 'rotate(80deg)' }}>
            <path d="M 20 80 Q 50 50 80 20" fill="none" stroke="#DA7756" strokeWidth="3" />
            <path d="M 60 20 L 80 20 L 75 40" fill="none" stroke="#DA7756" strokeWidth="3" />
          </svg>
        </div>

        <div className="col-lg-7 text-center text-lg-start mb-4 mb-lg-0">
          <ScrollReveal direction="up" delay={0}>
            <div className="tracked-sub mb-2" style={{ color: 'var(--accent-color)' }}>CONTACT // 04</div>
            <h1 className="fw-bold display-3 mb-3" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-0.02em' }}>Let's Connect</h1>
            <p className="lead mx-auto mx-lg-0" style={{ maxWidth: '600px', color: 'var(--text-secondary)' }}>
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </ScrollReveal>
        </div>
        <div className="col-lg-5">
          <ScrollReveal direction="left" delay={50}>
            <div className="d-flex justify-content-center justify-content-lg-end align-items-center" style={{ height: '250px' }}>
              <CustomAirplaneSVG />
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="row g-5">

        {/* Left Column: Info & Status */}
        <div className="col-lg-5">
          <div className="d-flex flex-column gap-5">

            {/* Availability Status */}
            <ScrollReveal direction="left" delay={100}>
              <div className="p-4 rounded-4 position-relative" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', boxShadow: '4px 4px 0px rgba(0,0,0,0.03)' }}>
                <h6 className="small text-uppercase tracked-sub mb-3" style={{ color: 'var(--text-muted)' }}>Current Status</h6>

                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="pulse-indicator flex-shrink-0"></div>
                  <span className="fw-bold" style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>Open to Freelancing Opportunities</span>
                </div>

                <div className="d-flex align-items-center gap-2 small" style={{ color: 'var(--text-secondary)' }}>
                  <Clock size={14} style={{ color: 'var(--accent-color)' }} /> Expected response time: 1-2 days
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Info Cards */}
            <div className="d-flex flex-column gap-3">
              <ScrollReveal direction="left" delay={200}>
                <h6 className="small text-uppercase tracked-sub mb-2" style={{ color: 'var(--text-muted)' }}>Direct Lines</h6>
              </ScrollReveal>

              {contactInfo.map((info, index) => (
                <ScrollReveal key={index} direction="left" delay={index * 100 + 250}>
                  <a
                    href={info.href}
                    className="p-3 d-flex align-items-center gap-3 text-decoration-none hover-lift-card rounded-3"
                    style={{
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      color: 'inherit',
                      background: 'var(--bg-color)',
                      border: '1px solid var(--border-color)',
                      transform: index % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)',
                    }}
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: '42px',
                        height: '42px',
                        backgroundColor: 'rgba(218, 119, 86, 0.08)',
                        color: 'var(--accent-color)'
                      }}
                    >
                      <info.icon size={18} />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold small text-uppercase" style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{info.title}</h6>
                      <span className="fw-bold" style={{ color: 'var(--text-primary)' }}>{info.value}</span>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            {/* Social Links */}
            <ScrollReveal direction="left" delay={400}>
              <div>
                <h6 className="small text-uppercase tracked-sub mb-3" style={{ color: 'var(--text-muted)' }}>Social Network</h6>
                <div className="d-flex gap-3 justify-content-start">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn p-0 d-flex align-items-center justify-content-center sketch-border social-link-btn"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'var(--card-bg)',
                        color: 'var(--text-secondary)',
                        border: '2px solid var(--border-color)'
                      }}
                      title={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Right Column: Contact Form (The Letterhead) */}
        <div className="col-lg-7">
          <ScrollReveal direction="right" delay={200} className="h-100">
            <div
              className="p-4 p-md-5 rounded-4 position-relative h-100 d-flex flex-column"
              style={{
                background: 'var(--card-bg, #FDFCFA)',
                border: '1px solid var(--border-color)',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.05)'
              }}
            >
              {/* Paper Texture Overlay */}
              <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25 rounded-4" style={{ filter: 'url(#pencil-texture)', pointerEvents: 'none' }}></div>

              <div className="position-relative z-1 mb-4 d-flex justify-content-between align-items-start">
                <h4 className="fw-bold m-0" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>Draft a Letter</h4>

                {/* Decorative Annotation */}
                <span className="d-none d-sm-block text-muted" style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.2rem', transform: 'rotate(2deg)' }}>
                  I reply fast!
                </span>
              </div>

              {submitStatus && (
                <div
                  className={`alert d-flex align-items-center gap-2 mb-4 success-animation`}
                  role="alert"
                  style={{
                    backgroundColor: submitStatus === 'success' ? 'rgba(76, 140, 74, 0.08)' : 'rgba(200, 75, 65, 0.08)',
                    borderColor: submitStatus === 'success' ? 'rgba(76, 140, 74, 0.2)' : 'rgba(200, 75, 65, 0.2)',
                    color: submitStatus === 'success' ? '#4C8C4A' : '#C84B41',
                    borderRadius: '15px'
                  }}
                >
                  {submitStatus === 'success' ? <CheckCircle /> : null}
                  <span className="fw-bold">{submitStatus === 'success' ? "Your note has been securely delivered!" : "Something went wrong. Please try again."}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="d-flex flex-column flex-grow-1 position-relative z-1">
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label small fw-bold text-uppercase mb-2" style={{ color: 'var(--text-muted)', letterSpacing: '0.04em', fontSize: '0.75rem' }}>Name</label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control p-3 bg-transparent sketch-input ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="e.g., Ada Lovelace"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label small fw-bold text-uppercase mb-2" style={{ color: 'var(--text-muted)', letterSpacing: '0.04em', fontSize: '0.75rem' }}>Email</label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control p-3 bg-transparent sketch-input ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="ada@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label className="form-label small fw-bold text-uppercase mb-2" style={{ color: 'var(--text-muted)', letterSpacing: '0.04em', fontSize: '0.75rem' }}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className={`form-control p-3 bg-transparent sketch-input ${errors.subject ? 'is-invalid' : ''}`}
                    placeholder="What's the agenda?"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </div>

                <div className="form-group mb-5 flex-grow-1 d-flex flex-column">
                  <label className="form-label small fw-bold text-uppercase mb-2" style={{ color: 'var(--text-muted)', letterSpacing: '0.04em', fontSize: '0.75rem' }}>Message</label>
                  <textarea
                    name="message"
                    className={`form-control p-3 bg-transparent sketch-input flex-grow-1 ${errors.message ? 'is-invalid' : ''}`}
                    style={{ resize: 'none', minHeight: '150px' }}
                    placeholder="Draft your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn mt-auto py-3 d-flex align-items-center justify-content-center gap-2 fw-bold sketch-border send-btn"
                  style={{
                    backgroundColor: 'var(--accent-color)',
                    color: '#fff',
                    border: '2px solid var(--accent-color)'
                  }}
                >
                  {isSubmitting ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  ) : (
                    <>
                      <Send size={18} /> Send Note
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

      </div>

      <style>{`
        .pulse-indicator {
          width: 12px;
          height: 12px;
          background-color: #27c93f;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(39, 201, 63, 0.7);
          animation: pulse-green 2s infinite;
        }
        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(39, 201, 63, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(39, 201, 63, 0); }
          100% { box-shadow: 0 0 0 0 rgba(39, 201, 63, 0); }
        }
        
        .sketch-border {
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
          transition: transform 0.2s, border-color 0.2s, color 0.2s;
        }
        
        .sketch-input {
          border: 2px solid var(--border-color) !important;
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px !important;
          color: var(--text-primary) !important;
          transition: all 0.2s ease;
        }
        .sketch-input:focus {
          border-color: var(--accent-color) !important;
          box-shadow: 0 0 0 4px rgba(218, 119, 86, 0.1) !important;
          outline: none;
        }
        .sketch-input::placeholder {
          color: var(--text-muted);
          opacity: 0.7;
        }
        
        .send-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 6px 15px rgba(218, 119, 86, 0.3);
        }
        
        .social-link-btn:hover {
          border-color: var(--accent-color) !important;
          color: var(--accent-color) !important;
          transform: translateY(-4px) rotate(-4deg);
        }
        
        .hover-lift-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s;
        }
        .hover-lift-card:hover {
          transform: translateY(-4px) rotate(0deg) !important;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
          border-color: var(--accent-color) !important;
        }
        [data-theme='dark'] .hover-lift-card:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
        }

        @keyframes slideDownFade {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .success-animation {
          animation: slideDownFade 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;