import React from 'react';
import { KeywordProvider } from '../../context/KeywordContext';
import { checkValidToken } from '../../middleware/checktoken';
import PatientList from '../PatientList';
import { useHistory } from 'react-router-dom';


export default function PatientSearch() {
    const history = useHistory()

    return (
        <KeywordProvider>
            {checkValidToken() ? <PatientList /> : history.push('/home')}
        </KeywordProvider>
    )
}