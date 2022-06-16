// React --------------------------------
import React, { Component } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
// importing custom components --------------------------
import Register from './Register'
import Login from './Login'
import cookie from 'react-cookies'

// CSS style sheet ----------------------
import './Welcome.css'

class Welcome extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.logout = this.logout.bind(this)
	}

	componentDidMount() {
		fetch('/users')
			.then(res => {
				// console.log("after fetch users", res);
				return res.json()
			})
			.then(users => {
				// console.log(users);
				this.setState({ users })
			})
		console.log('welcome, componentDidMount state:', this.state)
	}

	logout() {
		cookie.remove('userId', { path: '/' })
		cookie.remove('first', { path: '/' })
		cookie.remove('last', { path: '/' })
		cookie.remove('email', { path: '/' })
		window.location.replace('/')
	}

	render() {
		return (
			<HashRouter>
				<React.Fragment>
					{/* header --------------------------------------- */}
					<header className="w3-bar">
						<a href="/" className="w3-left">
							<img
								className="w3-margin-left"
								src="./logo-white.svg"
								alt="Mountin view"
							/>
						</a>
						<Link
							to="/login"
							className="w3-text-white w3-right w3-margin-right"
						>
							Login
						</Link>

						<Link
							to="/register"
							className="w3-text-white w3-right w3-margin-right"
						>
							Register
						</Link>
						<Link
							to="/logout"
							className="w3-text-white w3-right w3-margin-right"
							onClick={this.logout}
						>
							Logout
						</Link>
					</header>
					{/* main content register and login forms ------------------- */}
					<main className="content ">
						<h1 className="w3-center w3-margin-bottom">
							Join hocaboo
						</h1>
						{/* {this.state.users.map(user => (
							<div key={user.id}>
								user: {user.name} Password: {user.password}
							</div>
						))} */}
						<article className="">
							<Route exact path="/login" component={Login} />
							<Route
								exact
								path="/register"
								component={Register}
							/>
						</article>
					</main>
				</React.Fragment>
			</HashRouter>
		)
	}
}

export default Welcome
