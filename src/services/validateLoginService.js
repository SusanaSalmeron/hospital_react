import { access } from '../data/access';
import { validateEmail } from '../middleware/emailValidation'


export function ValidateLogin(email, password) {
    if (!validateEmail(email)) throw new Error(`${email} is not a valid email`)
    if (!password.trim().length) throw new Error(`password ${password} is empty or blank`)
}