import React from "react";
import './cart-item.styles.scss'

const CartItem = () => {
    return(
        <div className="cart-item">
            <div className="remove_button"> - </div>
            <div className="img_container">
                <img src="./items_images/smartphones/smartphone_1.jpg" alt="" />
            </div>
            <span className="name">Product</span>
            <span className="price">xxx €</span>
            <span className="quantity_container">
                <span className="arrow"> ← </span>
                <span className="quantity"> X </span>
                <span className="arrow"> → </span>
            </span>
        </div>
    )
}

export default CartItem