import React, { useEffect, useState } from 'react';
import NewAppointment from '../NewAppointment';
import AppointmentList from '../AppointmentList';
import Logout from '../Logout';
import ModifyDataButton from '../ModifyDataButton';
import style from './myAppointment.module.css'
import { getUser } from '../../services/appointmentService';
import { useParams } from 'react-router-dom';
import { UpdateAppointmentProvider } from '../../context/UpdateAppointmentsContext';
import logo from '../../Images/logo.png'


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
        <div className={style.body}>
            <div className={style.header}>
                <div className={style.logout}>
                    <figure className={style.logo}>
                        <img src={logo} alt="logo" />
                    </figure>
                    <h2>Welcome, <span>{user.name}</span> </h2>
                    <ModifyDataButton />
                    <Logout />
                </div>
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

        </div>
    )
}