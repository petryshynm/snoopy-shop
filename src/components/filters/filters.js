import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBrandsRequest, getSeasonsRequest, getSizesRequest } from '../../store/actions/products/products.actions';
import './filters.scss'

export const Filters = ({setFilterData, setOrder}) => {   
    const dispatch = useDispatch()
    const { brands, sizes, seasons } = useSelector(state => state.products)
    const [sortBy, setSortBy] = useState('');
    const [filters, setFilters] = useState({});
    
    const renderFilterList = (data, name) => {
        if (!data.length) return
        return data.map((value, index) => (
            <div className="filter__checkbox" key={index}>
                <input 
                    onClick={(e) => generateQuery(e,name,value)} 
                    className="filter__input" 
                    id={`${name}${index}`} 
                    defaultValue={value} 
                    type="checkbox" 
                />
                <label className="filter__label" htmlFor={`${name}${index}`}>{value}</label>
            </div>
        ))
    }

    useEffect(() => {
        dispatch(getBrandsRequest())
        dispatch(getSeasonsRequest())
        dispatch(getSizesRequest())
    }, [])
    
    const generateQuery = (e, name, value) => {
        if(!filters[name]) filters[name] = []
        if (e.target.checked) filters[name].push(value)
        else filters[name] = filters[name].filter(elem => elem !== value);
        setFilters(filters)
    }

    return <>
        <div className="sorting-type">
            <select onChange={(e) => setOrder(e.target.value)} className="filter__select">
                <option disabled>---</option>
                <option value="0">По зростанню</option>
                <option value="1">По спаданню</option>
            </select>
        </div>
        <form className="filters">
            <div className="filters__item filter">
                <div className="filter__title">Сортувати за:</div>
                    <select 
                        onChange={(e) => setSortBy(e.target.value)} 
                        className="sorting filter__select" 
                        defaultValue='---'
                    >
                    <option disabled>---</option>
                    <option value="Rating" >Рейтинг</option>
                    <option value="Price">Ціна</option>
                    <option value="Name">Назва</option>
                    <option value="Size">Розмір</option>
                </select>
            </div>
            <div className="filters__item filter">
                <div className="filter__title">Бренди:</div>
                <div className="filter__checkboxes">
                    {renderFilterList(brands, 'brands')}
                </div>
            </div>
            <div className="filters__item filter">
                <div className="filter__title">Розмір деки:</div>
                <div className="filter__checkboxes">
                    {renderFilterList(sizes, 'sizes')}
                </div>
            </div>
            <div className="filters__item filter">
                <div className="filter__title">Сезон надходження:</div>
                <div className="filter__checkboxes">
                    {renderFilterList(seasons, 'seasons')}
                </div>
            </div>
            <div className="filters__btns">
                    <button type="button" className="button button__main " onClick={() => {
                        setFilterData({ filters, sortBy })
                    }}>
                        <div className="inner" >Показати</div>
                </button>
                    <button type="reset" from="filters" onClick={() => {
                        setSortBy('')
                        setFilters([]);
                        setFilterData({})
                    }} className="button button__secondary ">
                    <div className="inner">Скинути</div>
                </button>
            </div>
        </form> 
    </>
    
}