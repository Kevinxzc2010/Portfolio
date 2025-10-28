import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import HandyMan from "../assets/HandyMan.jpg";
import Rostro from "../assets/RostroLogo.png";
import ContactManager from "../assets/ContactManager.png";
import { useTranslation } from "react-i18next"; // ← 添加
import i18n from "../i18n";


function Home() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  // 打字机效果
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Zhichen Xu";

  const projectImages = {
    "RostroLogo.png": Rostro,
    "HandyMan.jpg": HandyMan,
    "ContactManager.png": ContactManager,
  };

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150); // 每150ms显示一个字符

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
        setLoading(false);
      })
      .catch((error) => {
        console.error("错误:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">加载中...</div>;
  }

  return (
    <div className="home">
      <Navigation />

      {/* 英雄区 */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">👋 {t("home.welcome")}</div>
          <h1 className="hero-title">
            {t("home.greeting")}{" "}
            <span className="highlight">{displayedText}</span>
            <span className="cursor">|</span>
          </h1>
          <p className="hero-subtitle">{t("home.subtitle")}</p>
          <p className="hero-description">{t("home.description")}</p>
          <div className="hero-buttons">
            <Link to="/contact" className="cta-primary">
              {t("home.contactMe")}
            </Link>
            <Link to="/about" className="cta-secondary">
              {t("home.learnMore")}
            </Link>
          </div>
        </div>
      </section>
      
      {/* 技能亮点 */}
      <section className="skills-highlight">
        <div className="skills-container">
          <div className="skill-item">
            <div className="skill-icon">💻</div>
            <h3>{t("home.skills.frontend")}</h3>
            <p>{t("home.skills.frontendDesc")}</p>
          </div>
          <div className="skill-item">
            <div className="skill-icon">🎨</div>
            <h3>{t("home.skills.uiux")}</h3>
            <p>{t("home.skills.uiuxDesc")}</p>
          </div>
          <div className="skill-item">
            <div className="skill-icon">🔧</div>
            <h3>{t("home.skills.tools")}</h3>
            <p>{t("home.skills.toolsDesc")}</p>
          </div>
          <div className="skill-item">
            <div className="skill-icon">🚀</div>
            <h3>{t("home.skills.learning")}</h3>
            <p>{t("home.skills.learningDesc")}</p>
          </div>
        </div>
      </section>
      {/* 项目展示区 */}
      <section className="projects-section">
        <div className="section-header">
          <h2>{t("home.projects.title")}</h2>
          <p>{t("home.projects.subtitle")}</p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className="project-item"
            >
              <div className="project-thumbnail">
                <img
                  src={projectImages[project.image] || Rostro}
                  alt={project.title}
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-brief">
                  {typeof project.brief === "object"
                    ? project.brief[i18n.language] || project.brief.en
                    : project.brief}
                </p>
                {project.technologies && (
                  <div className="project-tech-tags">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <span className="arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;
