import LeftImage from "./assets/leftimagetablet.svg";
import MiddleImage from "./assets/middleimage.svg";
import RightImage from "./assets/rightimagetablet.svg";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <div className="page-3">
      <div className="how-it-works-grid container">
        <h2>How Does It Work</h2>
        <div className="balance-img">
          <img
            className="mobile-img"
            src={MiddleImage}
            alt="image of the app showcasing balance and contacts"
          />
          <img
            className="tablet-img left-img"
            src={LeftImage}
            alt="image of the app showcasing transactions"
          />
          <img
            className="tablet-img right-img"
            src={RightImage}
            alt="image of the app showcasing how to transfer"
          />
        </div>
        <div className="transfer-text">
          <h3>
            <span>Step 3. </span>Transfer to people from your contact list
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
            nobis?
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
