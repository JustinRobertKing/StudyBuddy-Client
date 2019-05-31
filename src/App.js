// dependency imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';

// css import
import './App.css';

// container imports
import Home from './containers/Home';
import Inbox from './containers/Inbox';
import Profile from './containers/Profile';
import Sessions from './containers/Sessions';
import Splash from './containers/Splash';
import Survey from './containers/Survey';

// layout imports
import Header from './layout/Header';
import Footer from './layout/Footer';
import Nav from './layout/Nav';

// auth imports
import Signup from './auth/Signup';
import Login from './auth/Login';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount = () => {
    this.getUser()
  }

  resetUser = () => {
    this.setState({ user: null })
  }

  getUser = () => {
    // SEE IF THERE'S A TOKEN
    let token = localStorage.getItem('serverToken');
    if (token) {
      axios.post(`${SERVER_URL}/auth/current/user`, {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      })
      .then(response => {
        console.log(response)
        this.setState({ user: response.data.user });
      })
      .catch(error => {
        console.log('error', error);
        this.resetUser()
      })
    } else {
      console.log('No token')
    }
    // IF THERE IS, TRY TO GET USER INFO
  }

  render() {
    let content = (
      <div id = 'App'>
      
        <Header />
        
        <>
        
        <Route exact path = '/' component = { 
          () => (<Splash user = { this.state.user } getUser = { this.getUser } /> )
          } />

        <Route path="/login" component= {
          () => (<Login user = { this.state.user } getUser = {this.getUser} />)
          } />

        <Route path="/signup" component= {
          () => (<Signup user = { this.state.user } getUser = { this.getUser } />)
          } />

        <Route exact path = "/home" component = {
          () => (<Home user = { this.state.user } resetUser = { this.resetUser } /> )
        } />

        <Route path = '/profile' component = { 
          () => (<Profile user = { this.state.user } /> )
          } />

        <Route path = '/inbox' component = {
          () => (<Inbox user = { this.state.user } /> )
          } />

        <Route path = '/sessions' component = {
          () => (<Sessions user = { this.state.user } /> )
          } />

        <Route path = '/survey' component = {
          () => (<Survey user = { this.state.user } /> ) 
        } />

        </>

        <Footer />
      </div>
      )
    return (
      <div className="App">
        <Router> 
          {/* <Nav user = { this.state.user } resetUser = { this.resetUser } /> */}
          { content }
          
        </Router>
      </div>
    
    )
  }
}

export default App;