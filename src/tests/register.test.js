import React from 'react';
import Register from '../components/Register';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'


describe('Register', () => {
    test('renders ok', () => {
        render(
            <Router>
                <Register />
            </Router>
        )
        expect(screen.getAllByRole("textbox")).toHaveLength(8)
        expect(screen.getAllByRole("combobox")).toHaveLength(2)
        expect(screen.getAllByRole("button")).toHaveLength(2)
        expect(screen.queryByRole("link")).toBeInTheDocument()
        expect(screen.queryByText("Log in")).not.toBeNull()
        expect(screen.queryByText("Already have an account?")).toBeTruthy()
        expect(screen.queryByPlaceholderText('Password')).toBeInTheDocument()
        expect(screen.queryByPlaceholderText('Date of Birth')).toBeInTheDocument()
    })
})