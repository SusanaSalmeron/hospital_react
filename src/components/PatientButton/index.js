import React from 'react';
import NavigateButton from '../NavigateButton';


export default function PatientButton({ id }) {
    return (
        <NavigateButton
            id={id}
            name="patients"
            type="button"
            route={`/${id}/search`}
            label='PATIENTS'
        />

    )
}