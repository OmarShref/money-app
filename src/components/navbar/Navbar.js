import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="main-navbar">
      <div className="links">
        <ul>
          <li>
            <Link to="/recording">Recording</Link>
          </li>
          <li>
            <Link to="/budget">Budget</Link>
          </li>
          <li>
            <Link to="/tracking">Tracking</Link>
          </li>
          <li>
            <Link to="/checklist">Check List</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
