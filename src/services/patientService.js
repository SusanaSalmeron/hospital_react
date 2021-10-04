
import axios from 'axios';

const baseUrl = "http://localhost:3001/api/patients"

export async function getPatient(id) {
    let result = []
    try {
        result = await axios.get(`${baseUrl}/${id}`)
    } catch (err) {
        console.log(err)
    }
    return result.data
}

export async function getPatients() {
    let result = []
    try {
        result = await axios.get(baseUrl)
    } catch (err) {
        console.log(err)
    }
    return result.data
}

export async function getPatientAnyFieldBy(keyword) {
    let result = []
    try {
        result = await axios.get(baseUrl, { params: { keyword: keyword } })
    } catch (err) {
        console.log(err)
    }
    return result.data
}

export async function getPatientRecord(id) {
    let result = []
    try {
        result = await axios.get(`${baseUrl}/${id}/record`)
    } catch (err) {
        console.log(err)
    }
    return result.data
}

export async function addNewDiagnostic(id, diagnostics, description) {
    let result = []
    try {
        const body = {
            diagnostics: diagnostics,
            description: description
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        result = await axios.post(`baseUrl/${id}/record/add`, body, { headers })
        return result
    } catch (err) {
        return err
    }

}