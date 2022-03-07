import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import SubmitButton from '../components/SubmitButton'


describe('SubmitButton', () => {
    test('calls onClick', () => {
        const mockedOnClick = jest.fn()
        const mockedId = "23"
        render(
            <SubmitButton
                id={mockedId}
                name={'cancel'}
                className='cancel'
                label='CANCEL'
                onClick={mockedOnClick}
            />
        )
        const button = screen.getByRole('button')
        userEvent.click(button)
        expect(mockedOnClick).toHaveBeenCalledTimes(1)

    })
})
