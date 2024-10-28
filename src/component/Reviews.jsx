// src/components/Reviews.jsx
import React from "react";

const Reviews = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        customers's<span>review</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            culpa eligendi consectetur quasi ad reiciendis, corrupti omnis, amet
            repellendus similique autem illo hic!
          </p>
          <img
            src={require("../images/review1.png")}
            className="user"
            alt="Review by Somya Gupta"
          />
          <h3>Somya Gupta</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>

        <div className="box">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            culpa eligendi consectetur quasi ad reiciendis, corrupti omnis, amet
            repellendus similique autem illo hic!
          </p>
          <img
            src={require("../images/review2.png")}
            className="user"
            alt="Review by Kushi Bansal"
          />
          <h3>Kushi Bansal</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>

        <div className="box">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            culpa eligendi consectetur quasi ad reiciendis, corrupti omnis, amet
            repellendus similique autem illo hic!
          </p>
          <img
            src={require("../images/review3.png")}
            className="user"
            alt="Review by Alice Shukh"
          />
          <h3>Alice Shukh</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
