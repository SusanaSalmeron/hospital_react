import React, { useState } from 'react';
import {
    useHistory
} from 'react-router-dom';
import register from '../../services/registerService'
import style from './register.module.css'



export default function Register() {
    const history = useHistory()
    const [error, setError] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const { target: { email: { value: email }, password: { value: password }, name: { value: name } } } = evt
        const registerResult = await register(email, password, name)
        if (!registerResult.error) {
            history.push(`/${registerResult.id}/appointment`)
        } else {
            setError(registerResult.error)
        }
    }
    return (
        <form className={style.register} onSubmit={handleSubmit}>
            <h4 className={style.subtitle}>Sign up to make an appointment</h4>
            <div className={style.form}>
                {error && <p className={style.error}>{error}</p>}
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Write your name"
                    onChange={handleChangeName}
                    value={name}
                />
                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Write your email"
                    onChange={handleChangeEmail}
                    value={email}
                />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Write your password"
                    onChange={handleChangePassword}
                    value={password}
                />
            </div>
            <button disabled={!name || !email || !password}>Sign Up</button>

        </form>



    )
}