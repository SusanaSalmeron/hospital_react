import React from 'react';
import { render } from '@testing-library/react';

import PatientSearch from '../components/PatientSearch';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));

describe('PatientSearch', () => {
    test('redirects to home when there is no valid token', () => {
        const checkValidToken = require('../middleware/checktoken')
        jest.spyOn(checkValidToken, "checkValidToken").mockReturnValue(false)
        render(
            <PatientSearch />
        )
        expect(mockedNavigate).toHaveBeenCalledWith('/home')
        /* screen.debug() */
    })
})