import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import AppointmentList from '../components/AppointmentList'


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: 4
    })
}))

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => jest.fn()
}))

describe('AppoinmentList', () => {
    test('renders ok', async () => {
        let nodeContainer = null
        const appointmentService = require('../services/appointmentService')
        jest.spyOn(appointmentService, 'getAppointment').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res([
                        {
                            id: 4,
                            pickedDate: "15/03/2022",
                            doctor: "John Smith",
                            doctorId: 1
                        },
                        {
                            id: 5,
                            pickedDate: "25/03/2022",
                            doctor: "Jennifer Olsen",
                            doctorId: 2
                        }
                    ])
                })
            }
        )
        await act(async () => {
            const { container } = render(
                <AppointmentList />
            )
            nodeContainer = container
        })
        await waitFor(async () => {
            const h2 = nodeContainer.querySelector(`h2`)
            expect(h2).toContainHTML("-You can choose or cancel your appointments-")
            const h3 = nodeContainer.querySelector(`h3`)
            expect(h3).toContainHTML("Next Appointments")
        })
    })
    test('renders all the appointments', async () => {
        let nodeContainer = null
        const appointmentService = require('../services/appointmentService')
        jest.spyOn(appointmentService, 'getAppointment').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res([
                        {
                            id: 4,
                            pickedDate: "15/03/2022",
                            doctor: "John Smith",
                            doctorId: 1
                        },
                        {
                            id: 5,
                            pickedDate: "25/03/2022",
                            doctor: "Jennifer Olsen",
                            doctorId: 2
                        }
                    ])
                })
            }
        )
        await act(async () => {
            const { container } = render(
                <AppointmentList />
            )
            nodeContainer = container
        })
        await waitFor(async () => {
            const showAppoint = nodeContainer.querySelector(`div[class="showAppoint"]`)
            expect(showAppoint).toBeInTheDocument()
        })
        expect(screen.getByText("John Smith")).toBeInTheDocument()
        expect(screen.getByText("Jennifer Olsen")).toBeInTheDocument()
        expect(screen.getAllByRole('button')).toHaveLength(2)
    })
    test('renders message "No appointments" when the patient has not appointments', async () => {
        let nodeContainer = null
        const appointmentService = require('../services/appointmentService')
        jest.spyOn(appointmentService, 'getAppointment').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res([])
                })
            }
        )
        await act(async () => {
            const { container } = render(
                <AppointmentList />
            )
            nodeContainer = container
        })
        await waitFor(async () => {
            const noApp = nodeContainer.querySelector(`p[class="noApp"]`)
            expect(noApp).toBeInTheDocument()
        })
        expect(screen.queryByText("John Smith")).not.toBeInTheDocument()
        expect(screen.queryByText("Jennifer Olsen")).not.toBeInTheDocument()
        expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })
})