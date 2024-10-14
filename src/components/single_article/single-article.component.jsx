import React from "react";
import './single-article.styles.scss';

//aggiungo un parametro per recuperare le imamgini dei prodotti da categories [documento salvato in firestore]
const Article = ({imageUrl}) => {
    return (
        //imposto come sfondo della card l'immagine recuperata da categories
        <div className="article" style={{backgroundImage: `url(${imageUrl})`}}>
            <div className="add-to-cart">
                <button type="button">ADD TO CART</button>
            </div>
        </div>
    )
};

export default Article;