import Brand1 from "./assets/brand1.svg";
import Brand2 from "./assets/brand2.svg";
import Brand3 from "./assets/brand3.svg";
import Brand4 from "./assets/brand4.svg";
import Brand5 from "./assets/brand5.svg";
import Brand6 from "./assets/brand6.svg";
import "./brands.css";

function Brands() {
  return (
    <div id="brands">
      <div className="container brand-flex">
        <div id="brand-1" className="brand-box">
          <img src={Brand1} alt="lorem brand" />
        </div>
        <div id="brand-2" className="brand-box">
          <img src={Brand2} alt="lorem brand" />
        </div>
        <div id="brand-3" className="brand-box">
          <img src={Brand3} alt="lorem brand" />
        </div>
        <div id="brand-4" className="brand-box">
          <img src={Brand4} alt="lorem brand" />
        </div>
        <div id="brand-5" className="brand-box">
          <img src={Brand5} alt="lorem brand" />
        </div>
        <div id="brand-6" className="brand-box">
          <img src={Brand6} alt="lorem brand" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
