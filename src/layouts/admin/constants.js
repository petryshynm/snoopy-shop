import * as Yup from 'yup';

export const initialValues = {
    name: '',
    color: '',
    fullSize: '',
    season: '',
    brand: '',
    size: 1,
    price: 1,
    quantityInStock: 1,
    files: []
}
  
export const AdminValues = [
    {
        label: "Назва",
        name: "name",
        type: "text"
    },
    {
        label: "Колір",
        name: "color",
        type: "text"
    },
    {
        label: "Повний розмір",
        name: "fullSize",
        type: "text"
    },
    {
        label: "Сезон поступлення",
        name: "season",
        type: "text"
    },
    {
        label: "Розмір",
        name: "size",
        type: "number"
    },
    {
        label: "Опис",
        name: "description",
        type: "text"
    },
    {
        label: "Ціна",
        name: "price",
        type: "number"
    },
    {
        label: "Кількість на складі",
        name: "quantityInStock",
        type: "number"
    },
    {
        label: "Бренд",
        name: "brand",
        type: "text"
    },
    {
        label: "Фото",
        name: "image",
        type: "image",
        multiple: true
    }
]

export const validationSchema = Yup.object({
    name: Yup.string()
            .required('Обов`язкове поле')
            .min(3, 'Мінімум 3 символи.'),
    color: Yup.string()
            .required('Обов`язкове поле')
            .min(3, 'Мінімум 3 символи.'),
    fullSize: Yup.string()
            .required('Обов`язкове поле')
            .min(3, 'Мінімум 3 символи.'),
    season: Yup.string()
            .required('Обов`язкове поле')
            .min(3, 'Мінімум 3 символи.'),
    description: Yup.string()
            .required('Обов`язкове поле')
            .min(3, 'Мінімум 3 символи.'),
    brand: Yup.string()
            .required('Обов`язкове поле')
            .min(3, 'Мінімум 3 символи.'),
    size: Yup.number()
            .required('Обов`язкове поле')
            .min(0,'Розмір не може бути менше нуля'),
    price: Yup.number()
            .required('Обов`язкове поле')
            .min(0, 'Ціна не може бути менше нуля'),
    quantityInStock: Yup.number()
            .required('Обов`язкове поле')
            .min(0, 'Кількість на складі не може бути менше нуля'),
    files: Yup.array().min(1, 'Обов`язкове поле')
})