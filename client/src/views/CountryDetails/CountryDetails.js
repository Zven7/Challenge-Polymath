import React, { useEffect } from "react";
import { getOneRestaurant } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useParams, Redirect } from "react-router-dom";
import { FaLongArrowAltDown } from 'react-icons/fa';
import ActivityCard from "./ActivityCard";
import CreateReservationBtn from "./CreateReservationBtn";
import './CountryDetails.css';
import { SiPandora } from "react-icons/si";
import ReservationForm from "../ActForm/ReservationForm";
import EditResForm from "../ActForm/EditResForm";
import DeleteRes from "./DeleteRes";


const CountryDetails = () => {
    const dispatch = useDispatch();
    const ctDet = useSelector(state => state.singleRestaurant)
    let { id } = useParams();

    useEffect(() => {
        dispatch(getOneRestaurant(id))
    }, [dispatch, id])


    if(ctDet === null){
        return (
            <Route>
                <Redirect to='/incorrect'/>
            </Route>
        )
    }

    return (
        <React.Fragment>
            <div id='countryDetailsContainer'>
                <div id='buttonContainerDetail'>
                    <Link to='/home'><button id='goBackButton' type='button'>Go Home</button></Link>
                </div>

                <div id='detailedCountry'>
                    <div id='imgContainer'><img src={ctDet.restaurantPhoto} alt={`Restaurant ${ctDet.name}`} /></div>
                    <div>
                        <h1>{ctDet.name}</h1>
                        <h2>City: {ctDet.city}</h2>
                        <h3>Address: {ctDet.address}</h3>
                        <h3>Description: {ctDet.description}</h3>
                        <DeleteRes />
                    </div>
                </div>
                <div id='actHeader'><FaLongArrowAltDown /><h2> Reservations </h2><FaLongArrowAltDown /></div>
                <hr />
                <div id='activitiesList'>
                    {ctDet.reservations && ctDet.reservations.length > 0
                        ? ctDet.reservations.map(act => {
                            return <ActivityCard
                                key={act.id}
                                table={act.tableNumber}
                                date={act.date}
                                customer={act.customerName}
                            />
                        })
                        : <span></span>
                    }

                        <div className='formContainer'>
                            <div id='activitiesLinkFFFFF'><h4 className='h4Create'>Create a Reservation</h4>
                                <ReservationForm />
                            </div>
                            <div id='activitiesLinkFFFFF'><h4 className='h4Create'>Edit Restaurant</h4>
                                <EditResForm />
                            </div>
                        </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}


export default CountryDetails;

