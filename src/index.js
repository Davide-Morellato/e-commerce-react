import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom"; //importo le rotte
import { Provider } from "react-redux"; //importo il Provider
import { PersistGate } from "redux-persist/integration/react"; //importo il componente che permetterà il persistere dei dati
import {store, persistor} from "./redux/store"; //importo lo store


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* aggiungo il Provider a cui passo come attributo lo store */}
    <Provider store={store}>
      {/* inserisco il BrowserRouter */}
      <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
