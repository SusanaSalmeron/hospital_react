import React from 'react';
import { render, screen, act } from '@testing-library/react';
import PatientList from '../components/PatientList';
import { KeywordProvider } from '../context/KeywordContext';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '3',
    }),
    useNavigate: () => mockedNavigate
}))

const mockedNavigate = jest.fn();


describe('PatientList', () => {
    test('renders ok when there is no patients', async () => {
        const patientService = require('../services/patientService')
        jest.spyOn(patientService, 'getAllPatientsBy').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res([])
                })
            }
        );
        await act(async () => {
            render(
                <KeywordProvider>
                    <PatientList />
                </KeywordProvider>
            );
        })
        expect(screen.getByText('Patient List')).toBeVisible()
        expect(screen.queryByText('Patient List')).toHaveClass('title')
        expect(screen.getByText('Welcome')).toBeInTheDocument()
        expect(screen.queryByText('No patients')).toBeInTheDocument()
        expect(screen.queryByText('Diagnostics')).not.toBeInTheDocument()
    })

    test('renders ok when there are patients', async () => {
        const patientService = require('../services/patientService')
        jest.spyOn(patientService, 'getAllPatientsBy').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res([
                        {
                            name: "Ana Garcia",
                            address: "Calle MArcelina",
                            postalZip: { value: "28029", label: "28029" },
                            region: { value: "28", label: "Madrid" },
                            country: "Spain",
                            email: "Ana@gmail.com",
                            phone: "+34664179177",
                            diagnostics: "cold"
                        },
                        {
                            name: "Pepe Sanchez",
                            address: "Calle Fuencarral",
                            postalZip: { value: "28004", label: "28004" },
                            region: { value: "28", label: "Madrid" },
                            country: "Spain",
                            email: "pepe@gmail.com",
                            phone: "+34664179176",
                            diagnostics: "covid-19"
                        }
                    ])
                })
            });
        await act(async () => {
            render(
                <KeywordProvider>
                    <PatientList />
                </KeywordProvider>);
        });
        expect(await screen.findByText('covid-19')).toBeInTheDocument()

    })
})