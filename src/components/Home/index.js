import React from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorPictureList from '../DoctorPictureList';
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
        <div className={style.all}>
            <div className={style.button}>
                <button onClick={handleLogin} type="button">
                    LOGIN
                </button>
                <button onClick={handleSignUp} type="button">
                    SIGN UP
                </button>
            </div>
            <div className={style.container}>
                <img className={style.img} src={img1} alt="hospital img" />
            </div>
            <div className={style.hospital}>
                <h2 className={style.subtitle}>
                    OUR MEDICAL TEAM
                </h2>
            </div>
            <DoctorPictureList />

        </div>
    )
}