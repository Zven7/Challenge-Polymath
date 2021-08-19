import React from 'react';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { deleteRestaurant } from '../../Redux/actions'
import { useHistory } from 'react-router-dom';
import './DeleteRes.css'

function DeleteRes() {
    const { push } = useHistory()
    const { id } = useParams();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteRestaurant(id));
        alert("Succesfully Deleted");
        push('/home');
    }

    return (
        <div>
            <button className='delBtn' onClick={handleClick}>Delete Restaurant</button>
        </div>
    )
}

export default DeleteRes
