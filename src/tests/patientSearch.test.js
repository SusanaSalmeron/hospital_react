import React from 'react';
import { render, screen } from '@testing-library/react';
import { NameProvider } from '../context/NameContext';
import PatientSearch from '../components/PatientSearch';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('PatientSearch', () => {
    test('redirects to home when there is no valid token', () => {
        const checkToken = require('../middleware/checktoken')
        jest.spyOn(checkToken, "checkToken").mockReturnValue(false)
        render(
            <NameProvider>
                <PatientSearch />
            </NameProvider>
        )
        expect(mockHistoryPush).toHaveBeenCalledWith('/home')
        screen.debug()

    })
})