import React from 'react';
import style from './appointmentForDoctors.module.css'




export default function AppointmentForDoctors({ data }) {

    return (
        <div className={style.showAppoint}>
            <p>Date: <span>{data.pickedDate}</span>  Patient: <span >{data.patientName}</span></p>
        </div>
    )
}