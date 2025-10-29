import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import HandyMan from "../assets/HandyMan.jpg";
import Rostro from "../assets/RostroLogo.png";
import ContactManager from "../assets/ContactManager.png";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Zhichen Xu";

  // Featured Projects
  const featuredProjects = [
    {
      id: 1,
      title: "Rostro",
      description: "Facial Recognition Attendance System - Built with Flutter and Firebase",
      image: Rostro,
      technologies: ["Flutter", "Firebase", "Face Recognition"],
    },
    {
      id: 2,
      title: "HandyMan",
      description: "Home Service Booking Platform",
      image: HandyMan,
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Contact Management System",
      description: "Enterprise Contact Management System",
      image: ContactManager,
      technologies: ["JavaScript", "Firebase", "Material UI"],
    },
  ];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <Navigation />

      {/* Hero Section */}
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

      {/* Skills Highlight */}
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

      {/* Featured Projects - 列表样式 */}
      <section className="featured-projects">
        <div className="section-header">
          <h2>FEATURED PROJECTS</h2>
          <p>Showcasing my best work and technical capabilities</p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="project-card"
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className="project-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home; // ✅ 正确！没有括号