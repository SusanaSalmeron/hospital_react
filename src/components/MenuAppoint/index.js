import React, { useEffect, useState } from 'react';
import style from './menuAppoint.module.css';
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../../services/appointmentService'



export default function MenuAppoint() {
    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getUser(id)
            .then(response => {
                setUser(response)
            })
    }, [id])

    console.log(user)
    return (
        <>
            <h2 className={style.title}>Welcome to the appointment zone {user.name}</h2>
            <div className={style.selection}>
                <Link to={`/${id}/appointment`}>
                    <div className={style.select}>
                        For select an appointment
                    </div>
                    <hr />
                </Link>
                <Link to={`/${id}/changeAppointment`}>
                    <div className={style.select}>
                        For change an appointment
                    </div>
                    <hr />
                </Link>
                <Link to={`/${id}/cancelAppointment`}>
                    <div className={style.select}>
                        For cancel an appointment
                    </div>

                </Link>
            </div>
        </>
    )
}