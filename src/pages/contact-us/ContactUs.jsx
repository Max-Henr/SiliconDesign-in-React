import ContactUsComponent from "../../components/contact/ContactUsComponent";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="background">
      <div className="container">
        <div className="contact-grid">
          <Breadcrumb />
          <h1>Contact Us</h1>
          <ContactUsComponent
            header="Email Us"
            contactText="Please feel free to drop us a line. We will respond as soon as possible"
            contactBtn="Leave a message"
            contactIcon="fa-regular fa-envelope"
            setClass="email"
          />
          <ContactUsComponent
            header="Careers"
            contactText="Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum"
            contactBtn="Send an application"
            contactIcon="fa-solid fa-user-group"
            setClass="careers"
          />
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
