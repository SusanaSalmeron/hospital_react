import { render, screen } from '@testing-library/react';

import React from 'react';
import Footer from '../components/Footer';
import { BrowserRouter as Router } from 'react-router-dom'



describe('Footer', () => {
    test("renders ok", async () => {
        const { container } = render(
            <Router>
                <Footer />
            </Router>
        )
        expect(screen.getAllByRole("link")).toHaveLength(4)
        expect(screen.getByAltText('logo')).toBeInTheDocument()
        const p = container.querySelector('p')
        expect(p).toContainHTML('2021 ©HopeHospital - All rights reserved')

    })
})