import React, { useState, useEffect } from "react";
import { getAllRestaurants, editRestaurant } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import './ActForm.css';

const EditResForm = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { push } = useHistory();
    //const actList = useSelector(state => state.activitiesList);
    /* const restaurant = useSelector(state => state.singleRestaurant);
    const { name, city, address, description, restaurantPhoto } = restaurant; */

    const [input, setInput] = useState({
        name: '',
        city: '',
        address: '',
        description: '',
        restaurantPhoto: '',
        resId: id
    });


    useEffect(() => {
        dispatch(getAllRestaurants());
    }, [dispatch])


    const [errors, setErrors] = useState({});


    function validate(input) {
        if (!input.name) {
            errors.name = 'You have to put a name'
        }

        if (!input.address) {
            errors.address = 'You have to add an address'
        }

        if (!input.description) {
            errors.description = 'You have to add a description'
        }

        if (!input.restaurantPhoto){
            errors.restaurantPhoto = 'No photo added'
        }

        return errors;
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (input.address === '' || input.name === '' || input.description === '' || input.city === '' || input.restaurantPhoto === '') {
            alert('Invalid parameters')
            setErrors({});
            return
        }
        dispatch(editRestaurant(input));
        alert('Restaurant Edited');
        push('/home');
    }


    function handleChange(e) {
        const newInput = {
            ...input,
            [e.target.name]: e.target.value
        };
        setErrors(validate(newInput));
        setInput(newInput);
    }



    return (
        <div id='finalWrapperForm'>
            <div id='actFormWrapper'>
                <div id='formH1'><h1>Edit Restaurant</h1></div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='divForInputs'>
                        <div>Name: </div>
                        <input
                            className='formInput'
                            type="text"
                            name='name'
                            placeholder='Restaurant Name...'
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className='divForInputs'>
                        <div>City: </div>
                        <input
                            className='formInput'
                            type="text"
                            name='city'
                            placeholder='City Name...'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='divForInputs'>
                        <div>Address: </div>
                        <input
                            className='formInput'
                            type="text"
                            
                            name='address'
                        
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className='divForInputs'>
                        <div>Add Image URL: </div>
                        <input
                            className='formInput'
                            type="text"
                            
                            name='restaurantPhoto'
                        
                            onChange={handleChange}
                        />
                    </div>

                    <div className='divForInputs'>
                        <div>Add Description: </div>
                        <textarea
                            id=''
                            
                            name='description'
                            onChange={handleChange}
                            
                        />
                    </div>

                    <button id='formButtonFF' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default EditResForm;