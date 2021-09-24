import React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Logout from '../components/Logout';
import { MemoryRouter } from 'react-router-dom'

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('Logout', () => {
    test('renders ok', () => {
        render(
            <Logout />
        );
        expect(screen.queryByRole('button')).toBeInTheDocument()
    });

    test('click', () => {
        localStorage.setItem('token', "trusku")
        const { getByRole } = render(
            <MemoryRouter>
                <Logout />
            </MemoryRouter>
        )
        /*fireEvent.click(getByRole('button')); */
        userEvent.click(getByRole('button'))
        expect(localStorage.getItem('token')).toBeNull()
        expect(mockHistoryPush).toHaveBeenCalledWith('/home');
    })
})