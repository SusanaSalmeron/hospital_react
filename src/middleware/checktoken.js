
export const checkToken = () => {
    const token = localStorage.getItem("token")
    const actualDate = Date.now()
    if (token > actualDate) {
        return true
    }
    else {
        localStorage.removeItem("token")
        return false
    }
}