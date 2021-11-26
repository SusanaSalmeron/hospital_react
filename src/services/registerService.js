import { validateEmail } from "../middleware/emailValidation";
import { validatePassword } from "../middleware/passwordValidation";
import axios from "axios";

const baseUrl = 'http://localhost:3001/api/users/register'

function validate(email, password, name) {
    if (!email || !password || name) throw new Error('Write your name, email and password to sign up')
    if (!validateEmail(email)) throw new Error(`${email} is not a valid email`)
    if (!validatePassword(password)) throw new Error('Password must contain 8 caracters and a number at least ')
}

export default async function register(email, password, name) {
    let result = []
    try {
        validate(email, password)
        const body = {
            name: name,
            email: email,
            password: password
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