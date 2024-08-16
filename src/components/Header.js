import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/food-villa.png"

const loggedInUser = () => {
  // getting this from api
  return false;
};

const Title = () => {
  return (
    <Link to="/">
      <img
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffQb1asscsRL1vnz3gTtK8HRTknd_9GpZmg&s"
        src={Logo}
        alt="logo"
        className="logo"
      />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(loggedInUser());

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li>
            {isLoggedIn ? (
              <button className="btn" onClick={() => setIsLoggedIn(false)}>
                Logout
              </button>
            ) : (
              <button className="btn" onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
