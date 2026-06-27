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
        <a href="www.example.com" className="social-media-icon" title="GitHub">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="www.example.com"
          className="social-media-icon"
          title="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="www.example.com" className="social-media-icon" title="Email">
          <img src={mailIcon} alt="Email" />
        </a>
        <a href="www.example.com" className="social-media-icon" title="Resume">
          <img src={resumeIcon} alt="Resume" />
        </a>
      </div>
    </div>
  );
}
