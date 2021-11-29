import React from 'react';
import { render } from '@testing-library/react'
import MonthCalendar from '../components/Calendar';
import { MemoryRouter } from 'react-router';


const mockHistoryPush = jest.fn();

jest.mock('formik', () => ({
    ...jest.requireActual('formik'),
    useFormikContext: () => ({
        push: mockHistoryPush,
    }),
}));

describe('create calendar', () => {
    render(
        <MemoryRouter>
            <MonthCalendar />
        </MemoryRouter>

    )
})