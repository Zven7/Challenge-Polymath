import { useState, useEffect } from 'react';
import { getOrderParam } from '../../../Redux/actions/index';
import { useDispatch } from 'react-redux';
import './ButtonFO.css';


export default function SortAlpha() {
    const dispatch = useDispatch();
    //const countryList = useSelector(state => state.countryList)
    const [orderParam, setOrderParam] = useState('ASC')


    useEffect(() => {
        dispatch(getOrderParam(orderParam))
    }, [orderParam, dispatch])


    return (
        <div id="Order">
            <select name="orderBy" onChange={(e) => {
                setOrderParam(e.target.value);
            }}>
                <option value="ASC">A - Z</option>
                <option value="DESC">Z - A</option>
                <option value="ASCPOP">Population +</option>
                <option value="DESCPOP">Population -</option>
            </select>
        </div>
    )
}