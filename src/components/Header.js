import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faTasks, faPhone, faUser} from '@fortawesome/free-solid-svg-icons'



import MatZwLogo from "../assets/images/MatZwLogo.png"


import './Header.css'
import { useState } from 'react';

import { NavLink} from 'react-router-dom';

const Header = () =>{

const [active, setActive] = useState("Links");
const [menuActive, setMenuActive] = useState("Menu");

function handleActive(){
    if(active === "inactive")
    {
    setActive("Links");
    setMenuActive("Menu");
    }
    else
    {
    setActive("inactive");
    setMenuActive("MenuActive");
    }
}



    return(
        <div className="Header">
                <img src={MatZwLogo} className="MZ-Logo" alt='Mz-Logo'/>




                <div className={active}>

                    <a className="Portfolio"href="#">Portfolio <FontAwesomeIcon icon={faBriefcase}/></a>
                    <NavLink exact="true" activeclassname="active" to='/'><button className='Home'>Tasks <FontAwesomeIcon icon={faTasks}/></button></NavLink>
                    <NavLink exact="true" activecassname="active" to='/Contact'><button className='Contact'>Contact <FontAwesomeIcon icon={faPhone}/></button></NavLink>
                    
                </div>
                <button className="Menu-Parent" onClick={handleActive}>
                <div className={menuActive}>
                    <div className='parts'></div>
                    <div className='parts'></div>
                    <div className='parts'></div>
                </div>
                </button>


                

        </div>
    )
}



export default Header;
