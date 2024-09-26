import "./App.css";

import Header from "./components/header/header.component"; //importo l'header
import Homepage from "./pages/homepage.component"; //importo la homepage
import { Routes, Route } from "react-router-dom"; //importo le rotte

function App() {
  return (
    <div className="App">
      {/* inserisco il component header */}
      <Header />

      {/* inserisco il componente Routes, al cui interno inserisco la singola rotta Route con il percorso (path) e l'elemento da dover visualizzare (element={componente})*/}
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      {/* inserisco il componente homepage */}
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
