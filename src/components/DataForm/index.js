import React from 'react';
import validationFormForModification from '../../middleware/validationFormForModification';
import validationFormForRegister from '../../middleware/validationFormForRegister'
import { ErrorMessage, Formik, Field, Form } from 'formik';



export default function DataForm({ userData, isRegistering, submit }) {
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
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={submit}
            validationSchema={isRegistering ? validationFormForRegister : validationFormForModification}
        >
            {
                ({ isSubmitting, dirty, isValid, handleChange }) =>
                    <Form>
                        <label htmlFor="Name">Name:</label>
                        <Field
                            id="name"
                            name="name"
                            placeholder="Write your name"
                            onChange={handleChange}

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
                            onChange={handleChange}
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
                                    onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                                    onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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