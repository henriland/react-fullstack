import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/App.css';
import axios from 'axios'

class Menu extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div>
                {loggedIn ? (
                    <div>
                      <ul>
                        <li>
                          <Link to="#" onClick={this.logout}>Logout</Link>
                        </li>
                      </ul>
                    </div>
                ) : (
                    <div>
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>               
                      </ul>       
                    </div>
                )}
            </div>
        );
    }
}

export default Menu