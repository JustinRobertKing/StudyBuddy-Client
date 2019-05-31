// dependency imports
import React from 'react';
import { Link } from 'react-router-dom';

// img import
import Study from '../img/Study.svg';

// css import
import './Splash.css';

const Splash = () => {
    return (
        <div id = 'Splash'>
            <img className = 'StudyLogo' src = { Study } />
            <Link className = 'Link' id = 'Sign' to = '/signup'>Sign Up</Link>
            <Link className = 'Link' id = 'Log' to = '/login'>Log In</Link>
        </div>
    )
}

export default Splash;