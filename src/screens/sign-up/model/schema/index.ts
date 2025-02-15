import * as yup from 'yup';

// const PASSWORD_REGEXP: RegExp = new RegExp(
//   '^(?=.*[A-Z])(?=.*[a-z])(?=.*d).{5,}$',
// );

export const schema = yup.object().shape({
  name: yup.string().required('Name is a required'),
  email: yup.string().required('Email is a required').email(),
  password: yup
    .string()
    .required('Password is a required')
    .min(5, 'Password field must be at leat 5 characters'),
  // .matches(PASSWORD_REGEXP),
  passwordConfirm: yup
    .string()
    .required('Password is a required')
    .min(5, 'Password field must be at leat 5 characters')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
