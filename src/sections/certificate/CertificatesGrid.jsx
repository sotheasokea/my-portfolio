import { CertificateCard } from "./CertificateCard";
import "./CertificatesGrid.css";

export function CertificatesGrid({ visibleCertificate }) {
  return (
    <div className="certificates-grid">
      <CertificateCard certifications={ visibleCertificate }/>
    </div>
  );
}