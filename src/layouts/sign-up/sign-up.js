import { useDispatch, useSelector } from 'react-redux'
import { SForm } from '../../components/form';
import { initialValues, SignUpValues, validationSchema } from './constants';
import { registerUserRequest } from '../../store/actions/auth/auth.actions';
import { Loader } from '../../components/loader';
import './sign-up.scss';

export const SignUp = () => {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(state => state.auth);

  const onSubmit = (values) => {
    dispatch(registerUserRequest(values))
  }

  return <>
    {loading ? <Loader/> : null}
    <div className="sign-up"> 
      <SForm 
        loading={loading}
        error={error}
        message={message}
        validationSchema={validationSchema}
        initialValues={initialValues} 
        formValues={SignUpValues} 
        onSubmit={onSubmit}
        buttonText={'Зареєструватись'}
        title={'Реєстрація'}
      />
    </div>
  </>
}
