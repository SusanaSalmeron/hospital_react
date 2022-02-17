import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupButton() {
    const navigate = useNavigate()
    const handleSignupButton = () => {
        navigate('/register')
    }

    return (
        <button
            onClick={handleSignupButton}
            name="signup"
            type="button">
            SIGN UP
        </button>
    )
}