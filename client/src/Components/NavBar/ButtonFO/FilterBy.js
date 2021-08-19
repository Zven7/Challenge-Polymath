import { useState, useEffect } from 'react';
import { getFilterType } from '../../../Redux/actions/index'
import { useDispatch } from 'react-redux';
import './ButtonFO.css';


export default function FilterBy() {
    const dispatch = useDispatch();
    //const countryList = useSelector(state => state.countryList)
    const [filterType, setFilterType] = useState('All')

    useEffect(() => {
        dispatch(getFilterType(filterType))
    }, [filterType, dispatch])

    
    return (
        <div id="Filter">
            <select name="filterBy" onChange={(e) => {
                setFilterType(e.target.value);
            }}>
                <option value="All">All Continents</option>
                <option value="Americas">America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="activity">Activity</option>
            </select>
        </div>
    )
}