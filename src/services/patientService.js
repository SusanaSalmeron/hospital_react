import { patients } from '../data';

/*
1) RENOMBRAR fichero del servicio: fichero para el servicio que tenga sentido: PatientService, y que contenga funciones y listo
2) NO NECESITAS AXIOS AHORA: Hacer un servicio es un wrapper ahora mismo no necesitas axios, SERVICIO != AXIOS/FETCH
Servicio es una abstraccion, o sea, encapsulado (meter algo dentro de algo) de una fuente de informacion
Tu informacion esta en un fichero asi que el Servicio, HOY leera de un fichero, y manyana usara axios o fetch o lo que sea
3) FRONTEND AGNOSTICO DEL ORIGEN DE LOS DATOS: Tu frontend, no deberia saber si es un fichero o no, solo deberia pedir datos y punto, por eso es necesario un servicio
*/

export function getPatients() {
    return patients
}

export function getPatientAnyFieldBy(keyword) {
    return patients.filter(patient => {
        return patient.diagnostico.toLowerCase() === keyword
            || patient.edad.toString() === keyword
            || patient.nombre.toLowerCase() === keyword
            || patient.numeroSS.toLowerCase() === keyword
            || patient.diagnostico.toLowerCase() === keyword
    })
}



