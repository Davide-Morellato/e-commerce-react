import React from "react";
import './cart-icon.styles.scss';

import { useSelector, useDispatch } from "react-redux"; //importo il dispatch per il recupero della funzione & il selector per i selettori
import { toggleCart } from "../../redux/cart/cart.actions"; //importo la funzione per il controllo dell'apertura/chiusura del carrello
import ShoppingCartItem from "../../assets/img/shopping-cart.png"; //importo l'icona del carrello
import { selectCountProducts } from "../../redux/cart/cart.selectors"; //importo il selettore per il conteggio dei prodotti


const CartIcon = () => {

    //dichiaro il dispatch per il recupero della funzione toggleCart
    const dispatch = useDispatch();

    //dichiaro una variabile in cui recupero il selettore per il conteggio prodotti
    const numProducts = useSelector(selectCountProducts)

    return(
        //aggiungo la direttiva onClick che, tramite una callback, mi permette di gestire l'apertura e la chiusura del dropdown, grazie al dispatch che recupera la funzione toggleCart()
        <div className="cart" onClick={() => dispatch(toggleCart())}>
          <img src={ShoppingCartItem} className="cart_icon" alt="cart" />

          {/* inserisco la variabile che dal selettore recupera il totale dei prodotti nel carrello */}
          <span className="item_counter"> {numProducts} </span> 
          
        </div>
    )
};

export default CartIcon;