import React, { useState, useEffect } from 'react';
import { getAllRestaurants } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../Components/Pagination/Pagination';
import Cts from '../Components/Cts';
import './Home.css';

export default function Home() {

    const [cts, setCts] = useState([]);
    const [currentCt, setCurrentCt] = useState(1);
    const ctsPerPage= 12;

    const ctsFromState = useSelector(state => state.restaurantsList);
    const filterType = useSelector(state => state.filterSelection);
    const dispatch = useDispatch();

    useEffect(() => {
        setCts(ctsFromState);
    }, [ctsFromState])

    
    useEffect(() => {
        dispatch(getAllRestaurants())
    }, [dispatch])

    /* let cts1 = []

    if(filterType === 'All'){
        cts1 = cts;
    }else if(filterType === 'activity'){
        cts1 = cts.filter(ct => ct.activities.length > 0)
    }else {
        cts1 = cts.filter(ct => ct.continent === filterType)
    } */


    //Pagination
    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentCt(pageNumber);
    }

    const indexOfLastCt = currentCt * ctsPerPage;
    const indexOfFirstCt = indexOfLastCt - ctsPerPage;
    const currentCts = cts.slice(indexOfFirstCt, indexOfLastCt);


    return (
        <div>
            <Cts cts={currentCts}/>
            <Pagination ctsPerPage={ctsPerPage} totalCts={cts.length} paginate={paginate}/>
        </div>
    )
}