
export const checkToken = () => {
    const token = localStorage.getItem("token")
    const actualDate = Date.now()
    return token > actualDate
}