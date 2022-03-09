import React from 'react';
import DoctorPicture from '../components/DoctorPicture';
import { render, screen } from '@testing-library/react';

let randomKey = Math.floor(Math.random() * 5)

describe('DoctorPicture', () => {
    const mockedData = {
        id: 1,
        name: "Karly Sosa",
        email: "velit.eu.sem@ipsum.co.uk",
        speciality: "gynecology",
        photo: "https://images.pexels.com/photos/7580257/pexels-photo-7580257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
    test('renders ok', async () => {
        render(
            <DoctorPicture
                data={mockedData}
                key={randomKey}
            />
        )
        expect(screen.queryByAltText('photo_doctor')).toBeInTheDocument()
        expect(screen.getByText('Karly Sosa')).toBeInTheDocument()
    })
})