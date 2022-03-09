import { render, screen, act, waitFor } from '@testing-library/react';
import React from 'react';
import RecordForm from '../components/RecordForm';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
    useParams: () => ({
        id: '4'
    }),
}))

describe('Record Form', () => {
    test('renders ok', () => {
        render(
            <Router>
                <RecordForm />
            </Router>
        )
        expect(screen.getByText('SEND')).toBeInTheDocument()
        expect(screen.getByRole("textbox")).toBeInTheDocument()
        expect(screen.getByRole("img")).toHaveAccessibleName('logo')
        expect(screen.getAllByRole("combobox")).toHaveLength(1)
        expect(screen.getAllByRole("button")).toHaveLength(2)
    })
    test('change his values', async () => {

        let nodeContainer = null
        const catalogService = require('../services/catalogService')
        jest.spyOn(catalogService, 'getDiseasesForOptions').mockImplementation(
            () => {
                return new Promise((res, rej) => {
                    return res([
                        { value: "Alzheimer", label: "Alzheimer" },
                        { value: "cold", label: "cold" },
                        { value: "cancer", label: "cancer" },
                        { value: "Asthma", label: "Asthma" }
                    ])
                })
            })
        /*   const patientService = require('../services/patientService')
          jest.spyOn(patientService, 'addNewDiagnostic').mockImplementation(
              () => {
                  return new Promise((res, rej) => {
                      return res({
                          diagnostics: "cold",
                          description: "sdfiñgdjfgidfjpig"
                      })
                  })
              }) */
        act(() => {
            const { container } = render(
                <Router>
                    <RecordForm />
                </Router>
            )
            nodeContainer = container
        })
        await act(async () => {
            const diagnostic = nodeContainer.querySelector(`input[name="diagnostic"]`)
            await selectEvent.select(diagnostic, "cold")
        })
        act(() => {
            const description = screen.getByPlaceholderText('Write here')
            userEvent.paste(description, 'zxcvbnmsfdghjgyeury')
        })

        await waitFor(async () => {
            expect(screen.getByDisplayValue('cold')).toBeInTheDocument()
            expect(screen.getByDisplayValue('zxcvbnmsfdghjgyeury')).toBeInTheDocument()
        })
    })
})