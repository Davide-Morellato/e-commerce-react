import React, { useEffect } from "react";

import './checkout.styles.scss'
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../redux/cart/cart.actions"; //importo la funzione per il controllo dell'apertura/chiusura del carrello
import CartItem from '../../components/cart-item/cart-item.component' //importo il componente CartItem
import { selectCartProducts } from "../../redux/cart/cart.selectors"; //importo la funzione del selettore per i prodotti nel carrello


const Checkout = () => {

    //salvo l'HOOK per il recupero delle funzioni
    const dispatch = useDispatch();

    //richiamo la funzione closeCart grazie al dispatch
    useEffect(() => {
        dispatch(closeCart())
    }, [dispatch])

    //salvo in una variabile il selettore
    const products = useSelector(selectCartProducts);


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
            </div>

                {/* controllo
                    SE la lunghezza dell'array di prodotti è maggiore di 0,
                        ALLORA mappa l'array e identifica i singoli prodotti in base l'id
                    ALTRIMENTI non fare niente
                */}
            {
                products.length > 0
                ?
                products.map(singleProduct => {
                    <CartItem key={singleProduct.id}{...singleProduct} />
                })
                :
                null
            }
            
            <div className="total">
                <span>
                    TOTAL: xxx€
                </span>
            </div>
        </div>
    )
}

export default Checkout;