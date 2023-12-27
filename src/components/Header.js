import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="custom-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="custom-link">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us" className="custom-link">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart" className="custom-link">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
