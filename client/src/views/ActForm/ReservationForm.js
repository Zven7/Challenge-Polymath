import React, { useState, useEffect } from "react";
import { getAllRestaurants, addReservation } from "../../Redux/actions";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import './ActForm.css';

const ReservationForm = (props) => {
    const dispatch = useDispatch();
    //const actList = useSelector(state => state.activitiesList);
    const countryList = useSelector(state => state.restaurantsList);
    const { id } = useParams();

    const [input, setInput] = useState({
        customerName: '',
        tableNumber: 1,
        date: '',
        resId: id
    });


    useEffect(() => {
        dispatch(getAllRestaurants());
    }, [dispatch])


    const [errors, setErrors] = useState({});


    function validate(input) {
        if (!input.customerName) {
            errors.customerName = 'You have to give us your name for the reservation'
        }

        if (!input.tableNumber) {
            errors.tableNumber = 'You have to select a table number for the reservation'
        }

        if (!input.date) {
            errors.date = 'You have to specify a date for the reservation'
        }

        return errors;
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (input.customerName === '' || input.tableNumber === '' || input.date === ''){
            alert('Invalid parameters')
            setErrors({});
            return
        }
        dispatch(addReservation(input));
        alert('Reservation Created');
    }


    function handleChange(e) {
        const newInput = {
            ...input,
            [e.target.name]: e.target.value
        };
        setErrors(validate(newInput));
        setInput(newInput);
    }

    function handleSelectChange(e) {
        let selectedItems = Array.from(e.target.selectedOptions, opt => opt.value);
        const newInput = {
            ...input,
            countryId: selectedItems
        };
        setErrors(validate(newInput));
        setInput(newInput);
    }


    return (
        <div id='finalWrapperForm'>
            <div id='actFormWrapper'>
                <div id='formH1'><h1>Create Reservation</h1></div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='divForInputs'>
                        <div>Tell us your Name: </div>
                        <input
                            className='formInput'
                            type="text"
                            name='customerName'
                            placeholder='Name...'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='divForInputs'>
                        <div>Select Date: </div>
                        <input
                            id=''
                            type="date"
                            name='date'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='divForInputs'>
                        <label htmlFor="season">Select Table:
                            <select name="tableNumber" id="seasonSelection" onChange={handleChange}>
                                <option value="1">Table 1</option>
                                <option value="2">Table 2</option>
                                <option value="3">Table 3</option>
                                <option value="4">Table 4</option>
                                <option value="5">Table 5</option>
                                <option value="6">Table 6</option>
                                <option value="7">Table 7</option>
                                <option value="8">Table 8</option>
                                <option value="9">Table 9</option>
                                <option value="10">Table 10</option>
                                <option value="11">Table 11</option>
                                <option value="12">Table 12</option>
                                <option value="13">Table 13</option>
                                <option value="14">Table 14</option>
                                <option value="15">Table 15</option>
                            </select>
                        </label>
                    </div>

                    

                    <button id='formButtonFF' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default ReservationForm;