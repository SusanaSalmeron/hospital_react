import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReturnButton from '../ReturnButton';
import style from './register.module.css';
import register from '../../services/registerService'
import DataForm from '../DataForm';


export default function Register() {
    const navigate = useNavigate()

    const handleSubmit = async (values, { setStatus }) => {
        const { email, password, name, address, postalZip, region, country, phone, dob, ssnumber, company } = values
        const registerResult = await register(email, password, name, address, postalZip, region, country, phone, dob, ssnumber, company)
        if (registerResult.id) {
            navigate(`/${registerResult.id}/appointment`)
        } else {
            setStatus(registerResult)
        }
    }

    return (
        <>
            <div className={style.return}>
                <ReturnButton />
            </div>
            <div className={style.register}>
                <h4 className={style.subtitle}>Sign Up</h4>
                <DataForm
                    userData={{}}
                    isRegistering={true}
                    submit={handleSubmit}
                />
            </div>
        </>
    )
}