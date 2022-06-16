// React --------------------------------
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// CSS style sheet ----------------------
import cookie from 'react-cookies'

import axios from './axios'

import './Welcome.css'
class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e) {
		this.setState(
			{
				[e.target.name]: e.target.value
			},
			() => {
				// console.log(this.state);
			}
		)
	}

	onSubmit(e) {
		e.preventDefault()
		console.log('login on submit resp.data')
		axios
			.post('/login', this.state)
			.then(resp => {
				if (resp.data.success) {
					this.setState({
						success: resp.data.success,
						userId: resp.data.userId,
						first: resp.data.first,
						last: resp.data.last,
						email: resp.data.email
					})
				} else {
					this.setState({
						error: true
					})
				}
			})
			.then(() => {
				console.log('login on submit state', this.state)
				cookie.save('userId', this.state.userId, { path: '/' })
				cookie.save('first', this.state.first, { path: '/' })
				cookie.save('last', this.state.last, { path: '/' })
				cookie.save('email', this.state.email, { path: '/' })
				window.location.replace('/')
			})
			.catch(function(err) {
				console.log('login axios catch: ', err)
			})
	}

	componentWillUnmount() {
		console.log('inside login, componentDidMount', this.state)
		this.setState({})
	}

	render() {
		return (
			<div className="form w3-container  w3-padding">
				<h2 className="">Sign in</h2>
				<form onSubmit={this.onSubmit} method="post">
					<input
						className="w3-input w3-margin-bottom"
						type="email"
						name="email"
						placeholder="Email"
						onChange={this.onChange}
					/>
					<input
						className="w3-input"
						type="password"
						name="password"
						placeholder="Password"
						onChange={this.onChange}
					/>
					<button className="w3-button w3-section w3-red w3-ripple">
						Sign in
					</button>
				</form>
				<p>
					You are new here, please{' '}
					<Link className="w3-text-red" to="/register">
						register
					</Link>
				</p>
			</div>
		)
	}
}
export default Login
