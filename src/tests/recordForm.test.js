import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import RecordForm from '../components/RecordForm';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
/* import { getDiseasesForOptions } from '../../services/catalogService'
 */
const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
    useParams: () => ({
        id: '4'
    }),
}))

//TODO - SERVICE NOT WORKING PROPERLY
/* 
const catalogService = require('../services/catalogService')
console.log(catalogService) */
/* jest.spyOn(catalogService, 'getDiseasesForOptions').mockImplementation(() => {
    console.log('afgsdhdj')
    return jest.fn()
}) */

/* jest.mock(getDiseasesForOptions) */

describe('Record Form', () => {
    test('renders ok', () => {

        render(
            <Router>
                <RecordForm />
            </Router>
        )
        expect(screen.getByText('Send')).toBeInTheDocument()
        expect(screen.getByRole("textbox")).toBeInTheDocument()
        expect(screen.getByRole("img")).toHaveAccessibleName('logo')
        expect(screen.getAllByRole("combobox")).toHaveLength(1)
        expect(screen.getAllByRole("button")).toHaveLength(2)
        expect(screen.getByRole('link')).toHaveAccessibleName('Return')
    })
    test('goes back when Return button is clicked', () => {
        render(
            <Router>
                <RecordForm />
            </Router>
        )
        userEvent.click(screen.getByTestId('submit-button'))
        /*  expect(mockedNavigate).toHaveBeenCalled() */

    })
    test('sends a record when Send Button is clicked', async () => {
        /* const handleSubmit = jest.fn() */
        /*  jest.spyOn(catalogService, 'getDiseasesForOptions').mockImplemetation(
             () => {
                 console.log("AAAAAAAA")
                 return Promise.resolve()
                  return new Promise((res, rej) => {
                     console.log("BBBBBBBB")
                     return res(["cold", "alphaviruses", "cancer"])
                 }) 
             }
         ) */
        /* render(
            <Router>
                <RecordForm onSubmit={handleSubmit} />
            </Router>
        )
        userEvent.click(screen.getByTestId('submit-button'))
        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledWith({
                diagonostics: "cold",
                record: "hdfjklgdñfgfjhkñ"
            })
        }) */


    })
    test('should show error messages when validation is not fulfilled', () => {

    })



})