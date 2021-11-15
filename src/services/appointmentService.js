import axios from 'axios';

const baseUrl = "http://localhost:3001/api/patients"


const getHeaders = () => {
    const token = localStorage.getItem("token")
    return {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    }
}

export async function getUser(id) {
    let result = []
    try {
        result = await axios.get(`${baseUrl}/${id}`, getHeaders())
    } catch (err) {
        if (err.response) {
            console.log(err.response.status)
        } else if (err.request) {
            console.log(err.request)
        } else {
            console.log('Error', err.message)
        }
    }
    return result.data
}

export async function getAppointment(id) {
    let result = []
    try {
        result = await axios.get(`${baseUrl}/${id}/appointments`, getHeaders())
    } catch (err) {
        if (err.response) {
            console.log(err.response.status)
        } else if (err.request) {
            console.log(err.request)
        } else {
            console.log('Error', err.message)
        }
    }
    return result.data
}


export async function addNewAppointment(id, date, doctor) {
    let result = []
    try {
        const body = {
            pickedDate: date,
            doctor: doctor
        }
        result = await axios.post(`${baseUrl}/${id}/appointments/add`, body, getHeaders())

    } catch (err) {
        if (err.response) {
            console.log(err.response.status)
        } else if (err.request) {
            console.log(err.request)
        } else {
            console.log('Error', err.message)
        }
    }
    console.log(result)
    return result
}
