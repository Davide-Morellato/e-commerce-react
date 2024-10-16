//
//definisco il tipo di azione per il cart_dropdown_menu (se visibile o nascosto)
export const CartActionTypes = {
    //definisco il tipo di azione per l'apertura e chiusura del dropdown_menu
    TOGGLE_PREVIEW: 'TOGGLE_PREVIEW',

    //definisco il tipo di azione per fare in modo che il dropdown_menu si chiuda quando si accede al checkout
    CLOSE_CART: 'CLOSE_CART',

    //definisco il tipo di azione per fare in modo di aumentare (+1) la quantità di un singolo prodotto nel dropdown_menu
    ADD_PRODUCT: 'ADD_PRODUCT',

    //definisco il tipo di azione per fare in modo di diminuire (-1) la quantità di un singolo prodotto nel dropdown_menu
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',

    //definisco il tipo di azione per fare in modo da eliminare un singolo prodotto nel dropdown_menu
    DELETE_PRODUCT: 'DELETE_PRODUCT',

    //definisco il tipo di azione per fare in modo di dsvuotare il carrello
    EMPTY_CART: 'EMPTY_CART'
}