import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './logout.module.css';

export default function Logout({ setLoggedIn }) {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        setLoggedIn(false)
        navigate('/home')
    }

    return (
        <button className={style.logout}
            onClick={handleLogout}>LOGOUT
        </button>
    )
}