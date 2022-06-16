// React --------------------------------
import React, { Component } from 'react'
// import { Link } from "react-router-dom";

import cookie from 'react-cookies'

// CSS style sheet ----------------------
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.logout = this.logout.bind(this)
	}

	logout() {
		cookie.remove('userId', { path: '/' })
		window.location.replace('/')
	}

	componentDidMount() {
		const userId = cookie.load('userId')
		const first = cookie.load('first')
		const last = cookie.load('last')
		const email = cookie.load('email')
		this.setState({
			userId,
			first,
			last,
			email
		})
		console.log('welcome, componentDidMount state:', this.state)
	}

	render() {
		return (
			<div className="">
				<h1 className="">You are loged in</h1>
				<button
					className="w3-red w3-text-white w3-right w3-margin-right"
					onClick={this.logout}
				>
					Logout
				</button>
			</div>
		)
	}
}

export default App
