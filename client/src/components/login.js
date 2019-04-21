import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

/* Import styles */
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Login extends Component {
  constructor() {
      super()
      this.state = {
          username: '',
          password: '',
          redirectTo: null
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit(event) {
      event.preventDefault()
      console.log('handleSubmit')

      axios
          .post('/user/login', {
              username: this.state.username,
              password: this.state.password
          })
          .then(response => {
              console.log('login response: ')
              console.log(response)
              if (response.status === 200) {
                  // update App.js state
                  this.props.updateUser({
                      loggedIn: true,
                      username: response.data.username
                  })
                  // update the state to redirect to home
                  this.setState({
                      redirectTo: '/'
                  })
              }
          }).catch(error => {
              console.log('login error: ')
              console.log(error);
          })
  }

  render() {
    if (this.state.redirectTo) {
        return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
        return (
          <div className="Login">
            <section className="Login-section">
              <h1>Login</h1>
              <form>
                <Input  type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange} />
                <br />
                <Input  placeholder="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                <br />
                <Button onClick={this.handleSubmit} type="submit" variant="contained" color="primary">Login</Button>
              </form>
            </section>            
          </div>
        )
    }
  }
}

export default Login;
