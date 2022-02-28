import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { ErrorMessage, Formik, Field, Form } from 'formik';
import Select from 'react-select';
import { addNewDiagnostic } from '../../services/patientService';
import { getDiseasesForOptions } from '../../services/catalogService'
import NavigateButton from '../NavigateButton';
import SubmitButton from '../SubmitButton';
import logo from '../../Images/logo.png'
import Swal from 'sweetalert2'
import style from './recordForm.module.css';

const validateFields = values => {
    const errors = {}
    if (!values.diagnostic) {
        errors.diagnostic = 'Required diagnostic'
    }
    if (!values.record) {
        errors.record = 'Required clinical record'
    } else if (values.record.length < 80) {
        errors.record = 'You have to write almost 80 characters'
    }
    return errors
}

const initialValues = {
    diagnostic: '',
    record: ''
}

export default function RecordForm() {
    const { id } = useParams()
    const [diseases, setDiseases] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        //TODO - ISMOUNTED CREATE TO FIX THE MEMORY LEAK - TRY ANOTHER WAY TO FIX IT - 
        let isMounted = true
        getDiseasesForOptions()
            .then(response => {
                if (isMounted) {
                    setDiseases(response)
                }
            })
        return () => {
            isMounted = false
        }
    }, [])

    const customStyles = {
        option: (styles, { isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? "rgb(239, 232, 242)" : null,
                color: "#333333",
                background: isSelected ? "#a188b3" : null,
            };
        }
    };

    const submitRecord =
        (values, { setFieldError }) => {
            let { record } = values
            let diagnostic = values.diagnostic.value
            return addNewDiagnostic(id, diagnostic, record)
                .then(() => {
                    return Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Record added succesfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .then(() => {
                    navigate(`/${id}/record`)
                })
                .catch(() => {
                    setFieldError('diagnostic', 'This field has not been empty')
                });
        }

    const changeOption = (e, b) => {
        let event = { target: { name: 'diagnostic', value: e } }
        b(event)
    }

    return (
        <div className={style.container}>
            <div className={style.logo} >
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
            </div>
            <div className={style.record}>
                <h2>Add a new record: </h2>
                <Formik
                    initialValues={initialValues}
                    validate={validateFields}
                    onSubmit={submitRecord}
                >
                    {
                        ({ handleChange, values, errors, isSubmitting, dirty, isValid }) =>
                            <Form className={style.form}>
                                <Select
                                    value={values.diagnostic}
                                    options={diseases}
                                    styles={customStyles}
                                    onChange={selectedOption => { changeOption(selectedOption, handleChange) }}
                                    className={style.select}
                                    name='diagnostic'
                                    error={errors}
                                >
                                    {errors ? <p>Diagnostic Required</p> : null}
                                </Select>
                                <ErrorMessage
                                    className="form-error"
                                    name='record'
                                    component="small" />
                                <Field
                                    className={errors.record ? "error" : ""}
                                    name='record'
                                    placeholder="Write here"
                                    as="textarea"
                                    rows="15"
                                />
                                <SubmitButton
                                    disabled={!isValid || !dirty || isSubmitting}
                                    label='SEND'
                                    name={'send'}
                                    data-testid="submit-button"
                                />
                                <NavigateButton
                                    route={`/${id}/record`}
                                    name={'return'}
                                    label="RETURN"
                                />
                            </Form>
                    }
                </Formik>
            </div>
        </div>
    )
}