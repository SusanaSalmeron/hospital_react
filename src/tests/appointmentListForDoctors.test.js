import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import AppointListForDoctors from '../components/AppointListForDoctors';

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
    useParams: () => ({
        Id: 4
    })
}))


describe('AppointmentListForDoctors', () => {
    test('renders ok', async () => {
        let nodeContainer = null
        const doctorService = require('../services/doctorsService')
        jest.spyOn(doctorService, 'getAppointmentsForDoctors').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res([{
                        id: 3,
                        doctorId: 4,
                        patientId: 1,
                        patientName: "James Smith",
                        pickedDate: "15/03/2022"
                    }])
                })
            })
        await act(async () => {
            const { container } = render(
                <AppointListForDoctors />
            )
            nodeContainer = container
        })

        await waitFor(async () => {
            expect(screen.getAllByRole('button')).toHaveLength(2)
            const h2 = nodeContainer.querySelector('h2')
            expect(h2).toContainHTML('- Next Appointments -')
            expect(screen.queryByText('No appointments')).not.toBeInTheDocument()
        })
    })
})