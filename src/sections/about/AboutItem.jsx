import profileIcon from "../../assets/profile-icon.png";
import { experiences } from "./aboutData";
import { Fragment } from "react";
import './AboutItem.css'
export function AboutItem() {
  return (
    <>
      <div className="about-item">
        <img src={profileIcon} alt="" />
      </div>
      <div className="about-intro-wrapper">
        <p className="about-intro">
          I'm a Computer Science student passionate about software development,
          machine learning and AI. I enjoy building web applications, solving
          problems and learning new technologies.
        </p>
      </div>

      {experiences.map((experience) => {
        return (
          <Fragment key={experience.id}>
            <div className="about-item">
              <img src={experience.icon} alt="Education icon" />
            </div>
            <div className="about-entry">
              <h3>{experience.title}</h3>
              <span className="date">{experience.date}</span>
              <p>{experience.description}</p>
            </div>
          </Fragment>
        );
      })}

      
    </>
  );
}
