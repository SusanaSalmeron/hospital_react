import React, { useState, useEffect, useContext } from 'react';
import KeywordContext from '../../context/KeywordContext';
import { getPatientAnyFieldBy, getPatients } from '../../services/patientService';
import Logout from '../Logout';
import Patient from '../Patient';
import SearchBar from '../SearchBar';
import style from './patientList.module.css';
import NameContext from '../../context/NameContext'

export default function PatientList() {
    const [showPatients, setShowPatients] = useState([])

    const { keyword } = useContext(KeywordContext)
    const { name } = useContext(NameContext)

    useEffect(() => {

        if (keyword && keyword !== "") {
            //Asignar a algun lado los datos!!
            const filteredPatients = getPatientAnyFieldBy(keyword)
            setShowPatients(filteredPatients)
        } else {
            setShowPatients(getPatients())
        }
    }, [keyword])

    return (
        <>
            <div className={style.nombre}>
                <h4>Hola <span>{name}!</span></h4><Logout />
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
                        />
                    }
                    )}
            </div>
        </>
    )
}