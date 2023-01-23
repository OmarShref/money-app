import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="main-navbar">
      <div className="links">
        <ul>
          <li>
            <Link to="/money-app/recording">Recording</Link>
          </li>
          <li>
            <Link to="/money-app/budget">Budget</Link>
          </li>
          <li>
            <Link to="/money-app/tracking">Tracking</Link>
          </li>
          <li>
            <Link to="/money-app/checklist">Check List</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
