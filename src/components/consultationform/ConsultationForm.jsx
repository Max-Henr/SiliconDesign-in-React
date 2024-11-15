import React, { useState } from "react";
import "./ConsultationForm.css";
import PrimaryButton from "../buttons/primarybutton/PrimaryButton";

function ConsultationForm() {
  const [options, setOptions] = useState([
    { id: 1, text: "finacial consultation" },
    {
      id: 2,
      text: "Money Help",
    },
    { id: 3, text: "Give me more money" },
    { id: 4, text: "I dont have money" },
    { id: 5, text: "this is a robbery" },
  ]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    specialist: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState([]);

  const validateField = (name, value) => {
    let error = "";
    if (name === "fullName" && !/^[A-Öa-ö\s\-]{2,}$/.test(value)) {
      error = "Must be atleast 2 characters long, no numbers";
    } else if (
      name === "email" &&
      !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)
    ) {
      error = "Must be a valid email (eg. username@example.com)";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)) {
      newErrors.fullName = "Must be atleast 2 characters long, no numbers";
    }
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
          "https://win24-assignment.azurewebsites.net/api/forms/contact",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        console.log(response);
        if (response.ok) {
          const submitionOk = "Successfully submitted";
          setSubmitted(submitionOk);
          setFormData({ fullName: "", email: "", specialist: "" });
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
    <form
      className="consultation-form-request"
      onSubmit={handleSubmit}
      noValidate>
      <div className="consultation-header">
        <h2>Get Online Consultation</h2>
      </div>
      <div className="form-body">
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullname"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && (
            <span className="error-message">{errors.fullName}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="on"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="customSelect">Specialist</label>
          <select
            name="specialist"
            id="customSelect"
            value={formData.specialist}
            onChange={handleChange}
            required>
            <option value="">Select a specialist</option>
            {options.map((option) => (
              <option key={option.id} value={option.text}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <span>{submitted}</span>
        <button className="form-submit" type="submit">
          <PrimaryButton btnText="Make an appointment" />
        </button>
      </div>
    </form>
  );
}
export default ConsultationForm;
