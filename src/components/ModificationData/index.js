import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReturnButton from '../ReturnButton';
import style from './modificationData.module.css';
import { getPatient, modifyPatientData } from '../../services/patientService';
import DataForm from '../DataForm';
import Swal from 'sweetalert2'


export default function AccountModificationData() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [setError] = useState()
    const [patient, setPatient] = useState({})


    const handleSubmit = async (values) => {
        const { name, email, address, postalZip, region, country, phone, ssnumber, company } = values
        const newData = await modifyPatientData(id, name, email, address, postalZip, region, country, phone, ssnumber, company)
        if (!newData.error) {
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your data has been changed',
                showConfirmButton: false,
                timer: 2000
            })
            navigate(`/${id}/appointment`)
        } else {
            await Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'There is something wrong...',
                showConfirmButton: false,
                timer: 2000
            })
            setError(newData.error)
        }
    }
    useEffect(() => {
        getPatient(id)
            .then(response => {
                try {
                    setPatient(response)
                } catch (err) {
                    console.log(err)
                }
            })
    }, [id])

    return (
        <>
            <div className={style.return}>
                <ReturnButton />
            </div>
            <div className={style.modify}>
                <h1 className={style.subtitle}>Modify your personal data</h1>
                <DataForm
                    userData={patient}
                    isRegistering={false}
                    submit={handleSubmit}
                />
            </div>
        </>
    )
}