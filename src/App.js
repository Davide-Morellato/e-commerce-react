import './App.css';

import Header from './components/header/header.component'; //importo l'header
import Homepage from './pages/homepage.component'; //importo la homepage

function App() {
  return (
    <div className="App">
      {/* inserisco il component header */}
      <Header />

      {/* inserisco il componente homepage */}
      <Homepage />
    </div>
  );
}

export default App;
