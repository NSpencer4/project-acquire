import React, {Component} from 'react';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends Component {

	render() {
		return (
				<header className="App-header">
					<div>
						<AppBar position="static">
							<Toolbar>
								<IconButton edge="start" color="inherit" aria-label="menu">
									<MenuIcon />
								</IconButton>
								<Typography variant="Project Acquire">
									Project Acquire
								</Typography>
								<Button id="login-btn" color="inherit">Login</Button>
							</Toolbar>
						</AppBar>
					</div>
				</header>
		);
	}
}

export default Navbar;