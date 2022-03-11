import React from 'react';
import ReturnButton from '../components/ReturnButton';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))


describe('Return Button', () => {
    test('renders ok', () => {
        render(
            <Router>
                <ReturnButton />
            </Router>

        )
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
    test('calls useNavigate when clicks the button', () => {
        const mockedOnClick = jest.fn()
        render(
            <Router>
                <ReturnButton
                    onClick={mockedOnClick} />
            </Router>
        )
        const button = screen.getByRole('button')
        userEvent.click(button)
        expect(mockedNavigate).toHaveBeenCalledTimes(1)

    })
})