import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../components/Login';
import { BrowserRouter as Router } from 'react-router-dom';

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))


describe('Login', () => {
    test('renders ok', async () => {
        render(
            <Router>
                <Login />
            </Router >
        )
        expect(screen.getByText('Welcome')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Write your password')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeDisabled()
        expect(screen.getAllByRole('link')).toHaveLength(1)

    })
    test('button is not disabled when inputs are fulfilled', async () => {
        render(
            <Router>
                <Login />
            </Router >
        )
        expect(screen.getByRole('button')).toBeDisabled()
        const mailInput = screen.getByPlaceholderText('Write your email')
        fireEvent.change(mailInput, { target: { value: 'exdream76@gmail.com' } })
        const passInput = screen.getByPlaceholderText('Write your password')
        fireEvent.change(passInput, { target: { value: 'Abcd1234!' } })
        expect(screen.getByRole('button')).not.toBeDisabled()
    })
})