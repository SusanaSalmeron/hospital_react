import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import LoginForm from '../components/LoginForm';



describe('LoginForm', () => {
    test('calls onSubmit when click button', async () => {
        const mockedOnSubmit = jest.fn()
        const mockedError = "Error"

        const { getByPlaceholderText, getByText } = render(
            <Router>
                <LoginForm
                    onSubmit={mockedOnSubmit}
                    inputError={mockedError}
                />
            </Router >
        )
        fireEvent.change(getByPlaceholderText("Write your email"), { target: { value: 'exdream76@gmail.com' } })
        fireEvent.change(getByPlaceholderText("Write your password"), { target: { value: 'Abcd1234!' } })
        await fireEvent.submit(getByText("LOGIN"))
        expect(mockedOnSubmit).toHaveBeenCalledTimes(1)
    })
})