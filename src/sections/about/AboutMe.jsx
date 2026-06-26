import './AboutMe.css'
import resumeIcon from '../../assets/images/resume-icon.png'
import { AboutItem } from './AboutItem';

export function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h2 className="about-title">About Me</h2>
        <a href="www.example.com" target="_blank" className="download-resume-button">
          <img src={resumeIcon} alt="Resume icon" /> Download Resume
        </a>
      </div>

      <div className="about-grid">
        <AboutItem />
      </div>
    </section>
  );
}
