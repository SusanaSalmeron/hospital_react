import style from './patient.module.css';



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