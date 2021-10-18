import React, { useEffect, useState } from 'react';
import style from './changeAppointment.module.css'
import MonthCalendar from '../Calendar';
import Logout from '../Logout';
import { Form, Formik, ErrorMessage } from 'formik';
import { getAppointment } from '../../services/patientService';
import { useParams } from 'react-router-dom'



const initialValues = {
    date: '',
}
const validateFields = values => {
    const errors = {}
    if (values.calendar < Date.now()) {
        errors.calendar = 'The date has not been less than the actual date'
    }
    return errors
}

export default function ChangeAppointment() {
    const [appointment, setAppointment] = useState("")
    const { id } = useParams()

    useEffect(() => {
        getAppointment(id)
            .then(response => {
                setAppointment(response)
            })

    }, [id])

    return (
        <>
            <div className={style.logout}>
                <Logout />
            </div>
            <div className={style.appointment}>
                <div>
                    <h1>Cancel your appointment</h1>
                    <Formik
                        initialValues={{ initialValues }}
                        validate={validateFields}
                        onSubmit={async (values) => {
                            console.log(values);
                        }}
                    >
                        {
                            ({ isSubmitting, isValid, dirty }) =>
                                <Form className={style.form}>
                                    <MonthCalendar
                                        name="calendar"
                                    />
                                    <ErrorMessage className="form-error" name='calendar' component='small' />
                                    <button
                                        className={style.btn}
                                        disabled={!isValid || !dirty || isSubmitting}
                                        type="submit"
                                    >
                                        Send
                                    </button>
                                </Form>
                        }
                    </Formik>
                </div>
                <div className={style.showAppoint}>
                    <h2>Next Appointments</h2>
                    {appointment ? <p>Date: <span>{appointment.date}</span>  Doctor: <span >{appointment.doctor}</span></p> : <p className={style.noApp}>No Appoinments...</p>}
                </div>
            </div>
        </>
    )
};