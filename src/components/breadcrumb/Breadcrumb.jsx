import { Link, useLocation, NavLink } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb() {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((x) => x);
  return (
    <div className="container">
      <ul className="breadcrumb">
        <li className="breadcrumb-list breadcrumb-home">
          <Link to="/">Home</Link>
        </li>
        {pathNames.map((value, index) => {
          const to = `/${pathNames.slice(0, index + 1).join("/")}`;

          return (
            <li className="breadcrumb-list breadcrumb-current" key={to}>
              {index === pathNames.length - 1 
                ? (<span>{value.replace(/-/g, " ")}</span>) 
                : (<NavLink to={to}>{value.replace(/-/g, " ")}</NavLink>)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Breadcrumb;