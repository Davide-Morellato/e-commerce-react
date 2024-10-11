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

import { logOut } from "../../redux/user/user.actions"; //importo la funzione per l'azione da svolgere in caso di logout dell'utente (user.actions.js)
import { connect } from "react-redux"; //importo il metodo connect che collega un componente React a uno store Redux.

//applico due parametri:
//user per la lettura del valore
//setLogOut per sovrascrivere il valore in caso di disconnessione dell'utente
const Header = ({ user, setLogOut }) => {
  //definisco il metodo logout di firebase
  const logout = () => {
    auth.signOut();

    //invoco la funzione setLogout() per svuotare lo state
    setLogOut();
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


//funzione per mappare lo state globale di redux
const mapStateToProps = (state) => ({
  //definisco la proprietà user in base allo state in UserReducer
  //quindi controllandone la proprietà loggedUser in base allo user
  user: state.user.loggedUser
})


//funzione per salvare i dati nello state
const mapDispatchToProps = (dispatch) => ({
  //imposto l'azione da intraprendere in base al logout dell'utente
  //NB dispatch è un metodo per la distribuzione delle azioni per innescare modifiche nello state
  setLogOut: () => dispatch(logOut())
})

//inserisco la funzione connect sfruttando la currying function,
//così da prendere i valori necessari dallo state e passarli all'Header
export default connect(mapStateToProps, mapDispatchToProps)(Header);
