import React, {Component} from 'react';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

class Navbar extends Component {

	render() {
		return (
			<header className="App-header">
				<div>
					<AppBar position="static">
						<Toolbar>
							<Grid container direction="row" justify="center" alignItems="center">
								<Grid item sm={1}>
									<IconButton edge="start" color="inherit" aria-label="menu">
										<MenuIcon/>
									</IconButton>
								</Grid>
								<Grid item sm={6}>
									<Typography variant="h6">
										Project Acquire
									</Typography>
									</Grid>
								<Grid item sm={4}>
									<Button id="login-btn" color="inherit">Login</Button>
								</Grid>
							</Grid>
						</Toolbar>
					</AppBar>
				</div>
			</header>
		);
	}
}

export default Navbar;