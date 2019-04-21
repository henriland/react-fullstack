import React, { Component } from 'react'
import axios from 'axios'

/* Import styles */
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Register extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					alert("Account successfully created!");
					this.props.history.push("login");
				} else {
					console.log('username already taken');
					alert("The username has already been taken");
				}
			}).catch(error => {
				console.log(error)
				alert("Signup failed!");
			})
	}


	render() {
		return (
	    <div className="Login">
	      <section className="Login-section">
					<h1>Register</h1>
					<form>
						<Input 	type="text"
										id="username"
										name="username"
										placeholder="Username"
										value={this.state.username}
										onChange={this.handleChange} />
	          <br />
						<Input 	placeholder="Password"
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

export default Register
