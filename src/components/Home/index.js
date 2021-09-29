import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './home.module.css';
import img1 from './img1.jpg'



export default function Home() {
    const history = useHistory()
    const handleLogin = () => {
        history.push('/login')
    }

    return (
        <>
            <div className={style.button}>
                <button onClick={handleLogin}>
                    LOGIN
                </button>
            </div>
            <div className={style.container}>
                <div className={style.hospital}>
                    <h1 className={style.title}>
                        Hospital Buena Esperanza
                    </h1>
                    <img className={style.img} src={img1} alt="hospital img" />
                    <h2 className={style.subtitle}>
                        BIENVENIDOS
                    </h2>
                </div>

            </div>
        </>
    )
}