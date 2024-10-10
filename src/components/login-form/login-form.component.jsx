import React, { useState } from "react"; //importo lo State per apportare le modifiche al componente
import {auth, signInWithGoogle} from '../../firebase/firebase.data' //importo il metodo di autenticazione

import './login-form.styles.scss'


const LoginForm = () => {

    //definisco lo state impostando i parametri di riferimento
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    //destrutturo le proprietà di riferimento per leggerne i valori ed associarli a credentials
    const {email, password} = credentials;

    //prevengo il comportamento di default del form, così da inviare i dati a firebase
    //trasformo la funzione in asincrona ed aggiungo l'operatore await per il metodo di login di firebase
    const sendData = async event => {
        event.preventDefault()
        //dichiaro il metodo firebase per l'acquisizione dei valori di credentials
        const login = await auth.signInWithEmailAndPassword(email, password);
    };

    //dichiaro una funzione asincrona per il login con google
    //non verranno passati parametri, perchè ci sarà il prompt per la scelta di utente e password
    const loginGoogle = async () => {
        await signInWithGoogle()
    };

    //definisco che il cambiamento (event) deve avere come target l'input in cui il cambiamento stesso avviene
    const handleChange = event => {
        //destrutturo i dati da prendere dall'input, ossia gli attributi value & name
        const {value, name} = event.target;

        //imposto i valori di riferimento per settare le credenziali (setCredentials)
        //spread-operator per prendere tutti i valori presenti nell'oggetto useState e aggiungere la proprietà name
        //indico che deve interpretare l'attributo name, in base all'input, a cui deve associare il valore inserito
        setCredentials({...credentials, [name]:value});
    }

    return(
        <div className="login_form">
            {/* strutturo il form */}
            <h2>Hai già un account?</h2>
            <span>Utilizza email e password</span>

            {/* aggiungo l'evento onSubmit per prevenirne il comportamento di default */}
            <form onSubmit={sendData}>
                <div className="form_group">
                    <label className="email_input">Email</label>
                    {/* associo il valore che verrà associato nella proprietà di credentials, così da settarlo con handleChange in setCredentials */}
                    <input type="email" name="email" value={email} onChange={handleChange} required/>

                    <label className="password_input">Password</label>
                    {/* associo il valore che verrà associato nella proprietà di credentials, così da settarlo con handleChange in setCredentials */}
                    <input type="password" name="password" value={password} onChange={handleChange} required/>

                    {/* aggiungo il login anche con google, con evento al click */}
                    <div className="choose_access">
                        <button type="submit" className="login_button">Login</button>
                        <button type="button" className="login_button google_login" onClick={loginGoogle}> <img src="./icons/google_icon.png" alt="google_icon" /> Google Login </button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default LoginForm;