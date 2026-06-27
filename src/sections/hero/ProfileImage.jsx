import githubIcon from "../../assets/github-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import resumeIcon from "../../assets/resume-icon.png";
import profileImage from "../../assets/my-profile-image.png";
import mailIcon from "../../assets/mail-icon.png";
import './ProfileImage.css'

export function ProfileImaage() {
  return (
    <div className="profile-image-section">
      <div className="profile-image-wrapper">
        <img
          src={profileImage}
          alt="Sothea profile"
          className="profile-image"
        />
      </div>

      <div className="social-media-links">
        <a 
          href="https://github.com/sotheasokea" 
          className="social-media-icon" 
          target="_blank"
          title="GitHub">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/sothea-sokea-736741354/"
          className="social-media-icon"
          target="_blank"
          title="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a 
          href="mailto:sokeasothea7@gmail.com" 
          className="social-media-icon" 
          title="Email">
          <img src={mailIcon} alt="Email" />
        </a>
        <a 
          href="www.example.com" 
          className="social-media-icon" 
          target="_blank"
          title="Resume">
          <img src={resumeIcon} alt="Resume" />
        </a>
      </div>
    </div>
  );
}
