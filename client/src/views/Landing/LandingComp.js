import React from 'react'
import { Link } from 'react-router-dom'
import forkLogo from '../../assets/forketc.png'
import './LandingComp.css'

function LandingComp() {
    return (
        <div className="landingComp">
            <div>
                <h1 className="landingText">Welcome To <span className="aLaCarte">A La Carte</span></h1>
                <img className='logoImg' src={forkLogo} alt='logo'/>
            </div>
            <div>
                <h3 className="landingH3">Where you can make Reservations for your favorite Restaurants</h3>
                <div>
                    <Link className='reserveBtn' to='/home'>Reserve!</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingComp
