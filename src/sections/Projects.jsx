import './Projects.css'
import chatbotImage from '../assets/images/chatbot-project-image.webp'
import websiteIcon from '../assets/images/website-icon.png'
import externalIcon from '../assets/images/box-arrow-up-right-icon.png'

export function Projects(){
  return (
      <section className="projects-section" id="projects">
        <div className="projects-header">
          <h2 className="projects-title">Feature Projects</h2>
          <a href="www.example.com" className="view-all-projects-link"
            >View projects →</a
          >
        </div>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-image-container">
              <img
                src={chatbotImage}
                alt="Project image"
                className="project-image"
              />
            </div>

            <h3 className="project-title">Tic Tac Toe</h3>

            <p className="project-description">
              A fun and interactive Tic Tac Toe game with a clean interface and
              responsive design.
            </p>

            <div className="project-technologies">
              <span className="tech-badge">HTML</span>
              <span className="tech-badge">CSS</span>
              <span className="tech-badge">JS</span>
            </div>

            <div className="project-links">
              <a href="www.example.com" className="project-link live-demo-link">
                <img src={websiteIcon} alt="Live demo" /> Live Demo
              </a>
              <a href="www.example.com" className="project-link github-link">
                <img src={externalIcon} alt="External" /> GitHub
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image-container">
              <img
                src={chatbotImage}
                alt="Project image"
                className="project-image"
              />
            </div>

            <h3 className="project-title">Tic Tac Toe</h3>

            <p className="project-description">Same project placeholder.</p>

            <div className="project-technologies">
              <span className="tech-badge">HTML</span>
              <span className="tech-badge">CSS</span>
              <span className="tech-badge">JS</span>
            </div>

            <div className="project-links">
              <a href="www.example.com" className="project-link live-demo-link">
                <img src={websiteIcon} alt="Live demo" /> Live Demo
              </a>
              <a href="www.example.com" className="project-link github-link">
                <img src={externalIcon} alt="External" /> GitHub
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image-container">
              <img
                src={chatbotImage}
                alt="Project image"
                className="project-image"
              />
            </div>

            <h3 className="project-title">Tic Tac Toe</h3>

            <p className="project-description">Same project placeholder.</p>

            <div className="project-technologies">
              <span className="tech-badge">HTML</span>
              <span className="tech-badge">CSS</span>
              <span className="tech-badge">JS</span>
            </div>

            <div className="project-links">
              <a href="www.example.com" className="project-link live-demo-link">
                <img src={websiteIcon} alt="Live demo" /> Live Demo
              </a>
              <a href="www.example.com" className="project-link github-link">
                <img src={externalIcon} alt="External" /> GitHub
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image-container">
              <img
                src={chatbotImage}
                alt="Project image"
                className="project-image"
              />
            </div>

            <h3 className="project-title">Tic Tac Toe</h3>

            <p className="project-description">Same project placeholder.</p>

            <div className="project-technologies">
              <span className="tech-badge">HTML</span>
              <span className="tech-badge">CSS</span>
              <span className="tech-badge">JS</span>
            </div>

            <div className="project-links">
              <a href="www.example.com" className="project-link live-demo-link">
                <img src={websiteIcon} alt="Live demo" /> Live Demo
              </a>
              <a href="www.example.com" className="project-link github-link">
                <img src={externalIcon} alt="External" /> GitHub
              </a>
            </div>
          </article>
        </div>
      </section>
  );
}
