import * as yup from 'yup'

export default function ValidationFormForRegister() {
    let formSchema = yup.object().shape({
        name: yup.string()
            .required('Required name')
            .min(5, 'min 5 characters')
            .max(50, 'max 50 characters'),
        email: yup.string()
            .required('Required email')
            .email('Email not valid'),
        password: yup.string()
            .required('Required password')
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/, 'Password must contain 8 to 15 characters and at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.'),
        address: yup.string()
            .required('Required address')
            .min(5, 'min 5 characters')
            .max(50, 'max 80 characters'),
        postalZip: yup.object({
            value: yup.string()
                .required('Required postalZip'),
            label: yup.string()
                .required('Required postalZip')
        }),
        region: yup.object({
            value: yup.string()
                .required('Please select a region'),
            label: yup.string()
                .required('Please select a region')
        }),
        phone: yup.string()
            .required('Required phone')
            .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Please, use numbers and a valid format, e.g: +31636363634 '),
        dob: yup.string()
            .required('Required date of birth')
            .matches(/^(?: (?: 31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, 'The date of birth must be DD/MM/YYYY'),
        ssnumber: yup.string().required('Required SS number'),
        company: yup.string().required('Required company')
    })
    return formSchema

}

