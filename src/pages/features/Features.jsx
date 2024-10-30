import Icon1 from "./assets/payment.svg";
import Icon2 from "./assets/security.svg";
import Icon3 from "./assets/statistics.svg";
import Icon4 from "./assets/support.svg";
import Icon5 from "./assets/cashback.svg";
import Icon6 from "./assets/standards.svg";
import PhoneFeatures from "./assets/iphone-features.svg";
import "./features.css";

function Features() {
  return (
    <div className="page-2">
      <div className="feature container">
        <div className="icon-grid">
          <div className="iphone-feature">
            <img src={PhoneFeatures} alt="icon features" />
          </div>
          <div className="app-features">
            <h2>App Features</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              assumenda suscipit nam nostrum explicabo sunt praesentium laborum
              sit quidem error quas mollitia, provident aspernatur et?
            </p>
          </div>
          <div id="icon1" className="icons">
            <div className="icon-box">
              <img src={Icon1} alt="icon payment" />
            </div>
            <div className="feature-text">
              <h3>Easy Payments</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
                eos!
              </p>
            </div>
          </div>
          <div id="icon2" className="icons">
            <div className="icon-box">
              <img src={Icon2} alt="icon security" />
            </div>
            <div className="feature-text">
              <h3>Data Security</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div id="icon3" className="icons">
            <div className="icon-box">
              <img src={Icon3} alt="icon statistics" />
            </div>
            <div className="feature-text">
              <h3>Cost Statistics</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio!
              </p>
            </div>
          </div>

          <div id="icon4" className="icons">
            <div className="icon-box">
              <img src={Icon4} alt="icon support" />
            </div>
            <div className="feature-text">
              <h3>Support 24/7</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laborum?
              </p>
            </div>
          </div>

          <div id="icon5" className="icons">
            <div className="icon-box">
              <img src={Icon5} alt="icon cashback" />
            </div>
            <div className="feature-text">
              <h3>Regular Cashbacks</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti!
              </p>
            </div>
          </div>

          <div id="icon6" className="icons">
            <div className="icon-box">
              <img src={Icon6} alt="icon standards" />
            </div>
            <div className="feature-text">
              <h3>Top Standards</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                culpa repudiandae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
