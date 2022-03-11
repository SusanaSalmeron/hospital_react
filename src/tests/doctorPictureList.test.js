import React from 'react';
import DoctorPictureList from '../components/DoctorPictureList';
import { render, screen, act } from '@testing-library/react';


describe(('DoctorPictureList'), () => {
    test('renders ok', async () => {
        /* const catalogService = require('../services/catalogService')
        jest.spyOn(catalogService, 'getDoctorsForOptions').mockImplementation(
            () => {
                return new Promise((res, rej) => {
                    return res([{
                        id: 1,
                        name: "Linda Lewis",
                        email: "velit.eu.sem@ipsum.co.uk",
                        speciality: "gynecology",
                        photo: "https://images.pexels.com/photos/7580257/pexels-photo-7580257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    },
                    {
                        id: 2,
                        name: "Joseph Castillo",
                        email: "nec.eleifend@tempuslorem.net",
                        speciality: "surgery",
                        photo: "https://images.pexels.com/photos/6303556/pexels-photo-6303556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    }
                    ])
                })
            }
        )
        await act(async () => {
            render(
                <DoctorPictureList />
            )
        })

        expect(screen.getByText('Joseph Castillo')).toBeInTheDocument()
        expect(screen.getByText('Linda Lewis')).toBeInTheDocument()
        expect(screen.getAllByRole('img')).toHaveLength(2) */
    })
})