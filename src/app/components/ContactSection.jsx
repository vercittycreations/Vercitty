import React, { useState, useRef, useEffect } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [emailDropdownOpen, setEmailDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const contactEmails = [
    {
      id: 1,
      category: 'Web Development',
      email: 'web@vercitty.com',
      icon: '🌐',
      description: 'For web apps & UI/UX projects',
      formLink: 'https://forms.gle/YOUR_WEB_DEV_FORM_ID'
    },
    {
      id: 2,
      category: 'Video Editing',
      email: 'video@vercitty.com',
      icon: '🎬',
      description: 'For video production & editing',
      formLink: 'https://forms.gle/YOUR_VIDEO_FORM_ID'
    },
    {
      id: 3,
      category: 'Graphic Design',
      email: 'design@vercitty.com',
      icon: '🎨',
      description: 'For branding & graphic design',
      formLink: 'https://forms.gle/YOUR_DESIGN_FORM_ID'
    },
    {
      id: 4,
      category: 'General Inquiry',
      email: 'hello@vercitty.com',
      icon: '💬',
      description: 'For general questions',
      formLink: 'https://forms.gle/YOUR_GENERAL_FORM_ID',
      isGeneral: true
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setEmailDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFormClick = (formLink) => {
    window.open(formLink, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
    setEmailDropdownOpen(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="contact-title">
              Ready to Start Your <span className="contact-highlight">Project?</span>
            </h2>
            <p className="contact-subtitle">
              Get in touch with our specialized teams. We're here to help you succeed.
            </p>
          </div>

          <div className="email-grid">
            {contactEmails.map((contact) => (
              <div
                key={contact.id}
                className={`email-card ${
                  selectedCategory === contact.id ? 'active' : ''
                } ${contact.isGeneral ? 'general-card' : ''}`}
                onClick={() => setSelectedCategory(contact.id)}
              >
                <div className="email-icon">{contact.icon}</div>
                <h3 className="email-category">{contact.category}</h3>
                <p className="email-description">{contact.description}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFormClick(contact.formLink);
                  }}
                  className="email-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fill Form
                </button>
              </div>
            ))}
          </div>

          {/* DROPDOWN MENU FOR EMAILS */}
          <div className="contact-cta">
            <p className="cta-text">
              Or contact us directly via email
            </p>
            
            <div className="email-dropdown-container" ref={dropdownRef}>
              <button 
                className="dropdown-toggle"
                onClick={() => setEmailDropdownOpen(!emailDropdownOpen)}
              >
                <span className="dropdown-icon">📧</span>
                <span className="dropdown-text">
                  {emailDropdownOpen ? 'Hide Emails' : 'Select Email Address'}
                </span>
                <span className={`dropdown-arrow ${emailDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>

              {emailDropdownOpen && (
                <div className="dropdown-menu">
                  {contactEmails.map((contact) => (
                    <button
                      key={contact.id}
                      className="dropdown-item"
                      onClick={() => handleEmailClick(contact.email)}
                    >
                      <span className="dropdown-item-icon">{contact.icon}</span>
                      <div className="dropdown-item-content">
                        <div className="dropdown-item-category">{contact.category}</div>
                        <div className="dropdown-item-email">{contact.email}</div>
                      </div>
                      <span className="dropdown-item-arrow">→</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <p className="contact-help-text">We'll respond within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
