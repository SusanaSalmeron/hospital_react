import axios from "axios";

const baseUrl = 'http://localhost:3001/v1/users/register'

const getHeaders = () => {
    return {
        headers: {
            "Content-Type": "application/json"
        }
    }
}


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

