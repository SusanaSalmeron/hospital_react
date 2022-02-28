import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addNewAppointment } from '../../services/appointmentService';
import MonthCalendar from '../Calendar';
import SubmitButton from '../SubmitButton';
import { getDoctorsForOptions } from '../../services/catalogService';
import style from './newAppointment.module.css';
import UpdateAppointmentContext from '../../context/UpdateAppointmentsContext';
import Swal from 'sweetalert2'

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
    const { appointmentRefresh, setAppointmentRefresh } = useContext(UpdateAppointmentContext)
    const [doctors, setDoctors] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getDoctorsForOptions()
            .then(response => {
                setDoctors(response)
            })
    }, [id])


    const submitAppointment = async (values, { setFieldError, resetForm }) => {
        let { date, doctor } = values
        let newDate = date.toLocaleDateString()
        addNewAppointment(id, newDate, doctor)
        await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your appointment has been created successfully',
            showConfirmButton: false,
            timer: 1500
        })
            .then(() => {
                const a = appointmentRefresh
                setAppointmentRefresh(!a)
                resetForm()

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
                                <h3>Select a doctor:</h3>
                                <Field as="select" name="doctor" error={errors}>
                                    <option value="default" style={{ background: 'white' }}>Select a doctor  </option>
                                    {doctors.map(doctor => {
                                        return <option key={doctor.id} id={doctor.id} value={doctor.id} style={{ background: 'white' }}>{doctor.name} - {doctor.speciality} </option>
                                    })}
                                </Field>
                                <ErrorMessage className="form-error" name='doctor' component='small' />
                                <SubmitButton
                                    disabled={!isValid || !dirty || isSubmitting}
                                    name={'send'}
                                    label='SEND'
                                    className={style.button}
                                />
                            </div>
                        </Form>
                }
            </Formik>
        </>
    )
}
