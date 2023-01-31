import { useState } from "react";

const Title = () => (
  <img
    className="logo"
    alt="logo"
    src="https://github.com/raviranjan1122/assets/blob/main/logos/foodVillaLogo.png?raw=true"
  />
);

const loggedInUser = () =>{
// API call to check authentication
return false;
}

const Header = () => {
  
  const [isloggedIn, setIsLoggedIn] = useState(false);

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
      {
       
         //There is diff between JS Expression and Statement...
        /**
         * let a = 10;
         * console.log(a); this will not work here...it will throw error...its know as a JS statement.
         *
         * but once you write within expression...then it will work.
         * ((a=10), console.log(a)) this will work...
         */
        isloggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )
      }
    </div>
  );
};

export default Header;
