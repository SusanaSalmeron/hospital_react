import axios from "axios";

const baseUrl = 'http://localhost:3001/api/users/register'

const getHeaders = () => {
    const token = localStorage.getItem("token")
    return {
        headers: {
            "Authorization": `Bearer: ${token}`
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
            postalZip,
            region,
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
    } catch (e) {
        return { error: e.message }
    }
}

export async function getRegionsForSelect() {
    let result = {}
    try {
        const response = await axios.get("https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-spain-provincia&q=&rows=100&facet=acom_code&facet=acom_name&facet=prov_code&facet=prov_name", { getHeaders })
        result = response.data.records.map(record => {
            return { value: record.fields.prov_code, label: record.fields.prov_name }
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
    console.log(result)
    return result
}