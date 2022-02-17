import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function AppointmentsButton({ id }) {
    const navigate = useNavigate()
    const handleButtonAppoints = () => {
        navigate(`/${id}/appointment`)
    }

    return (
        <button id={id} onClick={handleButtonAppoints} name="appoints">
            MY APPOINTMENTS
        </button>
    )
}