import { useState } from 'react';
import { CertificatesGrid } from './CertificatesGrid';
import { certifcations } from './certificatesData';
import './Certificate.css'

export function Certificate(){
  const [showAll, setShowAll] = useState(false);
  const visibleCertificate = showAll ? certifcations : certifcations.slice(0, 4);
  return (
    <>
      <section className="certificates-section" id="certificates">
        <div className="certificates-header">
          <h2 className="certificates-title">Certificates</h2>
          <button
            type="button"
            className="view-all-certificates-link"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? 'Show less →' : 'View all certificate →'}
          </button>
        </div>

        <CertificatesGrid visibleCertificate={visibleCertificate}/>
      </section>
    </>
  );
}