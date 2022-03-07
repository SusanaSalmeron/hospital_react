import React from 'react';
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ScrollToTopButton from '../components/ScrollToTopButton'

describe('ScrollToTopButton', () => {
    const scroll = require('react-scroll')
    const animateScroll = scroll.animateScroll
    const mockedScroll = jest.spyOn(animateScroll, "scrollToTop")
    const mockedOnClick = jest.fn()
    test('a', () => {
        render(
            <ScrollToTopButton
                onClick={mockedOnClick}
            />
        )
        const button = screen.getByRole('button')
        userEvent.click(button)
        expect(mockedScroll).toHaveBeenCalledTimes(1)
    })
})