
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

export async function getPatient(id) {
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

export async function getPatients() {
    let result = []
    try {
        result = await axios.get(baseUrl, getHeaders())
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
            ...getHeaders(),
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
        result = await axios.get(`${baseUrl}/${id}/record`, getHeaders())
        console.log(result.data)
        return result.data
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

export async function addNewDiagnostic(id, diagnostics, description) {
    let result = []
    try {
        const body = {
            diagnostics: diagnostics,
            description: description,
        }
        result = await axios.post(`${baseUrl}/${id}/record/add`, body, getHeaders())
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

export async function getDiseasesForOptions() {
    let result = []
    try {
        const response = await axios.get(`${baseUrl}/record/diseases`, getHeaders())
        result = response.data.map(name => {
            return {
                value: name,
                label: name
            }
        })
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


export async function modifyPatientData(id, name, email, address, postalZip, region, country, phone, ssnumber, company) {
    let result = []
    try {
        const body = {
            name,
            email,
            address,
            postalZip,
            region,
            country,
            phone,
            ssnumber,
            company
        }
        result = await axios.put(`${baseUrl}/${id}/`, body, getHeaders())
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