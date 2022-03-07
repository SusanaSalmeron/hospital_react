import React from 'react';
import { render, screen } from '@testing-library/react'
import LegalNotice from '../components/LegalNotice'

const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))


describe('Legal Notice', () => {
    test('renders ok', () => {
        const { container } = render(
            <LegalNotice />
        )
        expect(screen.getAllByRole('button')).toHaveLength(2)
        const h1 = container.querySelector('h1')
        expect(h1).toBeInTheDocument()
        expect(h1).toContainHTML('LEGAL NOTICE')
        const h3s = container.querySelectorAll('h3')
        expect(h3s).toHaveLength(16)
        const spans = container.querySelectorAll('span')
        expect(spans).toHaveLength(6)
        const divs = container.querySelectorAll('div')
        expect(divs).toHaveLength(3)
        const ps = container.querySelectorAll('p')
        expect(ps).toHaveLength(30)
        const uls = container.querySelectorAll('ul')
        expect(uls).toHaveLength(2)
        const lis = container.querySelectorAll('li')
        expect(lis).toHaveLength(13)
        expect(screen.getAllByText('info@hopehospital.com')).toHaveLength(1)
    })
})