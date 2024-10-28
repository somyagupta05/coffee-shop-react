// src/components/Menu.jsx
import React from "react";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        our<span>menu</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img
            src={require("../images/menu1.png")}
            alt=""
            style={{ borderRadius: "50%" }}
          />
          <h3>tasty and healthy</h3>
          <div className="price">
            $15.99<span>20.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>

        <div className="box">
          <img
            src={require("../images/menu2.png")}
            alt=""
            style={{ borderRadius: "50%" }}
          />
          <h3>tasty and healthy</h3>
          <div className="price">
            $15.99<span>20.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>

        <div className="box">
          <img
            src={require("../images/menu3.png")}
            alt=""
            style={{ borderRadius: "50%" }}
          />
          <h3>tasty and healthy</h3>
          <div className="price">
            $15.99<span>20.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>

        <div className="box">
          <img
            src={require("../images/menu5.png")}
            alt=""
            style={{ borderRadius: "50%" }}
          />
          <h3>tasty and healthy</h3>
          <div className="price">
            $15.99<span>20.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>

        <div className="box">
          <img
            src={require("../images/menu4.png")}
            alt=""
            style={{ borderRadius: "50%" }}
          />
          <h3>tasty and healthy</h3>
          <div className="price">
            $15.99<span>20.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>

        <div className="box">
          <img
            src={require("../images/mennu6.png")}
            alt=""
            style={{ borderRadius: "50%" }}
          />
          <h3>tasty and healthy</h3>
          <div className="price">
            $15.99<span>20.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
