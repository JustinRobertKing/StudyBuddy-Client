// dependency imports
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';

// css import
import './Auth.css';

// img import
import Study from '../img/Study.svg';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/auth/login`, this.state)
    .then(response => {
      // Take the token from the response and set it in local storage
      localStorage.setItem('serverToken', response.data.token);
      // Update the user state info (in App.js)
      this.props.getUser()
    })
    .catch(error => {
      console.log('error', error)
    })
  }

  render() {
    if(this.props.user){
      return (<Redirect to="/" />);
    }
    return(
      <div className = 'Auth'>
        <img className = 'StudyLogo' src = { Study } />
        <div className = 'AuthWelcome'>
          <h2>Welcome!</h2>
          <h3>Please enter your email and password</h3>
        </div>
        <form className = 'AuthInput' onSubmit = { this.handleSubmit }>
          <input className = 'Input' type = 'Email' name = 'Email' placeholder = 'Email...' value = { this.state.email } onChange = { this.handleEmailChange } />
          <br />
          <input className = 'Input' type = 'Password' name = 'Password' placeholder = 'Password...' value = { this.state.password } onChange = { this.handlePasswordChange } />
          <br />
          <div className = 'LinkSubs'>
            <div className = 'Links'>
              <a href = '/signup'>Create an account</a><br />
              <a href = '#'>Forgot username or password</a>
            </div>
            <div className = 'Subs'>
              <input className = 'Submit' type = 'Submit' text = 'Log In' />
            </div>
          </div>
        </form>
      </div>
      )
  }
}

export default Login;
