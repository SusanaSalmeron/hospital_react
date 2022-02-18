import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllPatientsBy } from '../../services/patientService';
import KeywordContext from '../../context/KeywordContext';
import LogoutButton from '../LogoutButton';
import Patient from '../Patient';
import SearchBar from '../SearchBar';
import ScrollToTopButton from '../ScrollToTopButton'
import logo from '../../Images/logo.png'
import style from './patientList.module.css';



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
                <div className={style.header}>
                    <figure className={style.logo}>
                        <img src={logo} alt="logo" />
                    </figure>
                    <h4>Welcome <span>{name}!</span></h4>
                    <button type="text" onClick={handleAppoint} className={style.appointments}>Appointments</button>
                    <LogoutButton setLoggedIn={0} />
                </div>
            </div>
            <h1 className={style.title}
            >Patient List</h1>
            <SearchBar />
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
            <ScrollToTopButton />
        </>
    )
}

