import mailIcon from "../../assets/mail-icon.png";
import './ProfileIntro.css'
export function ProfileIntro() {
  return (
    <div className="profile-intro-section">
      <p className="greeting-text">Hi, I'm</p>
      <h2 className="profile-name">Sothea</h2>

      <div className="role-list">
        <p>Computer Science student</p>
        <p>Web Developer</p>
        <p className="highlight">AI Engineering</p>
      </div>

      <p className="profile-description">
        I build clean and responsive application and enjoy turning ideas into
        real world projects.
      </p>

      <div className="action-buttons">
        <a 
          href="#projects" 
          className="view-projects-button"
        >
          View projects →
        </a>
        <a 
          href="mailto:sokeasothea7@gmail.com" 
          className="contact-me-button"
        >
          <img src={mailIcon} alt="Mail icon" /> Contact me
        </a>
      </div>
    </div>
  );
}
