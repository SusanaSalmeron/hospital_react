import React from 'react';
import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import DataForm from '../components/DataForm';
import { BrowserRouter as Router } from 'react-router-dom'
import selectEvent from 'react-select-event';
import userEvent from '@testing-library/user-event'


const mockedData = {
    name: "",
    email: "",
    password: '',
    address: "",
    postalZips: [],
    region: "",
    country: "",
    phone: "",
    dob: "",
    ssnumber: "",
    company: ""
}
const mockedSubmit = jest.fn()


describe('DataForm', () => {
    afterEach(cleanup)
    test('renders ok', async () => {
        await act(async () => {
            render(
                <Router>
                    <DataForm
                        userData={mockedData}
                        isRegistering={true}
                        submit={mockedSubmit} />
                </Router>
            )
        })
        expect(screen.getAllByRole("textbox")).toHaveLength(8)
        expect(screen.getAllByRole("combobox")).toHaveLength(2)
        expect(screen.getByRole("button")).toBeInTheDocument()
        expect(screen.getByRole("link")).toBeInTheDocument()
        expect(screen.getByText("Log in")).toBeDefined()
        expect(screen.getByText("Already have an account?")).toBeTruthy()
    })
    test('change his values', async () => {
        const catalogService = require('../services/catalogService')
        let nodeContainer = null
        jest.spyOn(catalogService, 'getRegionsForSelect').mockImplementation(
            () => {
                return new Promise((res, rej) => {
                    return res([{
                        value: "28",
                        label: "Madrid"
                    }])
                })
            })
        jest.spyOn(catalogService, 'getPostalZipsForSelect').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res([{
                        value: "1",
                        label: "1 - Ciempozuelos"
                    }])
                })
            }
        )
        act(() => {
            const { container } = render(
                <Router>
                    <DataForm
                        userData={mockedData}
                        isRegistering={false}
                        submit={mockedSubmit} >
                    </DataForm>
                </Router>
            )
            nodeContainer = container
        })
        // For react-select events
        await act(async () => {
            const regionInput = nodeContainer.querySelector(`input[name="region"]`)
            await selectEvent.select(regionInput, 'Madrid')
            const postalZipInput = nodeContainer.querySelector(`input[name="postalZip"]`)
            await selectEvent.select(postalZipInput, '1 - Ciempozuelos')
        })
        //formik events
        act(() => {
            const name = screen.getByPlaceholderText("Name")
            userEvent.paste(name, 'Ann', { delay: 1 })
            const email = screen.getByPlaceholderText('Email')
            userEvent.paste(email, 'Ann@gmail.com', { delay: 1 })
            const address = screen.getByPlaceholderText('Address')
            userEvent.paste(address, "Calle de San Leopoldo 8", { delay: 10 })
            userEvent.paste(screen.getByPlaceholderText('Phone'), "+34675998844", { delay: 1 })
            userEvent.paste(screen.getByPlaceholderText('SS Number'), "132453467", { delay: 1 })
            userEvent.paste(screen.getByPlaceholderText('Insurance Company'), "Sanitas")
        })
        //react-select events
        await waitFor(() => {
            expect(screen.getByDisplayValue('Ann')).toBeInTheDocument()
            expect(screen.getByDisplayValue('Ann@gmail.com')).toBeInTheDocument()
            expect(screen.getByDisplayValue('Calle de San Leopoldo 8')).toBeInTheDocument()
            expect(screen.getByDisplayValue('+34675998844')).toBeInTheDocument()
            expect(screen.getByDisplayValue('132453467')).toBeInTheDocument()
            expect(screen.getByDisplayValue('Sanitas')).toBeInTheDocument()
            expect(screen.getByText('Madrid')).toBeInTheDocument()
            expect(screen.getByText('1 - Ciempozuelos')).toBeInTheDocument()
        })
    })
})