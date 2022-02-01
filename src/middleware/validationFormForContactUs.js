import * as yup from 'yup';

export default function ValidationFormForContactUs() {
    let formSchema = yup.object().shape({
        name: yup.string()
            .required('Required name')
            .min(5, 'min 5 characters')
            .max(50, 'max 50 characters'),
        email: yup.string()
            .required('Required email')
            .email('Email not valid'),
        subject: yup.string()
            .required('Required subject')
            .min(5, 'min 5 characters'),
        message: yup.string()
            .required('Message required')
            .min(20, 'min 20 characters')
    })
    return formSchema
}