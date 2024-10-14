import React from "react";
import './cart-icon.styles.scss';

import { useDispatch } from "react-redux"; //importo il dispatch per il recupero della funzione
import { toggleCart } from "../../redux/cart/cart.actions"; //importo la funzione per il controllo dell'apertura/chiusura del carrello
import ShoppingCartItem from "../../assets/img/shopping-cart.png"; //importo l'icona del carrello


const CartIcon = () => {

    //dichiaro il dispatch per il recupero della funzione toggleCart
    const dispatch = useDispatch();

    return(
        <div className="cart" onClick={() => dispatch(toggleCart())}>
          <img src={ShoppingCartItem} className="cart_icon" alt="cart" />
          <span className="item_counter">0</span>
        </div>
    )
};

export default CartIcon;