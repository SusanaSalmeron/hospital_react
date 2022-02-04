import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import validationFormForContactUs from '../../middleware/validationFormForContactUs';
import style from './contactUs.module.css';
import { sendForm } from '../../services/contactUsService';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
}
export default function ContactUs() {
    const navigate = useNavigate()

    const submitContact = async (values, { setFieldError }) => {
        let { name, email, subject, message } = values
        let emailSent = await sendForm(name, email, subject, message)
        if (emailSent) {
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your inquiry has been sent successfully',
                showConfirmButton: false,
                timer: 3000
            })
            navigate('/home')
        }
    }

    return (
        <div className={style.container}>
            <h1 className={style.contact}>Contact Us</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationFormForContactUs}
                onSubmit={submitContact}
            >
                {
                    ({ isSubmitting, dirty, isValid }) =>
                        <Form className={style.form}>

                            <Field
                                id="name"
                                name="name"
                                placeholder="Name"
                            />
                            <ErrorMessage
                                className="form-error"
                                name="name"
                                component="small"
                            />
                            <Field
                                id="email"
                                name="email"
                                placeholder="Email"
                            />
                            <ErrorMessage
                                className="form-error"
                                name="email"
                                component="small"
                            />
                            <Field
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                            />
                            <ErrorMessage
                                className="form-error"
                                name="subject"
                                component="small"
                            />
                            <Field
                                id="message"
                                name="message"
                                as="textarea"
                                rows="20"
                                placeholder="Message"
                            />
                            <ErrorMessage
                                className="form-error"
                                name="message"
                                component="small"
                            />
                            <button disabled={!isValid || !dirty || isSubmitting} type="submit">Send</button>
                        </Form>
                }
            </Formik>
        </div>
    )
}