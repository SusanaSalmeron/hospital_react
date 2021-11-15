import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAppointment } from '../../services/appointmentService';
import { addNewAppointment } from '../../services/appointmentService';
import MonthCalendar from '../Calendar';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import style from './newAppointment.module.css'

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
    const { id } = useParams();

    useEffect(() => {
        getAppointment(id)
            .then(response => {
                setAppointment(response)
            })
    }, [id])

    return (
        <>
            <Formik
                initialValues={{ initialValues }}
                validate={validateFields}
                onSubmit={async (values, { setFieldError }) => {
                    let { date, doctor } = values
                    addNewAppointment(id, date, doctor)
                        .then(() => {
                            setAppointment(values)
                        })
                        .catch(() => {
                            setFieldError("calendar", 'The date can not been empty')
                        })
                }}
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
                                    <option value="John Smith">John Smith - neurologist </option>
                                    <option value="Ann Johnson">Ann Johnson - podologist </option>
                                    <option value="Justin Perkins">Justin Perkins - surgeon </option>
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
                            </div>
                        </Form>
                }
            </Formik>

        </>
    )
};