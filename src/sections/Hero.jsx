import { Header } from "../components/Header";
import './Hero.css'

export function Hero() {
  return (
    <>
      <Header />
      <section className="hero-section">
        <div className="profile-intro-section">
          <p className="greeting-text">Hi, I'm</p>
          <h2 className="profile-name">Sothea</h2>

          <div className="role-list">
            <p>Computer Science student</p>
            <p>Web Developer</p>
            <p className="highlight">AI Engineering</p>
          </div>

          <p className="profile-description">
            I build clean and responsive application and enjoy turning ideas
            into real world projects.
          </p>

          <div className="action-buttons">
            <a href="www.example.com" className="view-projects-button">
              View projects →
            </a>
            <a href="www.example.com" className="contact-me-button">
              <img src="images/mail-icon.png" alt="Mail icon" /> Contact me
            </a>
          </div>
        </div>

        <div className="profile-image-section">
          <div className="profile-image-wrapper">
            <img
              src="images/my-profile-image.png"
              alt="Sothea profile"
              className="profile-image"
            />
          </div>

          <div className="social-media-links">
            <a href="www.example.com" className="social-media-icon" title="GitHub">
              <img src="images/github-icon.png" alt="GitHub" />
            </a>
            <a
              href="www.example.com"
              className="social-media-icon"
              title="LinkedIn"
            >
              <img src="images/linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="www.example.com" className="social-media-icon" title="Email">
              <img src="images/mail-icon.png" alt="Email" />
            </a>
            <a href="www.example.com" className="social-media-icon" title="Resume">
              <img src="images/resume-icon.png" alt="Resume" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
