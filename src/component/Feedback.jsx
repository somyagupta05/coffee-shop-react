// src/components/Feedback.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const Feedback = () => {
  const location = useLocation();

  // Extract passed state or fallback to empty object
  const feedbackData = location.state || {};

  return (
    <section className="feedback" style={{ padding: "2rem" }}>
      <h1>Feedback</h1>

      {feedbackData.name && feedbackData.email && feedbackData.feedback ? (
        <div style={{ marginBottom: "2rem", padding: "1rem", backgroundColor: "#f9f3e7", borderRadius: "8px", border: "1px solid #d4c4a8" }}>
          <h3>New Feedback Received:</h3>
          <p><strong>Name:</strong> {feedbackData.name}</p>
          <p><strong>Email:</strong> {feedbackData.email}</p>
          <p><strong>Message:</strong> {feedbackData.feedback}</p>
        </div>
      ) : (
        <p>No new feedback submitted yet.</p>
      )}

      <h2>Previous Feedbacks:</h2>
      <ul>
        <li>Great coffee and atmosphere!</li>
        <li>Loved the friendly staff and cozy vibe.</li>
        <li>Best place to work remotely with amazing coffee.</li>
      </ul>
    </section>
  );
};

export default Feedback;
