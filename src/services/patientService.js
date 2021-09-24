
import axios from 'axios';

const baseUrl = "http://localhost:3001/api/patients"

export async function getPatients() {
    let result = []
    try {
        result = await axios.get(baseUrl)
    } catch (err) {
        console.log(err)
    }
    /* console.log(result.data) */
    return result.data
}

export async function getPatientAnyFieldBy(keyword) {
    let result = []
    try {
        result = await axios.get(baseUrl, { params: { keyword: keyword } })
    } catch (err) {
        console.log(err)
    }
    /* console.log(result.data) */
    return result.data
}