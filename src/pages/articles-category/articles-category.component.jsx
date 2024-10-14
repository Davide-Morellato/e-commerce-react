import React from "react";
import "./articles-category.styles.scss";
import Article from "../../components/single_article/single-article.component"; //importo il componente per il singolo articolo

import { useParams } from "react-router-dom"; //importo l'HOOK per intercettare i parametri impostati nel path di Route (in questo caso in Articles per il componente ArticlesCategory)7
import { useSelector } from "react-redux"; //importo l'HOOK per il recupero del selettore
import { selectCategoryProducts } from "../../redux/articles/articles.selectors"; //importo la funzione dichiarata in articles.selectors.js


const ArticlesCategory = () => {
  //accedo al parametro category, tramite la destrutturazione (impostato in path=':category' nella Route di ArticlesCategory nel componente Articles)
  const { category } = useParams();
  
  //recupero l'oggetto items da categories, tramite la destrutturazione, sfruttando l'HOOK useSelector, richiamando la funzione selectCategoryProducts
  const {items} = useSelector(selectCategoryProducts(category));

  return (
    <div className="overview_articles_category">
      <div className="preview_articles">
        <h2 className="title_articles_category">{category}</h2>
        <div className="articles_category_list">
          {/* ciclo l'array di items per ottenere il singolo articolo così da avere nel componente Article,
              in base alla chiave id assegnata, i singoli prodotti */}
          {
            items.map(singleArticle => (<Article key={singleArticle.id}{...singleArticle}/>))
          }
        </div>
      </div>
    </div>
  );
};

export default ArticlesCategory;
