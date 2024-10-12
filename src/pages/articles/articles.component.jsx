import Reac, { useState } from "react";
import "./articles.styles.scss";

import OverviewArticles from "../../components/overview-articles/overview-articles.component"; //importo il componente anteprima articoli
import ArticlesCategory from "../articles-category/articles-category.component"; //importo il componente articoli categoria
import { Routes, Route } from "react-router-dom"; //importo le rotte
import Loading from "../../components/loading/loading.component"; //importo il componente loading


  //associo lo state di loading ai componenti ArticlesCategory & OverviewArticles
  const LoadingArticlesCategory = Loading(ArticlesCategory);
  const LoadingOverviewArticles = Loading(OverviewArticles)

const Articles = () => {

  //imposto lo state interno di loading come false,
  //perchè deve mostrare il carimento al comando
  const [loading, setLoading] = useState(false);

  return (
    <div className="articles">
      {/* imposto il componente Routes con all'interno le Route */}
      <Routes>
        {/* se non viene specificato nulla, allora visualizza l'anteprima degli articoli */}
        {/* <Route path="" element={<OverviewArticles />} /> */}
        {/* sostituisco il componente OverviewArticles con il componente associato al caricamento */}
        {/* aggiungo l'attributo loading per lo useState */}
        <Route path="" element={<LoadingOverviewArticles loading={loading}/>} />
        
        {/* se viene specificata una categoria in particolare, allora visualizza quel prodotto */}
        {/* <Route path=":category" element={<ArticlesCategory/>} /> */}
        {/* sostituisco il componente ArticlesCategory con il componente associato al caricamento */}
        <Route path=":category" element={<LoadingArticlesCategory loading={loading}/>} />
      </Routes>
    </div>
  );
};

export default Articles;
