import React from 'react';
/* import { useNavigate } from 'react-router-dom'; */
import NavigateButton from '../NavigateButton'


export default function LoginButton() {
    /* const navigate = useNavigate() */
    /* const handleLoginButton = () => {
        navigate('/login')
    } */

    return (
        <NavigateButton name="login" type="Button" route={'/login'} label="LOGIN" />
        /*  <button onClick={handleLoginButton} name="login" type="button">
             LOGIN
         </button> */
    )
}