import React from 'react';

import './single-category.styles.scss';

//creo il FC a cui assegno i parametri (presenti da shop-data)per la stampa in pagina dei valori 
const SingleCategory = ({image, title, url}) => {
    return(
        <div className="single-category">
            {/* assegno uno stile che prenda l'url in shop-data (backtick per l'interpolazione dei dati e la stampa della proprietà ${image}) */}
            <div className="bg-image" style={{backgroundImage: `url(${image})`}}></div>

            <div className="content">
                {/* stampo il titolo in maiuscolo (.toUpperCase()) */}
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">VISITA ORA</span>
            </div>
        </div>
    )
}

export default SingleCategory