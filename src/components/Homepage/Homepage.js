import React, {Component} from 'react';
import './Homepage.css';
import Button from '@material-ui/core/Button';

class Homepage extends Component {

	render() {
		return (
			<div id="home-container" className="Homepage">
				<section id="banner-text">
					<h5>Customer Acquisition Analytics</h5>
					<h6>to empower your business</h6>
					<Button id="try-it-btn">Try It Out</Button>
				</section>
			</div>
		);
	}
}

export default Homepage;