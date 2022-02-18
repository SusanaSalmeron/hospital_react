import React from 'react';
import { render, screen } from '@testing-library/react';
import Patient from '../components/Patient'

const mockedNavigate = jest.fn();


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));


describe('Patient', () => {
    const patientMockData = {
        'name': "Peter",
        'address': "Calle Fuencarral 9",
        'postalZip': { value: "28004", label: "28004" },
        'region': { value: "28", label: "Madrid" },
        'country': "Spain",
        'id': "6",
        'email': "sfhgñlkdsnfgl@gmail.com",
        'phone': "34998654321",
        'ssNumber': "A453465786",
        'diagnostics': "covid-19"

    }
    test('renders ok', () => {
        render(<Patient data={patientMockData} />)
        expect(screen.queryByText(/Pepe/)).toBeNull();  // queryBy es para buscar cosas que no deberian estar
        expect(screen.getByText(/Diagnostics/)).toBeInTheDocument(); //para encontrar elementos que si están, si se usa getBy con un elemento que no está siempre va a dar error
        //existe una tercera opcion que es findBy que es para elementos asincronos


    })
})