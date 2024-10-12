import React from "react";
import "./articles-category.styles.scss";
import Article from "../../components/single_article/single-article.component"; //importo il componente per il singolo articolo

import { useParams } from "react-router-dom"; //importo l'HOOK per intercettare i parametri impostati nel path di Route (in questo caso in Articles per il componente ArticlesCategory)

const ArticlesCategory = () => {
  //accedo al parametro category, tramite la destrutturazione (impostato in path=':category' nella Route di ArticlesCategory nel componente Articles)
  const { category } = useParams();
  
  return (
    <div className="overview_articles_category">
      <div className="preview_articles">
        <h2 className="title_articles_category">{category}</h2>
        <div className="articles_category_list">
          <Article></Article>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCategory;
