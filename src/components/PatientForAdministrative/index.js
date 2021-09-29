import React from 'react';
import style from './patientForAdministrative.module.css';


export default function PatientForDoctors({ data }) {
    return (
        <div className={style.patient}>
            <h3 className={style.name}>{data.nombre} {data.apellido}</h3>
            <p className={style.corporation}>Socidedad: {data.sociedad}</p>
            <p className={style.ssNumber}>Numero SS: {data.numeroSS}</p>
            <p className={style.age}>Edad: {data.edad}</p>
            <p className={style.address}>Dirección: {data.direccion} {data.ciudad} {data.codigo_postal}</p>
            <p className={style.phone}>Dirección: {data.telefono}</p>
        </div>
    )
}