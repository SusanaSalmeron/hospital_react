import React, { useState } from 'react';
import style from './appointmentForDoctors.module.css';
import SubmitButton from '../SubmitButton'



export default function AppointmentForDoctors({ data }) {
    const [newStyle, setNewStyle] = useState(false)
    const [changeButton, setChangeButton] = useState(false)

    const handleFinished = () => {
        setNewStyle(!newStyle)
        setChangeButton(!changeButton)
    }

    return (
        <div className={style.showAppoint}>
            {
                !newStyle ?
                    <p className={style.reactivate}>Date: <span>{data.pickedDate}</span>  Patient: <span >{data.patientName}</span></p> :
                    <p className={style.finished}>Date: <span>{data.pickedDate}</span>  Patient: <span >{data.patientName}</span></p>
            }

            {
                changeButton ?
                    <SubmitButton
                        className={style.complete}
                        onClick={handleFinished}
                        label="Pending" /> :
                    <SubmitButton
                        onClick={handleFinished}
                        label="Done" />}
        </div>
    )
}