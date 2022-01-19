import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './returnButton.module.css'


export default function ReturnButton() {
    const navigate = useNavigate()
    const handleReturn = () => {
        navigate(-1)
    }

    return (
        <button className={style.returnButton} onClick={handleReturn} >Return</button>
    )
}