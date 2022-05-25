import React from 'react';
import { TextField, Button } from '@mui/material';
import { Form as FormConatiner, Formik, Field , ErrorMessage} from "formik";
import { Form } from 'react-bootstrap';
import { Loader } from '../loader';
import './form.scss';

const CustomInput = ({ field, form, type, multiple, ...props }) => {
    switch (type) {
        case 'image':
            return <Form.Group controlId="formFileMultiple" className="form-input-file">
                <Form.Label>{props.label}</Form.Label>
                <Form.Control 
                    {...field} 
                    name={field.name} 
                    accept="image/*" 
                    type="file" 
                    multiple={multiple} 
                    onChange={(event) => form.setFieldValue("files", [...event.currentTarget.files])}
                />
                <ErrorMessage className="error" name='files' component="div"/>
            </Form.Group> 
        default:
            return <TextField 
                fullWidth
                {...field} 
                {...props} 
                type={type} 
                error={!!form.errors[field.name]}
                helperText={form.errors[field.name]}
                variant="standard"
        />
    }
};

export const SForm = ({
    validationSchema, 
    initialValues, 
    formValues, 
    buttonText, 
    title, 
    onSubmit,
    loading, 
    error, 
    message
}) => {
    return  <>
        {loading ? <Loader/> : null}
        {message ? <div className={`status-panel ${error && 'error'}`}>{message}</div> : null}
        <div className='form-title'>{title}</div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <FormConatiner className="form">
                {formValues.map(({label,name,type, multiple},index) => (
                    <div className="form-input-wrapper" key={index}>
                        <Field
                            id={name}
                            label={label}
                            name={name}
                            type={type}
                            multiple={multiple}
                            component={CustomInput}
                        />
                    </div>
                ))}
                <Button variant="contained" type="submit">{buttonText}</Button>
            </FormConatiner>
        </Formik>
    </>
}