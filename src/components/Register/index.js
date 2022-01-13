import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './register.module.css';
import register from '../../services/registerService'
import DataForm from '../DataForm';


export default function Register() {
    const history = useHistory()

    const handleSubmit = async (values, { setStatus }) => {
        const { email, password, name, address, postalZip, region, country, phone, dob, ssnumber, company } = values
        const registerResult = await register(email, password, name, address, postalZip, region, country, phone, dob, ssnumber, company)
        if (registerResult.id) {
            history.push(`/${registerResult.id}/appointment`)
        } else {
            setStatus(registerResult)
        }
    }

    return (
        <div className={style.register}>
            <h4 className={style.subtitle}>Sign Up</h4>
            <DataForm
                userData={{}}
                isRegistering={true}
                submit={handleSubmit}
            />
        </div>
    )
}