import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Menu from "./component/Menu";
import Product from "./component/Product";
import Reviews from "./component/Reviews";
import Contact from "./component/Contact";
import Blog from "./component/Blog";
import Footer from "./component/Footer";
import Learnmore from "./component/Learnmore";
import Feedback from "./component/Feedback";
function App() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const exist = prevCart.find((i) => i.id === item.id);
      if (exist) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    setNotification(`${item.name} added to cart`);
    setTimeout(() => setNotification(null), 2000);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <Router>
      <Header
        cartItems={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Menu addToCart={addToCart} />
              <Product addToCart={addToCart} />
              <Reviews />
              <Contact />
              <Blog />
              
              <Footer />
            </>
          }
        />
         <Route path="/feedback" element={<Feedback />} />
        <Route path="/learnmore" element={<Learnmore />} />
      </Routes>
    </Router>
  );
}

export default App;
