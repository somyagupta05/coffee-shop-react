import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our<span>blogs</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={require("../images/menu1.png")} alt="" />
          </div>
          <div className="content">
            <a href="#" className="title">
              tasty and refreshing coffee
            </a>
            <span>by admin / 20st june 2023</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, ipsum.
            </p>
           <Link to="/learnmore" className="btn">
  read more
</Link>

          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={require("../images/menu2.png")} alt="" />
          </div>
          <div className="content">
            <a href="#" className="title">
              tasty and refreshing coffee
            </a>
            <span>by admin / 21st May 2024</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, ipsum.
            </p>
            <Link to="/learnmore" className="btn">
  read more
</Link>

          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={require("../images/mennu6.png")} alt="" />
          </div>
          <div className="content">
            <a href="#" className="title">
              tasty and refreshing coffee
            </a>
            <span>by admin / 19th Aug 2025</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, ipsum.
            </p>
           <Link to="/learnmore" className="btn">
  read more
</Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
