import { Fragment } from "react";
import { certifcations } from "./certificatesData";
import "./CertificatesGrid.css";

export function CertificatesGrid() {
  return (
    <div className="certificates-grid">
      {certifcations.map((certifcation) => {
        return (
          <Fragment key={certifcation.id}>
            <article className="certificate-card">
              <div className="certificate-image-container">
                <img
                  src={certifcation.icon}
                  alt="Google"
                  className="certificate-image"
                />
              </div>
              <h3 className="certificate-title">{certifcation.course}</h3>
              <p className="certificate-provider">{certifcation.provider}</p>
              <p className="certificate-date">{certifcation.date}</p>
            </article>
          </Fragment>
        );
      })}
    </div>
  );
}
