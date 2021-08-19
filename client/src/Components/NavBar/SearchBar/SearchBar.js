import React, { useState } from 'react';
import { getRestaurantQuery } from '../../../Redux/actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useHistory } from 'react-router';
import './SearchBar.css'


export default function SearchBar() {
    const dispatch = useDispatch();
    const { push } = useHistory();


    const [input, setInput] = useState({
        word: ''
    })

    const handleChange = (e) => {
        setInput({
            word: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getRestaurantQuery(input.word))
        setInput({
            word: ''
        })
        push(`/search/${queryParam}`)
    }


    let queryParam = input.word;

    return (
        <form id='searchForm' onSubmit={(e) => handleSubmit(e)}>
            <input
                type='search'
                placeholder='Search Restaurants here...'
                onChange={handleChange}
                id='searchBarFF'
            />
            <button id='sendButton' type='submit' >
                <FaSearch id='searchIcon' /></button>
        </form>
    )
}