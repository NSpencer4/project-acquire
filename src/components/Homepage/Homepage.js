import React, {Component} from 'react';
import './Homepage.css';
import {Box} from '@material-ui/core';

class Homepage extends Component {

	render() {
		return (
			<div className="Homepage">
				<header className="App-header">
					<h1>Project Acquire</h1>
				</header>
				<Box>
					<div>In Progress</div>
				</Box>
			</div>
		);
	}
}

export default Homepage;