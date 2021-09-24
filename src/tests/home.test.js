import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
import { NameProvider } from '../context/NameContext';


describe('Home', () => {
    test('renders ok', () => {
        render(
            <NameProvider>
                <Home />
            </NameProvider>
        );
        expect(screen.getByText("BIENVENIDOS")).toBeInTheDocument()
        screen.debug()
        expect(screen.getByText("Hospital Buena Esperanza")).toBeVisible()
        expect(screen.getByText("Por favor, inicie sesión para realizar cualquier consulta")).toBeVisible()
        expect(screen.getByRole("textbox")).not.toBeNull()
        expect(screen.getByPlaceholderText("Introduce tu email")).toBeVisible()
    })
})