// src/components/Contact.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you could also send the data to backend

    // Navigate to /feedback page and pass formData as state
    navigate("/feedback", { state: formData });
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>contact</span> us
      </h1>
      <div className="row">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460525.7452500644!2d77.35537145!3d25.60965485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3970f1bf80ad9c8b%3A0x899bbcb3e0e2d6d8!2sPohri%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1730114084892!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>

        <form onSubmit={handleSubmit}>
          <h3>get in touch</h3>
          <div className="inputBox">
            <span className="fas fa-user"></span>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputBox">
            <span className="fas fa-phone"></span>
            <input
              type="number"
              placeholder="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputBox">
            <span className="fas fa-comment"></span>
            <textarea
              placeholder="Your feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              rows="4"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <input type="submit" value="contact now" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
