import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './patient.module.css';
import checkRole from '../../middleware/checkRole';
import NavigateButton from '../NavigateButton'


export default function Patient({ data, id }) {
    const navigate = useNavigate()

    const submitRecord = (e) => {
        navigate(`/${id}/record`)
    }

    return (
        <div className={style.patient}>
            <h3 className={style.name}>{data.name}</h3>
            <p className={style.address}><span>Address:</span> {data.address}</p>
            <p className={style.address}>{data.postalZip.label} {data.region.label} {data.country} </p>
            <p className={style.email}><span>Email:</span> {data.email}</p>
            <p className={style.phone}><span>Phone Number:</span> {data.phone}</p>
            <p className={style.diagnostics}><span>Diagnostics:</span> {data.diagnostics}</p>
            {checkRole() ? <p className={style.record}>
                <NavigateButton
                    onClick={submitRecord}
                    name={'clinical'}
                    label='Clinical Record'
                    className={style.record}
                />
            </p> : null
            }
        </div>
    )
}