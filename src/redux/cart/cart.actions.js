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

//definisco l'azione da eseguire per l'incremento della quantità di un prodotto
//ha bisogno del parametro per fare in modo di agganciarsi ad un determinato prodotto e non a tutti
export const addProduct = (product) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: product
})

//definisco l'azione da eseguire per la riduzione della quantità di un prodotto
//ha bisogno del parametro per fare in modo di agganciarsi ad un determinato prodotto e non a tutti
export const removeProduct = (product) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: product
})

//definisco l'azione da eseguire per l'elimininazione di un prodotto
//ha bisogno del parametro per fare in modo di agganciarsi ad un determinato prodotto e non a tutti
export const deleteProduct = (product) => ({
    type: CartActionTypes.DELETE_PRODUCT,
    payload: product
})

//definisco l'azione da eseguire per svuotare il carrello
export const emptyCart = () => ({
    type: CartActionTypes.EMPTY_CART
})