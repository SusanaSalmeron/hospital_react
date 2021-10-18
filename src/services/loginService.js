import { validateEmail } from '../middleware/emailValidation'
import { validatePassword } from '../middleware/passwordValidation'
import axios from 'axios';


const baseUrl = 'http://localhost:3001/api/users/login'

function validate(email, password) {
    if (!email || !password) throw new Error('introduce email y contraseña')
    if (!validateEmail(email)) throw new Error(`${email} no es un email válido`)
    if (!validatePassword(password)) throw new Error('El password tiene que contener mínimo 8 caracteres y al menos un número')
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
    } catch (e) {
        return { error: e.message }
    }

}
