import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedUser } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between p-2 shadow-sm">
      <div className="w-[200px]">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex justify-between gap-4 p-4 m-4 text-xl font-bold">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/" className="custom-link">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="custom-link">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact-us" className="custom-link">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="custom-link">
              Grocery
            </Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <span> 👤 {loggedUser}</span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
