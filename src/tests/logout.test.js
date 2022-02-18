import React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LogoutButton from '../components/LogoutButton';
import { MemoryRouter } from 'react-router-dom';

const mockedNavigate = jest.fn();
const mockedSetLoggedIn = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));


describe('Logout', () => {
    test('renders ok', () => {
        render(
            <LogoutButton setLoggedIn={mockedSetLoggedIn} />
        );
        expect(screen.queryByRole('button')).toBeInTheDocument()
        expect(mockedSetLoggedIn).not.toHaveBeenCalled()
    });

    test('click', () => {
        localStorage.setItem('token', "trusku")

        const { getByRole } = render(
            <MemoryRouter>
                <LogoutButton setLoggedIn={mockedSetLoggedIn} />
            </MemoryRouter>
        )
        expect(screen.getByText("LOGOUT")).toBeInTheDocument();
        userEvent.click(getByRole('button'))
        expect(mockedSetLoggedIn).toHaveBeenCalled()
        expect(localStorage.getItem('token')).toBeNull()
        expect(mockedNavigate).toHaveBeenCalledWith('/home');
    })
})