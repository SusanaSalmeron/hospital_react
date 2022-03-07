import React, { useState } from 'react';
import style from './loginForm.module.css';
import SubmitButton from '../SubmitButton';
import { Link } from 'react-router-dom'




export default function LoginForm({ onSubmit, inputError }) {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className={style.container}>
            <form className={style.login} onSubmit={onSubmit}>
                <h1 className={style.subtitle}>Welcome </h1>
                {inputError && <p className={style.error}>{inputError}</p>}
                <input
                    type="text"
                    name="email" placeholder="Write your email"
                    onChange={handleEmailChange}
                    value={email}
                />
                <input
                    type="password" name="password" placeholder="Write your password"
                    onChange={handlePasswordChange}
                    value={password}
                />
                <SubmitButton
                    disabled={!email || !password}
                    name={'submitForm'}
                    label='LOGIN'
                />
                <div className={style.signup}>
                    <p>Not a member? <Link to={('/register')}><span>Sign up now</span></Link></p>
                </div>
            </form>
        </div>
    )
}