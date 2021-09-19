import React, { useContext, useState } from 'react';
import style from './login.module.css';
import {
    useHistory
} from 'react-router-dom';
import login from '../../services/loginService';
import NameContext from '../../context/NameContext';

export default function Login() {
    const history = useHistory()
    const [error, setError] = useState()
    const { setName } = useContext(NameContext)

    const handleSubmit = evt => {
        evt.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = evt

        const loginError = login(email, password, (name) => setName(name))

        if (!loginError) {
            history.push('/search')
        } else {
            setError(loginError)
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