import Albert from "./assets/albert.svg";
import Fannie from "./assets/fannie.svg";
import Rating4Star from "./assets/rating4star.svg";
import Rating5Star from "./assets/rating5star.svg";
import "./Ratings.css";
import Testimonials from "../../components/testimonials/testimonials";

function Ratings() {
  return (
    <div className="ratings">
      <div className="container ratings-container">
        <h2>
          Clients are <br />
          Loving Our App
        </h2>
        <Testimonials />
      </div>
    </div>
  );
}

export default Ratings;
