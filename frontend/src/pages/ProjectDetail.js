import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching project with ID:", id);
    
    fetch(`http://localhost:5000/api/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Received data:", data);
        if (data.success) {
          setProject(data.project);
        } else {
          setError("Project not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="project-detail">
        <Navigation />
        <div className="loading">Loading...</div>
        <Footer />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="project-detail">
        <Navigation />
        <div className="error-message">
          <h1>Error</h1>
          <p>{error || "Project not found"}</p>
          <Link to="/">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Navigation />

      <div className="project-detail-container">
        <div className="project-header">
          <h1>{project.title}</h1>
          <p className="project-brief">{project.brief}</p>
        </div>

        <div className="project-content">
          <section className="tech-stack">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {project.technologies ? (
                project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))
              ) : (
                <p>No technologies listed</p>
              )}
            </div>
          </section>

          <section className="project-highlights">
            <h3>Key Features</h3>
            <ul className="highlights-list">
              {project.highlights ? (
                project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))
              ) : (
                <p>No highlights available</p>
              )}
            </ul>
          </section>

          {project.github && (
            <section className="project-links">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub →
              </a>
            </section>
          )}
        </div>

        <div className="back-link">
          <Link to="/" className="back-button">
            ← Back to Projects
          </Link>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default ProjectDetail;