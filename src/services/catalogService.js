import axios from 'axios';

const baseUrl = "http://localhost:3001/v1/catalogs/";

const getAuthHeaders = () => {
    const token = localStorage.getItem("token")
    return {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    }
}

const getHeaders = () => {
    return {
        headers: {
            "Content-Type": "application/json"
        }
    }
}


export async function getDiseasesForOptions() {
    let result = []
    try {
        const response = await axios.get(`${baseUrl}/diseases`, getAuthHeaders())
        result = response.data.map(name => {
            return {
                value: name,
                label: name
            }
        })
    } catch (err) {
        if (err.response) {
            console.log(err.response.status)
        } else {
            console.log('Error', err.message)
        }
    }
    return result
}

export async function getDoctorsForOptions() {
    let result = []
    try {
        result = await axios.get(`${baseUrl}/doctors`, getAuthHeaders())
    } catch (err) {
        if (err.response) {
            console.log(err.response.status)
        } else {
            console.log('Error', err.message)
        }
    }
    return result.data
}

export async function getRegionsForSelect() {
    let result = {}
    try {
        const response = await axios.get("https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-spain-provincia&q=&rows=100&facet=acom_code&facet=acom_name&facet=prov_code&facet=prov_name", getHeaders())
        result = response.data.records.map(record => {
            return { value: record.fields.prov_code, label: record.fields.prov_name }
        })
    } catch (err) {
        if (err.response) {
            console.log(err.response.status)
        } else {
            console.log('Error', err.message)
        }
    }
    return result
}

export async function getPostalZipsForSelect(provCode) {
    let result = {}
    try {
        const response = await axios.get(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-spain-municipio&q=&rows=1000&facet=acom_code&facet=acom_name&facet=prov_code&facet=prov_name&refine.prov_code=${provCode}`, getHeaders())
        result = response.data.records.map(record => {
            const newLabel = `${record.fields.mun_code} - ${record.fields.mun_name}`
            return { value: record.fields.mun_code, label: newLabel }
        })
    } catch (err) {
        if (err.response) {
            console.log(err.response.status)
        } else {
            console.log('Error', err.message)
        }
    }
    return result
}

