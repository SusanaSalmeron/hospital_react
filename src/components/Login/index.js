import React, { useState } from 'react';
import style from './login.module.css';
import {
    useNavigate
} from 'react-router-dom';
import login from '../../services/loginService';
import areYouAWorker from '../../middleware/checkWorker';


export default function Login() {
    const navigate = useNavigate()
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
            areYouAWorker() ? navigate(`/${loginResult.id}/search`) : navigate(`/${loginResult.id}/appointment`)
        } else {
            setError(loginResult.error)
        }
    }
    return (
        <div className={style.container}>
            <form className={style.login} onSubmit={handleSubmit}>
                <h4 className={style.subtitle}>Log in to make inquiries </h4>
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
        </div>
    )
}