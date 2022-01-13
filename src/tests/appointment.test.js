import React from 'react';
import { render, screen } from '@testing-library/react';
import Appointment from '../components/Appointment'


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '3',
    }),
}))

describe('Appointment', () => {
    const appointment = {
        pickedDate: "30/11/2021",
        doctor: "Florin",
        id: "3",
    }

    test('renders ok', () => {
        render(
            <Appointment data={appointment} notifyCallback={() => { }} />
        )
        expect(screen.getByText("Florin")).toBeInTheDocument()
        expect(screen.getByText("30/11/2021")).toBeInTheDocument()
        expect(screen.getByRole("button")).toBeInTheDocument()
        expect(screen.queryByDisplayValue('Roger')).not.toBeInTheDocument()
    })
})