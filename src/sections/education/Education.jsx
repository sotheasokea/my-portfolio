import "./Education.css";
import mortarboardIcon from "../../assets/images/mortarboard-icon.png";
import highSchoolIcon from "../../assets/images/high-school-icon.png";

export function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education</h2>

      <div className="education-grid">
        <div className="education-item">
          <img src={mortarboardIcon} alt="University icon" />
        </div>
        <div className="education-entry">
          <h3>Bachelor of Computer Science</h3>
          <span className="date">2024 - present</span>
          <p className="school-name">Sitekaom University</p>
          <p>
            Studying computer science with a focus on software developing, data
            structures, algorithms, machine learning and AI.
          </p>
        </div>

        <div className="education-item">
          <img src={highSchoolIcon} alt="High school icon" />
        </div>
        <div className="education-entry">
          <h3>High School Diploma</h3>
          <span className="date">2019 - 2022</span>
          <p className="school-name">Prek Arn Bei High School</p>
          <p>Joined Math Competition and graduate with an excellent results.</p>
        </div>
      </div>
    </section>
  );
}
