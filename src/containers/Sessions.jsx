// dependency imports
import React, { Component } from 'react';

// css import
import './Sessions.css';
import axios from 'axios';

export default class Sessions extends Component {
    state = {
        sessions: []
    }

    getAllSessions = () => {
        axios.get('sessions')
        .then(res => {
            this.setState({
                sessions: res.data.data
            })
        }).catch(err => {
            console.log('axios error: ', err)
        })
    }


    render() {
        return (
            <div id = 'Sessions'>
                <h1 className = 'Title'>Sessions</h1>
                <div className = 'Session'>
                    <h2 className = 'SessionInfo'>Who: </h2>
                    <h2 className = 'SessionInfo'>Date: </h2>
                    <h2 className = 'SessionInfo'>Time: </h2>
                    <h2 className = 'SessionInfo'>Location: </h2>
                </div>
            </div>
        )
    }
}