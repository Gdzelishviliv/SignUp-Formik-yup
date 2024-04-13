import * as Yup from 'yup';

export const SignupValidationShema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('First name is required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Last name is required'),
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@gmail.com$/, 'Must be a valid Gmail address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
