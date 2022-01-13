import jwt from 'jsonwebtoken'

export default function areYouAWorker() {
    const token = localStorage.getItem("token")
    if (token) {
        let role = jwt.decode(token).role
        if (role === "sanitario" || role === "administracion") {
            return true
        }
    }
    return false
}