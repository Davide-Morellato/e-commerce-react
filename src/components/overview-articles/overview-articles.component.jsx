import React from "react";
import Article from "../single_article/single-article.component"; //importo il componente per il singolo articolo
import './overview-articles.styles.scss';

const OverviewArticles = () => {
    return(
        <div className="overview_articles">
            <div className="preview_articles">
                <h2 className="title_articles">
                    TITOLO ARTICOLI
                </h2>
                <div className="articles_list">
                    <Article></Article>
                </div>
            </div>
            <div className="preview_articles">
                <h2 className="title_articles">
                    TITOLO ARTICOLI
                </h2>
                <div className="articles_list">
                    <Article></Article>
                </div>
            </div>
        </div>
        
    )
}

export default OverviewArticles