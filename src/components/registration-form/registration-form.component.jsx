import React, { useState } from "react"; //importo l'HOOK useState
import {auth, getUserProfile} from '../../firebase/firebase.data' //importo il metodo di autenticazione e il reucpero informazioni utente

import './registration-form.styles.scss';

const RegistrationForm =() => {

    //definisco lo state impostando i parametri i riferimento
    const [credentials, setCredentials] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })

    //destrutturo le proprietà di riferimento per leggerne i valori
    const {name, surname, email, password} = credentials;

    //prevengo il comportamento di default del form
    //trasformo la funzione in asincrona
    const sendData = async event => {
        event.preventDefault();

        //creo l'utente prendendo come valori di riferimento l'email e la password
        const register = await auth.createUserWithEmailAndPassword(email, password);

        //salvo i dati inseriti dall'utente durante la fase di registrazione
        getUserProfile = (register.user, {name, surname})
    };

    //definisco l'input come target dell'evento di cambiamento
    const handleChange = event => {

        //destrutturo gli attributi dell'input per la lettura dei valori
        const {value, name} = event.target;

        //definisco che i valori inseriti nell'input devono far parte di credentials
        setCredentials({...credentials, [name]:value});  
    }

    return(
        <div className="registration_form">
            <h2>Non sono registrato</h2>
            <span>Compila i campi sottostanti</span>

            <form onSubmit={sendData}>
                <div className="form_group">
                    <label className="name_input">Nome</label>
                    <input type="text" name="name" value={name} onChange={handleChange} required />

                    <label className="surname_input">Cognome</label>
                    <input type="text" name="surname" value={surname} onChange={handleChange} required />

                    <label className="email_input">Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} required/>

                    <label className="password_input">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} required/>

                    <button type="submit" className="register_button">Register</button>
                </div>
            </form>
        </div>
    )
};

export default RegistrationForm;