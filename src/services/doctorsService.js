import axios from 'axios';

const baseUrl = "http://localhost:3001/v1/doctors"

const getHeaders = () => {
    const token = localStorage.getItem("token")
    return {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    }
}

export async function getAppointmentsForDoctors(id) {
    let result = []
    try {
        result = await axios.get(`${baseUrl}/${id}/appointments`, getHeaders())
        return result.data
    } catch (err) {
        if (err.response && (err.response.status === 403 || err.response.status === 401)) {
            console.log(err.response.status)
            result = err.response.data
            result.redirect = true
        } else {
            console.log('Error', err.message)
            result = err.response.data
        }
    }
    return result
}
