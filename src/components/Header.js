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
  return <div className="header">
        <Title />
        <div className="nav-items" >
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
  </div>;
};

export default Header;
