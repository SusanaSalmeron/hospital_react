import { fireEvent, getByText, render, screen } from '@testing-library/react';

import React from 'react';
import Footer from '../components/Footer';
import { BrowserRouter as Router } from 'react-router-dom'



describe('Footer', () => {
    test("renders ok", async () => {
        render(
            <Router>
                <Footer />
            </Router>
        )
        expect(screen.getAllByRole("link")).toHaveLength(4)
        /* await fireEvent.click(getByText('Contact Us')) */

    })
})