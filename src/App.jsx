import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer"
import "./index.css";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="nav-left">
              <h1>SteeZers</h1>
            </div>
            <div className="nav-center">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-bar"
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </div>
            </div>
            <div className="nav-right">
              <Link to="/cart">Cart <FontAwesomeIcon icon={faShoppingCart} className="icon" />
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
              </Link>
              <Link to="/logout">
                {" "}
                Logout <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
              </Link>
            </div>
          </nav>
          <div className="content">
            <h2>Your Number One Fashion Store</h2>
            <p>A taste of class</p>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProductList addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
