//
//
//dichiaro una funzione per l'aggiunta/incremento di un prodotto
//gli passo 2 parametri:
//cartProducts: controlla lo state del carrello, per capire se ci sono prodotti al suo interno
//addingProduct: per l'aggiunta/incremento di un determinato prodotto
const addProduct = (cartProducts, addingProduct) => {

  //verifico se il singolo prodotto è presente nel carrello tramite il metodo find(),
  //a cui passo una callback in cui prendo il prodotto e dichiaro che quel prodotto (identificato tramite l'id) deve corrispondere al prodotto da aggiungere/incrementare
  const singleCartProduct = cartProducts.find(
    (product) => product.id === addingProduct.id
  );

  //controllo
  //SE il prodotto è presente nel carrello
    //è necessario mappare il carrello (cartProducts), per identificare il prodotto tramite l'id
    //ALLORA restituisci un oggetto con i dati del prodotto & la quantità + 1
  //ALTRIMENTI restituire il prodotto senza modifiche
  if (singleCartProduct) {
    return cartProducts.map((product) =>
      product.id === addingProduct.id
        ?
        { 
            ...product,
            quantity: product.quantity + 1
        }
        : 
        product
    );
  }

  //se non trovi il prodotto, restituisci i prodotti già presenti nel carrello, con il prodotto da aggiungere la cui quantità di partenza è 1
  return [
    ...cartProducts, //tutti i prodotti nel carrello
    
    { //prodotto da agigungere al carrello
        ...addingProduct,
        quantity: 1
    }
  ]
};

//
//dichiaro una funzione per la rimozione di un prodotto
//gli passo 2 parametri:
//cartProducts: controlla lo state del carrello, per capire se ci sono prodotti al suo interno
//removingProduct: per la rimozione di un determinato prodotto
const removeProduct = (cartProducts, removingProduct) => {

  //verifico se il singolo prodotto è presente nel carrello tramite il metodo find(),
  //a cui passo una callback in cui prendo il prodotto e dichiaro che quel prodotto (identificato tramite l'id) deve corrispondere al prodotto da rimuovere
  const singleCartProduct = cartProducts.find((product) => product.id === removingProduct.id);

  //controllo 
  //SE il singolo prodotto ha una quantità pari a 1
      //ALLORA è necessario filtrare i prodotti nel carrello per differenziare gli altri prodotti (identificati in base all'id) dal prodotto da rimuovere
  if(singleCartProduct.quantity === 1){
      return cartProducts.filter(product => product.id !== removingProduct.id)
  }

  //se il prodotto esiste e ha una quantità > 1,
  //restituisci una mappatura dei prodotti nel carrello per identificare il singolo prodotto e ridurne la quantità di 1
  return cartProducts.map((product) =>
      product.id === removingProduct.id
      ?
      {...product,
          quantity: product.quantity - 1}
      :
      product
  );
}

export default (addProduct, removeProduct);
