import React, { useState } from 'react';
import { getRestaurantQuery } from '../../../Redux/actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import './SearchBar.css'


export default function SearchBar() {
    const dispatch = useDispatch();


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
            <button id='sendButton' type='submit' ><Link to={queryParam.length > 0? `/search/${queryParam}`: '/home'}>
                <FaSearch id='searchIcon' /></Link></button>
        </form>
    )
}