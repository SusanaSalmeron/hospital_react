import React from 'react';
import { render } from 'react-dom';
import NewAppointment from '../components/NewAppointment';

/* jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '4'
    }),
})) */


describe('New Appointment', () => {
    test('calls onSubmit when clicks Send button',
        async () => {
            /* const catalogService = require('../services/catalogService')
       jest.spyOn(catalogService, 'getDoctorsForOptions').mockImplementation(
           () => {
               return new Promise((res, rej) => {
                   return res([{
                       id: 1,
                       name: "Jennifer Smith",
                       email: "Jen@faHospital.com",
                       speciality: "Oftalmology",
                       photo: "https://images.pexels.com/photos/7580257/pexels-photo-7580257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                   }])
               })
           }
       )

       render(
           <NewAppointment />
       )
   })
*/

        })
})