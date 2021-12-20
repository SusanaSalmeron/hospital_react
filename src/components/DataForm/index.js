import React, { useEffect, useState } from 'react';
import validationFormForModification from '../../middleware/validationFormForModification';
import validationFormForRegister from '../../middleware/validationFormForRegister'
import { ErrorMessage, Formik, Field, Form } from 'formik';
import Select from 'react-select';
import { getPostalZipsForSelect, getRegionsForSelect } from '../../services/registerService';
import style from './dataForm.module.css'


export default function DataForm({ userData, isRegistering, submit }) {
    const [regions, setRegions] = useState([])


    const initialValues = {
        name: userData?.name ?? "",
        email: userData?.email ?? "",
        address: userData?.address ?? "",
        postalZip: userData?.postalZip ?? "",
        postalZips: [],
        region: userData?.region ?? "",
        country: "Spain",
        phone: userData?.phone ?? "",
        ssnumber: userData?.ssnumber ?? "",
        company: userData?.company ?? ""
    }


    useEffect(() => {
        getRegionsForSelect()
            .then(response => {
                setRegions(response)
            })
    }, [])


    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={submit}
            validationSchema={isRegistering ? validationFormForRegister : validationFormForModification}

        >
            {
                ({ isSubmitting, dirty, isValid, handleChange, errors, status, values, setFieldValue }) =>
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
                            value={initialValues.country}
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
                            onChange={async e => {
                                const { value } = e
                                const zcs = await getPostalZipsForSelect(value)
                                handleChange({ target: { name: 'region', value: e } })
                                setFieldValue("postalZips", zcs)
                                setFieldValue("postalZip", "")
                            }}
                            name="region"
                            placeholder="Select your region"
                            id="region"
                            className={style.select}
                            errors={errors}
                        >
                            {
                                errors ?
                                    <p>Region Required</p> :
                                    null
                            }
                        </Select>
                        <label htmlFor="postalZip">Postal Zip:</label>
                        <Select
                            value={values.postalZip}
                            options={values.postalZips}
                            onChange={async e => handleChange({ target: { name: "postalZip", value: e } })}
                            name="postalZip"
                            error={errors}
                            placeholder="Select your postalZip"
                            className={style.select}
                        >
                            {errors.postalZip ? <p>Postal zip Required </p> : null}
                        </Select>
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
                        {status && status.email ? <p className={style.error}> {status.email} </p> : null}
                    </Form>
            }
        </Formik>
    )
}