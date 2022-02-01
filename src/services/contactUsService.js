import axios from 'axios';

const baseUrl = "http://localhost:3001/v1/managements";

export async function sendForm(name, email, subject, message) {
    try {
        const body = {
            name,
            email,
            subject,
            message
        }
        await axios.post(`${baseUrl}/contact`, body)
        return true
    } catch (err) {
        if (err.response) {
            console.log(err.response.status)
        } else {
            console.log('Error', err.message)
        }
        return false
    }
}