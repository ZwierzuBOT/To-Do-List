import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHome, faPhone, faUser} from '@fortawesome/free-solid-svg-icons'



import MatZwLogo from "../assets/images/MatZwLogo.png"


import './Header.css'
import { useState } from 'react';

import { Link, NavLink,} from 'react-router-dom';

const Header = () =>{

const [active, setActive] = useState("Links");

function handleActive(){
    if(active === "inactive")
    setActive("Links");
    else
    setActive("inactive");
}




    return(
        <div className="Header">
                <img src={MatZwLogo} className="MZ-Logo" alt='Mz-Logo'/>




                <div className={active}>

                    <a className="Portfolio"href="#">Portfolio <FontAwesomeIcon icon={faBriefcase}/></a>
                    <NavLink exact="true" activeclassname="active" to='/'><button className='Home'>Home <FontAwesomeIcon icon={faHome}/></button></NavLink>
                    <NavLink exact="true" activeclassname="active" to='/About'><button className='About'>About <FontAwesomeIcon icon={faUser}/></button></NavLink>
                    <NavLink exact="true" activecassname="active" to='/Contact'><button className='Contact'>Contact <FontAwesomeIcon icon={faPhone}/></button></NavLink>
                    
                </div>
                <button className="Menu-Parent" onClick={handleActive}>
                <div className='Menu'>
                    <div className='parts'></div>
                    <div className='parts'></div>
                    <div className='parts'></div>
                </div>
                </button>


                

        </div>
    )
}



export default Header;