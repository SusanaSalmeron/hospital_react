import jwt from 'jsonwebtoken'

export default function checkValidRole() {
    const token = localStorage.getItem("token")
    if (token) {
        let role = jwt.decode(token).personal
        if (role === "sanitario") {
            return true
        } else {
            return false
        }
    }

}