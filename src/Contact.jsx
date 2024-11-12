import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import NavBar from "./components/navbar/NavBar";
import ContactUs from "./pages/contact-us/ContactUs";
import ContactCard from "./pages/contactcard/ContactCard";
import ContactLocation from "./pages/contactlocation/ContactLocation";

function Contact({ toggleDarkMode }) {
  return (
    <>
      <ContactUs />
      <ContactCard />
      <ContactLocation />
    </>
  );
}
export default Contact;
