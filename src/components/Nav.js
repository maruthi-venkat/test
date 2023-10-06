import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <Link to="#" className="navbar-brand">
        Ethnus
      </Link>
      <div className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
