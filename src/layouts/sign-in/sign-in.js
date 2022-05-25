import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { SForm } from '../../components/form';
import { Loader } from '../../components/loader';
import { Paths } from '../../services/routes/paths';
import { loginUserRequest } from '../../store/actions/auth/auth.actions';
import { initialValues, SignInValues, validationSchema } from './constants';
import './sign-in.scss';

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, message, userRole } = useSelector(state => state.auth);

  const onSubmit = (values) => {
    dispatch(loginUserRequest(values))
  }

  useEffect(() => {
    if(userRole){
      const redirectUserTo = userRole === 'Admin' ? Paths.ADMIN : Paths.PROFILE
      navigate(redirectUserTo)
    }
  }, [userRole]);

  return <>
    {loading ? <Loader/> : null}
    <div className="sign-in"> 
      <SForm 
        loading={loading}
        message={message}
        error={error}
        validationSchema={validationSchema}
        initialValues={initialValues} 
        formValues={SignInValues} 
        onSubmit={onSubmit}
        buttonText={'Увійти'}
        title={'Вхід'}
      />
    </div>
  </>
}
