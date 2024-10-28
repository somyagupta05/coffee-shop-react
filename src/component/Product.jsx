// src/components/Products.jsx
import React from "react";

const Products = () => {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        our<span>products</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className="image">
            <img src={require("../images/product1.png")} alt="" />
          </div>
          <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="price">
              $15.99<span>20.99</span>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className="image">
            <img src={require("../images/product2.png")} alt="" />
          </div>
          <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="price">
              $15.99<span>20.99</span>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className="image">
            <img src={require("../images/product3.png")} alt="" />
          </div>
          <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="price">
              $15.99<span>20.99</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
