import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/food-villa.png"



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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false)
  }

  useEffect(()=>{
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    console.log("loggedInUser", isLoggedIn)
    setIsLoggedIn(isLoggedIn)
    // getting this from api
    // return isLoggedIn;
  }, [isLoggedIn])

  // const loggedInUser = () => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn")
  //   console.log("loggedInUser", isLoggedIn)
  //   // getting this from api
  //   return isLoggedIn;
  // };

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/instamart">Instamart</Link></li>
          <li>
            {isLoggedIn ? (
              <Link onClick={() => logoutHandler()}>Logout</Link>
              // <button className="btn" onClick={() => setIsLoggedIn(false)}>
              //   Logout
              // </button>
            ) : (
              <Link to="/login">Login</Link>
              // <button className="btn" onClick={() => setIsLoggedIn(true)}>
                
              // </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
