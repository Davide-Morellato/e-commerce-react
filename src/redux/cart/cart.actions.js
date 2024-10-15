import { CartActionTypes } from "./cart.types"; //importo la tipologia di azione


//definisco l'azione da eseguire
//NON passo alcun parametro perchè non ha il payload
export const toggleCart = () => ({
    type: CartActionTypes.TOGGLE_PREVIEW
})

//definisco l'azione da eseguire per la chiusura del dropdown-menu all'accesso al checkout
export const closeCart = () => ({
    type: CartActionTypes.CLOSE_CART
})
