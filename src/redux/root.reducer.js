import { combineReducers } from "redux"; //importo un tool di REDUX per unire i vari reducer
import UserReducer from "./user/user.reducer"; //importo il reducer per l'utente (dichiarato in user.reducer.js)
import { persistReducer } from "redux-persist"; //importo il persistReducer

import storage from 'redux-persist/lib/storage'; //importo lo storage per i dati

import ArticlesReducer from "./articles/articles.reducer";
import CartReducer from "./cart/cart.reducer";


//configuro la variabile con le proprietà per la persistenza dei dati
const persistConfig = {
    key: 'root', //identifica un elemento univoco dell'applicativo nell'url
    storage, //in cui verranno salvati i dati dal persist
    whitelist: ['cart'] //specifica quali dati salvare nello store -> corrisponde al cart in rootReducer in questo caso
}


//dichiaro una variabile in cui salvo i diversi reducer
const rootReducer = combineReducers({
    //inserisco il reducer per l'utente, gli articoli e il carrello(menu)
    user: UserReducer,
    articles: ArticlesReducer,
    cart: CartReducer
});

export default persistReducer(persistConfig, rootReducer)
