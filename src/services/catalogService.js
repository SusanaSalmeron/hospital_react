import axios from 'axios';

const baseUrl = "http://localhost:3001/v1/catalogs/";

const getHeaders = () => {
    const token = localStorage.getItem("token")
    return {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    }
}

export async function getDiseasesForOptions() {
    let result = []
    try {
        const response = await axios.get(`${baseUrl}/diseases`, getHeaders())
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

export async function getDoctorsForOptions() {
    let result = []
    try {
        result = await axios.get(`${baseUrl}/doctors`, getHeaders())
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
