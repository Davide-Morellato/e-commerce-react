import React, { useEffect } from "react";

import './checkout.styles.scss'
import { useDispatch } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions"; //importo la funzione per il controllo dell'apertura/chiusura del carrello

const Checkout = () => {

    //salvo l'HOOK per il recupero delle funzioni
    const dispatch = useDispatch();

    //richiamo la funzione toggleCart grazie al dispatch
    useEffect(() => {
        dispatch(toggleCart())
    }, [dispatch])


    return(
        <div className="checkout">
        <h1>Carrello Utente</h1>
        <div className="header_checkout">
            <div className="data_cart">
                <span></span>
            </div>
            <div className="data_cart">
                <span>Product</span>
            </div>
            <div className="data_cart">
                <span>Description</span>
            </div>
            <div className="data_cart">
                <span>Price</span>
            </div>
            <div className="data_cart">
                <span>Quantity</span>
            </div>
            <div className="total">TOTAL: xxx€</div>
        </div>
        </div>
    )
}

export default Checkout;