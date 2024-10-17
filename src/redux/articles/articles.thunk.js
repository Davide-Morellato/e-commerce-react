import { firestore } from "firebase/firestore";

//dichiaro una funzione per ottenere gli articoli da firestore, er inserirli nello store di redux
export const getProducts = async () => {

    //richiamo il ref e lo snapshot
    const productsRef = firestore.collection('products'); //riprendo la categoria prodotti inserita precedentemente con categoryRef[sopra in productsIntoDatabase]
  
    const productsSnapshot = await productsRef.get(); //recupero la collezione di dati sottoforma di snapshot
  
    //definisco una variabile in cui mappo i documenti (docs) presenti nella collection ottenuta, per recuperare determinati valori da categories (id, title, items)
    const snapshotCycle = productsSnapshot.docs.map((values) => {
  
      //recupero i singoli parametri dall'array di oggetti di categories
      const {id, title, items} = values.data();
  
      return{
        id,
        title,
        items
      }
    })
  
    //inserisco i dati ottenuti in una singola variabile,
    //in cui li riordino in base all'id con il metodo sort
    //e accumularli mediante il metodo reduce
    return snapshotCycle.sort((a,b) => {
      //SE l'id di a è minore dell'id di b, scambiali di posto, altrimenti lascialo dove si trova
      return a.id < b.id ? -1 : 1;
  
    }).reduce((accumulator, products) => {
      //inserisco i dati ottenuti nell'accumulatore prendendo come chiave il titolo dell categoria di prodotti
      accumulator[products.title.toLowerCase()] = products;
  
      return accumulator
    }, {}) //dichiaro come valore di partenza (initialValue) un oggetto vuoto '{}', così da avere sempre tutto in ordine al momento dell'azione
  }