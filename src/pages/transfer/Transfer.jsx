import Contact from "./assets/contacts.svg";
import SendMoneyTo from "./assets/sendmoneyto.svg";
import Icon1 from "../features/assets/payment.svg";
import Icon5 from "../features/assets/cashback.svg";
import "./Transfer.css";
import PrimaryButton from "../../components/buttons/primarybutton/PrimaryButton";

function Transfer() {
  return (
    <div className="transfer">
      <div className="container">
        <div className="transfer-grid">
          <div className="checklist">
            <h2>
              Make your money <br />
              transfer simple and clear
            </h2>
            <ul>
              <li className="transfer-list">
                Banking transactions are free for you
              </li>
              <li className="transfer-list">No monthly cash commission</li>
              <li className="transfer-list">
                Manage payments and transactions online
              </li>
            </ul>
            <button className="learn-more-btn">
              <PrimaryButton
                btnText="Learn More"
                btnIcon="fa-solid fa-arrow-right"
                customClass="row-reverse"
              />
            </button>
          </div>
          <div className="sendmoney">
            <img
              src={SendMoneyTo}
              alt="image showcasing a graph of how much money you have transfered"
            />
          </div>
          <div className="contact-img">
            <img src={Contact} alt="image showcasing contacts" />
          </div>
          <div className="payment">
            <h2>
              Receive payment from
              <br />
              international bank details
            </h2>
            <div className="payment-grid">
              <div className="payment-text">
                <div id="transfer-icon-1" className="icon-box">
                  <img src={Icon1} alt="icon payment" />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veritatis, vel.
                </p>
              </div>
              <div className="cashback-text">
                <div id="transfer-icon-2" className="icon-box">
                  <img src={Icon5} alt="icon cashback" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  magnam eveniet!
                </p>
              </div>
            </div>
            <button className="learn-more-btn">
              <PrimaryButton
                btnText="Learn More"
                btnIcon="fa-solid fa-arrow-right"
                customClass="row-reverse"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
