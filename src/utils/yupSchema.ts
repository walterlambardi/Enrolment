import * as Yup from 'yup';

export const formDataSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      'Invalid email format',
    ),
  password: Yup.string().required('Required').min(4, 'Min 4 characters'),
});
