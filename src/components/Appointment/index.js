import React, { useEffect, useState } from 'react';
import style from './appointment.module.css';
import MonthCalendar from '../Calendar';
import Logout from '../Logout'
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useParams } from 'react-router-dom'
import { getAppointment } from '../../services/patientService';


const initialValues = {
    doctor: '',
    calendar: '',
}
const validateFields = values => {
    const errors = {}
    if (!values.doctor) {
        errors.doctor = 'Select a doctor'
    } else if (values.calendar < Date.now()) {
        errors.calendar = 'The date has not been less than the actual date'
    }
    return errors
}

export default function Appointment() {
    const [appointment, setAppointment] = useState(''); const { id } = useParams();

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
                    <h1>Choose your appointment</h1>
                    <Formik
                        initialValues={{ initialValues }}
                        validate={validateFields}
                        onSubmit={async (values) => {
                            console.log(values);
                        }}
                    >
                        {
                            ({ errors, isSubmitting, isValid, dirty }) =>
                                <Form className={style.form}>
                                    <MonthCalendar
                                        name="calendar"
                                    />
                                    <ErrorMessage className="form-error" name='calendar' component='small' />
                                    <h2>Select a doctor</h2>
                                    <Field as="select" name="doctor" error={errors}>
                                        <option value="">Select a doctor </option>
                                        <option value="John Smith">John Smith - neurologist </option>
                                        <option value="Ann Johnson">Ann Johnson - podologist </option>
                                        {errors ? <p>You have to make a selection</p> : null}
                                    </Field>
                                    <ErrorMessage className="form-error" name='doctor' component='small' />
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


















/*




export default function Appointment() {
    const [doctor, setDoctor] = useState('')
    const [appoint, setAppoint] = useState({})


    const changeDoctor = (evt) => {
        setDoctor(evt.value)
    }
    const submitAppointment = (values) => {
        console.log(values)
    }

    return (
        <>
            <Formik
                initialValues={{ initialValues }}

                onSubmit={(values, { setFieldError }) => {
                    console.log(values)
                        .then(() => {
                            setAppoint(values)
                        })
                        .catch(() => {
                            setFieldError('error')
                        });
                }}
            >

            </Formik>
        </>
    )
} */