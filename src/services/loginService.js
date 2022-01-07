import { validateEmail } from '../middleware/emailValidation'
import { validatePassword } from '../middleware/passwordValidation'
import axios from 'axios';


const baseUrl = 'http://localhost:3001/v1/users/login'

function validate(email, password) {
    if (!email || !password) throw new Error('Write your email and password to log in')
    if (!validateEmail(email)) throw new Error(`${email} is not a valid email`)
    if (!validatePassword(password)) throw new Error('Password must contain 8 caracters and a number at least')
}

export default async function login(email, password) {
    let result = []
    try {
        validate(email, password)
        const body = {
            email: email,
            password: password
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        result = await axios.post(baseUrl, body, { headers })
        localStorage.setItem("username", result.data.name)
        localStorage.setItem("token", result.data.token)
        return { id: result.data.id }
    } catch (err) {
        if (err.response) {
            const { status, data } = err.response
            if (status === 404 || status === 401) {
                return data
            }
            else {
                return {
                    error: "Unexpected error, try again later"
                }
            }
        }
        else {
            console.log('Error', err.message)
            return { error: err.message }
        }
    }
}
