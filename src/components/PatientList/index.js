import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import KeywordContext from '../../context/KeywordContext';
import { getPatientAnyFieldBy, getPatients } from '../../services/patientService';
import Logout from '../Logout';
import Patient from '../Patient';
import SearchBar from '../SearchBar';
import style from './patientList.module.css';



export default function PatientList() {
    const [showPatients, setShowPatients] = useState([])
    const { keyword } = useContext(KeywordContext)
    const name = localStorage.getItem("username")
    const { id } = useParams()
    const history = useHistory()

    const handleAppoint = () => {
        history.push(`/${id}/appointListForDoctors`)
    }


    useEffect(() => {
        if (keyword && keyword !== "") {
            getPatientAnyFieldBy(keyword)
                .then(response => {
                    console.log(response)
                    setShowPatients(response)
                })
        } else {
            getPatients()
                .then(response => {

                    setShowPatients(response)
                })
        }
    }, [keyword])


    return (
        <>
            <div className={style.welcome}>
                <h4>Hola <span>{name}!</span></h4>
                <button type="text" onClick={handleAppoint} className={style.appointments}>Appointments</button>

                <Logout />

            </div>
            <h1 className={style.title}
            >Lista de Pacientes</h1>
            <SearchBar />
            <hr className={style.line} />
            <div className={style.container}>
                {!showPatients.length ?
                    <div className={style.noData}>
                        <p>No hay pacientes que cumplan la búsqueda</p>
                    </div> : showPatients.map((patient, i) => {
                        return <Patient
                            data={patient}
                            key={i}
                            id={patient.id}
                        />
                    }
                    )}
            </div>
        </>
    )
}

