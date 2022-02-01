import React from 'react'
import style from './footer.module.css'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.menu}>
                <div className={style.logo}>H <span>H</span></div>
                <ul className={style.ul}>
                    <Link to={"/legalNotice"}>
                        <li>Legal Notice</li>
                    </Link>
                    <Link to={"/privacyPolicy"}>
                        <li>Privacy Policy</li>
                    </Link>
                    <Link to={"/contactUs"}>
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </div>
            <div className={style.copyright}>
                <p>2021 ©HopeHospital - All rights reserved </p>
            </div>
        </div>
    )

}