import { ArticlesActionTypes } from "./articles.types"; //importo l'oggetto tipologia di azione

//dichiaro l'azione da lanciare in base al type e al payload
export const getArticles = (products) => ({
    type: ArticlesActionTypes.GET_ARTICLES,
    payload: products
})