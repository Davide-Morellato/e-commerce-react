import { CartActionTypes } from "./cart.types";
import { addedProduct, removedProduct } from './cart.utilities' //importo la funzione da cart.utilities.js

//definisco lo state iniziale del menu come nascosto all'inizio
//definisco lo state degli articoli nel carrello con un array vuoto
const INITIAL_STATE ={
    hidden: true,
    cartItems: []
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
        
        case CartActionTypes.ADD_PRODUCT:
        return{
            ...state,
            cartItems: addedProduct(state.cartItems, action.payload) //applico la funzione addProduct dichiarata in cart.utilities, a cui passo come parametro l'array vuoto di cartItems (per popolarlo di prodotti) + il payload per l'addingProduct
        }

        case CartActionTypes.REMOVE_PRODUCT:
            return{
                ...state,
                cartItems: removedProduct(state.cartItems, action.payload)
            }

        case CartActionTypes.DELETE_PRODUCT:
            return {
                ...state,
                cartItems: state.cartItems.filter((product) => product.id !== action.payload.id) //filtrate l'array cartItems nello state, identificando i prodotti in base all'id e eliminare solo il prodotto selezionato
            }

        case CartActionTypes.EMPTY_CART:
            return{
                ...state,
                cartItems: [] //siccome devo svuotare il carrello, è necessario che l'array si svuoti dei prodotti
            }
        default:
            return state
    }
};

export default CartReducer