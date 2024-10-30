import GoogleLogo from "./assets/googlelogo.svg";
import Iphone from "./assets/iphone.svg";
import "./Showcase.css";

function Showcase() {
  return (
    <div className="page-1">
      <div className="showcase container">
        <div className="showcase-grid">
          <h1>
            Manage All Your <br />
            Money in One App
          </h1>
          <p className="info">
            We offer you a new generation of the mobile banking. Save, spend &
            manage money in your pocket
          </p>
          <div className="btn-store-box">
            <button className="btn-store">
              <i className="fa-brands fa-apple"></i>
              <p>
                Download on the
                <br />
                <span>App Store</span>
              </p>
            </button>
            <button className="btn-store">
              <img src={GoogleLogo} alt="download on google play" />
              <p>
                GET IT ON
                <br />
                <span>Google Play</span>
              </p>
            </button>
          </div>
          <div className="discovermore">
            <button
              className="btn-discovermore"
              aria-label="press this button to discover more">
              <i className="fa-solid fa-chevron-up"></i>
            </button>
            <p>Discover more</p>
          </div>
          <div className="img-showcase">
            <img src={Iphone} alt="phone showcasing the app" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Showcase;
