import React, { useState, useEffect } from 'react';
import style from './clinicalRecord.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { getPatientRecord } from '../../services/patientService';
import NavigateButton from '../NavigateButton';



export default function ClinicalRecord() {
    const [recordByPatient, setRecordByPatient] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getPatientRecord(id)
            .then(response => {
                if (response.redirect) {
                    navigate('/error403')
                } else {
                    setRecordByPatient(response)
                }
            })
    }, [id, navigate])
    return (
        <div className={style.form}>
            <div className={style.container}>
                <h1>Clinical Record</h1>
                <div className={style.basic_Data}>
                    <p>{recordByPatient.name}</p>
                    <p>Address: {recordByPatient.address}</p>
                    <p>Company: {recordByPatient.company}</p>
                    <p>Date of Birth: {recordByPatient.dob}</p>
                </div>

                <div className={style.clinical_Data}>
                    {recordByPatient.records ? recordByPatient.records.map(record => {
                        return <div key={record.recordId} id={record.recordId}>
                            <h4>Date: {record.date}</h4>
                            <p>Diagnostic: {record.diagnostics}</p>
                            <p>Description: {record.description}</p>

                        </div>
                    }) : null}
                </div>
                <NavigateButton
                    route={`/${id}/addrecord`}
                    label={"ADD"}
                    name={'add'}
                />
                <NavigateButton
                    route={`/${id}/search`}
                    label={"RETURN"}
                    name={'return'}
                />
            </div>
        </div>
    )
}