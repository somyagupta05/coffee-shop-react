// src/component/Menu.jsx
import React from "react";

const Menu = ({ addToCart }) => {
  const items = [
    {
      id: 1,
      name: "Espresso Delight",
      price: 15.99,
      oldPrice: 20.99,
      img: require("../images/menu1.png"),
    },
    {
      id: 2,
      name: "Caramel Latte",
      price: 18.99,
      oldPrice: 20.99,
      img: require("../images/menu2.png"),
    },
    {
      id: 3,
      name: "Vanilla Cappuccino",
      price: 12.99,
      oldPrice: 20.99,
      img: require("../images/menu3.png"),
    },
    {
      id: 4,
      name: "Hazelnut Brew",
      price: 25.99,
      oldPrice: 20.99,
      img: require("../images/menu5.png"),
    },
    {
      id: 5,
      name: "Mocha Blast",
      price: 19.99,
      oldPrice: 20.99,
      img: require("../images/menu4.png"),
    },
    {
      id: 6,
      name: "Classic Americano",
      price: 22.99,
      oldPrice: 20.99,
      img: require("../images/mennu6.png"),
    },
  ];

  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        our<span>menu</span>
      </h1>
      <div className="box-container">
        {items.map((item) => (
          <div className="box" key={item.id}>
            <img
              src={item.img}
              alt={item.name}
              style={{ borderRadius: "50%" }}
            />
            <h3>{item.name}</h3>
            <div className="price">
              ${item.price} <span>${item.oldPrice}</span>
            </div>
            <button className="btn" onClick={() => addToCart(item)}>
              add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
