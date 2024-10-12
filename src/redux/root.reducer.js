import { combineReducers } from "redux"; //importo un tool di REDUX per unire i vari reducer
import { UserReducer } from "./user/user.reducer"; //importo il reducer per l'utente (dichiarato in user.reducer.js)
import ArticlesReducer from "./articles/articles.reducer";
import CartReducer from "./cart/cart.reducer";

//dichiaro una variabile in cui salvo i diversi reducer
export const rootReducer = combineReducers({
    //inserisco il reducer per l'utente, gli articoli e il carrello(menu)
    user: UserReducer,
    articles: ArticlesReducer,
    cart: CartReducer
});
