import React, { useState } from 'react';

import {
    useNavigate
} from 'react-router-dom';
import login from '../../services/loginService';
import areYouAWorker from '../../middleware/checkWorker';
import Swal from 'sweetalert2'
import LoginForm from '../LoginForm';


export default function Login() {
    const navigate = useNavigate()
    const [error, setError] = useState()

    const defaultOnSubmit = async (evt) => {
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
        <LoginForm
            onSubmit={defaultOnSubmit}
            inputError={error}
        />
    )
}