import { CertificateCard } from "./CertificateCard";
import { certifcations } from "./certificatesData";
import "./CertificatesGrid.css";

export function CertificatesGrid() {
  return (
    <div className="certificates-grid">
      <CertificateCard certifcations={ certifcations }/>
    </div>
  );
}