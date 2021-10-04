import React, { useState, useEffect } from 'react';
import style from './clinicalRecord.module.css';
import { Link, useParams } from 'react-router-dom';
import { getPatientRecord } from '../../services/patientService';



export default function ClinicalRecord() {
    const [recordByPatient, setRecordByPatient] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getPatientRecord(id)
            .then(response => {
                setRecordByPatient(response)
            })
    }, [id])
    return (
        <>
            <div className={style.container}>
                <h1>Clinical Record</h1>
                <hr />
                <div className={style.basicData}>
                    <p>{recordByPatient.name}</p>
                    <p>Address: {recordByPatient.address}</p>
                    <p>Company: {recordByPatient.company}</p>
                    <p>Date of Birth: {recordByPatient.dob}</p>
                </div>
                <hr />
                <div className={style.clinicalData}>
                    <p>
                        {recordByPatient.description}
                    </p>
                    <button>
                        <Link to={`/${id}/addrecord`}>
                            Add
                        </Link>
                    </button>
                    <button>
                        <Link to="/search">
                            Return
                        </Link>
                    </button>
                </div>
            </div>
        </>

    )
}