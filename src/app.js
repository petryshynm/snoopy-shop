import React, {useEffect, useState}from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getAuthRole } from './services/utils';
import { logoutUserRequest, loginUserSuccess } from './store/actions/auth/auth.actions';
import { SignUp } from './layouts/sign-up'
import { SignIn } from './layouts/sign-in'
import { Main } from './layouts/main';
import { ProdItem } from './components/productsItem'
import { Header } from './components/header'
import { Footer } from './components/footer';
import { CartModal } from './components/cartModal';
import { protectedRoutes } from './services/routes/constants';
import { ProtectedRoute } from './services/routes/protectedRoute';
import { NotFound } from './layouts/not-found'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

export const App = () => {
    const [search, setSearch] = useState('');
    const [openModal, setOpen] = useState(false);
    const reducerLoading = useSelector(state => state)
    const userRole = useSelector(state => state.auth.userRole);
    const dispatch = useDispatch();
    
    if(Object.keys(reducerLoading).some((key) => reducerLoading[key].loading)) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            dispatch(loginUserSuccess(getAuthRole(token)))
        }
        else{
            dispatch(logoutUserRequest())
        }
    },[])

    return (
        <Router>
            <Header setSearch={setSearch} />
            <Routes>
                <Route path="/" element={<Main setOpen={setOpen} search={search}/>}/>
                <Route path="products/:id" element={<ProdItem setOpen={setOpen} />}/>
                <Route path="register" element={<SignUp/>}/>
                <Route path="login" element={<SignIn/>}/>
                {userRole && protectedRoutes.map(({path, permission, render}) => (
                        <Route path={path} element={
                            <ProtectedRoute isAllowed={userRole === permission}>{render}</ProtectedRoute>
                        }/>
                    ))
                }
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
            <CartModal open={openModal} onClose={()=>setOpen(false)}/>
        </Router>
    )
}