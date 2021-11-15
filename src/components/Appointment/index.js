import React, { useState } from 'react';
import style from './appointment.module.css';


export default function Appointment({ data, deleteCallback }) {
    const [modifyApp, setModifyApp] = useState("")


    const changeAppointment = () => {
        setModifyApp("hola")
    }

    const cancelAppointment = () => {
        deleteCallback()
    }

    return (
        <div className={style.showAppoint}>
            <p>Date: <span>{data.pickedDate}</span>  Doctor: <span >{data.doctor}</span></p>
            <button className={style.change} onClick={changeAppointment}>Change</button>
            <button className={style.cancel} onClick={cancelAppointment}>Cancel</button>
            <p>{modifyApp}</p>
        </div>

    )
};
