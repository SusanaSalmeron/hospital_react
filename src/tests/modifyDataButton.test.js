import React from 'react';
import ModifyDataButton from '../components/ModifyDataButton';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';


const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
    useParams: () => ({
        id: "4"
    })
}))

describe('ModifyDataButton', () => {
    test('calls useNavigate when clicks the button', () => {
        const mockedOnClick = jest.fn()
        const { container } = render(
            <Router>
                <ModifyDataButton
                    onClick={mockedOnClick}
                />
            </Router>
        )
        const button = container.querySelector('button')
        expect(button).toHaveClass("modifyButton")
        userEvent.click(button)
        expect(mockedNavigate).toHaveBeenCalledTimes(1)

    })
})