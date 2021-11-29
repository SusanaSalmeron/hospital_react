import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PatientList from '../components/PatientList';
/* import { NameProvider } from '../context/NameContext' */
import { KeywordProvider } from '../context/KeywordContext';

describe('PatientList', () => {
    /* test('renders ok when there is no patients', async () => {
        const patientService = require('../services/patientService')
        jest.spyOn(patientService, 'getPatients').mockReturnValue([]);

        render(
            <KeywordProvider>
                <PatientList />
            </KeywordProvider>
        );
        await waitFor(() => {
            expect(screen.getByText('Lista de Pacientes')).toBeVisible()
            expect(screen.queryByText('Lista de Pacientes')).toHaveClass('title')
            expect(screen.getByText('Hola')).toBeInTheDocument()
            expect(screen.queryByText('No hay pacientes que cumplan la búsqueda')).toBeInTheDocument()
            expect(screen.queryByText('Diagnóstico')).not.toBeInTheDocument()

        })

    }) */

    test('renders ok when there are patients', async () => {
        const patientService = require('../services/patientService')
        jest.spyOn(patientService, 'getPatients').mockImplementation(
            () => {
                return new Promise((res, rej) => {
                    console.log('QQQQQQQQQQQQQQQQQQQQQQQQQ')

                    return [
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
                    ]
                }
                )
            });

        render(
            <KeywordProvider>
                <PatientList />
            </KeywordProvider>
        );
        await waitFor(() => {
            expect(screen.getByText('Diagnostics: urticaria')).toBeInTheDocument()
            expect(screen.getByText('Ana Garcia')).toHaveClass('name')
        })

    })
})




