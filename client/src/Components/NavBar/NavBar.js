import React from 'react';
import SortAlpha from './ButtonFO/SortAlpha.js';
import FilterBy from './ButtonFO/FilterBy.js';
import CreateAct from './CreateAct/CreateAct.js';
import SearchBar from './SearchBar/SearchBar.js';
import './NavBar.css';


export default function NavBar() {
    return (
        <div id='wrapper'>
            <div id='filterWrapper'>
                {/* <SortAlpha />
                <FilterBy /> */}
            </div>
            <SearchBar />
            <CreateAct />
        </div>
    )
}