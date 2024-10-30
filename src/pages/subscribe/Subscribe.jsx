import "./Subscribe.css";
import Bell from "./assets/bell.svg";

function Subscribe() {
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
        <form className="form-email">
          <div className="form-input">
            <input
              className="email-input"
              type="email"
              name="input"
              id="email"
              placeholder="Your email"
            />
            <i className="fa-regular fa-envelope" aria-hidden="true"></i>
            <input className="btn-subscribe" type="submit" value="Subscribe" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Subscribe;
