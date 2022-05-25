import * as Yup from 'yup';

export const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
}
  
export const SignUpValues = [
    {
        label: "Ім`я",
        name: "firstName",
        type: "text"
    },
    {
        label: "Прізвище",
        name: "lastName",
        type: "text"
    },
    {
        label: "Ел.пошта",
        name: "email",
        type: "email"
    },
    {
        label: "Пароль",
        name: "password",
        type: "password"
    },
    {
        label: "Повторіть пароль",
        name: "confirmPassword",
        type: "password"
    }
]

export const validationSchema = Yup.object({
    firstName: Yup.string()
            .required('Обов`язкове поле')
            .min(3, 'Ім`я закоротке - мінімум 3 символів.'),
    lastName: Yup.string()
            .required('Обов`язкове поле')
            .min(3, 'Прізвище закоротке - мінімум 3 символів.'),
    email: Yup.string()
            .required('Обов`язкове поле')
            .email('Невалідна ел.пошта'),
    password: Yup.string()
            .required('Обов`язкове поле.') 
            .min(8, 'Пароль закороткий - мінімум 8 символів.') 
            .max(15, 'Пароль задовгий - максимум 15 символів.')
            .matches(/[a-zA-Z0-9]/, 'Пароль може містити лише цифри та латинські літери.'), 
    confirmPassword: Yup.string()
            .required('Паролі не збігаються.') 
            .oneOf([Yup.ref('password'), null], 'Паролі не збігаються'),
})