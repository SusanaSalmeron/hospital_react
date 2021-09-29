import React from 'react';
import PatientForDoctors from '../PatientForDoctors';
import PatientForAdministrative from '../PatientForAdministrative';
import checkRole from '../../middleware/checkRole'



export default function Patient({ data }) {


    return (
        <>
            {checkRole() ? <PatientForDoctors data={data} /> : <PatientForAdministrative data={data} />}
        </>



    )
}