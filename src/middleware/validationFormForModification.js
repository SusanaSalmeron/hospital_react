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
            .required('Required address')
            .min(5, 'min 5 characters')
            .max(50, 'max 80 characters'),
        region: yup.object({
            value: yup.string()
                .required('Please select a region'), label: yup.string().required('Please select a region')
        }),
        postalZip: yup.object({
            value: yup.string()
                .matches(/^(?:0?[1-9]|[1-4]\d|5[0-2])\d{3}$/, 'Postal code must be, e.g: 28001')
                .required('Required postalZip'),
            label: yup.string().required('Required postalZip')
        }),
        phone: yup.string()
            .required('Required phone')
            .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Please, use numbers and a valid format, e.g: +31636363634 '),
        ssnumber: yup.string().required('Required phone number'),
        company: yup.string().required('Required company')
    })
    return formSchema

}

