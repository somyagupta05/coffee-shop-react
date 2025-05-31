import React, { useState } from "react";

const Products = ({ addToCart }) => {
  const productsData = [
    { id: 1, name: "fresh coffee", price: 15.99, oldPrice: 20.99, img: require("../images/product1.png") },
    { id: 2, name: "fresh coffee", price: 25.99, oldPrice: 20.99, img: require("../images/product2.png") },
    { id: 3, name: "fresh coffee", price: 22.99, oldPrice: 20.99, img: require("../images/product3.png") },
  ];

  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (id, e) => {
    e.preventDefault(); // prevent page jump
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="products" id="products">
      <h1 className="heading">
        our<span>products</span>
      </h1>
      <div className="box-container">
        {productsData.map((product) => (
          <div className="box" key={product.id}>
            <div className="icons">
              <a
                href="#"
                className="fas fa-shopping-cart"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
              ></a>

              <a
                href="#"
                className="fas fa-heart"
                onClick={(e) => toggleLike(product.id, e)}
                style={{ color: likedItems.includes(product.id) ? "pink" : "white" }}
              ></a>

              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="content">
              <h3>{product.name}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="price">
                ${product.price}
                <span>{product.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
