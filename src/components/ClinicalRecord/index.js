import React from 'react';
import style from './clinicalRecord.module.css';
import { Link } from 'react-router-dom'



export default function ClinicalRecord() {


    return (
        <>
            <div className={style.container}>
                <h1>Historial Clínico</h1>
                <hr />
                <div className={style.basicData}>
                    <p>Carlos Perez</p>
                    <p>Nºss: A876098</p>
                    <p>Sociedad: Adeslas</p>
                    <p>edad: 45 años</p>
                </div>
                <hr />
                <div className={style.clinicalData}>
                    <p>
                        Motivo de consulta: Hematemesis

                        Enfermedad actual: Paciente masculino de 53 años de edad que concurre al servicio de guardia del hospital Centenario por un cuadro caracterizado por dolor abdominal de intensidad creciente con el correr de los meses, de carácter quemante y opresivo en la región epigástrica que se irradia hacia hipocondrio izquierdo y espalda y que se alivia con la ingesta de alcalinos o antiácidos comerciales.
                        Refiere además distensión abdominal del mismo tiempo de evolución.
                        El paciente manifiesta que, dos horas previas a la consulta, padeció un cuadro de hematemesis de escasa cantidad además de referir almuerzo 3 horas antes y que la misma fue precedida de náuseas.
                        Niega fiebre, diarrea, constipación, disfagia, odinofagia, fiebre.
                        Como antecedente de jerarquía el paciente refiere ser bebedor de 1 ½ de vino tinto por día desde hace más de 30 años.
                    </p>
                    <p>
                        Motivo de consulta: Hematemesis

                        Enfermedad actual: Paciente masculino de 53 años de edad que concurre al servicio de guardia del hospital Centenario por un cuadro caracterizado por dolor abdominal de intensidad creciente con el correr de los meses, de carácter quemante y opresivo en la región epigástrica que se irradia hacia hipocondrio izquierdo y espalda y que se alivia con la ingesta de alcalinos o antiácidos comerciales.
                        Refiere además distensión abdominal del mismo tiempo de evolución.
                        El paciente manifiesta que, dos horas previas a la consulta, padeció un cuadro de hematemesis de escasa cantidad además de referir almuerzo 3 horas antes y que la misma fue precedida de náuseas.
                        Niega fiebre, diarrea, constipación, disfagia, odinofagia, fiebre.
                        Como antecedente de jerarquía el paciente refiere ser bebedor de 1 ½ de vino tinto por día desde hace más de 30 años.
                    </p>
                    <p>
                        Motivo de consulta: Hematemesis

                        Enfermedad actual: Paciente masculino de 53 años de edad que concurre al servicio de guardia del hospital Centenario por un cuadro caracterizado por dolor abdominal de intensidad creciente con el correr de los meses, de carácter quemante y opresivo en la región epigástrica que se irradia hacia hipocondrio izquierdo y espalda y que se alivia con la ingesta de alcalinos o antiácidos comerciales.
                        Refiere además distensión abdominal del mismo tiempo de evolución.
                        El paciente manifiesta que, dos horas previas a la consulta, padeció un cuadro de hematemesis de escasa cantidad además de referir almuerzo 3 horas antes y que la misma fue precedida de náuseas.
                        Niega fiebre, diarrea, constipación, disfagia, odinofagia, fiebre.
                        Como antecedente de jerarquía el paciente refiere ser bebedor de 1 ½ de vino tinto por día desde hace más de 30 años.
                    </p>
                    <p>
                        Motivo de consulta: Hematemesis

                        Enfermedad actual: Paciente masculino de 53 años de edad que concurre al servicio de guardia del hospital Centenario por un cuadro caracterizado por dolor abdominal de intensidad creciente con el correr de los meses, de carácter quemante y opresivo en la región epigástrica que se irradia hacia hipocondrio izquierdo y espalda y que se alivia con la ingesta de alcalinos o antiácidos comerciales.
                        Refiere además distensión abdominal del mismo tiempo de evolución.
                        El paciente manifiesta que, dos horas previas a la consulta, padeció un cuadro de hematemesis de escasa cantidad además de referir almuerzo 3 horas antes y que la misma fue precedida de náuseas.
                        Niega fiebre, diarrea, constipación, disfagia, odinofagia, fiebre.
                        Como antecedente de jerarquía el paciente refiere ser bebedor de 1 ½ de vino tinto por día desde hace más de 30 años.
                    </p>
                    <p>
                        Motivo de consulta: Hematemesis

                        Enfermedad actual: Paciente masculino de 53 años de edad que concurre al servicio de guardia del hospital Centenario por un cuadro caracterizado por dolor abdominal de intensidad creciente con el correr de los meses, de carácter quemante y opresivo en la región epigástrica que se irradia hacia hipocondrio izquierdo y espalda y que se alivia con la ingesta de alcalinos o antiácidos comerciales.
                        Refiere además distensión abdominal del mismo tiempo de evolución.
                        El paciente manifiesta que, dos horas previas a la consulta, padeció un cuadro de hematemesis de escasa cantidad además de referir almuerzo 3 horas antes y que la misma fue precedida de náuseas.
                        Niega fiebre, diarrea, constipación, disfagia, odinofagia, fiebre.
                        Como antecedente de jerarquía el paciente refiere ser bebedor de 1 ½ de vino tinto por día desde hace más de 30 años.
                    </p>
                    <button>
                        <Link to="/addrecord"> Añadir al historial</Link>
                    </button>
                </div>
            </div>
        </>

    )
}