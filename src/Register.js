// React --------------------------------
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cookie from 'react-cookies'

// axsios --------------------------------
import axios from './axios'
// CSS style sheet ----------------------
import './Welcome.css'

class Register extends Component {
	constructor() {
		super()
		this.state = {
			first: '',
			last: '',
			email: '',
			password: ''
		}
		this.onChange = this.onChange.bind(this)
		this.onRegister = this.onRegister.bind(this)
	}

	componentDidMount() {
		console.log('inside register, componentDidMount', this.state)
	}

	onChange(e) {
		this.setState(
			{
				[e.target.name]: e.target.value
			}
		)
	}

	onRegister(e) {
		e.preventDefault()
		axios
			.post('/register', this.state)
			.then(resp => {
				if (resp.data.success) {
					this.setState({
						success: resp.data.success,
						userId: resp.data.userId,
						first: resp.data.first,
						last: resp.data.last,
						email: resp.data.email
					})
					cookie.save('userId', this.state.userId, { path: '/' })
					cookie.save('first', this.state.first, { path: '/' })
					cookie.save('last', this.state.last, { path: '/' })
					cookie.save('email', this.state.email, { path: '/' })
					window.location.replace('/')
				} else {
					this.setState({
						error: true
					})
				}
			})
			.catch(function(err) {
				console.log(err)
			})
	}

	componentWillUnmount() {
		this.setState({
			first: '',
			last: '',
			email: '',
			password: ''
		})
	}

	render() {
		return (
			<div className="form w3-container w3-padding">
				{this.state.error && <div>error</div>}
				<h2 className="">Create new account</h2>
				<form onSubmit={this.onRegister} method="post">
					<input
						className="w3-input w3-margin-bottom"
						type="text"
						name="first"
						onChange={this.onChange}
						placeholder="first name"
						// value="de"
					/>
					<input
						className="w3-input w3-margin-bottom"
						type="text"
						name="last"
						onChange={this.onChange}
						placeholder="last name"
						// value="de"
					/>
					<input
						className="w3-input w3-margin-bottom"
						type="email"
						name="email"
						onChange={this.onChange}
						placeholder="email"
						// value="de@de"
					/>
					<input
						className="w3-input"
						type="password"
						name="password"
						onChange={this.onChange}
						placeholder="password"
						// value="de"
					/>
					<button className="w3-button w3-section w3-red w3-ripple">
						Register new Account
					</button>
				</form>
				<p>
					You have an account please{' '}
					<Link className="w3-text-red" to="/login">
						Sign in
					</Link>
				</p>
			</div>
		)
	}
}
export default Register
