import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { ErrorMessage, Formik, Field, Form } from 'formik';
import style from './recordForm.module.css';
import { addNewDiagnostic, getDiseasesForOptions } from '../../services/patientService';
import Select from 'react-select';

const validateFields = values => {
    const errors = {}
    /*if (!values.diagnostic) {
        errors.diagnostic = 'Required diagnostic'
    
    if (!values.others) {
        errors.others = 'Required diagnostic'
    }}*/
    if (!values.record) {
        errors.record = 'Required clinical record'
    } else if (values.record.length < 3) {
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
    const [record, setRecord] = useState(null)
    const [showCustomDiagnostic, setShowCustomDiagnostic] = useState(false)
    const [diseases, setDiseases] = useState([])

    useEffect(() => {
        getDiseasesForOptions()
            .then(response => {
                setDiseases(response)
            })
    }, [])

    const submitRecord =
        (values, { setFieldError }) => {
            let { record, others } = values
            let diagnostic = values.diagnostic.value
            if (others) {
                diagnostic = others
            }
            return addNewDiagnostic(id, diagnostic, record)
                .then(() => {
                    setRecord(values)
                })
                .catch(() => {
                    setFieldError('diagnostic', 'This field has not been empty')
                });
        }

    const changeOption = (e, b) => {
        if (e.value === "Others") {
            setShowCustomDiagnostic(true)
        } else {
            setShowCustomDiagnostic(false)
        }
        let event = { target: { name: 'diagnostic', value: e } }
        b(event)
    }
    if (record) {
        return <>
            <h4> The diagnostic has been added to the clinical record</h4>
            <button>
                <Link to={`/${id}/record`}>
                    Return
                </Link>
            </button>
        </>
    }
    return (
        <div className={style.record}>
            <h2>Add a new record: </h2>
            <Formik
                initialValues={initialValues}
                validate={validateFields}
                onSubmit={submitRecord}
            >
                {
                    ({ handleChange, values, errors, isSubmitting, dirty }) =>
                        <Form className={style.form}>
                            <Select
                                value={values.diagnostic}
                                options={diseases}
                                onChange={selectedOption => { changeOption(selectedOption, handleChange) }}
                                className={style.select}
                                name='diagnostic'
                                error={errors}
                            >
                                {errors ? <p>Diagnostic Required</p> : null}
                            </Select>

                            <Field
                                className={errors.record ? "error" : ""}
                                hidden={!showCustomDiagnostic}
                                name="Others"
                                placeholder="Write your new diagnostic" />
                            <ErrorMessage
                                className="form-error"
                                name='Others'
                                component="small" />
                            <Field
                                className={errors.record ? "error" : ""}
                                name='record'
                                placeholder="Write here"
                                as="textarea"
                                rows="20"
                            />
                            <ErrorMessage
                                className="form-error"
                                name='record'
                                component="small" />
                            <button disabled={isSubmitting}>Send</button>
                            <button>
                                <Link to={`/${id}/record`}>
                                    Return
                                </Link>
                            </button>
                        </Form>
                }
            </Formik>
        </div>
    )
}