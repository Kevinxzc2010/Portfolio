/* ═══════════════════════════════════════
   Home.js - 完整版
   ═══════════════════════════════════════ */

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
import i18n from "../i18n";

function Home() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Zhichen Xu";

  const projectImages = {
    "RostroLogo.png": Rostro,
    "HandyMan.jpg": HandyMan,
    "ContactManager.png": ContactManager,
  };

  // Featured Projects（硬编码，不依赖后端）
  const featuredProjects = [
    {
      id: 1,
      title: "Rostro",
      description: "Facial Recognition Attendance System - Built with Flutter and Firebase for seamless attendance tracking using advanced face detection technology.",
      brief: {
        en: "A mobile app for attendance tracking using facial recognition",
        zh: "使用人脸识别的移动考勤系统",
      },
      image: Rostro,
      technologies: ["Flutter", "Firebase", "Face Recognition", "Mobile Dev"],
      github: "https://github.com/Kevinxzc2010",
      demo: "#",
    },
    {
      id: 2,
      title: "HandyMan",
      description: "Home Service Booking Platform - Connecting homeowners with professional service providers for various home maintenance and repair needs.",
      brief: {
        en: "A platform connecting homeowners with service providers",
        zh: "连接房主和服务提供商的平台",
      },
      image: HandyMan,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Kevinxzc2010",
      demo: "#",
    },
    {
      id: 3,
      title: "Contact Manager",
      description: "Enterprise Contact Management System - A comprehensive solution for managing business contacts with advanced search and organization features.",
      brief: {
        en: "A comprehensive contact management solution",
        zh: "全面的联系人管理解决方案",
      },
      image: ContactManager,
      technologies: ["JavaScript", "Firebase", "Material UI", "React"],
      github: "https://github.com/Kevinxzc2010",
      demo: "#",
    },
  ];

  // 打字机效果
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

  // 从后端获取项目（用于 Projects Section）
  useEffect(() => {
    // 根据环境选择 API 地址
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "https://portfolio-backend-2gox.onrender.com/api/projects"
        : "http://localhost:5000/api/projects";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">{t("home.loading") || "Loading..."}</div>;
  }

  return (
    <div className="home">
      <Navigation />

      {/* ═══════════════════════════════════════
          Hero Section - 英雄区
          ═══════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════
          Skills Highlight - 技能亮点
          ═══════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════
          Featured Projects - 特色项目（新增！）
          ═══════════════════════════════════════ */}
      <section className="featured-projects">
        <div className="section-header">
          <h2>✨ Featured Projects</h2>
          <p>Showcasing my best work and technical capabilities</p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card">
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
                <div className="project-links">
                  <Link
                    to={`/project/${project.id}`}
                    className="project-link"
                  >
                    View Details →
                  </Link>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Projects Section - 项目展示区（从后端）
          ═══════════════════════════════════════ */}
      <section className="projects-section">
        <div className="section-header">
          <h2>{t("home.projects.title")}</h2>
          <p>{t("home.projects.subtitle")}</p>
        </div>

        <div className="projects-list">
          {projects.length > 0 ? (
            projects.map((project, index) => (
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
            ))
          ) : (
            <div style={{ textAlign: "center", color: "white", padding: "40px" }}>
              <p>No projects available from backend.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;