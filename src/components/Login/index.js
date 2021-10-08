import React, { useState } from 'react';
import style from './login.module.css';
import {
    useHistory
} from 'react-router-dom';
import login from '../../services/loginService';
import areYouAWorker from '../../middleware/checkWorker';


export default function Login() {
    const history = useHistory()
    const [error, setError] = useState()


    const handleSubmit = async evt => {
        evt.preventDefault()
        const { target: { email: { value: email }, password: { value: password } } } = evt
        const loginError = await login(email, password)

        if (!loginError) {
            areYouAWorker() ? history.push('/search') : history.push('/appointment')
        } else {
            setError(loginError)
        }
    }

    return (
        <>
            <form className={style.login} onSubmit={handleSubmit}>
                <h4 className={style.subtitle}>Por favor, inicie sesión para realizar cualquier consulta</h4>
                {error && <p className={style.error}>{error}</p>}
                <input type="text" name="email" placeholder="Introduce tu email" />
                <input type="password" name="password" placeholder="introduce tu contraseña" />
                <button>Login</button>
            </form>
        </>
    )
}