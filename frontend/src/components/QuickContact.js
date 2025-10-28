import './QuickContact.css';

function QuickContact() {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'zhichenxuucf@gmail.com',
      action: () => window.location.href = 'mailto:zhichenxuucf@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect',
      action: () => window.open('https://www.linkedin.com/in/zhichenxu041697/', '_blank')
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'View Code',
      action: () => window.open('https://github.com/Kevinxzc2010', '_blank')
    }
  ];

  return (
    <div className="quick-contact">
      <div className="quick-contact-header">
        <h3>QUICK CONTACT</h3>
      </div>
      
      <div className="contact-items">
        {contactInfo.map((item, index) => (
          <button
            key={index}
            className="contact-item"
            onClick={item.action}
          >
            <span className="contact-icon">{item.icon}</span>
            <div className="contact-info">
              <span className="contact-label">{item.label}</span>
              <span className="contact-value">{item.value}</span>
            </div>
            <span className="contact-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickContact;