import firebase from 'firebase/compat/app';  //importo il database

import 'firebase/compat/auth'; //importo il servizio di autenticazione

import 'firebase/compat/firestore'; //importo il database firestore

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEZv7JCzqg7hwtv1TkCouJyXlFi5R6qKQ",
  authDomain: "e-commerce-react-99806.firebaseapp.com",
  projectId: "e-commerce-react-99806",
  storageBucket: "e-commerce-react-99806.appspot.com",
  messagingSenderId: "600762150492",
  appId: "1:600762150492:web:6307eaff094263acfc8099"
};

//inizializzo firebase
firebase.initializeApp(firebaseConfig);

//esporto il servizio di autenticazione per richiamarlo tramite destrutturazione dove necessario
export const auth = firebase.auth();

//esporto il database firestore
export const firestore = firebase.firestore();

//richiamo il Provider di autenticazione google aggiunto in firebase
const googleProvider = new firebase.auth.GoogleAuthProvider();
//imposto un avviso prompt per la scelta dell'account google per l'autenticazione
googleProvider.setCustomParameters({prompt: 'select_account'});
//esporto il provider di google
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

//creo una nuova funzione per il recupero e/o creazione del documento utente contenente i dati inseriti durante il login (userAuth) e le informazioni aggiuntive (moreInfo)
export const getUserProfile = async (userAuth, moreInfo) => {

  //controllo
  //SE non c'è alcun utente loggato
    //ALLORA non fare nulla
  if(!userAuth){
    return null
  } 

  //SE C'E' UN UTENTE LOGGATO
  //recupero il documento associato all'utente loggato da firestore
  //raccolta users e seleziono l'utente in base all'id (uid)
  //NB se il documento non esiste per quell'utente, allora firestore lo crea automaticamente
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //siccome lo andrà a creare, richiedo uno snapshot, tramite il get, in base a userRef
  const snapShot = await userRef.get();

  //controllo
  //SE lo snapShot NON esiste
    //ALLORA:
    //prendo l'email da userAuth;
    //la data attuale di creazione dell'utente;
    //qualora dovesse fallire la chiamata con firebase, in un blocco 'try{}catch(error){}' inserisco il nuovo utente
    if(!snapShot.exists){
      const {email} = userAuth;
      const createdAt = new Date();
  
      try {
        //imposto i valori con .set({}) in cui dichiaro un oggetto con tutti i valori da inserire nel documento del nuovo utente
        //inserendo l'email con cui ha effettuato il login; la data di creazione del nuovo utente e le informazioni agiguntive con lo spread operator
        await userRef.set({
          email,
          createdAt,
          ...moreInfo
        })
  
      } catch (error) {
        console.log(error)
      }
    }

  //ritorno userRef (perchè mi permette di ottenere uno snapShot in tempo reale)
  return userRef
};


//inserisco le categorie (di shop-data.js) nel database in diversi documenti
export const productsIntoDatabase = async (addObject) => {

  //creo una nuova collezione di prodotti nel database
  const productsCollection = firestore.collection('products');

  //inserisco la possibilità di lanciare comandi multipli/transazioni nel database
  const batch = firestore.batch();

  //ciclo l'oggetto categories di shop-data per avere ogni singola categoria in diversi documenti
  //pe ogni elemento (oggetto) di categories, creo un nuovo documento nella collection
  addObject.forEach(obj => {

    //creo un nuovo documento nella collection
    const newDoc = productsCollection.doc();

    //setto un nuovo contenuto per ogni documento creato,
    //definendo il parametro di riferimento (newDoc), e l'elemento da inserire (el)
    batch.set(newDoc, obj);
  })

  //ritorno il batch per lanciare i comandi tutti insieme con "commit"
  return await batch.commit();
}


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

export default firebase