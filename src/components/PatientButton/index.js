import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function PatientButton({ id }) {
    const navigate = useNavigate()
    const handleButtonPatient = () => {
        navigate(`/${id}/search`)
    }


    return (
        <button
            id={id}
            name="patients"
            onClick={handleButtonPatient}
            type="button" >
            PATIENTS
        </button>
    )
}