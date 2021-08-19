import React from 'react';
import RestaurantCard from '../Components/RestaurantCard/RestaurantCard';
import { Link } from 'react-router-dom';


function Cts({cts}) {
    return (
        <div>
            <div id='countryCardsContainer'>{cts.map(ct => { //previously ctsFromState.map
            return <Link to={`/detail/${ct.id}`} key={ct.id} ><RestaurantCard className='cCard' name={ct.name} img={ct.restaurantPhoto} continent={ct.city} /></Link>
            })}
            </div>
        </div>
    )
}

export default Cts;
