import React from 'react';
import style from './footer.module.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';



export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.menu}>
                <div className={style.logo}>
                    <Link to={"/home"}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <ul className={style.ul}>
                    <li>
                        <Link to={"/legalNotice"}>
                            Legal Notice
                        </Link>
                    </li>
                    <li>
                        <Link to={"/privacyPolicy"}>
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contactUs/"} className={style.contact}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={style.copyright}>
                <p>2021 ©HopeHospital - All rights reserved </p>
            </div>
        </div>
    )

}