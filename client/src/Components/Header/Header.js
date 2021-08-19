import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import forkimg from '../../assets/forketc.png'


const Header = () => {
    return (
        <div id='headerContainer'>
            <h1 id='headerText'><NavLink to='/home'><img className='logo-fork' src={forkimg} alt='fork'></img> A La Carte</NavLink></h1>
        </div>
    )
}

export default Header;