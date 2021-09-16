import React from 'react';
import { KeywordProvider } from '../../context/KeywordContext';
import PatientList from '../PatientList';


export default function PatientSearch() {

    return (
        <KeywordProvider>
            <PatientList />
        </KeywordProvider>
    )
}