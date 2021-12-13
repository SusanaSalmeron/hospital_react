import React from 'react';

import axios from 'axios';
import { getPostalZipsForSelect } from '../services/registerService'

jest.mock('axios');

const mockData = {
    data: {
        records: [
            {
                datasetid: "georef-spain-municipio",
                recordid: "16a04e76e516f527cd07608dae7b3f94c84453a6",
                fields: {
                    acom_name: "Comunidad de Madrid",
                    prov_code: "28",
                    mun_type: "municipality",
                    mun_name: "Majadahonda",
                    prov_name: "Madrid",
                    mun_code: "28080",
                    mun_area_code: "ESP",
                    year: "2020",
                    acom_code: "13"
                }
            },
            {
                datasetid: "georef-spain-municipio",
                recordid: "ed94b9298b955696d447ca49e15208496628bcf4",
                fields: {
                    acom_name: "Comunidad de Madrid",
                    prov_code: "28",
                    mun_type: "municipality",
                    mun_name: "Móstoles",
                    prov_name: "Madrid",
                    mun_code: "28092",
                    mun_area_code: "ESP",
                    year: "2020",
                    acom_code: "13"
                }
            },
            {
                datasetid: "georef-spain-municipio",
                recordid: "e8f8d9eabc9dd050d1515fc250d63be746a3e18b",
                fields: {
                    acom_name: "Comunidad de Madrid",
                    prov_code: "28",
                    mun_type: "municipality",
                    mun_name: "Navalcarnero",
                    prov_name: "Madrid",
                    mun_code: "28096",
                    mun_area_code: "ESP",
                    year: "2020",
                    acom_code: "13"
                }
            }
        ]
    }
}


/*
[
    {
        value: "28800", 
        label: "28800 - Majadahonda"
    },
    {
        value: "28892",
        label: "28892 - Navalcarnero"
    }
]
*/
describe('getPostalZipsForSelect', () => {
    test('Calling api', async () => {
        axios.get.mockResolvedValueOnce(mockData)
        const result = await getPostalZipsForSelect()


        expect(result).toBe(
            [
                {
                    value: "28080",
                    label: "28080 - Majadahonda"
                }
            ]
        )
    })

})