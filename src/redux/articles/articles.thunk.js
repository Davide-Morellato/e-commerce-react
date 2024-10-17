import { firestore } from "../../firebase/firebase.data";
import {
  getArticlesFail,
  getArticlesStart,
  getArticlesSuccess,
} from "./articles.actions";

//dichiaro una funzione per ottenere gli articoli da firestore, er inserirli nello store di redux
export const getProducts = async () => {
  return (dispatch) => {
    //richiamo il ref e lo snapshot
    const productsRef = firestore.collection("products"); //riprendo la categoria prodotti inserita precedentemente con categoryRef[sopra in productsIntoDatabase]

    dispatch(getArticlesStart());

    productsRef
      .get()
      .then((productsSnapshot) => {
        //definisco una variabile in cui mappo i documenti (docs) presenti nella collection ottenuta, per recuperare determinati valori da categories (id, title, items)
        const snapshotCycle = productsSnapshot.docs.map((values) => {
          //recupero i singoli parametri dall'array di oggetti di categories
          const { id, title, items, image, url } = values.data();

          return {
            id,
            title,
            items,
            image,
            url,
          };
        });

        const products = snapshotCycle.reduce((accumulator, products) => {
          //inserisco i dati ottenuti nell'accumulatore prendendo come chiave il titolo dell categoria di prodotti
          accumulator[products.title.toLowerCase()] = products;

          return accumulator;
        }, {}); //dichiaro come valore di partenza (initialValue) un oggetto vuoto '{}', così da avere sempre tutto in ordine al momento dell'azione

        dispatch(getArticlesSuccess(products));
      })
      .catch((error) => {
        dispatch(getArticlesFail(error));
      });
  };
};
