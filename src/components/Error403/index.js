import React from 'react';
import NavigateButton from '../NavigateButton';
import style from './error403.module.css'


export default function Error403() {
    return (
        <div className={style.container}>
            <div className={style.forbidden}>
                <h1>403 FORBIDDEN - YOU ARE NOT AUTHORIZED TO ACCESS THIS PAGE </h1>
            </div>
            <div className={style.button}>
                <NavigateButton
                    route={'/home'}
                    label={"HOME"}
                />
            </div>
        </div>
    )
}