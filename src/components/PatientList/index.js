import React, { useState, useEffect, useContext } from 'react';
import KeywordContext from '../../context/KeywordContext';
import { patients } from '../../data';
import Patient from '../Patient';
import SearchBar from '../SearchBar';
import style from './patientList.module.css';


export default function PatientList() {
    const [showPatients, setShowPatients] = useState([])

    const { keyword } = useContext(KeywordContext)

    useEffect(() => {
        let filteredPatients = []
        if (keyword && keyword !== "") {
            filteredPatients = patients.filter(patient => {
                return patient.diagnostico.toLowerCase() === keyword
                    || patient.edad.toString() === keyword
                    || patient.nombre.toLowerCase() === keyword
                    || patient.numeroSS.toLowerCase() === keyword
                    || patient.diagnostico.toLowerCase() === keyword
            })
            console.log(filteredPatients)
            setShowPatients(filteredPatients)
        } else {
            setShowPatients(patients)
        }
    }, [keyword])

    return (
        <>
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
                        />
                    }
                    )}
            </div>
        </>
    )
}