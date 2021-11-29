import { render, screen } from '@testing-library/react';
import Patient from '../components/Patient'


describe('Patient', () => {
    const patientMockData = {
        'nombre': "a",
        'apellido': "b",
        'id': "c",
        'ssNumber': "AA",
        'edad': 2,
        'diagnostico': "culebreo"

    }
    test('renders ok', () => {
        render(<Patient data={patientMockData} />)
        expect(screen.queryByText(/Pepe/)).toBeNull();  // queryBy es para buscar cosas que no deberian estar
        expect(screen.getByText(/Diagnostics/)).toBeInTheDocument(); //para encontrar elementos que si están, si se usa getBy con un elemento que no está siempre va a dar error
        //existe una tercera opcion que es findBy que es para elementos asincronos


    })
})