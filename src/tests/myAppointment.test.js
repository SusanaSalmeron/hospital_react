import React from 'react';
import { render, screen } from '@testing-library/react';
import MyAppointment from '../components/MyAppointment';
import { BrowserRouter as Router } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    usePararms: () => ({
        id: '4'
    })
}))

describe('myAppointment', () => {
    test('renders ok', async () => {
        const { container } = render(
            <Router>
                <MyAppointment />
            </Router>
        )
        const logoutButton = container.querySelector(`button[name="Logout"]`)
        expect(logoutButton).toBeInTheDocument()
        const modifyButton = container.querySelector(`button[class="modifyButton"]`)
        expect(modifyButton).toBeInTheDocument()
        expect(screen.getByRole('img')).toBeDefined()
        const newAppointment = container.querySelector(`div[class="appointment"]`)
        expect(newAppointment).toBeTruthy()
        const list = container.querySelector(`div[class="list"]`)
        expect(list).not.toBeNull()
    })
})