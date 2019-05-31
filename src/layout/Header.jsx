// dependency imports
import React from 'react';
import { Link } from 'react-router-dom';

// css import
import './Layout.css';

// img import
import StudyLogo from '../img/Study.svg';

// fontawesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div id = 'Header'>
            <div id = 'HeaderLeft'>
                <Link className = 'ProfileLink' to = '/profile'><FontAwesomeIcon className = 'Icon' icon = { Icons.faUser } size = '2x'  /></Link>
            </div>
            <div id = 'HeaderRight'>
                <Link className = 'SessionsLink' to = '/sessions'><FontAwesomeIcon className = 'Icon' icon = { Icons.faCalendar } size = '2x' /></Link>
            </div>
        </div>
    )
} 

export default Header;