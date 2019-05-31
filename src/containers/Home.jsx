// dependency imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';

// css import
import './Home.css';

export default class Home extends Component {
    state = {
        name: '',
        major: '',
        user: '',
        otherUsers: '',
        result: [['Gina', 89.3],['Amy', 79.6],['Gavin', 76.2],['Isa', 73.5],['Justin', 69],['Noah', 58.9]]
    }

    componentDidMount = () => {
        // GET USER INFO
        this.getUserInfo()
    }

    getUserInfo = () => {
        axios.get(`${SERVER_URL}/user`)
        .then(res => {
            console.log('USER: ', res.data)
            this.setState({
                name: res.data.name,
                major: res.data.major,
                user: res.data
            })
        })
        axios.get(`${SERVER_URL}/user/all`)
        .then(res => {
            console.log('USERS: ', res.data)
            this.setState({
                otherUsers: res.data
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
        let matches = this.state.result.map((student, i) => {
            return(
                <div className = 'SearchResult' key={i}>
                    <div className = 'SearchImg'>
                        <img className = 'Img' src = 'https://www.placecage.com/c/300/300'/>
                    </div>
                    <div className = 'SearchBio'>
                        <h2>{student[0]}</h2>
                    </div>
                    <div className = 'SearchPerc'>
                        <h2>{student[1]}%</h2>
                    </div>
                </div>
            )
        })
        return(
            <div id = 'Home'>
                <h1 onClick = { this.handleLogout}>Log Out</h1>
                {matches}
            </div>
        )
    }
}