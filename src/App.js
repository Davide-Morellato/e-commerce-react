import "./App.css";

import Header from "./components/header/header.component"; //importo l'header
import Homepage from "./pages/homepage/homepage.component"; //importo la homepage
import Checkout from "./pages/checkout/checkout.component"; //importo la cassa
import Articles from "./pages/articles/articles.component"; //importo gli articoli
import Login from "./pages/login/login.component"; //importo il login

import { Routes, Route } from "react-router-dom"; //importo le rotte


function App() {
  return (
    <div className="App">
      {/* inserisco il component header */}
      <Header />

      {/* inserisco il componente Routes, al cui interno inserisco le singole rotte (Route) con il percorso (path) e l'elemento da dover visualizzare (element={componente})*/}
      <Routes>
        <Route path="/" element={<Homepage/>} />
        {/* imposto il percorso (/shop) indicizzato in base alla sotto-rotta impostata all'interno del componente Articles (/shop/*) */}
        <Route path="/shop/*" element={<Articles/>}/> 
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      {/* inserisco il componente homepage */}
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
