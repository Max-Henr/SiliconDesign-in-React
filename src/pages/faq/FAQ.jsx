import "./FAQ.css";
import Accordion from "../../components/accordion/Accordions";

function FAQ() {
  return (
    <div className="page-4">
      <div className="container FAQ">
        <div className="FAQ-grid">
          <div className="FAQ-text">
            <h2>
              Any quenstions? <br />
              Check out the FAQs
            </h2>
            <p>Still have unaswerd questions and need to get in touch?</p>
          </div>
          {/* the accordion goes here */}
          <Accordion />
          <div className="contact-method">
            <div id="contact-phone" className="contact-box">
              <i className="fa-solid fa-phone-volume"></i>
              <p>Still have quenstions?</p>
              <a href="#">Contact us</a>
            </div>
            <div id="contact-message" className="contact-box">
              <i className="fa-solid fa-comment-dots"></i>
              <p>Still have quenstions?</p>
              <a href="#">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FAQ;
