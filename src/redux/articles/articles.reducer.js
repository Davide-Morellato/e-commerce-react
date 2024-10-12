import { ArticlesActionTypes } from "./articles.types";

//definisco lo state iniziale
const INITIAL_STATE = {
    products: null
}

//controllo l'azione da lanciare in base alla tipologia di azione
//in base al tipo di cambiamento aggiungo allo state il payload (recuperato da articles.actions.js)
const ArticlesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ArticlesActionTypes.GET_ARTICLES:
            return{
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export default ArticlesReducer;