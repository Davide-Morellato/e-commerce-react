import React from "react";
import "./articles.styles.scss";

import OverviewArticles from "../../components/overview-articles/overview-articles.component"; //importo il componente anteprima articoli
import ArticlesCategory from "../articles-category/articles-category.component"; //importo il componente articoli categoria
import { Routes, Route } from "react-router-dom"; //importo le rotte

const Articles = () => {
  return (
    <div className="articles">
      {/* imposto il componente Routes con all'interno le Route */}
      <Routes>
        {/* se non viene specificato nulla, allora visualizza l'anteprima degli articoli */}
        <Route path="" element={<OverviewArticles />} />
        
        {/* se viene specificata una categoria in particolare, allora visualizza quel prodotto */}
        <Route path=":category" element={<ArticlesCategory/>} />
      </Routes>
    </div>
  );
};

export default Articles;
