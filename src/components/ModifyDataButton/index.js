import React from 'react';
import style from './modifyDataButton.module.css'
import { useNavigate, useParams } from 'react-router-dom';



export default function MyAccount() {
    const navigate = useNavigate()
    const { id } = useParams()
    const handleAccount = () => {
        navigate(`/${id}/modifyData`)
    }

    return (
        <button
            className={style.modifyButton}
            onClick={handleAccount}
        >
            Modify your data
        </button>
    )
}