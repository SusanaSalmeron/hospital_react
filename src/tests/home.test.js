import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';
import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';
import userEvent from '@testing-library/user-event';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));


describe('Home', () => {
    test('renders ok', () => {
        render(
            <Home />
        );
        expect(screen.getByText("OUR MEDICAL TEAM")).toBeInTheDocument()
        expect(screen.getAllByRole("button")).not.toBeNull()
        expect(screen.getAllByRole('img')).toHaveLength(6)

    })
    test('shows login and sign up button when there is no token', () => {
        localStorage.removeItem('token')

        render(
            <Home />

        );
        expect(screen.getByText('LOGIN')).toBeInTheDocument()
        expect(screen.getByText('SIGN UP')).toBeInTheDocument()
    })
    test('shows logout button when there is token', () => {
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue("AAAA")
        jest.spyOn(jwt, 'decode').mockReturnValue({ id: 1, expiration: dayjs() + 10000 })
        render(
            <Home />
        )
        expect(screen.queryByText('LOGOUT')).toBeInTheDocument()
    })
    test('shows appointment button when user is a patient', () => {
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue("AAAA")
        jest.spyOn(jwt, 'decode').mockReturnValue({ id: 1, expiration: dayjs() + 10000, role: "patient" })
        render(
            <Home />
        )
        expect(screen.queryByText('MY APPOINTMENTS')).toBeInTheDocument()
        expect(screen.queryByText('SIGN UP')).toBeNull()
    })
    test('shows patients button when user is a doctor', () => {
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue("AAAA")
        jest.spyOn(jwt, 'decode').mockReturnValue({ id: 1, expiration: dayjs() + 10000, role: "sanitario" })
        render(
            <Home />
        )
        expect(screen.queryByText('PATIENTS')).toBeInTheDocument()
        expect(screen.queryByText('SIGN UP')).toBeNull()
    })
    test('user clicks Go to top button', () => {
        const { getByText } = render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        userEvent.click(getByText("Go to top"))
    })

})