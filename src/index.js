// React --------------------------------
import React from 'react'
import ReactDOM from 'react-dom'
// importing custom components ----------
import App from './App'
import Welcome from './Welcome'
// CSS style sheet ----------------------
// import { Cookies, CookiesProvider } from "react-cookie";
import cookie from 'react-cookies'

// import cookie from "react-cookie";
import './index.css'
let component

// component = <Welcome />;
// component = <App />;
// cookie.save("userId", 34, { path: "/" });
// var firstName = cookie.load("firstName");
// var lastName = cookie.load("lastName");
// var allCookie = cookie.loadAll();
// console.log("2 ", allCookie);
// console.log("3 ", firstName);
// console.log("4 ", lastName);
// console.log("index.js", cookie.load("session.sig"));
// console.log("index.js");

const userId = cookie.load('userId')
if (userId) {
	console.log('index userId true: ', userId)
	component = <App />
} else {
	console.log('index userId false: ', userId)
	component = <Welcome />
}
ReactDOM.render(component, document.getElementById('root'))

// if (window.session) {
//     component = <App />;
// } else {
//     component = <Welcome />;
// }
