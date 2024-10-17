import { ArticlesActionTypes } from "./articles.types";

//definisco lo state iniziale
const INITIAL_STATE = {
    products: null,
    isLoading: false,
    error: null
}

//controllo l'azione da lanciare in base alla tipologia di azione
//in base al tipo di cambiamento aggiungo allo state il payload (recuperato da articles.actions.js)
const ArticlesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ArticlesActionTypes.GET_ARTICLES_START:
            return{
                ...state,
                isLoading: true
            }
        
        case ArticlesActionTypes.GET_ARTICLES_SUCCESS:
            return{
                ...state,
                isLoading: false,
                products: action.payload
            }

        case ArticlesActionTypes.GET_ARTICLES_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default ArticlesReducer;