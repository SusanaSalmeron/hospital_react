import axios from 'axios';

const baseUrl = "http://localhost:3001/v1/patients"


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
        } else {
            console.log('Error', err.message)
        }
    }
    return result.data
}

export async function addNewAppointment(id, date, doctorId) {
    let result = []
    try {
        const body = {
            pickedDate: date,
            doctor: parseInt(doctorId)
        }
        result = await axios.post(`${baseUrl}/${id}/appointments/`, body, getHeaders())

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

export async function deleteAppointment(id, appId) {
    let result = []
    try {
        result = await axios.delete(`${baseUrl}/${id}/appointments/${appId}`, getHeaders())
    } catch (err) {
        if (err.response) {
            console.log(err.response.status)
        } else if (err.request) {
            console.log(err.request)
        } else {
            console.log('Error', err.message)
        }
    }
    return result
}

