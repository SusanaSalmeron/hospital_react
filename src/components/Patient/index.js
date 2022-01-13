import React from 'react';
import { Link } from 'react-router-dom';
import style from './patient.module.css';
import checkRole from '../../middleware/checkRole'


export default function Patient({ data, id }) {

    return (
        <div className={style.patient}>
            <h3 className={style.name}>{data.name}</h3>
            <p className={style.address}>Address: {data.address} {data.postalZip} {data.region} {data.country}</p>
            <p className={style.email}>Email: {data.email}</p>
            <p className={style.phone}>Phone Number: {data.phone}</p>
            <p className={style.diagnostics}>Diagnostics: {data.diagnostics}</p>
            {checkRole() ? <p className={style.record}>
                <Link to={`/${id}/record`}>
                    Clinical Record
                </Link>
            </p> : null
            }
        </div>
    )
}