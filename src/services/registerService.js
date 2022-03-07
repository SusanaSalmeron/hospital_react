import axios from "axios";

const baseUrl = 'http://localhost:3001/v1/users/register'


export default async function register(email, password, name, address, postalZip, region, country, phone, dob, ssnumber, company) {
    let result = []
    try {
        const body = {
            name,
            email,
            password,
            address,
            postalZip: postalZip.value,
            region: region.value,
            country,
            phone,
            dob,
            ssnumber,
            company
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        result = await axios.post(baseUrl, body, { headers })
        localStorage.setItem("username", result.data.name)
        localStorage.setItem("token", result.data.token)
        return result.data
    } catch (err) {
        const { status, data } = err.response
        if (status === 400) {
            return data.errors.reduce((accum, current) => {
                accum[current.field] = current.message
                return accum
            }, {})
        } else {
            console.log('Error', err.message)
        }
    }
}