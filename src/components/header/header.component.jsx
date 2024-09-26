import React from "react";

//importo il logo di react -> per utilizzarlo come componente {ReactComponent as Logo}
import {ReactComponent as Logo} from "../../assets/img/logo.svg"; 

import "./header.styles.scss"; //importo il foglio di stile

import ShoppingCartItem from "../../assets/img/shopping-cart.png"; //importo l'icona del carrello

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="logo_container">
        {/* isnerisco il Logo */}
        <Logo className="logo" />
      </a>
      <div className="options">
        {/* inserisco i links con i rispettivi percorsi */}
        <a className="option_item" href="/shop">Shop</a>
        <a className="option_item" href="/login">Login</a>
        {/* inserisco l'icona carrello */}
        <div className="cart">
            <img src={ShoppingCartItem} className="cart_icon" alt="cart" />
            <span className="item_counter">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
