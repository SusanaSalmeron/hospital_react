import React from 'react';
import { Link } from 'react-router-dom';
import style from './patientForDoctors.module.css';




export default function PatientForDoctors({ data }) {

    return (
        <div className={style.patient}>
            <h3 className={style.name}>{data.nombre} {data.apellido}</h3>
            <p className={style.corporation}>Socidedad: {data.sociedad}</p>
            <p className={style.ssNumber}>Numero SS: {data.numeroSS}</p>
            <p className={style.age}>Edad: {data.edad}</p>
            <p className={style.diagnosis}>Diagnóstico: {data.diagnostico}</p>
            <p className={style.record}>
                <Link to="/record">Historial</Link>
            </p>
        </div>
    )
}