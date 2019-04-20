import React, { Component } from 'react'
import axios from 'axios'

/* Import element styles */
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

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
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<div>
			<h1>Register</h1>
			<form>
				<Input 	type="text"
								id="username"
								name="username"
								placeholder="username"
								value={this.state.username}
								onChange={this.handleChange} />

				<Input 	placeholder="password"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange} />

				<Button onClick={this.handleSubmit} type="primary">Register</Button>
			</form>
		</div>

	)
}
}

export default Register
