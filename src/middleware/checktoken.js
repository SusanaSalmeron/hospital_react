import jwt from 'jsonwebtoken';
import dayjs from 'dayjs';

export const checkValidToken = () => {
    const token = localStorage.getItem("token")
    if (token) {
        let decodeToken = jwt.decode(token)
        console.log(decodeToken)
        const actualDate = dayjs().unix()
        if (decodeToken.expiration > actualDate) {
            return true
        }
        else {
            localStorage.removeItem("token")
            return false
        }
    }
    return false
}