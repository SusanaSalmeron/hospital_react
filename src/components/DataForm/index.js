import React, { useEffect, useState } from 'react';
import validationFormForModification from '../../middleware/validationFormForModification';
import validationFormForRegister from '../../middleware/validationFormForRegister';
import { Link } from 'react-router-dom';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import Select from 'react-select';
import { getPostalZipsForSelect, getRegionsForSelect } from '../../services/registerService';
import style from './dataForm.module.css';


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

    const customStyles = (theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary25: 'rgb(239, 232, 242)',
            primary: '#a188b3',
        },
    })

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
                        <Field
                            id="name"
                            name="name"
                            placeholder="Name"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='name'
                            component="small"
                        />
                        <Field
                            id="email"
                            name="email"
                            placeholder="Email"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='email'
                            component="small" />
                        {
                            isRegistering ? <>
                                <Field
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={userData.password}
                                />
                                <ErrorMessage
                                    className="form-error"
                                    name='password'
                                    component="small" />
                            </> : null
                        }
                        <Field
                            id="address"
                            name="address"
                            placeholder="Address"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='address'
                            component="small" />
                        <Field
                            value={initialValues.country}
                            id="country"
                            name="country"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='country'
                            component="small" />
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
                            theme={customStyles}
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

                        <Select
                            value={values.postalZip}
                            options={values.postalZips}
                            style={customStyles}
                            onChange={async e => handleChange({ target: { name: "postalZip", value: e } })}
                            theme={customStyles}
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

                        <Field
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='phone'
                            component="small" />
                        {
                            isRegistering ? <>
                                <Field
                                    id="dob"
                                    name="dob"
                                    placeholder="Date of Birth"
                                    value={userData.dob}
                                />
                                <ErrorMessage
                                    className="form-error"
                                    name='dob'
                                    component="small" />
                            </> : null
                        }
                        <Field
                            id="ssnumber"
                            name="ssnumber"
                            placeholder="SS Number"
                        />
                        <ErrorMessage
                            className="form-error"
                            name='ssnumber'
                            component="small" />
                        <Field
                            id="company"
                            name="company"
                            placeholder="Insurance Company"
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
                        {isRegistering ? <div className={style.login}>
                            <p>Already have an account? <Link to={('/login')}>
                                <span>Log in</span></Link></p>
                        </div> : null}
                    </Form>
            }
        </Formik>
    )
}