import * as yup from 'yup'

export default function ValidationForm() {
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
            .min(8, 'Should be 8 characters min')
            .matches(/[a - zA - Z]/, 'Password can only contain latin letters'
            ),
        address: yup.string()
            .required('Required address'),
        postalZip: yup.string()
            .required('Required postalZip'),
        region: yup.string()
            .required('Required region'),
        country: yup.string()
            .required('Required country'),
        phone: yup.string()
            .required('Required phone'),
        dob: yup.string()
            .required('Required date of birth')
            .matches(/^(?: (?: 31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, 'The date of birth must be DD/MM/YYYY'),
        ssnumber: yup.string().required('Required phone number'),
        company: yup.string().required('Required company')
    })
    return formSchema

}

