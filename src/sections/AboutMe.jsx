import './AboutMe.css'
import resumeIcon from '../assets/images/resume-icon.png'
import profileIcon from '../assets/images/profile-icon.png'
import mortarboardIcon from '../assets/images/mortarboard-icon.png'
import projectIcon from '../assets/images/project-icon.png'
import internshipIcon from '../assets/images/data-entry-internship-icon.png'

export function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h2 className="about-title">About Me</h2>
        <a href="www.example.com" className="download-resume-button">
          <img src={resumeIcon} alt="Resume icon" /> Download Resume
        </a>
      </div>

      <div className="about-grid">
        <div className="about-item">
          <img src={profileIcon} alt="" />
        </div>
        <div className="about-intro-wrapper">
          <p className="about-intro">
            I'm a Computer Science student passionate about software
            development, machine learning and AI. I enjoy building web
            applications, solving problems and learning new technologies.
          </p>
        </div>

        <div className="about-item">
          <img src={mortarboardIcon} alt="Education icon" />
        </div>
        <div className="about-entry">
          <h3>Bachelor of Computer Science</h3>
          <span className="date">2024 - present</span>
          <p>
            Currently pursuing my degree with a focus on software developing,
            machine learning and AI.
          </p>
        </div>

        <div className="about-item">
          <img src={projectIcon} alt="Projects icon" />
        </div>
        <div className="about-entry">
          <h3>Personal Projects</h3>
          <span className="date">2024 - present</span>
          <p>
            Building projects to strengthen my skills and solve real world
            problems.
          </p>
        </div>

        <div className="about-item">
          <img
            src={internshipIcon}
            alt="Internship icon"
          />
        </div>
        <div className="about-entry">
          <h3>Data Entry Internship</h3>
          <span className="date">2026</span>
          <p>
            Finding scholarship data at a startup and upload them to the
            database.
          </p>
        </div>
      </div>
    </section>
  );
}
