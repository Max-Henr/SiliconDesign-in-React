import "./ContactInfo.css";

function ContactInfo({center, location, phoneNumber}) {
  return (
    <div className="contact-info">
      <h2>{center}</h2>
      <ul className="ul-contact">
        <li className="location">{location}</li>
        <li className="contact-number">{phoneNumber}</li>
        <li className="opening-hours">
          <p>
            <span>Mon - Fri:</span> 9:00 am - 22:00 am <br />
            <span>Sat - Sun:</span> 9:00 am - 20:00 am
          </p>
        </li>
      </ul>
    </div>
  );
}
export default ContactInfo;
