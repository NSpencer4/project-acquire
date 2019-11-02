import React, {Component} from 'react';
import './Navbar.css';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

class Navbar extends Component {

    render() {
        return (
            <div className="App-header">
                <div id="preloader">
                    <div className="jumper">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <header className="header-area header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">
                                    <a href="index.html" className="logo">
                                        Lava
                                    </a>
                                    <ul className="nav">
                                        <li className="scroll-to-section"><a href="/welcome"
                                                                             className="menu-item">Home</a></li>
                                        <li className="scroll-to-section"><a href="/about"
                                                                             className="menu-item">About</a></li>
                                        <li className="scroll-to-section"><a href="/testimonials"
                                                                             className="menu-item">Testimonials</a>
                                        </li>
                                        <li className="submenu">
                                            <a href="/login">Drop Down</a>
                                            <ul>
                                                <li><a href="/login" className="menu-item">About Us</a></li>
                                                <li><a href="/login" className="menu-item">Features</a></li>
                                                <li><a href="/login" className="menu-item">FAQ's</a></li>
                                                <li><a href="/login" className="menu-item">Blog</a></li>
                                            </ul>
                                        </li>
                                        <li className="scroll-to-section"><a href="/contact-us" className="menu-item">Contact
                                            Us</a></li>
                                        <li className="scroll-to-section">
                                            <Link color="inherit" href="/login">
												Login
                                            </Link>
                                        </li>
                                    </ul>
                                    <a href="/login" className='menu-trigger'>
                                        <span>Menu</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Navbar;