import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';



describe('Home', () => {
    test('renders ok', () => {
        render(
            <Home />
        );
        expect(screen.getByText("BIENVENIDOS")).toBeInTheDocument()
        expect(screen.getByText("Hospital Buena Esperanza")).toBeVisible()
        expect(screen.queryByText("Por favor, inicie sesión para realizar cualquier consulta")).not.toBeInTheDocument()
        expect(screen.getByRole("button")).not.toBeNull()
        expect(screen.queryByPlaceholderText("Introduce tu email")).toBeNull()
    })
})