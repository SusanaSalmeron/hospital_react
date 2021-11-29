import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';



describe('Home', () => {
    test('renders ok', () => {
        render(
            <Home />
        );
        expect(screen.getByText("WELCOME")).toBeInTheDocument()
        expect(screen.getByText("NEW HOPE HOSPITAL")).toBeVisible()
        expect(screen.queryByText("Por favor, inicie sesión para realizar cualquier consulta")).not.toBeInTheDocument()
        expect(screen.queryByPlaceholderText("Introduce tu email")).toBeNull()
        expect(screen.getAllByRole("button")).not.toBeNull()
    })
})