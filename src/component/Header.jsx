import React, { useEffect, useState } from "react";
import logo from "../images/logo.png"; // Your logo path
import cart1 from "../images/cart1.png"; // Fallback image
import { Link } from "react-router-dom";
const Header = ({
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const [showBill, setShowBill] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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

    return () => {
      document.querySelector("#menu-btn").onclick = null;
      document.querySelector("#search-btn").onclick = null;
      document.querySelector("#cart-btn").onclick = null;
      window.onscroll = null;
    };
  }, []);

  useEffect(() => {
    // Calculate total quantity and price every time cartItems change
    const totalQty = cartItems.reduce(
      (sum, item) => sum + (item.quantity || 1),
      0
    );
    const totalPr = cartItems.reduce(
      (sum, item) => sum + (item.price * (item.quantity || 1)),
      0
    );

    setTotalQuantity(totalQty);
    setTotalPrice(totalPr);
  }, [cartItems]);

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
         <Link to="/feedback">Feedback</Link> 
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
        {cartItems.length === 0 ? (
          <p style={{ padding: "1rem", color: "#999" }}>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <span
                className="fas fa-times"
                style={{ cursor: "pointer" }}
                onClick={() => removeFromCart(item.id)}
              ></span>
              <img src={item.img || cart1} alt={item.name} />
              <div className="content">
                <h3>{item.name}</h3>
                <div className="price">${item.price}</div>
                <div
                  className="quantity-controls"
                  style={{
                    marginTop: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <button onClick={() => decreaseQuantity(item.id)} disabled={item.quantity <= 1}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <button
            className="btn"
            style={{ marginTop: "1rem" }}
            onClick={() => setShowBill(!showBill)}
          >
            {showBill ? "Hide Bill" : "Checkout Now"}
          </button>
        )}

        {showBill && (
          <div
            className="bill-summary"
            style={{
              marginTop: "1rem",
              padding: "1rem",
              borderTop: "1px solid #ddd",
              backgroundColor: "#fafafa",
              borderRadius: "6px",
              boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h2>Bill Summary</h2>
            <p>Total distinct items: {cartItems.length}</p>
            <p>Total quantity: {totalQuantity}</p>
            <p>
              Total price: <strong>${totalPrice.toFixed(2)}</strong>
            </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
