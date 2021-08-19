import React from 'react';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { SiLinkedin } from 'react-icons/si';


function Footer() {
    return (
        <div id='footerDiv'>
            <div>
                <h4>Dario Gomez 2021</h4>
            </div>
            <div id='footerLinksDiv'>
                <div className='linkAlign'>  
                    <AiFillGithub className='gitLink'/>
                    <span><a href="https://github.com/Zven7/" target='_blank'><span className='footerTextDesc'>Zven7</span></a></span>
                </div>
                <div className='linkAlign'>
                    <SiLinkedin className='gitLink'/>
                    <span><a href="https://www.linkedin.com/in/dario-gomez-01666873/" target='_blank'><span className='footerTextDesc'>My Profile</span></a></span>
                </div>
                <div className='linkAlign'> 
                    <AiOutlineMail className='gitLink'/>
                    <span><a href="mailto:dario_07_11@hotmail.com" target='_blank'><span className='footerTextDesc'>Send me an email!</span></a></span>
                </div>
            </div>
        </div>
    )
}

export default Footer