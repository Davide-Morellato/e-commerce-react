import React from "react";
import './login.styles.scss'

import LoginForm from "../../components/login-form/login-form.component"; //importo il componente login-form
import RegistrationForm from "../../components/registration-form/registration-form.component"; //importo il componente registration-form


const Login = () => {
    return(
        <div className="login">
            
            {/* aggiungo i componenti login-form & registration-form */}
            <LoginForm/>
            <RegistrationForm/>
            
        </div>
    )
}

export default Login