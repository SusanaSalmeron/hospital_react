import { employees } from '../data/access';
import { validateEmail } from '../middleware/emailValidation'
import { validatePassword } from '../middleware/passwordValidation'



export function validateLogin(email, password) {
    const foundEmployee = employees.filter(employee =>
        employee.email === email && employee.password === password
    )

    if (!email || !password) throw new Error('introduce email y contraseña')
    if (!validateEmail(email)) throw new Error(`${email} no es un email válido`)
    if (!validatePassword(password)) throw new Error('El password tiene que contener mínimo 8 caracteres y al menos un número')
    if (foundEmployee.length < 1) {
        throw new Error('Email o contraseña incorrecta')
    }
    if (foundEmployee[0].personal !== "sanitario") {
        throw new Error('Acceso denegado')
    }


}


