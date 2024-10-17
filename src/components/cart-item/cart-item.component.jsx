import React from "react";
import './cart-item.styles.scss'
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct, removeProduct } from "../../redux/cart/cart.actions";

//aggiungo il parametro product
const CartItem = (product) => {

    //salvo nel parametro product i valori dei prodotti
    const {imageUrl, name, price, quantity} = product;

    //salvo il richiamo delle azioni per aaggiungere e/o rimnuovere un prodotto
    const dispatch = useDispatch();

    return(
        <div className="cart-item">
            {/* aggiungo l'evento al click per l'eliminazione del prodotto dal carrello */}
            <div className="remove_button" onClick={() => dispatch(deleteProduct(product))}> X </div>
            <div className="img_container">
                <img src={imageUrl} alt="" />
            </div>
            <span className="name">{name}</span>
            <span className="price">{price} €</span>
            <span className="quantity_container">

                {/* aggiungo l'evento al click per la riduzione della quantità del prodotto */}
                <span className="arrow" onClick={() => dispatch(removeProduct(product))}> - </span>

                <span className="quantity"> {quantity} </span>

                {/* aggiungo l'evento al click per l'incremento della quantità del prodotto */}
                <span className="arrow" onClick={() => dispatch(addProduct(product))}> + </span>
            </span>
        </div>
    )
}

export default CartItem