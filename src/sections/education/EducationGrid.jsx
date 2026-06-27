import { schools } from "./educationData";

export function EducationGrid() {
  return (
    <div className="education-grid">
      {schools.map((school) => {
        return (
          <>
            <div className="education-item">
              <img src={school.icon} alt="University icon" />
            </div>
            <div className="education-entry">
              <h3>{school.educationLevel}</h3>
              <span className="date">{school.date}</span>
              <p className="school-name">{school.institutionName}</p>
              <p>{school.description}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
