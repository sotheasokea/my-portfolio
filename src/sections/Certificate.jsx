import './Certificate.css'
import googleIcon from '../assets/images/google-icon.png'

export function Certificate(){
  return (
    <>
      <section className="certificates-section" id="certificates">
        <div className="certificates-header">
          <h2 className="certificates-title">Certificates</h2>
          <a href="www.example.com" className="view-all-certificates-link">View all certificates →</a>
        </div>

        <div className="certificates-grid">
          <article className="certificate-card">
            <div className="certificate-image-container">
              <img src={googleIcon} alt="Google" className="certificate-image" />
            </div>
            <h3 className="certificate-title">Google Cybersecurity Professional Certificate</h3>
            <p className="certificate-provider">Google</p>
            <p className="certificate-date">March 2023</p>
          </article>

          <article className="certificate-card">
            <div className="certificate-image-container">
              <img src={googleIcon} alt="Google" className="certificate-image" />
            </div>
            <h3 className="certificate-title">Google Cybersecurity Professional Certificate</h3>
            <p className="certificate-provider">Google</p>
            <p className="certificate-date">March 2023</p>
          </article>

          <article className="certificate-card">
            <div className="certificate-image-container">
              <img src={googleIcon} alt="Google" className="certificate-image" />
            </div>
            <h3 className="certificate-title">Google Cybersecurity Professional Certificate</h3>
            <p className="certificate-provider">Google</p>
            <p className="certificate-date">March 2023</p>
          </article>

          <article className="certificate-card">
            <div className="certificate-image-container">
              <img src={googleIcon} alt="Google" className="certificate-image" />
            </div>
            <h3 className="certificate-title">Google Cybersecurity Professional Certificate</h3>
            <p className="certificate-provider">Google</p>
            <p className="certificate-date">March 2023</p>
          </article>
        </div>
      </section>
    </>
  );
}