import { Fragment } from "react";
import './CertificateCard.css'

export function CertificateCard({ certifications }) {
  return (
    <>
      {certifications.map((certification) => {
        return (
          <Fragment key={certification.id}>
            <a
              href={certification.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="view-certificate-link"
            >
            <article className="certificate-card">
              <div className="certificate-image-container">
                <img
                  src={certification.icon}
                  alt="Google"
                  className="certificate-image"
                />
              </div>
              <h3 className="certificate-title">{certification.course}</h3>
              <p className="certificate-provider">{certification.provider}</p>
              <p className="certificate-date">{certification.date}</p>
            </article>
            </a>

          </Fragment>
        );
      })}
    </>
  );
}
