import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import ScrollReveal from '../components/ScrollReveal';
import GlowCard from '../components/GlowCard';

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
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.486-.276a2.478 2.478 0 0 1-.919-.598 2.48 2.48 0 0 1-.599-.92c-.11-.281-.24-.705-.276-1.485-.038-.843-.047-1.096-.047-3.232 0-2.136.009-2.388.047-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
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

const Contact = () => {
  const [lottieData, setLottieData] = useState(null);

  useEffect(() => {
    fetch('/Help Center.json')
      .then(res => res.json())
      .then(data => setLottieData(data))
      .catch(err => console.log('Lottie file not found', err));
  }, []);

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
      // Make sure your backend server is running and accepting POST requests at this URL
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-5 fade-up" style={{ maxWidth: '1000px', marginTop: '25px' }}>

      {/* Header & Animation */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-7 text-center text-lg-start mb-4 mb-lg-0">
          <ScrollReveal direction="up" delay={0}>
            <div className="tracked-sub mb-2" style={{ color: 'var(--accent-color)' }}>CONTACT</div>
            <h1 className="fw-bold display-5 mb-3">Get in Touch</h1>
            <p className="lead mx-auto mx-lg-0" style={{ maxWidth: '600px', color: 'var(--text-secondary)' }}>
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </ScrollReveal>
        </div>
        <div className="col-lg-5">
          <ScrollReveal direction="left" delay={50}>
            <div className="d-flex justify-content-center justify-content-lg-end align-items-center" style={{ height: '350px' }}>
              {lottieData && (
                <Lottie animationData={lottieData} loop={true} style={{ width: '100%', height: '100%', maxWidth: '450px' }} />
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="row g-5">

        {/* Left Column: Info & Socials */}
        <div className="col-lg-4">
          <div className="d-flex flex-column gap-4">

            {/* Contact Info Cards */}
            <div className="d-flex flex-column gap-3">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={index} direction="left" delay={index * 100 + 100}>
                  <GlowCard
                    className="apple-card p-3 d-flex align-items-center gap-3 text-decoration-none"
                    style={{ transition: 'transform 0.2s ease', color: 'inherit', border: '1px solid var(--border-color)' }}
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'rgba(218, 119, 86, 0.08)',
                        color: 'var(--accent-color)'
                      }}
                    >
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold small text-uppercase" style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{info.title}</h6>
                      <span className="fw-medium" style={{ color: 'var(--text-primary)' }}>{info.value}</span>
                    </div>
                  </GlowCard>
                </ScrollReveal>
              ))}
            </div>

            {/* Social Links */}
            <ScrollReveal direction="left" delay={400}>
              <GlowCard className="apple-card p-4" style={{ border: '1px solid var(--border-color)' }}>
                <h6 className="tracked-sub mb-3" style={{ color: 'var(--text-muted)' }}>Follow Me</h6>
                <div className="d-flex gap-3 justify-content-start">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn rounded-circle p-0 d-flex align-items-center justify-content-center"
                      style={{
                        width: '45px',
                        height: '45px',
                        transition: 'all 0.25s ease',
                        backgroundColor: 'var(--border-color)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-light)'
                      }}
                      title={social.name}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.borderColor = 'var(--accent-color)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--border-color)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'var(--border-light)';
                      }}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </GlowCard>
            </ScrollReveal>

          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="col-lg-8">
          <ScrollReveal direction="right" delay={200}>
            <GlowCard className="apple-card p-4 p-md-5" style={{ border: '1px solid var(--border-color)' }}>
              <h4 className="fw-bold mb-4">Send a Message</h4>

              {submitStatus && (
                <div
                  className={`alert d-flex align-items-center gap-2 mb-4`}
                  role="alert"
                  style={{
                    backgroundColor: submitStatus === 'success' ? 'rgba(76, 140, 74, 0.08)' : 'rgba(200, 75, 65, 0.08)',
                    borderColor: submitStatus === 'success' ? 'rgba(76, 140, 74, 0.2)' : 'rgba(200, 75, 65, 0.2)',
                    color: submitStatus === 'success' ? '#4C8C4A' : '#C84B41',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  {submitStatus === 'success' ? <CheckCircle /> : null}
                  {submitStatus === 'success' ? "Message sent successfully!" : "Something went wrong. Please try again."}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label className="form-label small fw-bold text-uppercase" style={{ color: 'var(--text-muted)', letterSpacing: '0.04em', fontSize: '0.75rem' }}>Name</label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control p-3 border-0 rounded-3 ${errors.name ? 'is-invalid' : ''}`}
                        style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)', borderRadius: 'var(--radius-md)' }}
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label className="form-label small fw-bold text-uppercase" style={{ color: 'var(--text-muted)', letterSpacing: '0.04em', fontSize: '0.75rem' }}>Email</label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control p-3 border-0 rounded-3 ${errors.email ? 'is-invalid' : ''}`}
                        style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)', borderRadius: 'var(--radius-md)' }}
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label className="form-label small fw-bold text-uppercase" style={{ color: 'var(--text-muted)', letterSpacing: '0.04em', fontSize: '0.75rem' }}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className={`form-control p-3 border-0 rounded-3 ${errors.subject ? 'is-invalid' : ''}`}
                    style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)', borderRadius: 'var(--radius-md)' }}
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </div>

                <div className="form-group mb-4">
                  <label className="form-label small fw-bold text-uppercase" style={{ color: 'var(--text-muted)', letterSpacing: '0.04em', fontSize: '0.75rem' }}>Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    className={`form-control p-3 border-0 rounded-3 ${errors.message ? 'is-invalid' : ''}`}
                    style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)', borderRadius: 'var(--radius-md)', resize: 'vertical' }}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-apple w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </GlowCard>
          </ScrollReveal>
        </div>

      </div>
    </div>
  );
};

export default Contact;