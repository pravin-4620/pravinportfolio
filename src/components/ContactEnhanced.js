import React, { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin, Phone, Loader } from 'lucide-react';

const ContactEnhanced = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    setServerError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      setServerError('');

      try {
        const response = await fetch('https://pravin-portfolio-backend.onrender.com/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }, 5000);
        } else {
          setServerError(data.message || 'Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setServerError('Unable to connect to server. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'San Francisco, CA',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          Have a project in mind? Let's work together to create something amazing!
        </p>
        
        <div className="contact-content">
          <div className="contact-info-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">{info.icon}</div>
                <h3 className="contact-info-label">{info.label}</h3>
                {info.link ? (
                  <a href={info.link} className="contact-info-value">
                    {info.value}
                  </a>
                ) : (
                  <p className="contact-info-value">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="success-message">
                <CheckCircle size={48} />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
                <p className="success-submessage">Check your email for a confirmation message.</p>
              </div>
            ) : (
              <>
                {serverError && (
                  <div className="server-error-message">
                    <p>{serverError}</p>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="Your Name"
                      disabled={loading}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="your.email@example.com"
                      disabled={loading}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                    placeholder="Project Inquiry"
                    disabled={loading}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    rows="5"
                    placeholder="Tell me about your project..."
                    disabled={loading}
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader size={20} className="spinning" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactEnhanced;
