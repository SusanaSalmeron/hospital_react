import React, { useEffect, useState } from 'react';
import NewAppointment from '../NewAppointment';
import AppointmentList from '../AppointmentList';
import Logout from '../Logout';
import style from './myAppointment.module.css'
import { getUser } from '../../services/appointmentService';
import { useParams } from 'react-router-dom';
import { UpdateAppointmentProvider } from '../../context/UpdateAppointmentsContext';


export default function MyAppointment() {
    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getUser(id)
            .then(response => {
                try {
                    setUser(response)
                } catch (err) {
                    console.log(err)
                }

            })
    }, [id])

    return (
        <>
            <div className={style.header}>
                <div className={style.logout}>
                    <h1>Welcome, {user.name} </h1>
                    <h3>You can choose or cancel your appointments</h3>
                    <Logout />
                </div>
                <hr />
            </div>
            <UpdateAppointmentProvider>
                <div className={style.container}>
                    <div className={style.appointment}>
                        <NewAppointment />
                    </div>
                    <div className={style.list}>
                        <AppointmentList />
                    </div>
                </div>
            </UpdateAppointmentProvider>
        </>
    )
}