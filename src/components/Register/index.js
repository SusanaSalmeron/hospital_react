import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReturnButton from '../ReturnButton';
import style from './register.module.css';
import register from '../../services/registerService'
import DataForm from '../DataForm';
import Swal from 'sweetalert2';


export default function Register() {
    const navigate = useNavigate()

    const handleSubmit = async (values, { setStatus }) => {
        const { email, password, name, address, postalZip, region, country, phone, dob, ssnumber, company } = values
        const registerResult = await register(email, password, name, address, postalZip, region, country, phone, dob, ssnumber, company)
        if (registerResult.id) {
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your account has been created successfully',
                showConfirmButton: false,
                timer: 3000
            })
            navigate(`/${registerResult.id}/appointment`)
        } else {
            setStatus(registerResult)
        }
    }

    return (
        <div className={style.container}>
            <div className={style.return}>
                <ReturnButton />
            </div>
            <div className={style.register}>
                <h1 className={style.subtitle}>Sign Up</h1>
                <DataForm
                    userData={{}}
                    isRegistering={true}
                    submit={handleSubmit}
                />
            </div>
        </div>
    )
}