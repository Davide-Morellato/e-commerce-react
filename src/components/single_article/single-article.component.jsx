import React from "react";
import './single-article.styles.scss';
import { useDispatch } from "react-redux";
import addProduct from '../../redux/cart/cart.utilities'

//aggiungo un parametro per recuperare le imamgini dei prodotti da categories [documento salvato in firestore]
const Article = (article) => {

    const {imageUrl} = article;

    const dispatch = useDispatch();

    return (
        //imposto come sfondo della card l'immagine recuperata da categories
        <div className="article" style={{backgroundImage: `url(${imageUrl})`}}>
            <div className="add-to-cart">
                <button type="button" onClick={() => dispatch(addProduct(article))}>ADD TO CART</button>
            </div>
        </div>
    )
};

export default Article;



<div className=""></div>