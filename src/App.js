import "./App.css";

import Header from "./components/header/header.component"; //importo l'header
import Homepage from "./pages/homepage/homepage.component"; //importo la homepage
import Checkout from "./pages/checkout/checkout.component"; //importo la cassa
import Articles from "./pages/articles/articles.component"; //importo gli articoli
import Login from "./pages/login/login.component"; //importo il login

import { Routes, Route, Navigate } from "react-router-dom"; //importo le rotte
import { useEffect, useState } from "react"; //importo lo state
import {auth, productsIntoDatabase} from '../src/firebase/firebase.data' //importo il metodo di autenticazione
import { categories } from "./shop-data";


function App() {

  //definisco lo stato dell'utente, impostandolo su null di default
  const [user, setUser] = useState(null);

  //metodo di autenticazione per aggiornare il componente al cambio di stato una sola volta all'avvio dell'applicazione: useEffect(()=>{...},[])
  //userAuth contiene tutte le informazioni dell'utente loggato, così da poterle - eventualmente - salvare in un database 
  useEffect(() =>{
    auth.onAuthStateChanged(userAuth => {
      setUser(userAuth)
    })

    //aggiungo la funzione per la creazione del nuovo documento, importata da firebase.data.js
    // productsIntoDatabase(categories);
  }, [])


  return (
    <div className="App">
      {/* inserisco il component Header */}
      {/* aggiungo al componente Header il parametro user */}
      <Header user={user} />

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

export default App;
