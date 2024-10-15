import { CartActionTypes } from "./cart.types";

//definisco lo state iniziale del menu come nascosto all'inizio
const INITIAL_STATE ={
    hidden: true
};


//controllo l'azione da eseguire per avere il menu aperto e/o chiuso
const CartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CartActionTypes.TOGGLE_PREVIEW:
            return{
                ...state,
                hidden: !state.hidden //al cambio di state, non avendo il payload, il menu deve risultare l'opposto di quello dichiarato nell'INITIAL_STATE
            }
        
            case CartActionTypes.CLOSE_CART:
                return{
                    ...state,
                    hidden: true //al cambio di state, quando si è nel checkout, il dropdown_menu deve risultare chiuso
                }
        default:
            return state
    }
};

export default CartReducer