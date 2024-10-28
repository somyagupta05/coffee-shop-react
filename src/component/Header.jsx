import React, { useEffect } from "react";
import logo from "../images/logo.png"; // Correct path to the logo
import cart1 from "../images/cart1.png";
import cart2 from "../images/cart2.png";
import cart3 from "../images/cart3.png";
import cart4 from "../images/cart4.png";

const Header = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const searchForm = document.querySelector(".search-form");
    const cartItem = document.querySelector(".cart-items-container");

    document.querySelector("#menu-btn").onclick = () => {
      navbar.classList.toggle("active");
      searchForm.classList.remove("active");
      cartItem.classList.remove("active");
    };

    document.querySelector("#search-btn").onclick = () => {
      searchForm.classList.toggle("active");
      navbar.classList.remove("active");
      cartItem.classList.remove("active");
    };

    document.querySelector("#cart-btn").onclick = () => {
      cartItem.classList.toggle("active");
      navbar.classList.remove("active");
      searchForm.classList.remove("active");
    };

    window.onscroll = () => {
      navbar.classList.remove("active");
      searchForm.classList.remove("active");
      cartItem.classList.remove("active");
    };

    // Clean up the event listeners when the component unmounts
    return () => {
      document.querySelector("#menu-btn").onclick = null;
      document.querySelector("#search-btn").onclick = null;
      document.querySelector("#cart-btn").onclick = null;
      window.onscroll = null;
    };
  }, []); // Empty dependency array means it runs once after the initial render

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={logo} alt="Logo" />
      </a>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#products">Products</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Blogs</a>
      </nav>
      <div className="icons">
        <div className="fas fa-search" id="search-btn"></div>
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        <div className="fas fa-bars" id="menu-btn"></div>
      </div>
      <div className="search-form">
        <input type="search" id="search-box" placeholder="search here.." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>
      <div className="cart-items-container">
        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src={cart1} alt="Cart item 01" />
          <div className="content">
            <h3>Cart item 01</h3>
            <div className="price">$15.99</div>
          </div>
        </div>
        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src={cart2} alt="Cart item 02" />
          <div className="content">
            <h3>Cart item 02</h3>
            <div className="price">$15.99</div>
          </div>
        </div>
        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src={cart3} alt="Cart item 03" />
          <div className="content">
            <h3>Cart item 03</h3>
            <div className="price">$15.99</div>
          </div>
        </div>
        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src={cart4} alt="Cart item 04" />
          <div className="content">
            <h3>Cart item 04</h3>
            <div className="price">$15.99</div>
          </div>
        </div>
        <a href="#" className="btn">
          checkout now
        </a>
      </div>
    </header>
  );
};

export default Header;
