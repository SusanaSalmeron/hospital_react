import React from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorPictureList from '../DoctorPictureList';
import style from './home.module.css';
import logo from './logo.png'

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
                    <img src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?cs=srgb&dl=pexels-pixabay-263402.jpg&fm=jpg" alt="hospital" />
                </figure>
                <figure className={style.picture2}>
                    <img src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="hospital" />
                </figure>
                <figure className={style.picture3}>
                    <img src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?cs=srgb&dl=pexels-pixabay-247786.jpg&fm=jpg" alt="hospital" />
                </figure>
                <figure className={style.picture4}>
                    <img src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?cs=srgb&dl=pexels-pixabay-236380.jpg&fm=jpg" alt="hospital" />
                </figure>
                <figure className={style.picture5}>
                    <img src="https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?cs=srgb&dl=pexels-vidal-balielo-jr-1250655.jpg&fm=jpg" alt="hospital" />
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