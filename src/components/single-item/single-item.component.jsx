import React from "react";

import './single-item.styles.scss';


//recupero dalle props, le proprietà dei prodotti inseriti nel carrello + la quantità 
const SingleItem = ({imageUrl, name, price, quantity}) => {
    return(
        <div className="single-item">
            <img src={imageUrl} alt="single_item" />
            <div className="details">
                <span className="name">
                    {name}
                </span>
                <span className="price">
                    {quantity} x {price} €
                </span>
            </div>
        </div>
    )
};

export default SingleItem