const ActivityCard = (props) => {

    return (
        <div className='activityCardWrapper'>
            <div id='actCardTitle'><h1>Table {props.table}</h1></div>
            <hr id='cardHr' />
            <h3>Customer: {props.customer}</h3>
            <h3>Date: {props.date}</h3>
        </div>
    )
}

export default ActivityCard;