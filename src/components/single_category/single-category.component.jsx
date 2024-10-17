import React from 'react';

import './single-category.styles.scss';

import { useNavigate } from 'react-router-dom'; //importo l'HOOK della libreria react-router-dom

//creo il FC a cui assegno i parametri (presenti in shop-data) per la stampa in pagina dei rispettivi valori 
const SingleCategory = ({imageUrl, title, url}) => {

    //dichiaro una variabile in cui salvo il metodo useNavigate()
    const navigate = useNavigate(); //permette di gestire la navigazione


    return(
        //aggiungo l'evento onClick a cui assegno la variabile navigate con il parametro url (shop-data)
        <div className="single-category" onClick={() => navigate(url)}>
            {/* assegno uno stile che prenda l'url in shop-data (backtick per l'interpolazione dei dati e la stampa della proprietà ${image}) */}
            <div className="bg-image" style={{backgroundImage: `url(${imageUrl})`}}></div>

            <div className="content">
                {/* stampo il titolo in maiuscolo (.toUpperCase()) */}
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">VISITA ORA</span>
            </div>
        </div>
    )
}

export default SingleCategory