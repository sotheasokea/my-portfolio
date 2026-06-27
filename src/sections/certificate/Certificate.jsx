import './Certificate.css'
import { CertificatesGrid } from './CertificatesGrid';

export function Certificate(){
  return (
    <>
      <section className="certificates-section" id="certificates">
        <div className="certificates-header">
          <h2 className="certificates-title">Certificates</h2>
          <a href="www.example.com" className="view-all-certificates-link">View all certificates →</a>
        </div>

        <CertificatesGrid />
      </section>
    </>
  );
}