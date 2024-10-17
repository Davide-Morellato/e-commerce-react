import {createStore, applyMiddleware} from 'redux'; //importo la funzione createStore da REDUX 

import { logger } from 'redux-logger'; //importo il logger di REDUX che funge da middleware per il monitoraggio dello State
import { persistStore } from 'redux-persist'; //importo il persistStore di REDUX per la persistenza dei dati

import rootReducer from './root.reducer'; //importo il reducer


//raggruppo i middlewares in un array
//inserisco il logger di REDUX-LOGGER
const middlewares = [
    logger
];

//esporto lo store per essere inserito dove necessario nell'applicazione,
//assegnandogli come parametro il reducer
//e anche l'applyMiddleware, a cui assegno come parametro l'array per tutti i middlewares (con spread operator perché ho necessità di tutti i valori)
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const storePersistance = persistStore(store);