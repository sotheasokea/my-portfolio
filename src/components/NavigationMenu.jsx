import homeIcon from "../assets/home-icon.png";
import profileIcon from "../assets/profile-icon.png";
import projectIcon from "../assets/project-icon.png";
import mortarboardIcon from "../assets/mortarboard-icon.png";
import certificateIcon from "../assets/certificate-icon.png";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import mailIcon from "../assets/mail-icon.png";
import resumeIcon from "../assets/resume-icon.png";
import './NavigationMenu.css'

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
            <a 
              href="https://github.com/sotheasokea" 
              target="_blank" 
              className="nav-social-item"
            >
              <img src={githubIcon} alt="GitHub" />
              <span>github.com/sotheasokea</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/sothea-sokea-736741354/"
              target="_blank"
              className="nav-social-item"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
              <span>Sothea Sokea</span>
            </a>
            <a 
              href="mailto:sokeasothea7@gmail.com"  
              className="nav-social-item"
            >
              <img src={mailIcon} alt="Email" />
              <span>sokeasothea7@gmail.com</span>
            </a>
          </div>
           <a 
          href="https://i.pinimg.com/1200x/27/20/10/272010e534b845080b425a6e3497ba75.jpg"
          target="_blank"
          className="nav-download-btn-large"
        >
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
