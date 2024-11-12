import { useState } from "react";
import "./Subscribe.css";
import Bell from "./assets/bell.svg";

function Subscribe() {
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState([]);

  const validateField = (name, value) => {
    let error = "";

    if (
      name === "email" &&
      !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)
    ) {
      error = "Must be a valid email (eg. username@example.com)";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (
      !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Must be a valid email (eg. username@example.com)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form is valid");
      try {
        const response = await fetch(
          "https://win24-assignment.azurewebsites.net/api/forms/subscribe",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        if (response.ok) {
          const submitionOk = "Successfully submitted";
          setSubmitted(submitionOk);
          setFormData({ email: "" });
          return setSubmitted;
        } else {
          const submitionError = "Invalid check all the information again";
          setSubmitted(submitionError);
          console.log("invalid check all the information again");
          return setSubmitted;
        }
      } catch (error) {
        console.error("Error during the request:");
      }
    }
  };

  return (
    <div className="subscribe container">
      <div className="contact">
        <a className="btn-contact" href="#">
          <span>Contact us now</span>
        </a>
      </div>
      <div className="newsletter">
        <div className="newsletter-text">
          <img src={Bell} alt="image of a bell notification" />
          <h2 className="sub-reg">Subscribe to our newsletter</h2>
          <h2 className="sub-desktop">
            Subscribe to our newsletter to stay informed about the latest
            updates
          </h2>
        </div>
        <form className="form-email" onSubmit={handleSubmit} noValidate>
          <div className="form-flex">
            <div className="form-input">
              <input
                className="email-input"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
              />
              <i className="fa-regular fa-envelope" aria-hidden="true"></i>
              <input
                className="btn-subscribe"
                type="submit"
                value="Subscribe"
              />
            </div>
            <div>
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
              <span>{submitted}</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Subscribe;
