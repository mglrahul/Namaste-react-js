import { useState } from "react";

const loggedInUser = () => {
  // getting this from api
  return false;
};

const Title = () => {
  return (
    <a href="">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffQb1asscsRL1vnz3gTtK8HRTknd_9GpZmg&s"
        alt="logo"
        className="logo"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(loggedInUser());

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
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
