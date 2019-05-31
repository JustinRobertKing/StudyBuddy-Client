// dependency imports
import React from 'react';
import { Link } from 'react-router-dom';

// css import
import './Header.css';

// fontawesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';


export default function Header() {
    return (
        <div id = 'Header'>
            <Link id = 'ProfileLink' to = '/profile'><FontAwesomeIcon className = 'Icon' icon = { Icons.faUser } size = '2x'  /></Link>
        </div>
    )
} 