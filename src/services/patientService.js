
import axios from 'axios';

const baseUrl = "http://localhost:3001/api/patients"
const token = localStorage.getItem("token")
const headers = {
    headers: {
        "Authorization": `Bearer: ${token}`
    }
}

export async function getPatient(id) {
    let result = []
    try {
        result = await axios.get(`${baseUrl}/${id}`, headers)
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

export async function getPatients() {
    let result = []
    try {
        result = await axios.get(baseUrl, headers)
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

export async function getPatientAnyFieldBy(keyword) {
    let result = []
    try {
        const requestParams = {
            ...headers,
            ...{ params: { keyword: keyword } }
        }
        result = await axios.get(baseUrl, requestParams)
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

export async function getPatientRecord(id) {
    let result = []
    try {
        result = await axios.get(`${baseUrl}/${id}/record`, headers)
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

export async function addNewDiagnostic(id, diagnostics, description) {
    let result = []
    console.log(id)
    console.log(diagnostics)
    console.log(description)
    try {
        const body = {
            diagnostics: diagnostics,
            description: description,
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        result = await axios.post(`${baseUrl}/${id}/record/add`, body, { headers })
        return result
    } catch (err) {
        if (err.response) {
            console.log(err.response.status)
        } else if (err.request) {
            console.log(err.request)
        } else {
            console.log('Error', err.message)
        }
    }

}