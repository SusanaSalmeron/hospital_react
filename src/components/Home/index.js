import React from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorPictureList from '../DoctorPictureList';
import style from './home.module.css';
import logo from './logo.png';
import picture1 from '../../Images/picture1.jpg';
import picture2 from '../../Images/picture2.jpg'
import picture3 from '../../Images/picture3.jpg'
import picture4 from '../../Images/picture4.jpg'
import picture5 from '../../Images/picture5.jpg'





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
            <div className={style.container}>
                <div className={style.img}>
                    <figure className={style.logo}>
                        <img src={logo} alt="logo" />
                    </figure>
                </div>
                <div className={style.button}>
                    <button onClick={handleLogin} type="button">
                        LOGIN
                    </button>
                    <button onClick={handleSignUp} type="button">
                        SIGN UP
                    </button>
                </div>
            </div>
            <div className={style.gallery}>
                <figure className={style.picture1}>
                    <img src={picture1} alt="picture1" />
                </figure>
                <figure className={style.picture2}>
                    <img src={picture2} alt="picture2" />
                </figure>
                <figure className={style.picture3}>
                    <img src={picture3} alt="picture3" />
                </figure>
                <figure className={style.picture4}>
                    <img src={picture4} alt="picture4" />
                </figure>
                <figure className={style.picture5}>
                    <img src={picture5} alt="picture5" />
                </figure>
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