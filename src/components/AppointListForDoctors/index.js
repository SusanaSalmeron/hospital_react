import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { getAppointmentsForDoctors } from '../../services/doctorsService';
import AppointmentForDoctors from '../AppointmentForDoctors';
import style from './AppointListForDoctors.module.css';


export default function AppointListForDoctors() {
    const [appointments, setAppointments] = useState([])
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        getAppointmentsForDoctors(id)
            .then(response => {
                if (response.redirect) {
                    history.push('/error403')
                } else {
                    setAppointments(response)
                }
            })
    }, [id, history])

    return (
        <>
            <div className={style.return}>
                <Link to={`/${id}/search`}>
                    <button>Return</button>
                </Link>
            </div>
            <div className={style.showAppoint}>
                <div className={style.container}>
                    <h2>Next Appointments</h2>
                    {appointments.length !== 0 ? appointments.map(appointment => <AppointmentForDoctors data={appointment} />) : <p className={style.noApp}>No appointments</p>}
                </div>
            </div>
        </>
    )
}