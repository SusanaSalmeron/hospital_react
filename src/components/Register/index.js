import React, { useState } from 'react';
import validationForm from '../../middleware/validationForm'
import { useHistory } from 'react-router-dom';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import style from './register.module.css';
import register from '../../services/registerService'


const initiaValues = {
    name: "",
    email: "",
    password: "",
    address: "",
    postalZip: "",
    region: "",
    country: "",
    phone: "",
    dob: "",
    ssnumber: "",
    company: ""
}

export default function Register() {
    const history = useHistory()
    const [error, setError] = useState()

    const handleSubmit = async (values) => {
        const { email, password, name, address, postalZip, region, country, phone, dob, ssnumber, company } = values
        const registerResult = await register(email, password, name, address, postalZip, region, country, phone, dob, ssnumber, company)
        if (!registerResult.error) {
            history.push(`/${registerResult.id}/appointment`)
        } else {
            setError(registerResult.error)
        }
    }
    return (
        <div className={style.register}>
            <h4 className={style.subtitle}>Sign Up</h4>
            <Formik initialValues={initiaValues}
                onSubmit={handleSubmit}
                validationSchema={validationForm}
            >
                {
                    ({ isSubmitting, dirty, isValid, handleChange }) =>
                        <Form>
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
                            <label htmlFor="region">Region:</label>
                            <Field
                                id="region"
                                name="region"
                                placeholder="Write your region"
                            />
                            <ErrorMessage
                                className="form-error"
                                name='region'
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
                            <button disabled={!isValid || !dirty || isSubmitting}>Sign Up</button>
                        </Form>
                }
            </Formik>
        </div>
    )
}