import React from "react";
import './cart-item.styles.scss'

//aggiungo il parametro product
const CartItem = (product) => {

    //salvo nel parametro product i valori dei prodotti
    const {imageUrl, name, price, quantity} = product

    return(
        <div className="cart-item">
            <div className="remove_button"> - </div>
            <div className="img_container">
                <img src={imageUrl} alt="" />
            </div>
            <span className="name">{name}</span>
            <span className="price">{price} €</span>
            <span className="quantity_container">
                <span className="arrow"> ← </span>
                <span className="quantity"> {quantity} </span>
                <span className="arrow"> → </span>
            </span>
        </div>
    )
}

export default CartItem