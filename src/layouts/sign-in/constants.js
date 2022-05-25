import * as Yup from 'yup';

export const initialValues = {
    email: '',
    password: '',
}
  
export const SignInValues = [
    {
        label: "Ел.пошта",
        name: "email",
        type: "email"
    },
    {
        label: "Пароль",
        name: "password",
        type: "password"
    }
]

export const validationSchema = Yup.object({
    email: Yup.string()
            .required('Обов`язкове поле')
            .email('Некоректна ел.пошта'),
    password: Yup.string()
            .required('Обов`язкове поле.') 
})