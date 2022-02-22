import React, { useState, useEffect, useContext } from 'react';
import Appointment from '../Appointment';
import { getAppointment } from '../../services/appointmentService';
import { useParams } from 'react-router-dom';
import style from './appointmentList.module.css'
import UpdateAppointmentContext from '../../context/UpdateAppointmentsContext';


export default function AppointmentList() {
    const [appointments, setAppointments] = useState([]);
    const [refresh, setRefresh] = useState(true)
    const { appointmentRefresh } = useContext(UpdateAppointmentContext)
    const { id } = useParams();

    const changeState = () => {
        setRefresh(!refresh)
    }


    useEffect(() => {
        getAppointment(id)
            .then(response => {
                setAppointments(response)
            })
    }, [id, refresh, appointmentRefresh])

    return (
        <div className={style.showAppoint}>
            <h2>-You can choose or cancel your appointments-</h2>
            <h3>Next Appointments:</h3>
            {appointments.length !== 0 ? appointments.map(appointment => <Appointment key={appointment.id} id={appointment.id} data={appointment} notifyCallback={changeState} />) : <p className={style.noApp}>No appointments</p>}
        </div>
    )
}