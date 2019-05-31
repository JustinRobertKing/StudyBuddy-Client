// dependency imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// css import
import './Home.css';

export default class Home extends Component {
    state = {
        name: '',
        major: '',
        tool: ''
    }

    getUserInfo = () => {
        axios.get(`/user/${this.props.user._id}`)
        .then(res => {
            this.setState({
                name: res.data.name,
                major: res.data.major,
                tool: res.data.tool
            })
        })
    }

    handleLogout = (e) => {
        e.preventDefault();
        // REMOVE LS TOKEN; UPDATE PARENT STATE
        localStorage.removeItem('serverToken')
        this.props.resetUser()
      }

    render() {
        return(
            <div id = 'Home'>
                <h1 onClick = { this.handleLogout}>Log Out</h1>
                <div className = 'SearchResult'>
                    <div className = 'SearchImg'>
                        <img className = 'Img' src = 'https://www.placecage.com/gif/200/300'/>
                    </div>
                    <div className = 'SearchBio'>
                        <h2>Nick Cage</h2>
                        <h4>Arts and Crafts</h4>
                        <h4>Penknife</h4>
                    </div>
                    <div className = 'SearchPerc'>
                        <h2>50%</h2>
                    </div>
                </div>
            </div>
        )
    }
}