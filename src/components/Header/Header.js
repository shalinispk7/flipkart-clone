import React from "react";
import cart from "../../assets/svg/cart-icon.svg";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <section className="header-sec">
      <div className="container">
        <div className="header-list">
          <div>
            <a href="#" onClick={() => navigate("/")}>
              FlipKart
            </a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="search for products and more..." />
          </div>
          <div>
            <a href="#">Prem Kumar</a>
          </div>
          <div>
            <a href="#">Become a Seller</a>
          </div>
          <div>
            <a href="#">More</a>
          </div>
          <div>
            <a href="#">
              Cart
              <img src={cart} alt="cart Logo" className="cart-img" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
