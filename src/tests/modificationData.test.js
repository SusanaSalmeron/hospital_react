import React from 'react';
import ModificationData from '../components/ModificationData';
import { render, act, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
/* import axios from 'axios'; */

/* const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
    useParams: () => ({
        id: "4"
    })
})) */
jest.mock('axios')

describe('ModificationData', () => {
    test('renders ok', async () => {
        const patientService = require('../services/patientService')
        jest.spyOn(patientService, 'getPatient').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res({
                        name: "Samantha Stuart",
                        address: "Calle del Olvido, 3",
                        email: "sam33@gmail.com",
                        postalZip: "28020",
                        region: "Madrid",
                        country: "Spain",
                        phone: "+34667543298",
                        id: 8,
                        dob: "01/01/1990",
                        ssnumber: "123455",
                        company: "Adeslas",
                        diagnostics: "cold"
                    })
                })
            })
        /* axios.put('http://localhost:3001/v1/patients/4', {
            name: "Samantha Stuart",
            address: "Calle del Olvido, 3",
            email: "sam33@gmail.com",
            postalZip: "28020",
            region: "Madrid",
            country: "Spain",
            phone: "+34667543298",
            ssnumber: "123455",
            company: "Sanitas"
        }) */
        const catalogService = require('../services/catalogService')
        jest.spyOn(catalogService, 'getRegionsForSelect').mockImplementation(
            () => {
                return new Promise((res, rej) => {
                    return res([{
                        value: "28",
                        label: "Madrid"
                    }])
                })
            })
        await act(async () => {
            render(
                <Router>
                    <ModificationData />
                </Router>
            )
        })
        expect(screen.getAllByRole("textbox")).toHaveLength(7)
        expect(screen.getAllByRole("combobox")).toHaveLength(2)
        expect(screen.getAllByRole("button")).toHaveLength(2)
        expect(screen.queryByRole("link")).not.toBeInTheDocument()
        expect(screen.queryByText("Log in")).toBeNull()
        expect(screen.queryByText("Already have an account?")).toBeFalsy()
        expect(screen.queryByPlaceholderText('Password')).not.toBeInTheDocument()
        expect(screen.queryByPlaceholderText('Date of Birth')).not.toBeInTheDocument()
    })
})