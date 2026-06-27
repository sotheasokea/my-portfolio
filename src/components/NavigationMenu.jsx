import homeIcon from "../assets/images/home-icon.png";
import profileIcon from "../assets/images/profile-icon.png";
import projectIcon from "../assets/images/project-icon.png";
import mortarboardIcon from "../assets/images/mortarboard-icon.png";
import certificateIcon from "../assets/images/certificate-icon.png";
import githubIcon from "../assets/images/github-icon.png";
import linkedinIcon from "../assets/images/linkedin-icon.png";
import mailIcon from "../assets/images/mail-icon.png";
import resumeIcon from "../assets/images/resume-icon.png";

export function NavigationMenu({menuOpen, closeMenu}) {
  return (
    <>
      <nav className={`mobile-nav${menuOpen ? " active" : ""}`}>
        <div className="nav-header">
          <h2 className="nav-name">Sothea</h2>
          <button
            className="nav-close-btn"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <ul className="nav-menu">
          <li>
            <a href="#home" className="nav-link" onClick={closeMenu}>
              <img src={homeIcon} alt="Home" />
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeMenu}>
              <img src={profileIcon} alt="About Me" />
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMenu}>
              <img src={projectIcon} alt="Project" />
              Project
            </a>
          </li>
          <li>
            <a href="#education" className="nav-link" onClick={closeMenu}>
              <img src={mortarboardIcon} alt="Education" />
              Education
            </a>
          </li>
          <li>
            <a href="#certificates" className="nav-link" onClick={closeMenu}>
              <img src={certificateIcon} alt="Certification" />
              Certification
            </a>
          </li>
        </ul>

        <div className="nav-footer">
          <p className="nav-section-title">Let's connect</p>
          <div className="nav-social-links-list">
            <a href="www.example.com" className="nav-social-item">
              <img src={githubIcon} alt="GitHub" />
              <span>github.com/sotheasokea</span>
            </a>
            <a href="www.example.com" className="nav-social-item">
              <img src={linkedinIcon} alt="LinkedIn" />
              <span>Sothea Sokea</span>
            </a>
            <a href="www.example.com" className="nav-social-item">
              <img src={mailIcon} alt="Email" />
              <span>sokeasothea7@gmail.com</span>
            </a>
          </div>
          <a href="www.example.com" className="nav-download-btn-large">
            <img src={resumeIcon} alt="Resume" /> Download Resume
          </a>
        </div>
      </nav>

      <div
        className={`nav-overlay${menuOpen ? " active" : ""}`}
        onClick={closeMenu}
      />
    </>
  );
}
