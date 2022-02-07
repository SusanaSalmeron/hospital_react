import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));


describe('Home', () => {
    test('renders ok', () => {
        render(
            <Home />
        );
        expect(screen.getByText("OUR MEDICAL TEAM")).toBeInTheDocument()
        expect(screen.getAllByRole("button")).not.toBeNull()
        expect(screen.getAllByRole('img')).toBeDefined()

    })
})