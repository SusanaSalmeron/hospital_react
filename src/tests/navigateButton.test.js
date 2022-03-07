import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NavigateButton from '../components/NavigateButton'

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))

describe('NavigateButton', () => {
    test('calls onClick', () => {
        const mockedId = "23"
        render(
            <Router>
                <NavigateButton
                    id={mockedId}
                    name={'cancel'}
                    className='cancel'
                    label='CANCEL'
                />
            </Router>
        )
        const button = screen.getByRole('button')
        userEvent.click(button)
        expect(mockedNavigate).toHaveBeenCalledTimes(1)
    })
})
