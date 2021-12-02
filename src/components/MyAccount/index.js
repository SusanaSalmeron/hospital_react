import React from 'react';
import style from './myAccount.module.css';
import { useHistory, useParams } from 'react-router-dom';



export default function MyAccount() {
    const history = useHistory()
    const { id } = useParams()
    const handleAccount = () => {
        history.push(`/${id}/account`)
    }


    return (
        <button className={style.myAccount} onClick={handleAccount}>My Account</button>
    )
}