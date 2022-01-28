import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { ErrorMessage, Formik, Field, Form } from 'formik';
import style from './recordForm.module.css';
import { addNewDiagnostic } from '../../services/patientService';
import { getDiseasesForOptions } from '../../services/catalogService'
import Select from 'react-select';
import Footer from '../Footer';

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
    const [record, setRecord] = useState(null)
    const [diseases, setDiseases] = useState([])

    useEffect(() => {
        getDiseasesForOptions()
            .then(response => {
                setDiseases(response)
            })
    }, [])

    const submitRecord =
        (values, { setFieldError }) => {
            let { record } = values
            let diagnostic = values.diagnostic.value
            return addNewDiagnostic(id, diagnostic, record)
                .then(() => {
                    setRecord(values)
                })
                .catch(() => {
                    setFieldError('diagnostic', 'This field has not been empty')
                });
        }

    const changeOption = (e, b) => {
        let event = { target: { name: 'diagnostic', value: e } }
        b(event)
    }
    if (record) {
        return <div className={style.recordAdded}>
            <h4> The diagnostic has been added to the clinical record</h4>
            <button>
                <Link to={`/${id}/record`}>
                    Return
                </Link>
            </button>
        </div>
    }
    return (
        <>
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
                                    onChange={selectedOption => { changeOption(selectedOption, handleChange) }}
                                    className={style.select}
                                    name='diagnostic'
                                    error={errors}
                                >
                                    {errors ? <p>Diagnostic Required</p> : null}
                                </Select>
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
                                <button disabled={!isValid || !dirty || isSubmitting}>Send</button>
                                <button>
                                    <Link to={`/${id}/record`}>
                                        Return
                                    </Link>
                                </button>
                            </Form>
                    }
                </Formik>
            </div>
            <div className={style.footer}>
                <Footer />
            </div>
        </>
    )
}