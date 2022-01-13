import React from 'react';
import { Link } from 'react-router-dom';
import style from './error403.module.css'


export default function Error403() {
    return (
        <>
            <div className={style.forbidden}>
                <h1>403 FORBIDDEN - YOU ARE NOT AUTHORIZED TO ACCESS THIS PAGE </h1>
            </div>
            <div className={style.button}>
                <button>
                    <Link to={'/home'}>
                        Home
                    </Link>
                </button>
            </div>
        </>
    )
}