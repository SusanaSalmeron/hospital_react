import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PatientList from '../components/PatientList';
/* import { NameProvider } from '../context/NameContext' */
import { KeywordProvider } from '../context/KeywordContext';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '3',
    }),
}))

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
        jest.spyOn(patientService, 'getAllPatientsBy').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res([
                        {
                            name: "Ana Garcia",
                            address: "Calle MArcelina",
                            postalZip: "28029",
                            region: "Madrid",
                            country: "Spain",
                            email: "Ana@gmail.com",
                            phone: "+34664179177",
                            diagnostics: "cold"
                        },
                        {
                            name: "Pepe Sanchez",
                            address: "Calle Fuencarral",
                            postalZip: "28004",
                            region: "Madrid",
                            country: "Spain",
                            email: "pepe@gmail.com",
                            phone: "+34664179176",
                            diagnostics: "covid-19"
                        }
                    ])
                }
                )
            });

        render(
            <KeywordProvider>
                <PatientList />
            </KeywordProvider>
        );
        await waitFor(() => {
            expect(screen.getByText('Diagnostics: covid-19')).toBeInTheDocument()
        })

    })
})




