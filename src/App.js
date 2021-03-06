import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Homepage from './components/Homepage/Homepage';
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<Router>
			<Route exact path="/">
				<Navbar/>
				<Homepage/>
			</Route>
			<Route path="/home">
				<Navbar/>
				<Homepage/>
			</Route>
			<Route path="/login">
				<Login/>
			</Route>
			<Route path="/sign-up">
				<SignUp/>
			</Route>
			<Route path="/dashboard">
				<Dashboard/>
			</Route>
		</Router>
	);
}

export default App;
