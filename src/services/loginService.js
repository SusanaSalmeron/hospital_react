import { validateEmail } from '../middleware/emailValidation'
import { validatePassword } from '../middleware/passwordValidation'
import axios from 'axios';


const baseUrl = 'http://localhost:3001/api/users/login'

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
        console.log(result.data)
        return { id: result.data.id }
    } catch (e) {
        return { error: e.message }
    }

}
