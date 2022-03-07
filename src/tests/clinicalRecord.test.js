import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import ClinicalRecord from '../components/ClinicalRecord';


const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
    useParams: () => ({
        id: '3'
    })
}))

describe('Clinical Record', () => {
    test('renders ok', async () => {
        const patientService = require('../services/patientService')
        jest.spyOn(patientService, 'getPatientRecord').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res({
                        name: "Peter",
                        address: "Calle San Bernardo 8",
                        company: "Adeslas",
                        dob: "09/08/1990",
                        records: [{
                            date: "15/03/2022",
                            description: "fjdsklgjlkdfiyroijhlkfdfñalskjhgdskldlfkhlkdhgflfdhklkfjalfgkj",
                            diagnostics: "Cold",
                            id: 1000,
                            recordId: 2
                        }]
                    })
                })
            });
        await act(async () => {
            render(
                <ClinicalRecord />
            )
        })
        expect(screen.getByText('Clinical Record')).toBeInTheDocument()
        expect(screen.getByText('Company: Adeslas')).toBeInTheDocument()
        expect(screen.getByText('Diagnostic: Cold')).toBeInTheDocument()
        expect(screen.getByText('Description: fjdsklgjlkdfiyroijhlkfdfñalskjhgdskldlfkhlkdhgflfdhklkfjalfgkj')).not.toBeNull()
        expect(screen.getAllByRole('button')).toHaveLength(2)
    })
})