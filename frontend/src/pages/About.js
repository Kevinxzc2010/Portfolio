import Navigation from "../components/Navigation";
import "./About.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LocationMap from "../components/LocationMap";
import ResumeDownload from "../components/ResumeDownload";
import VisitorCounter from "../components/VisitorCounter";

function About() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="about">
      <Navigation />

      <div className="about-container">
        <section className="about-section intro-section">
          <h1>{t("about.title")}</h1>
          <p className="intro-text">{t("about.intro")}</p>
        </section>

        <section className="about-section" ref={skillsRef}>
          <h2>{t("about.skills")}</h2>

          <div className={`skills-progress ${isVisible ? "animate" : ""}`}>
            <div className="skill-progress-item">
              <div className="skill-progress-header">
                <span className="skill-name">JavaScript</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ "--width": 85 }}></div>
              </div>
            </div>

            <div className="skill-progress-item">
              <div className="skill-progress-header">
                <span className="skill-name">React</span>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ "--width": 80 }}></div>
              </div>
            </div>

            <div className="skill-progress-item">
              <div className="skill-progress-header">
                <span className="skill-name">Python</span>
                <span className="skill-percentage">75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ "--width": 75 }}></div>
              </div>
            </div>

            <div className="skill-progress-item">
              <div className="skill-progress-header">
                <span className="skill-name">Flutter</span>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ "--width": 70 }}></div>
              </div>
            </div>

            <div className="skill-progress-item">
              <div className="skill-progress-header">
                <span className="skill-name">Java</span>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ "--width": 70 }}></div>
              </div>
            </div>

            <div className="skill-progress-item">
              <div className="skill-progress-header">
                <span className="skill-name">HTML/CSS</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ "--width": 90 }}></div>
              </div>
            </div>

            <div className="skill-progress-item">
              <div className="skill-progress-header">
                <span className="skill-name">Git</span>
                <span className="skill-percentage">75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ "--width": 75 }}></div>
              </div>
            </div>

            <div className="skill-progress-item">
              <div className="skill-progress-header">
                <span className="skill-name">Node.js</span>
                <span className="skill-percentage">65%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ "--width": 65 }}></div>
              </div>
            </div>
          </div>

          {/* 技能标签网格 */}
          <div className="skills-grid" style={{ marginTop: "50px" }}>
            <div className="skill-category">
              <h3>{t("about.programmingLanguages")}</h3>
              <div className="skill-tags">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Dart</span>
                <span className="skill-tag">Java</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>{t("about.frontendDev")}</h3>
              <div className="skill-tags">
                <span className="skill-tag">ReactJS</span>
                <span className="skill-tag">Flutter</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>{t("about.toolsPlatforms")}</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Android Studio</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>{t("about.methodologies")}</h3>
              <div className="skill-tags">
                <span className="skill-tag">Agile</span>
                <span className="skill-tag">Scrum</span>
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Teamwork</span>
                <span className="skill-tag">Communication</span>
                <span className="skill-tag">Quick Learner</span>
              </div>
            </div>
          </div>
        </section>

        {/* 教育背景 */}
        <section className="about-section">
          <h2>{t("about.education")}</h2>
          <div className="education-item">
            <div className="education-header">
              <h3>University of Central Florida</h3>
              <span className="education-date">2019 - 2023</span>
            </div>
            <p className="education-detail">{t("about.degree")}</p>
            <p className="education-detail">
              Graduated: May 2023 | {t("about.gpa")}
            </p>
            <p className="education-location">Orlando, FL</p>
          </div>
        </section>

        {/* 语言能力 */}
        <section className="about-section">
          <h2>{t("about.languages")}</h2>
          <div className="languages">
            <div className="language-item">
              <span className="language-name">{t("about.english")}</span>
              <span className="language-level">{t("about.proficient")}</span>
            </div>
            <div className="language-item">
              <span className="language-name">{t("about.chinese")}</span>
              <span className="language-level">
                {t("about.conversational")}
              </span>
            </div>
          </div>
        </section>

        {/* Beyond Code - 兴趣爱好（扑克牌风格） */}
        <section className="about-section hobbies-section">
          <h2>{t("about.beyondCode")}</h2>
          <p className="section-intro">{t("about.beyondCodeDesc")}</p>

          <div className="hobbies-grid">
            {/* 德州扑克 */}
            <div className="hobby-card poker-card">
              <div className="hobby-icon">🃏</div>
              <h3>{t("about.hobbies.poker.title")}</h3>
              <p className="hobby-desc">{t("about.hobbies.poker.desc")}</p>
              <p className="hobby-quote">"{t("about.hobbies.poker.quote")}"</p>
              <div className="hobby-tags">
                <span>Logic</span>
                <span>Decision Making</span>
                <span>Probability</span>
              </div>
            </div>

            {/* 音乐创作 */}
            <div className="hobby-card music-card">
              <div className="hobby-icon">🎵</div>
              <h3>{t("about.hobbies.music.title")}</h3>
              <p className="hobby-desc">{t("about.hobbies.music.desc")}</p>
              <p className="hobby-quote">"{t("about.hobbies.music.quote")}"</p>
              <div className="hobby-tags">
                <span>Creativity</span>
                <span>Aesthetics</span>
                <span>Expression</span>
              </div>
            </div>

            {/* 钓鱼 */}
            <div className="hobby-card fishing-card">
              <div className="hobby-icon">🎣</div>
              <h3>{t("about.hobbies.fishing.title")}</h3>
              <p className="hobby-desc">{t("about.hobbies.fishing.desc")}</p>
              <p className="hobby-quote">
                "{t("about.hobbies.fishing.quote")}"
              </p>
              <div className="hobby-tags">
                <span>Patience</span>
                <span>Focus</span>
              </div>
            </div>

            {/* 羽毛球 */}
            <div className="hobby-card badminton-card">
              <div className="hobby-icon">🏸</div>
              <h3>{t("about.hobbies.badminton.title")}</h3>
              <p className="hobby-desc">{t("about.hobbies.badminton.desc")}</p>
              <p className="hobby-quote">
                "{t("about.hobbies.badminton.quote")}"
              </p>
              <div className="hobby-tags">
                <span>Teamwork</span>
                <span>Quick Response</span>
              </div>
            </div>

            {/* 英雄联盟 */}
            <div className="hobby-card lol-card">
              <div className="hobby-icon">🎮</div>
              <h3>{t("about.hobbies.lol.title")}</h3>
              <p className="hobby-desc">{t("about.hobbies.lol.desc")}</p>
              <p className="hobby-quote">"{t("about.hobbies.lol.quote")}"</p>
              <div className="hobby-tags">
                <span>Strategy</span>
                <span>Communication</span>
              </div>
            </div>

            {/* 高达模型 */}
            <div className="hobby-card gundam-card">
              <div className="hobby-icon">🤖</div>
              <h3>{t("about.hobbies.gundam.title")}</h3>
              <p className="hobby-desc">{t("about.hobbies.gundam.desc")}</p>
              <p className="hobby-quote">"{t("about.hobbies.gundam.quote")}"</p>
              <div className="hobby-tags">
                <span>Patience</span>
                <span>Detail-Oriented</span>
                <span>Craftsmanship</span>
              </div>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section className="about-section contact-section">
          <h2>{t("about.contact")}</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span className="contact-text">321-332-5472</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span className="contact-text">zhichenxuucf@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <a 
                href="https://linkedin.com/in/zhichenxu041697"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span className="contact-text">Winter Park, FL</span>
            </div>
          </div>
        </section>

        {/* 地图 */}
        <section className="about-section">
          <LocationMap />
        </section>

        {/* 访客计数器 */}
        <section className="about-section">
          <VisitorCounter />
        </section>

        {/* CTA 区域 */}
        <div className="cta-section">
          <h2>{t("about.wantToCollaborate")}</h2>
          <p>{t("about.collaborateDesc")}</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="cta-button">
              <span>{t("about.sendMessage")}</span>
              <span className="cta-arrow">→</span>
            </Link>
            <ResumeDownload />
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default About;