// dependency imports
import React, { Component } from 'react';

// css import
import './Profile.css';
import axios from 'axios';

export default class Profile extends Component {
    state = {
        surveyResults: []
    }
    
    render() {

        return (
            <div id = 'Profile'>
                <div id = 'ProfileBanner'>
                    <img id = 'ProfilePic' src = 'https://www.placecage.com/gif/200/300' />
                    <h3>Name</h3>
                    <h4>Major</h4>
                    <h4>Favorite Study Tool</h4>
                    <h4>Bio</h4>
                </div>
                <div id = 'ProfileLower'>
                    <h4>Classes:</h4>
                    <h4>Survey Results:</h4>
                </div>
            </div>
        )
    }
}