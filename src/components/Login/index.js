import React from 'react';
import style from './login.module.css';
import { ValidateLogin } from '../../services/validateLoginService'


export default function Login() {


    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(evt.target.email.value)
        const { target: { email: { value: email }, password: { value: password } } } = evt

        try {
            ValidateLogin(email, password)
        } catch (err) {
            /* setError(message) */
            console.log(err)
        }



    }


    return (
        <>
            <h1 className={style.title}>Login</h1>
            <div className={style.container}>
                <form className={style.login} onSubmit={handleSubmit}>
                    <div className={style.info}>
                        <p>* Para poder acceder al sistema, inicia sesión</p>
                    </div>
                    <input type="text" name="email" placeholder="Introduce tu email" />
                    <input type="password" name="password" placeholder="introduce tu contraseña" />
                    <button>Login</button>
                </form>

            </div>

        </>
    )
}