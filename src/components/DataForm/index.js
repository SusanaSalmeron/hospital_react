import React, { useEffect, useState } from 'react';
import validationFormForModification from '../../middleware/validationFormForModification';
import validationFormForRegister from '../../middleware/validationFormForRegister'
import { ErrorMessage, Formik, Field, Form } from 'formik';
import Select from 'react-select';
import { getRegionsForSelect } from '../../services/registerService';
import style from './dataForm.module.css'



export default function DataForm({ userData, isRegistering, submit, changeOptions }) {
    const [regions, setRegions] = useState([])

    const initialValues = {
        name: userData?.name ?? "",
        email: userData?.email ?? "",
        address: userData?.address ?? "",
        postalZip: userData?.postalZip ?? "",
        region: userData?.region ?? "",
        country: userData?.country ?? "",
        phone: userData?.phone ?? "",
        ssnumber: userData?.ssnumber ?? "",
        company: userData?.company ?? ""
    }

    useEffect(() => {
        getRegionsForSelect()
            .then(response => {
                setRegions(response)
                console.log(response)
            })
    }, [])

    const handleOptions = (e, b) => {
        let event = { target: { name: 'region', value: e } }
        b(event)
    }

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={submit}
            validationSchema={isRegistering ? validationFormForRegister : validationFormForModification}
        >
            {
                ({ isSubmitting, dirty, isValid, handleChange, errors, values, handleBlur }) =>
                    <Form className={style.form}>
                        <label htmlFor="Name">Name:</label>
                        <Field
                            id="name"
                            name="name"
                            placeholder="Write your name"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='name'
                            component="small"
                        />

                        <label htmlFor="Email">Email:</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="Write your email"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='email'
                            component="small" />
                        {
                            isRegistering ? <>
                                <label htmlFor="Password">Password:</label>
                                <Field
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Write your password"
                                />
                                <ErrorMessage
                                    className="form-error"
                                    name='password'
                                    component="small" />
                            </> : null
                        }
                        <label htmlFor="address">Address:</label>
                        <Field
                            id="address"
                            name="address"
                            placeholder="Write your address"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='address'
                            component="small" />
                        <label htmlFor="country">Country:</label>
                        <Field
                            id="country"
                            name="country"
                            placeholder="Write your country"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='country'
                            component="small" />
                        <label htmlFor="region">Region:</label>
                        <Select
                            value={values.region}
                            options={regions}
                            onChange={selectedOption => { handleOptions(selectedOption, handleChange) }}
                            name="region"
                            error={errors}
                            className={style.select}
                        >
                            {errors ? <p>Region Required </p> : null}
                        </Select>

                        <label htmlFor="postalZip">Postal Zip:</label>
                        <Field
                            id="postalZip"
                            name="postalZip"
                            placeholder="Write your postalZip"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='postalZip'
                            component="small" />
                        <label htmlFor="phone">Phone:</label>
                        <Field
                            id="phone"
                            name="phone"
                            placeholder="Write your phone"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='phone'
                            component="small" />

                        {
                            isRegistering ? <>
                                <label htmlFor="DoB">Date of Birth:</label>
                                <Field
                                    id="dob"
                                    name="dob"
                                    placeholder="Write your date of birth"
                                />
                                <ErrorMessage
                                    className="form-error"
                                    name='dob'
                                    component="small" />
                            </> : null
                        }

                        <label htmlFor="ssNumber">SS Number:</label>
                        <Field
                            id="ssnumber"
                            name="ssnumber"
                            placeholder="Write your ss number"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='ssnumber'
                            component="small" />
                        <label htmlFor="company">Company:</label>
                        <Field
                            id="company"
                            name="company"
                            placeholder="Write your company"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='company'
                            component="small" />
                        <button
                            disabled={!isValid || !dirty || isSubmitting}
                            type="submit"
                        >
                            Send
                        </button>
                    </Form>
            }
        </Formik>
    )
}