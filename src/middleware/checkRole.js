import jwt from 'jsonwebtoken'

export default function checkRole() {
    const token = localStorage.getItem("token")
    if (token) {
        let role = jwt.decode(token).role
        if (role === "sanitario") {
            return true
        }
    }
}