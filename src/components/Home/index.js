import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './home.module.css';
import img1 from './img1.jpg'

export default function Home() {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }

    const handleSignUp = () => {
        navigate('/register')
    }

    return (
        <>
            <div className={style.button}>
                <button onClick={handleLogin} type="button">
                    LOGIN
                </button>
                <button onClick={handleSignUp} type="button">
                    SIGN UP
                </button>
            </div>
            <div className={style.container}>
                <div className={style.hospital}>
                    <h1 className={style.title}>
                        NEW HOPE HOSPITAL
                    </h1>
                    <img className={style.img} src={img1} alt="hospital img" />
                    <h2 className={style.subtitle}>
                        WELCOME
                    </h2>
                </div>

            </div>
        </>
    )
}