import './Education.css'
export function Education(){
  return (
          <section class="education-section">
        <h2 class="education-title">Education</h2>

        <div class="education-grid">
          <div class="education-item">
            <img src="images/mortarboard-icon.png" alt="University icon" />
          </div>
          <div class="education-entry">
            <h3>Bachelor of Computer Science</h3>
            <span class="date">2024 - present</span>
            <p class="school-name">Sitekaom University</p>
            <p>Studying computer science with a focus on software developing, data structures, algorithms, machine learning and AI.</p>
          </div>

          <div class="education-item">
            <img src="images/high-school-icon.png" alt="High school icon" />
          </div>
          <div class="education-entry">
            <h3>High School Diploma</h3>
            <span class="date">2019 - 2022</span>
            <p class="school-name">Prek Arn Bei High School</p>
            <p>Joined Math Competition and graduate with an excellent results.</p>
          </div>
        </div>
      </section>
  );
}