import React from "react";
//
//importo il logo di react -> per utilizzarlo come componente {ReactComponent as Logo}
// import {ReactComponent as Logo} from "../../assets/img/online-shopping.png";
//
import { Link } from "react-router-dom"; //importo il componente Link per la navigazione
import { auth } from "../../firebase/firebase.data"; //importo il metodo di autenticazione

import "./header.styles.scss"; //importo il foglio di stile
import IconShop from "../../assets/img/online-shopping.png";
import ShoppingCartItem from "../../assets/img/shopping-cart.png"; //importo l'icona del carrello

//applico il parametro user per la lettura del valore
const Header = ({ user }) => {
  //definisco il metodo logout di firebase
  const logout = () => {
    auth.signOut();
  };


  return (
    <div className="header">
      <Link to="/" className="logo_container">
        {/* isnerisco il Logo */}
        {/* <Logo className="logo" /> */}
        <img src={IconShop} className="logo" alt="cart" />
      </Link>

      <div className="options">
        {/* inserisco i links con i rispettivi percorsi */}
        <Link className="option_item" to="/shop">
          Shop
        </Link>
        {/* applico un controllo */}
        {
          //SE il valore di user è diverso da null
            //ALLORA dammi il logout con evento al click del metodo signOut di firebase
          //ALTRIMENTI dammi il login
          user !== null ? (
            <div className="option_item" onClick={logout}>Logout</div>
          ) : (
            <Link className="option_item" to="/login">Login</Link>
          )
        }
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
