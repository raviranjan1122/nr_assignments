const Title = () => (
    <img
      className="logo"
      alt="logo"
      src="https://github.com/raviranjan1122/assets/blob/main/logos/foodVillaLogo.png?raw=true"
    />
  );

  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  
 export default Header;  