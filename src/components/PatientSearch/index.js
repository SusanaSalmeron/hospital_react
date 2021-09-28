import React from 'react';
import { KeywordProvider } from '../../context/KeywordContext';
import { checkValidToken } from '../../middleware/checktoken';
import PatientList from '../PatientList';
import { useHistory } from 'react-router-dom';
import checkValidRole from '../../middleware/checkRole';

export default function PatientSearch() {
    const history = useHistory()

    return (
        <KeywordProvider>
            {checkValidToken() && checkValidRole() ? <PatientList /> : history.push('/home')}
        </KeywordProvider>
    )
}