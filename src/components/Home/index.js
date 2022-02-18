import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'
import DoctorPictureList from '../DoctorPictureList';
import ScrollToTopButton from '../ScrollToTopButton';
import { checkValidToken } from '../../middleware/checktoken';
import checkRole from '../../middleware/checkRole';
import LogoutButton from '../LogoutButton'
import style from './home.module.css';
import logo from '../../Images/logo.png';
import picture1 from '../../Images/picture1.jpg';
import picture2 from '../../Images/picture2.jpg';
import picture3 from '../../Images/picture3.jpg';
import picture4 from '../../Images/picture4.jpg';
import picture5 from '../../Images/picture5.jpg';
import PatientButton from '../PatientButton';
import AppointmentsButton from '../AppointmentsButton';
import SignUpButton from '../SignUpButton';
import LoginButton from '../LoginButton'


export default function Home() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            const decodedToken = jwt.decode(token)
            setUserId(decodedToken.id)
            setLoggedIn(true)
        }
    }, [loggedIn])


    function button() {
        if (checkValidToken()) {
            if (checkRole()) {
                return <PatientButton id={userId} />
            }
            else {
                return <AppointmentsButton id={userId} />
            }
        } else {
            return <SignUpButton isLogged={loggedIn} />
        }
    }

    return (
        <div className={style.all} id="home">
            <div className={style.container}>
                <div className={style.img}>
                    <figure className={style.logo}>
                        <img src={logo} alt="logo" />
                    </figure>
                </div>
                <div className={style.button}>
                    {
                        checkValidToken() ? <LogoutButton setLoggedIn={setLoggedIn} /> : <LoginButton />
                    }
                    {button()}
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
            <ScrollToTopButton />
        </div>

    )
}