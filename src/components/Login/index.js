import React, { useState } from 'react';
import style from './login.module.css';
import {
    Link,
    useNavigate
} from 'react-router-dom';
import login from '../../services/loginService';
import SubmitButton from '../SubmitButton';
import areYouAWorker from '../../middleware/checkWorker';
import Swal from 'sweetalert2'


export default function Login() {
    const navigate = useNavigate()
    const [error, setError] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You are logged',
                showConfirmButton: false,
                timer: 2000
            })
            areYouAWorker() ? navigate(`/${loginResult.id}/search`) : navigate(`/${loginResult.id}/appointment`)

        } else {
            await Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Login incorrect',
                showConfirmButton: false,
                timer: 2000
            })
            setError(loginResult.error)
        }
    }
    return (
        <div className={style.container}>
            <form className={style.login} onSubmit={handleSubmit}>
                <h1 className={style.subtitle}>Welcome </h1>
                {error && <p className={style.error}>{error}</p>}
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