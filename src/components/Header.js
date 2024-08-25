import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/food-villa.png";
import UserContext from "./utils/UserContext";

const Title = () => {
  return (
    <Link to="/">
      <img
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffQb1asscsRL1vnz3gTtK8HRTknd_9GpZmg&s"
        src={Logo}
        alt="logo"
        className="h-28 p-2"
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

  const {user} = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-purple-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/about">About us</Link></li>
          <li className="px-2"><Link to="/contact">Contact</Link></li>
          <li className="px-2"><Link to="/cart">Cart</Link></li>
          <li className="px-2"><Link to="/instamart">Instamart</Link></li>
          <li className="text-red-500">{user.name}</li>
          <li className="px-2">
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

