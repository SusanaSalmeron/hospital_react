import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addNewAppointment } from '../../services/appointmentService';
import MonthCalendar from '../Calendar';
import { getAppointment } from '../../services/appointmentService';
import { getDoctorsForOptions } from '../../services/catalogService';
import style from './newAppointment.module.css';
import UpdateAppointmentContext from '../../context/UpdateAppointmentsContext';


const initialValues = {
    doctor: '',
    date: '',
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


export default function NewAppointment() {
    const [appointment, setAppointment] = useState({});
    const { appointmentRefresh, setAppointmentRefresh } = useContext(UpdateAppointmentContext)

    const [doctors, setDoctors] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getAppointment(id)
            .then(response => {
                setAppointment(response)
            })
        getDoctorsForOptions()
            .then(response => {
                setDoctors(response)
            })
    }, [id])


    const submitAppointment = async (values, { setFieldError }) => {
        let { date, doctor } = values
        let newDate = date.toLocaleDateString()
        addNewAppointment(id, newDate, doctor)
            .then(() => {
                setAppointment(values)
                const a = appointmentRefresh
                setAppointmentRefresh(!a)
            })
            .catch(() => {
                setFieldError("calendar", 'The date can not been empty')
            })
    }
    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validateFields}
                onSubmit={submitAppointment}
            >
                {
                    ({ errors, isSubmitting, isValid, dirty }) =>
                        <Form className={style.form}>
                            <MonthCalendar
                                name="date"
                            />
                            <ErrorMessage className="form-error" name='calendar' component='small' />
                            <div className={style.doctor}>
                                <h2>Select a doctor</h2>
                                <Field as="select" name="doctor" error={errors}>
                                    <option value="">Select a doctor </option>
                                    {doctors.map(doctor => {
                                        return <option id={doctor.id} value={doctor.id}>{doctor.name} - {doctor.speciality} </option>
                                    })}
                                </Field>
                                <ErrorMessage className="form-error" name='doctor' component='small' />
                                <button
                                    className={style.btn}
                                    disabled={!isValid || !dirty || isSubmitting}
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </Form>
                }
            </Formik>

        </>
    )
}
