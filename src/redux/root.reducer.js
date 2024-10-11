import { combineReducers } from "redux"; //importo un tool di REDUX per unire i vari reducer
import {UserReducer} from "./user/user.reducer"; //importo il reducer per l'utente (dichiarato in user.reducer.js)

//dichiaro una variabile in cui salvo i diversi reducer
const rootReducer = combineReducers({
    //inserisco il reducer per l'utente
    user: UserReducer
});

export default rootReducer;