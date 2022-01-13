import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import style from './modificationData.module.css';
import { getPatient, modifyPatientData } from '../../services/patientService';
import DataForm from '../DataForm';


export default function AccountModificationData() {
    const history = useHistory()
    const { id } = useParams()
    const [setError] = useState()
    const [patient, setPatient] = useState({})


    const handleSubmit = async (values) => {
        const { name, email, address, postalZip, region, country, phone, ssnumber, company } = values
        const newData = await modifyPatientData(id, name, email, address, postalZip, region, country, phone, ssnumber, company)
        if (!newData.error) {
            history.push(`/${id}/appointment`)
        } else {
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
                <Link to={`/${id}/account`}>
                    <button>Return</button>
                </Link>
            </div>
            <div className={style.modify}>
                <h4 className={style.subtitle}>Modify your personal data</h4>
                <DataForm
                    userData={patient}
                    isRegistering={false}
                    submit={handleSubmit}
                />
            </div>
        </>
    )
}