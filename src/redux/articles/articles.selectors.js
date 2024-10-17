import { createSelector } from "reselect"; //importo createSelector: una funzione di utilità della libreria 'reselect' che aiuta a creare funzioni di selettore, memorizzanti e componibili.

//
//dichiaro un selettore per prendere lo state dal reducer
export const selectState = state => state.articles;

//
//dichiaro un selettore per prendere lo state dal reducer
//restituisco i prodotti (presi da INITIAL_STATE di articles.reducer.js) con il ritorno implicito 
//per convenzione, i selettori inziano sempre con la parola "select"
export const selectArticlesState = state => state.articles.products;

//dichiaro un selettore per la pagina di anteprima dei prodotti
export const selectProductsArticles = createSelector(
    //PRIMA DIPENDENZA: array dei prodotti che contiene il selettore da cui ottenere i dati da manipolare, che definisce anche la dipendenza per la gestione della memorizzazione dei dati.
    [selectArticlesState],

    //SECONDA DIPENDENZA: callback per la dichiarazione del dato
    //parametro di riferimento articles
    //SE articles esiste, ALLORA (?) trovami l'oggetto con chiave di riferimento gli articoli stessi, mappalo cercando come chiave, quella associata all'articolo stesso
    //ES.
    //articles = smartphone
    //trovami quella categoria di prodotti che avrà come indice la chiave della categoria stessa, quindi smartphone
    articles => articles ? Object.keys(articles).map(key => articles[key]) : []
);


//dichairo un secondo selettore per ottenere solo i prodotti di una determinata categoria
export const selectCategoryProducts = category => createSelector(
    //PRIMA DIPENDENZA: array dei prodotti che contiene il selettore da cui ottenere i dati da manipolare, che definisce anche la dipendenza per la gestione della memorizzazione dei dati.
    [selectArticlesState],

    //SECONDA DIPENDENZA: callback per la dichiarazione del dato
    //SE articles esiste, ALLORA (?) mostra gli articoli associati a quella categoria
    articles => articles ? articles[category] : []
);


export const selectIsLoading = createSelector(
    [selectState], //dipendenza da cui prendere i dati
    articles => articles.isLoading
)