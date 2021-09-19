import React from 'react';
import style from './patient.module.css';

/*
Dentro de Patient no vas a usar el servicio porque no tienes datos relacionados con ids, es decir
los pacientes no tienen id, solo tienen datos reales (a los IDs numericos se les llama datos sinteticos porque no
    quieren decir nada, son como "fabricados").  Por eso no necesitas un useEffect, vale? 
*/


export default function Patient({ data }) {

    return (
        <div className={style.patient}>
            <h3 className={style.name}>{data.nombre} {data.apellido}</h3>
            <p>{data.id}</p>
            <p className={style.ssNumber}>Numero SS: {data.numeroSS}</p>
            <p className={style.age}>Edad: {data.edad}</p>
            <p className={style.diagnosis}>Diagnóstico: {data.diagnostico}</p>
        </div>
    )
}