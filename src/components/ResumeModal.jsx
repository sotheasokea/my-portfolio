import { useState } from "react";
import "./ResumeModal.css";

export function ResumeModal() {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const CORRECT_PASSWORD = import.meta.env.VITE_RESUME_PASSWORD;

  function handleDownloadClick(e) {
    e.preventDefault();
    setShowModal(true);
    setPassword("");
    setError("");
  }

  function handleSubmit() {
    if (password === CORRECT_PASSWORD) {
      setShowModal(false);
      window.open("www.example.com", "_blank");
    } else {
      setError("Incorrect password. Please try again.");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSubmit();
    if (e.key === "Escape") setShowModal(false);
  }

  const modal = showModal && (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Resume Access</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter password"
          autoFocus
        />
        {error && <p className="modal-error">{error}</p>}
        <div className="modal-buttons">
          <button onClick={() => setShowModal(false)}>Cancel</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );

  return { handleDownloadClick, modal };
}
