import React, {Component} from 'react';
import './Homepage.css';
import Footer from "../Footer/Footer";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import Promo from "../Promo/Promo";
import Testimonials from "../Testimonials/Testimonials";

class Homepage extends Component {

    render() {
        return (
            <section id="home-container" className="Homepage">
                <Welcome/>
                <About/>
                <div class="left-image-decor"></div>
                <Promo/>
                <div class="right-image-decor"></div>
                <Testimonials/>
               <Footer/>
            </section>
        );
    }
}

export default Homepage;