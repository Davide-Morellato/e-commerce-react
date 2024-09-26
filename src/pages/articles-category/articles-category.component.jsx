import React from "react";
import './articles-category.styles.scss'

import { useParams } from "react-router-dom"; //importo l'HOOK per intercettare i parametri impostati nel path di Route (in questo caso in Articles per il componente ArticlesCategory)

const ArticlesCategory = () => {

    //accedo al parametro category, tramite la destrutturazione (impostato in path=':category' nella Route di ArticlesCategory nel componente Articles)
    const {category} = useParams();
    return(
        <div className="articles_category">
            Articoli della Categoria {category}
        </div>
    )
}

export default ArticlesCategory