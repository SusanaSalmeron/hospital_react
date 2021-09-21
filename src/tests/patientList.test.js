import React from 'react';
import { render, screen } from '@testing-library/react';
import PatientList from '../components/PatientList';
import { NameProvider } from '../context/NameContext'
import { KeywordProvider } from '../context/KeywordContext';

describe('PatientList', () => {
    test('renders ok', () => {
        const patientService = require('../services/patientService')
        jest.spyOn(patientService, 'getPatients').mockReturnValue([]);

        render(
            <NameProvider >
                <KeywordProvider>
                    <PatientList />
                </KeywordProvider>
            </NameProvider>
        );
        expect(screen.getByText('Lista de Pacientes')).toBeVisible()
        expect(screen.queryByText('Lista de Pacientes')).toHaveClass('title')
        expect(screen.getByText('Hola')).toBeInTheDocument()
        expect(screen.queryByText('No hay pacientes que cumplan la búsqueda')).toBeInTheDocument()
        expect(screen.queryByText('Diagnóstico')).not.toBeInTheDocument()
    })

    test('renders patient list ok', () => {
        const patientService = require('../services/patientService')
        jest.spyOn(patientService, 'getPatients').mockReturnValue([
            {
                nombre: "Ana",
                apellido: "Garcia",
                numeroSS: "BC76896",
                edad: "34",
                diagnostico: "leucemia"
            },
            {
                nombre: "Pepe",
                apellido: "Sanchez",
                numeroSS: "PS05898",
                edad: "68",
                diagnostico: "urticaria"
            }
        ]);

        render(
            <NameProvider>
                <KeywordProvider>
                    <PatientList />
                </KeywordProvider>
            </NameProvider>
        );
        expect(screen.queryByText('Diagnóstico: urticaria')).toBeInTheDocument()
        expect(screen.queryByText('No hay pacientes que cumplan la búsqueda')).not.toBeInTheDocument()
        expect(screen.queryByText('Ana Garcia')).toHaveClass('name')
    })
})




