import * as yup from "yup";

export const schema = yup.object().shape({
    email: yup.string().required('Email is a required').email(),
    password: yup
        .string()
        .required('Password is a required')
        .min(5, 'Password field must be at leat 5 characters'),
})