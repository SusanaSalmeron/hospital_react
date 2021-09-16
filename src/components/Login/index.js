import React, { useState } from 'react';
import style from './login.module.css';
import { validateLogin } from '../../services/validateLoginService'
import {
    useHistory
} from 'react-router-dom'

export default function Login() {
    const history = useHistory()
    const [error, setError] = useState()


    const handleSubmit = evt => {
        evt.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = evt

        try {
            validateLogin(email, password)

            history.push('/search')

        } catch ({ message }) {
            setError(message)
        }


    }

    return (
        <>
            <h1 className={style.title}>Login</h1>

            <form className={style.login} onSubmit={handleSubmit}>
                {error && <p className={style.error}>{error}</p>}
                <input type="text" name="email" placeholder="Introduce tu email" />
                <input type="password" name="password" placeholder="introduce tu contraseña" />
                <button>Login</button>
            </form>


        </>
    )
}