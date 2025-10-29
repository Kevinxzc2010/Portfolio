import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./Contact.css";
import { useTranslation } from "react-i18next"; // ← 添加
import { API_URL } from "../config";

function Contact() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};

  return (
    <div className="contact">
      <Navigation />

      <div className="contact-container">
        <section className="contact-header">
          <h1>{t("contact.title")}</h1>
          <p className="contact-subtitle">{t("contact.subtitle")}</p>
        </section>

        <div className="contact-content">
          {/* 联系表单 */}
          <section className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t("contact.name")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.name")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t("contact.email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.email")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t("contact.message")}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder={t("contact.message")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? t("contact.sending")
                  : t("contact.send")}
              </button>

              {status === "success" && (
                <p className="status-message success">{t("contact.success")}</p>
              )}
              {status === "error" && (
                <p className="status-message error">{t("contact.error")}</p>
              )}
            </form>
          </section>

          {/* 联系信息 */}
          <section className="contact-info-section">
            <h2>{t("contact.info")}</h2>
            <div className="contact-info-grid">
              <div className="info-item">
                <div className="info-icon">📱</div>
                <div className="info-content">
                  <h3>{t("contact.phone")}</h3>
                  <p>321-332-5472</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h3>{t("contact.emailLabel")}</h3>
                  <p>zhichenxuucf@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">💼</div>
                <div className="info-content">
                  <h3>{t("contact.linkedin")}</h3>
                  <a
                    href="https://linkedin.com/in/zhichenxu041697"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link"
                  >
                    View Profile
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h3>{t("contact.location")}</h3>
                  <p>Winter Park, FL</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Contact;
