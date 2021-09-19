import React from 'react';
import { KeywordProvider } from '../../context/KeywordContext';
import { checkToken } from '../../middleware/checktoken';
import PatientList from '../PatientList';
import { useHistory } from 'react-router-dom';

export default function PatientSearch() {
    const history = useHistory()

    return (
        <KeywordProvider>
            {checkToken() ? <PatientList /> : history.push('/home')}
        </KeywordProvider>
    )
}