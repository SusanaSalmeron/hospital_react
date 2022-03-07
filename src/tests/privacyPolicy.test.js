import React from 'react';
import { render, screen } from '@testing-library/react'
import PrivacyPolicy from '../components/PrivacyPolicy'

const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))


describe('Privacy Policy', () => {
    test('renders ok', () => {
        const { container } = render(
            <PrivacyPolicy />
        )
        expect(screen.getAllByRole('button')).toHaveLength(2)
        const h1 = container.querySelector('h1')
        expect(h1).toBeInTheDocument()
        expect(h1).toContainHTML('PRIVACY POLICY')
        const h3s = container.querySelectorAll('h3')
        expect(h3s).toHaveLength(13)
        const spans = container.querySelectorAll('span')
        expect(spans).toHaveLength(3)
        const divs = container.querySelectorAll('div')
        expect(divs).toHaveLength(3)
        const ps = container.querySelectorAll('p')
        expect(ps).toHaveLength(19)
        const uls = container.querySelectorAll('ul')
        expect(uls).toHaveLength(3)
        const lis = container.querySelectorAll('li')
        expect(lis).toHaveLength(14)
        expect(screen.getAllByText('info@hopehospital.com')).toHaveLength(3)
    })
})