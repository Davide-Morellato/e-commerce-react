import React from "react";

import './single-item.styles.scss';


//recupero dalle props, le proprietà dei prodotti inseriti nel carrello + la quantità 
const SingleItem = ({image, name, price, quantity}) => {
    return(
        <div className="single-item">
            <img src="./items_images/smartphones/smartphone_1.jpg" alt="single_item" />
            <div className="details">
                <span className="name">
                    Smartphone
                </span>
                <span className="price">
                    1 x 20€
                </span>
            </div>
        </div>
    )
};

export default SingleItem