import { NavLink } from "react-router-dom";
import "./ContactUsComponent.css";

function ContactUsComponent({
  header,
  contactText,
  contactBtn,
  contactIcon,
  setClass,
}) {
  return (
    <div className={`contact-component-flex ${setClass}`}>
      <div className="contact-component-icon">
        <i className={contactIcon}></i>
      </div>
      <div className="contact-component-content">
        <h2>{header}</h2>
        <p>{contactText}</p>
        <NavLink to="/" className="contact-btn">
          {contactBtn}
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
      </div>
    </div>
  );
}
export default ContactUsComponent;
