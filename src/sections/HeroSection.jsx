import { Header } from "../components/Header";

export function HeroSecontion(){
  return (
    <>
      <Header />

      <section class="hero-section">
        <div class="profile-intro-section">
          <p class="greeting-text">Hi, I'm</p>
          <h2 class="profile-name">Sothea</h2>

          <div class="role-list">
            <p>Computer Science student</p>
            <p>Web Developer</p>
            <p class="highlight">AI Engineering</p>
          </div>

          <p class="profile-description">
            I build clean and responsive application and enjoy turning ideas
            into real world projects.
          </p>

          <div class="action-buttons">
            <a href="www.example.com" class="view-projects-button"
              >View projects →</a
            >
            <a href="www.example.com" class="contact-me-button">
              <img src="images/mail-icon.png" alt="Mail icon" /> Contact me
            </a>
          </div>
        </div>

        <div class="profile-image-section">
          <div class="profile-image-wrapper">
            <img
              src="images/my-profile-image.png"
              alt="Sothea profile"
              class="profile-image"
            />
          </div>

          <div class="social-media-links">
            <a href="www.example.com" class="social-media-icon" title="GitHub">
              <img src="images/github-icon.png" alt="GitHub" />
            </a>
            <a
              href="www.example.com"
              class="social-media-icon"
              title="LinkedIn"
            >
              <img src="images/linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="www.example.com" class="social-media-icon" title="Email">
              <img src="images/mail-icon.png" alt="Email" />
            </a>
            <a href="www.example.com" class="social-media-icon" title="Resume">
              <img src="images/resume-icon.png" alt="Resume" />
            </a>
          </div>
        </div>
      </section>
    </>
    
  );
}