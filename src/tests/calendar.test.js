import React from 'react';
import { render } from '@testing-library/react'
import MonthCalendar from '../components/Calendar';
import { MemoryRouter } from 'react-router';

const mockHistoryPush = jest.fn();
let mockField = { name: "mock_date", value: null }

jest.mock("formik", () => {
    const originalModule = jest.requireActual('formik');
    return {
        ...originalModule,
        useFormikContext: () => ({
            push: mockHistoryPush,
            setFieldValue: jest.fn(),
        }),
        useField: () => {
            return [mockField]
        }
    }
})

describe('create calendar', () => {
    test('renders ok', () => {
        render(
            <MemoryRouter>
                <MonthCalendar name="mock_date" />
            </MemoryRouter >
        )
    })
})