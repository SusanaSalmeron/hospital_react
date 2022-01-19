import React from 'react';
import style from './myAccount.module.css';
import { useNavigate, useParams } from 'react-router-dom';



export default function MyAccount() {
    const navigate = useNavigate()
    const { id } = useParams()
    const handleAccount = () => {
        navigate(`/${id}/account`)
    }

    return (
        <button className={style.myAccount} onClick={handleAccount}>My Account</button>
    )
}