import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './logout.module.css';


export default function Logout() {
    const navigate = useNavigate()
    const handleIsLogged = () => {
        localStorage.removeItem("token")
        navigate('/home')
    }

    return (
        <button className={style.logout} onClick={handleIsLogged}>Logout</button>
    )
}