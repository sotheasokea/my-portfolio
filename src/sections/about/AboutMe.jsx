import './AboutMe.css'
import resumeIcon from '../../assets/resume-icon.png'
import { AboutItem } from './AboutItem';
import { ResumeModal } from '../../components/ResumeModal';

export function AboutMe() {
  const { handleDownloadClick, modal } = ResumeModal();

  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h2 className="about-title">About Me</h2>
        <a href="#" onClick={handleDownloadClick} className="download-resume-button">
          <img src={resumeIcon} alt="Resume icon" /> Download Resume
        </a>
      </div>

      <div className="about-grid">
        <AboutItem />
      </div>

      {modal}
    </section>
  );
}