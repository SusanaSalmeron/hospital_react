import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../Login';
import style from './home.module.css';


export default function Home() {
    const history = useHistory()
    let token = localStorage.getItem("token")

    return (
        <>
            <div className={style.container}>
                <h1 className={style.title}>Hospital Buena Esperanza</h1>
                {!token ? <Login /> : history.push('/search')}
                <h2 className={style.subtitle}>BIENVENIDOS</h2>
            </div>
        </>
    )
}