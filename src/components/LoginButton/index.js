import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function LoginButton() {
    const navigate = useNavigate()
    const handleLoginButton = () => {
        navigate('/login')
    }

    return (
        <button onClick={handleLoginButton} name="login" type="button">
            LOGIN
        </button>
    )
}