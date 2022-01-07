import React from 'react';
import { render, screen } from '@testing-library/react';

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
        const checkValidToken = require('../middleware/checktoken')
        jest.spyOn(checkValidToken, "checkValidToken").mockReturnValue(false)
        render(
            <PatientSearch />
        )
        expect(mockHistoryPush).toHaveBeenCalledWith('/home')
        /* screen.debug() */
    })
})