import { UserActionTypes } from "./user.types"; //importo l'evento da ascoltare

//definisco lo stato iniziale dello state (oggetto) su cui il reducer deve basarsi
const INITIAL_STATE = {
    loggedUser: null
};


//dichiaro un blocco condizionale per verificare lo state e le azioni da intraprendere
export const UserReducer = (state = INITIAL_STATE, action) => {

    //action, in questo caso, corrisponde a checkUserLog [dichiatata in user.actions.js]
    //quindi si basa sul controllo sia della proprietà type sia della proprietà payload in checkUserLog
    switch (action.type) {

      case UserActionTypes.CHECK_USER_LOG: //IN CASO il controllo dell'utente risultasse vero, quindi l'utente è loggato
      case UserActionTypes.LOG_IN:         //OPPURE risulta un log-in
        return {                           //ALLORA ritorna un oggetto contenente:
          ...state,                        //lo state, preservandone le proprietà associate (spread-operator)
          loggedUser: action.payload,      //e lo state attuale dell'utente, quindi lo userAuth
        };

      case UserActionTypes.LOG_OUT:        //IN CASO ci fosse un log-out dell'utente
        return {                           //ALLORA ritorna un oggetto:
          ...state,                        //lo state, preservandone le proprietà ad esso associate
          loggedUser: null,                //e nessun valore per l'utente
        };

      default:                             //DI BASE se non dovesse cambiare nulla
        return state;                      //RITORNA lo state nel suo stato iniziale (INITIAL_STATE = null)
    }
}