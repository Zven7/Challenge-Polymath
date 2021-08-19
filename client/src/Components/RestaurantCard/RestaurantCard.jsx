import React from 'react';
import './RestaurantCard.css'

function RestaurantCard(props) {
    return (
        <div className='cardContainer'>
            <img src={props.img} alt="Country Flag" />
            <h1>{props.name}</h1>
            <h4>{props.continent}</h4>
        </div>
    )
}

export default RestaurantCard
