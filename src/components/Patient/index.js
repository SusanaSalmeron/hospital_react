import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './patient.module.css';
import checkRole from '../../middleware/checkRole'


export default function Patient({ data, id }) {
    const navigate = useNavigate()

    const submitRecord = (e) => {
        e.preventDefault()
        navigate(`/${id}/record`)
    }

    return (
        <div className={style.patient}>
            <h3 className={style.name}>{data.name}</h3>
            <p className={style.address}>Address: {data.address} {data.postalZip} {data.region} {data.country}</p>
            <p className={style.email}>Email: {data.email}</p>
            <p className={style.phone}>Phone Number: {data.phone}</p>
            <p className={style.diagnostics}>Diagnostics: {data.diagnostics}</p>
            {checkRole() ? <p className={style.record}>
                <button type="button" onClick={submitRecord}>Clinical Record
                </button>

            </p> : null
            }
        </div>
    )
}