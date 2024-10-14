import React from "react";
import Article from "../single_article/single-article.component"; //importo il componente per il singolo articolo
import './overview-articles.styles.scss';
import { useSelector } from "react-redux"; //importo l'HOOK per il recupero del selettore
import { selectProducts } from "../../redux/articles/articles.selectors"; //importo la funzione per il selettore prodotti di articles.selectors.js


const OverviewArticles = () => {

    //dichiaro una variabile in cui salvare il selettore pr il recupero degli articoli (creata in articles.selectors.js)
    const articles = useSelector(selectProducts)
    return(
        <div className="overview_articles">
            {
                //mappo i prodotti pre recuperare la singola categoria
                articles.map((category) => {
                    return(
                        <div className="preview_articles">
                            <h2 className="title_articles">
                                {/* stampo il titolo della singola categoria accedendo alla proprietà title */}
                                {category.title}
                            </h2>
                            <div className="articles_list">
                                {
                                    //accedo agli items dalla singola categoria e filtro in base all'indice che deve essere minore di 5
                                    //quindi ciclo l'array con map, prendendo il singolo articolo e stamparlo nel componente,
                                    //basandomi sulla chiave id di riferimento, con il resto dei valori recuperati
                                    category.items.filter((value, index) => index < 5).map((singleArticle) => {
                                        return(
                                            <Article key={singleArticle.id}{...singleArticle}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
        
    )
}

export default OverviewArticles