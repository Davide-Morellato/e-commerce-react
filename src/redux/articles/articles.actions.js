import { ArticlesActionTypes } from "./articles.types"; //importo l'oggetto tipologia di azione

//dichiaro l'azione da lanciare in base al type e al payload
export const getArticlesStart = () => ({
    type: ArticlesActionTypes.GET_ARTICLES_START,
})


export const getArticlesSuccess = articles => ({
    type: ArticlesActionTypes.GET_ARTICLES_SUCCESS,
    payload: articles
})


export const getArticlesFail = error => ({
    type: ArticlesActionTypes.GET_ARTICLES_FAIL,
    payload: error
})