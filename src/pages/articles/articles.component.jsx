import Reac, { useState, useEffect} from "react"; //importo l'HOOK di modifica dello state
import { useDispatch, useSelector } from "react-redux"; //importo l'HOOK per smistare le azioni & per recuperare i selettori
import "./articles.styles.scss";

import OverviewArticles from "../../components/overview-articles/overview-articles.component"; //importo il componente anteprima articoli
import ArticlesCategory from "../articles-category/articles-category.component"; //importo il componente articoli categoria
import { Routes, Route } from "react-router-dom"; //importo le rotte
import Loading from "../../components/loading/loading.component"; //importo il componente loading
import { getProducts } from "../../firebase/firebase.data"; //importo la funzione per la collection dei prodotti
import { getArticles } from "../../redux/articles/articles.actions"; //importo la funzione per l'azione
// import { selectProducts } from "../../redux/articles/articles.selectors"; //importo la funzione per il selettore prodotti di articles.selectors.js

  //associo lo state di loading ai componenti ArticlesCategory & OverviewArticles
  const LoadingArticlesCategory = Loading(ArticlesCategory);
  const LoadingOverviewArticles = Loading(OverviewArticles)

const Articles = () => {

  //imposto lo state interno di loading come false,
  //perchè deve mostrare il carimento al comando
  //dopo aver inserito getArticles in firebase.data,
  //modifico lo state inziale di loading come true
  const [loading, setLoading] = useState(true);

  //richiamo l'HOOK per dispatch
  const dispatch = useDispatch();

  //dichiaro una variabile in cui salvare il selettore per il recuper degli articoli (creata in articles.selectors.js)
  // const prod = useSelector(selectProducts)

  //dichiaro una funzione per verificare i prodotti e impostare il loading (setLoading)
  useEffect(() => {
    const products = getProducts(); //funzione di firebase asincrona, che ritorna una PROMISE
    //dalla PROMISE recupero i valori tramite la funzione dichiarata nel dispatch
    products.then((data) => {
      dispatch(getArticles(data));
      //imposto lo state del componente Loading
      setLoading(false)
    })
  }, [dispatch]) //inserisco come direttiva il dispatch, così da non lanciare di continuo la funzione di firebase getProducts()


  //dichiaro una funzione per stampare in console il valore dello state preso dal selettore, nel momento in cui questo cambia valore
  // useEffect(() => {
  //   console.log(prod)
  // }, [prod]); -//->dipendenza su prod, così da controllarne il valore ed eseguire la funzione al cambio del valore
  
  
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
