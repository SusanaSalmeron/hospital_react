import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './logout.module.css'




export default function Logout() {
    const history = useHistory()


    const handleIsLogged = () => {
        localStorage.removeItem("token")
        history.push('/home')
    }


    return (
        <button className={style.logout} onClick={handleIsLogged}>Logout</button>
    )
}