import React from "react";
import {Button} from "reactstrap";
import './Navbar.css';
import {useAuth0} from "../../react-auth0-spa";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const Navbar = () => {
    const classes = useStyles();
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="nav-container">
            <AppBar className="container" position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Sigmal
                    </Typography>
                    <Button color="inherit" onClick={() => loginWithRedirect({})}>
                        <span className="nav-link-inner--text">Login</span>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
