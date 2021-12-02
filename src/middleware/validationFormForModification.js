import * as yup from 'yup'

export default function ValidationFormForModification() {
    let formSchema = yup.object().shape({
        name: yup.string()
            .required('Required name')
            .min(5, 'min 5 characters')
            .max(50, 'max 50 characters'),
        email: yup.string()
            .required('Required email')
            .email('Email not valid'),
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
        ssnumber: yup.string().required('Required phone number'),
        company: yup.string().required('Required company')
    })
    return formSchema

}

