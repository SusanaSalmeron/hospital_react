import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReturnButton from '../ReturnButton';
import { getAppointmentsForDoctors } from '../../services/doctorsService';
import AppointmentForDoctors from '../AppointmentForDoctors';
import style from './AppointListForDoctors.module.css';
import Footer from '../Footer';


export default function AppointListForDoctors() {
    const [appointments, setAppointments] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getAppointmentsForDoctors(id)
            .then(response => {
                if (response.redirect) {
                    navigate('/error403')
                } else {
                    setAppointments(response)
                }
            })
    }, [id, navigate])

    return (
        <>
            <div className={style.return}>
                <ReturnButton />
            </div>
            <div className={style.showAppoint}>
                <div className={style.container}>
                    <h2>Next Appointments</h2>
                    {appointments.length !== 0 ? appointments.map(appointment => <AppointmentForDoctors data={appointment} />) : <p className={style.noApp}>No appointments</p>}
                </div>
            </div>
            <div className={style.footer}>
                <Footer />
            </div>
        </>
    )
}