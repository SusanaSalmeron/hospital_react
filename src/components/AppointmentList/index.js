import React, { useState, useEffect } from 'react';
import Appointment from '../Appointment';
import { getAppointment } from '../../services/appointmentService';
import { useParams } from 'react-router-dom';
import style from './appointmentList.module.css'



export default function AppointmentList() {
    const [appointments, setAppointments] = useState([]);
    const [refresh, setRefresh] = useState(true)
    const changeState = () => {
        setRefresh(!refresh)
    }
    const { id } = useParams();

    useEffect(() => {
        getAppointment(id)
            .then(response => {
                setAppointments(response)
            })
    }, [id])
    return (
        <div className={style.showAppoint}>
            <h2>Next Appointments</h2>
            {appointments.length !== 0 ? appointments.map(appointment => <Appointment data={appointment} deleteCallback={changeState} />) : <p className={style.noApp}>No appointments</p>}
        </div>

    )
}