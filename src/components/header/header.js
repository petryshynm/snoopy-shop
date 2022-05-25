import React, { useState } from 'react'
import './header.scss'
import { Link, useLocation } from 'react-router-dom';
import logo from '../../resources/images/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { Paths } from '../../services/routes/paths';
import { logoutUserRequest } from '../../store/actions/auth/auth.actions';

const svgStyle = {
    svg: {
        enableBackground: 'new 0 0 512 512',
    }
}

export const Header = ({setSearch}) => {
    const [inputValue, setValue] = useState('');
    const { pathname } = useLocation();
    const { userRole, authentificated } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="Logo"></img>
            </Link>
            <nav className="menu">
                <div className="menu__navigation">
                    <Link to="/" className="menu__link">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512"  style={svgStyle.svg} space="preserve" className=""><g><path xmlns="http://www.w3.org/2000/svg" d="m504 275.09c0-3.366-2.106-6.371-5.27-7.52l-114.73-41.72v-133.62h-.31c1.161-4.025-1.013-8.258-4.96-9.66l-120-43.63c-1.762-.65-3.698-.65-5.46 0l-120 43.63c-2.56.941-4.466 3.118-5.06 5.78h-.21v137.5l-114.73 41.72c-2.56.941-4.466 3.118-5.06 5.78h-.21v141.82h.2c-.881 3.923 1.29 7.889 5.07 9.26l120 43.63c1.761.653 3.699.653 5.46 0l117.27-42.64 117.27 42.64c1.761.653 3.699.653 5.46 0l120-43.63c2.43-.883 4.282-2.888 4.97-5.38h.3v-141.82s-.006-1.416 0-2.14zm-376 174.03-104-37.81v-124.8l104 37.82zm8-138.91-96.59-35.12 95.96-34.9 96.6 35.13zm112 101.1-104 37.81v-124.79l104-37.82zm0-147.64-104-37.82v-124.34l104 37.82zm-88.59-173.58 96.59-35.12 96.59 35.12-96.59 35.12zm208.59 11.42v124.34l-104 37.82v-124.34zm0 347.61-104-37.81v-124.8l104 37.82zm8-138.91-95.97-34.89 96.6-35.13 95.96 34.9zm112 101.1-104 37.81v-124.79l104-37.82z" fill="#c7c7c7" data-original="#000000"   className=""/></g></svg>
                        Каталог
                    </Link> 
                    <form className="menu__search search">
                        <div className="search__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 310.42 310.42"  style={svgStyle.svg} space="preserve" className=""><g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M273.587,214.965c49.11-49.111,49.109-129.021,0-178.132c-49.111-49.111-129.02-49.111-178.13,0    C53.793,78.497,47.483,140.462,76.51,188.85c0,0,2.085,3.498-0.731,6.312c-16.065,16.064-64.263,64.263-64.263,64.263    c-12.791,12.79-15.836,30.675-4.493,42.02l1.953,1.951c11.343,11.345,29.229,8.301,42.019-4.49c0,0,48.096-48.097,64.128-64.128    c2.951-2.951,6.448-0.866,6.448-0.866C169.958,262.938,231.923,256.629,273.587,214.965z M118.711,191.71    c-36.288-36.288-36.287-95.332,0.001-131.62c36.288-36.287,95.332-36.288,131.619,0c36.288,36.287,36.288,95.332,0,131.62    C214.043,227.996,155,227.996,118.711,191.71z" fill="#2f4f4f" data-original="#000000"   className=""/>
                                        <g>
                                            <path d="M126.75,118.424c-1.689,0-3.406-0.332-5.061-1.031c-6.611-2.798-9.704-10.426-6.906-17.038     c17.586-41.559,65.703-61.062,107.261-43.476c6.611,2.798,9.704,10.426,6.906,17.038c-2.799,6.612-10.425,9.703-17.039,6.906     c-28.354-11.998-61.186,1.309-73.183,29.663C136.629,115.445,131.815,118.424,126.75,118.424z" fill="#2f4f4f" data-original="#000000"   className=""/>
                                        </g>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                </g></svg>
                        </div>
                        <input className="search__input" onInput={(e) => setValue(e.target.value)} type="search" />
                        <button 
                            type="button" 
                            disabled={pathname !== '/'}
                            from="menu__search" 
                            className={`search__btn ${pathname !== '/' && '_disabled'}`}
                            onClick={(e) => setSearch(inputValue)}>
                            Знайти
                        </button>
                    </form>
                </div>
                    {authentificated 
                        ? <div className="menu__btns _unauthorized">
                            <Link to={userRole === 'Admin' ? Paths.ADMIN : Paths.PROFILE} className="menu__user link" >
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512"  style={svgStyle.svg} space="preserve" className=""><g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148    C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962    c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216    h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40    c59.551,0,108,48.448,108,108S315.551,256,256,256z" fill="#2f4f4f" data-original="#000000"   className=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                </g>
                            </svg>
                            </Link>
                            <Link 
                                to="/login" 
                                onClick={()=>{
                                    dispatch(logoutUserRequest())
                                    localStorage.clear();
                                }} 
                                className="menu__logout link">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 384.971 384.971" style={svgStyle.svg} xmlSpace="preserve"><g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    <g id="Sign_Out">
                                        <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03    C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03    C192.485,366.299,187.095,360.91,180.455,360.91z" fill="#2f4f4f" dataoriginal="#000000" />
                                        <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279    c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179    c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z" fill="#2f4f4f" dataoriginal="#000000" style={{}} />
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                </g></svg>
                            </Link>
                        </div> 
                        :  <div className="menu__btns">
                            <Link to="/register">
                                <button type="button" className="menu__btn ">Реєстрація</button>
                            </Link>
                            <Link to="/login" >
                                <button type="button" className="menu__btn">Вхід</button>
                            </Link>
                        </div>
                    }
            </nav>
        </header>
    )
}