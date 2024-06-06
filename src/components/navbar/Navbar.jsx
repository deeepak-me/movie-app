import React from "react";
import "./Navbar.css"; // Create a CSS file for styling
import logo from "../../assets/Buttons.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <span className="title-segment">
          <img src={logo} alt="" />
          <div className="title">GET MOVIES</div>
        </span>

        <div className="search-bar">
          <input type="text" placeholder="Search movies and series" />
        </div>
      </div>
      <button className="fav-movie-btn">Favorite Movie</button>
    </nav>
  );
};

export default Navbar;
