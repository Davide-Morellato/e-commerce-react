import { createSelector } from "reselect"; //importo l'HOOK di creazione selettori

//dichiaro una variabile in cui salvo i dati del carrello recuperati dallo state del reducer
export const selectCart = state => state.cart;

//dichiaro una variabile in cui creo il selettore ponendo due parametri:
//I -> la dipendanza da cui prendere i dati (in quanto collegato allo state del carrello)
//II -> callback per prendere i dettagli dei prodotti
export const selectCartProducts = createSelector(
    [selectCart],
    products => products.cartItems,
)

//dichiaro una variabile in cui creo il selettore per contare i prodotti nel carrello
export const selectCountProducts = createSelector(
    [selectCartProducts], //dipendenza da cui recupero i dati

    //callback in cui, con il metodo reduce(), riesco ad ottenere la quantità totale dei prodotti
    //questo metodo itera e "riduce" i valori di un array in un unico valore
    //assegno due parametri:
    //I -> CALLBACK composta a sua volta da 2 parametri: 
            //I -> accumulatore [countQuantity] 
            //II -> elemento dell'array [product]
    //
    //II -> VALORE INIZIALE
    // 
    products => products.reduce(
        (countQuantity, product) => countQuantity + product.quantity, //callback con ritorno di una condizione funzionale
        0 //----------------------------------------------------------->valore iniziale
    )
)


//dichiaro una variabile in cui creo il selettore per calcolare il totale dai prezzi dei prodotti nel carrello
export const selectTotalCart = createSelector(
    [selectCartProducts], //dipendenza da cui recupero i dati

    //callback in cui, con il metodo reduce(), ottengo la somma totale dai prezzi e la quantità dei singoli prodotti
    cartItems => cartItems.reduce((countPrice, product) => countPrice + (product.price * product.quantity), 0)
)