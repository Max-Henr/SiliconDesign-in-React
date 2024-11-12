import ContactInfo from "../../components/contactinfo/ContactInfo";
import Map from "./assets/map.svg";
import "./ContactLocation.css";

function ContactLocation() {
  return (
    <div className="container">
      <div className="location-grid">
        <div className="map-img">
          <img src={Map} alt="an image of the location of our offices" />
        </div>
        <div className="contact-info-grid">
          <ContactInfo
            center="Medical Center 1"
            location="4517 Washington Ave. Manchester, Kentucky 39495"
            phoneNumber="(406) 555-0120"
          />
          <ContactInfo
            center="Medical Center 2"
            location="2464 Royal Ln. Mesa,New Jersey 45463"
            phoneNumber="(406) 544-0123"
          />
        </div>
        <div className="social-media">
            <a className="socials" href="/"><i class="fa-brands fa-facebook"></i></a>
            <a className="socials" href="/"><i class="fa-brands fa-twitter"></i></a>
            <a className="socials" href="/"><i class="fa-brands fa-instagram"></i></a>
            <a className="socials" href="/"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </div>
  );
}
export default ContactLocation;
