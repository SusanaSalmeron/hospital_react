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
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const { target: { email: { value: email }, password: { value: password } } } = evt
        const loginResult = await login(email, password)

        if (!loginResult.error) {
            areYouAWorker() ? history.push('/search') : history.push(`/${loginResult.id}/appointment`)
        } else {
            setError(loginResult.error)
        }
    }
    return (
        <>
            <form className={style.login} onSubmit={handleSubmit}>
                <h4 className={style.subtitle}>Por favor, inicie sesión para realizar cualquier consulta</h4>
                {error && <p className={style.error}>{error}</p>}
                <input
                    type="text"
                    name="email" placeholder="Introduce tu email"
                    onChange={handleEmailChange}
                    value={email}
                />
                <input
                    type="password" name="password" placeholder="introduce tu contraseña"
                    onChange={handlePasswordChange}
                    value={password}
                />
                <button disabled={!email || !password}>Login</button>
            </form>
        </>
    )
}