import { CartActionTypes } from "./cart.types"; //importo la tipologia di azione


//definisco l'azione da eseguire
//NON passo alcun parametro perchè non ha il payload
export const toggleCart = () => ({
    type: CartActionTypes.TOGGLE_PREVIEW
})