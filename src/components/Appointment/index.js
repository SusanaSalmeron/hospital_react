import React from 'react';
import { useParams } from 'react-router-dom';
import style from './appointment.module.css';
import { deleteAppointment } from '../../services/appointmentService';

export default function Appointment({ data, notifyCallback }) {
    const { id } = useParams();

    const cancelAppointment = () => {
        deleteAppointment(id, data.id)
        notifyCallback()
    }

    return (
        <div className={style.showAppoint}>
            <p>Date: <span>{data.pickedDate}</span>  Doctor: <span >{data.doctor}</span></p>
            <button id={data.id} className={style.cancel} onClick={cancelAppointment} >Cancel</button>
        </div>

    )
};
