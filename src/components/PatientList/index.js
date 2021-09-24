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
    /* const nameSpan = useRef(name);
    nameSpan.current = name */

    useEffect(() => {
        if (keyword && keyword !== "") {
            async function fetchPatients() {
                let response = await getPatientAnyFieldBy(keyword)
                setShowPatients(response)
                console.log(response)
            }
            fetchPatients()
        } else {
            async function fetchPatients() {
                let response = await getPatients() //Esto devuelve un array de pacientes
                setShowPatients(response) //seteas un array en el estado
            }
            fetchPatients()
        }
    }, [keyword])


    return (
        <>
            <div className={style.welcome}>
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

