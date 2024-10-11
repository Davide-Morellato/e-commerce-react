import "./App.css";

import Header from "./components/header/header.component"; //importo l'header
import Homepage from "./pages/homepage/homepage.component"; //importo la homepage
import Checkout from "./pages/checkout/checkout.component"; //importo la cassa
import Articles from "./pages/articles/articles.component"; //importo gli articoli
import Login from "./pages/login/login.component"; //importo il login

import { Routes, Route, Navigate } from "react-router-dom"; //importo le rotte
import { useEffect, useState } from "react"; //importo lo state
import { auth } from '../src/firebase/firebase.data' //importo il metodo di autenticazione
// import { productsIntoDatabase} from '../src/firebase/firebase.data'
// import { categories } from "./shop-data";

import { connect } from "react-redux"; //importo il metodo connect che collega un componente React a uno store Redux.
                                       //Fornisce al componente connesso i dati di cui ha bisogno dallo store e le funzioni che può utilizzare per inviare azioni allo store.
import { checkUserLog } from "./redux/user/user.actions"; //importo l'action che contiene le azioni da inviare a redux

//aggiungo le props di riferimento che vengono passate da connect, in base ai parametri su cui si basa:
//user -> per leggere lo state
//setLoggedUser -> per scrivere lo state 
function App({user, setLoggedUser}) {

  //definisco lo stato dell'utente, impostandolo su null di default
  // const [user, setUser] = useState(null);

  //metodo di autenticazione per aggiornare il componente al cambio di stato una sola volta all'avvio dell'applicazione: useEffect(()=>{...},[])
  //userAuth contiene tutte le informazioni dell'utente loggato, così da poterle - eventualmente - salvare in un database 
  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      // setUser(userAuth);
      setLoggedUser(userAuth); //lo sostituisco a setuser così da passare il controllo dello state a REDUX
    })
    //aggiungo la funzione per la creazione del nuovo documento, importata da firebase.data.js
    // productsIntoDatabase(categories);

  }, [setLoggedUser]); //aggiungo la dipendenza su cui deve basarsi useEffect, per il monitoraggio della funzione di impostazione dello state dell'utente, in caso di cambiamento della props user


  return (
    <div className="App">
      {/* inserisco il component Header */}
      {/* aggiungo al componente Header il parametro user */}
      <Header user={user}/>

      {/* inserisco il componente Routes, al cui interno inserisco le singole rotte (Route) con il percorso (path) e l'elemento da dover visualizzare (element={componente})*/}
      <Routes>
        <Route path="/" element={<Homepage/>} />
        {/* imposto il percorso (/shop) indicizzato in base alla sotto-rotta impostata all'interno del componente Articles (/shop/*) */}
        <Route path="/shop/*" element={<Articles/>}/> 
        <Route path="/checkout" element={<Checkout/>}/>
        
        {/* modifico la rotta controllando se user è loggato o meno */}
        {/* SE user diverso da null, ALLORA redirect alla Homepage (/), ALTRIMENTI alla pagina di Login */}
        <Route path="/login" element={user !== null ? (<Navigate to='/' />) : (<Login/>)}/>
      </Routes>
      {/* inserisco il componente homepage */}
      {/* <Homepage /> */}
    </div>
  );
}

//funzione per mappare lo state globale di redux
const mapStateToProps = (state) => ({
  //definisco la proprietà user in base allo state in UserReducer
  //quindi controllandone la proprietà loggedUser in base allo user
  user: state.user.loggedUser
});

//funzione per salvare i dati nello state
const mapDispatchToProps = (dispatch) =>({
  //imposto l'azione da intraprendere in base al parametro user di checkUserLog
  //NB dispatch è un metodo per la distribuzione delle azioni per innescare modifiche nello state
  setLoggedUser: (user) => dispatch(checkUserLog(user))
})

//inserisco la funzione connect sfruttando la currying function,
//così da prendere i valori necessari dallo state e passarli all'App
export default connect(mapStateToProps, mapDispatchToProps)(App);
