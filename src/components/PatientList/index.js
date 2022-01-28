import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import KeywordContext from '../../context/KeywordContext';
import { getAllPatientsBy } from '../../services/patientService';
import Logout from '../Logout';
import Patient from '../Patient';
import SearchBar from '../SearchBar';
import style from './patientList.module.css';
import Footer from '../Footer';



export default function PatientList() {
    const [showPatients, setShowPatients] = useState([])
    const { keyword } = useContext(KeywordContext)
    const name = localStorage.getItem("username")
    const { id } = useParams()
    const navigate = useNavigate()

    const handleAppoint = () => {
        navigate(`/${id}/appointListForDoctors`)
    }

    useEffect(() => {
        getAllPatientsBy(keyword)
            .then(response => {
                if (response.redirect) {
                    navigate('/error403')
                } else {
                    setShowPatients(response)
                }
            })
    }, [keyword, navigate])


    return (
        <>
            <div className={style.welcome}>
                <h4>Hi <span>{name}!</span></h4>
                <button type="text" onClick={handleAppoint} className={style.appointments}>Appointments</button>
                <Logout />
            </div>
            <h1 className={style.title}
            >Patient List</h1>
            <SearchBar />
            <hr className={style.line} />
            <div className={style.container}>
                {!showPatients.length ?
                    <div className={style.noData}>
                        <p>No patients</p>
                    </div> : showPatients.map((patient, i) => {
                        return <Patient
                            data={patient}
                            key={i}
                            id={patient.id}
                        />
                    }
                    )}
            </div>
            <div className={style.footer}>
                <Footer />
            </div>
        </>
    )
}

