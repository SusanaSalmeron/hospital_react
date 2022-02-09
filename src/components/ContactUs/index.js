import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { sendForm } from '../../services/contactUsService';
import validationFormForContactUs from '../../middleware/validationFormForContactUs';
import ReturnButton from '../ReturnButton'
import Swal from 'sweetalert2'
import logo from '../../Images/logo.png';
import style from './contactUs.module.css';


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
        <>
            <div className={style.header}>
                <div>
                    <figure>
                        <img src={logo} alt="logo" />
                    </figure>
                </div>
                <ReturnButton />
            </div>
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
                                <ErrorMessage
                                    name="name"
                                    component="small"
                                />
                                <Field
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="small"
                                />
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                <ErrorMessage
                                    name="subject"
                                    component="small"
                                />
                                <Field
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                />
                                <ErrorMessage
                                    name="message"
                                    component="small"
                                />
                                <Field
                                    id="message"
                                    name="message"
                                    as="textarea"
                                    rows="20"
                                    placeholder="Message"
                                />
                                <button disabled={!isValid || !dirty || isSubmitting} type="submit">Send</button>
                            </Form>
                    }
                </Formik>
            </div>
        </>
    )
}