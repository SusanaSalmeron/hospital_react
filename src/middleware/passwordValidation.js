const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const validatePassword = (password) => {
    return PASSWORD_REGEX.test(password)
}