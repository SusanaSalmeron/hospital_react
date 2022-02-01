import React, { useState, useEffect } from 'react';
import { getUser } from '../../services/appointmentService'
import Logout from '../Logout';
import { useParams, Link } from 'react-router-dom';
import style from './account.module.css'

export default function Account() {
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
                    <h1>Welcome to your account, {user.name} </h1>
                    <Logout />
                </div>
                <hr />
            </div>
            <div className={style.container}>
                <div className={style.personal}>
                    <Link to={`/${id}/modifyData`}>
                        <p>MODIFY YOUR PERSONAL DATA</p>
                    </Link>
                </div>
                <div className={style.appoint}>
                    <Link to={`/${id}/appointment`}>
                        <p>ACCESS TO YOUR APPOINTMENTS</p>
                    </Link>
                </div>
            </div>
        </div>


    )
}