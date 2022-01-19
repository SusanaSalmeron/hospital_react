import React from 'react';
import { KeywordProvider } from '../../context/KeywordContext';
import { checkValidToken } from '../../middleware/checktoken';
import PatientList from '../PatientList';
import { useNavigate } from 'react-router-dom';


export default function PatientSearch() {
    let navigate = useNavigate()

    return (
        <KeywordProvider>
            {checkValidToken() ? <PatientList /> : navigate('/home')}
        </KeywordProvider>
    )
}