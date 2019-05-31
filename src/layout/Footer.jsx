// dependency import
import React from 'react';
import { Link } from 'react-router-dom';

// css import
import './Layout.css';

// fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div id = 'Footer'>
            <div id = 'FooterLeft'>
                <FontAwesomeIcon className = 'Icon' icon = { Icons.faChevronLeft } size = '2x'/>
            </div>
            <div id = 'FooterRight'>
                <Link to = '/home'><FontAwesomeIcon className = 'Icon' icon = { Icons.faSearch } size = '2x' /></Link>
            </div>
        </div>
    )
}

export default Footer;