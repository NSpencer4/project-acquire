import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
          <nav className="navbar navbar-light bg-light static-top">
              <div className="container">
                  <a className="navbar-brand" href="/home">Start Bootstrap</a>
                  <a className="btn btn-primary" href="/home">Sign In</a>
              </div>
          </nav>
        );
    }
}

export default Navbar;