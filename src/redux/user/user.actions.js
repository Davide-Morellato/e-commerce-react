import { UserActionTypes } from "./user.types"; //importo l'evento da ascoltare

//creo la action (azione) per il controllo dell'utente
//in dui definisco 2 proprietà:
//type (per il tipo di azione da inviare a redux);
//payload (per i dati che l'azione deve considerare)
export const checkUserLog = (user) => ({
    type: UserActionTypes.CHECK_USER_LOG,
    payload: user
})

//creo la action per il login dell'utente
export const logIn = (user) => ({
    type: UserActionTypes.LOG_IN,
    payload: user
})

//creo la action per il logout dell'utente
//in questo caso non è necessario il payload, perchè non è necessario controllare nessun eventuale utente
export const logOut = () => ({
    type: UserActionTypes.LOG_OUT
})