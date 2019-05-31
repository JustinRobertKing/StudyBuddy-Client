// dependency imports
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';

// css import
import './Auth.css'

// image import
import Study from '../img/Study.svg';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleNameChange = (e) => { this.setState({ name: e.target.value }); }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/auth/signup`, this.state)
    .then(response => {
      // Set response.data.token to local storage
      localStorage.setItem('serverToken', response.data.token);
      // Update the user in parent component
      this.props.getUser()
    })
    .catch(error => {
      console.log('error', error)
    })
  }

  render() {
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    return(
      <div className = 'Auth'>
        <img className = 'StudyLogo' src = { Study } />
        <div className = 'AuthWelcome'>
          <h2>Welcome!</h2>
          <h3>Please enter your email and password</h3>
        </div>
        <form className = 'AuthInput' onSubmit = { this.handleSubmit }>
          <input className = 'Input' type = 'Text' name = 'Name' placeholder = 'Name...' value = { this.state.name } onChange = { this.handleNameChange } />
          <br />
          <input className = 'Input' type = 'Email' name = 'Email' placeholder = 'Email...' value = { this.state.email } onChange = { this.handleEmailChange } />
          <br />
          <input className = 'Input' type = 'Password' name = 'Password' placeholder = 'Password...' value = { this.state.password } onChange = { this.handlePasswordChange } />
          <br />
          <div className = 'LinkSubs'>
            <div className = 'Links'>
              <a href = '/login'>Log into your account</a><br />
            </div>
            <div className = 'Subs'>
              <input className = 'Submit' type = 'Submit' text = 'Sign Up' />
            </div>
          </div>
        </form>
      </div>
      )
  }
}

export default Signup;

