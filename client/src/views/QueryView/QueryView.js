import React, { useState, useEffect } from 'react';
import { getRestaurantQuery } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import RestaurantCard from '../../Components/RestaurantCard/RestaurantCard';
import Pagination from '../../Components/Pagination/Pagination';
import './QueryView.css';

export default function QueryView() {
    const dispatch = useDispatch();
    const countriesFromDb = useSelector(state => state.queryRestaurantsList);
    const [cts, setCts] = useState([]);
    const [currentCt, setCurrentCt] = useState(1);
    const ctsPerPage= 12;

    let { queryParam } = useParams();

    useEffect(() => {
        dispatch(getRestaurantQuery(queryParam))
    }, [dispatch, queryParam])

    useEffect(() => {
        setCts(countriesFromDb);
    }, [countriesFromDb])

    //Pagination
    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentCt(pageNumber);
    }

    const indexOfLastCt = currentCt * ctsPerPage;
    const indexOfFirstCt = indexOfLastCt - ctsPerPage;
    const currentCts = cts.slice(indexOfFirstCt, indexOfLastCt);


    return (
        <div id='queryContainer'>
            <h1>Found Restaurants</h1>
            <hr />
            {typeof countriesFromDb !== 'string'
                ? <div>
                    <div id='countryCardsContainer'>{currentCts.map(ct => {
                    return <Link to={`/detail/${ct.id}`} key={ct.id} ><RestaurantCard className='cCard' name={ct.name} img={ct.restaurantPhoto} continent={ct.city} /></Link>
                })}
                </div>
                <div>
                <Pagination ctsPerPage={ctsPerPage} totalCts={cts.length} paginate={paginate}/>  
                </div> 
                </div>
                :<div id='errorMsgQuery'>
                    <h2>{countriesFromDb}</h2>
                    <Link to='/home'><button id='goBackButton'>Go Home</button></Link>
                </div>}
        </div>
    )
}
