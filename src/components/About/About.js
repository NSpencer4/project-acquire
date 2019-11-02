import React, {Component} from 'react';

class About extends Component {

    render() {
        return (
            <section className="section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                             data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                            <div className="features-item">
                                <div className="features-icon">
                                    <h2>01</h2>
                                    <img src="assets/images/features-icon-1.png" alt=""></img>
                                    <h4>Trend Analysis</h4>
                                    <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec
                                        consectetur diam.</p>
                                    <a href="#testimonials" className="main-button">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                             data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
                            <div className="features-item">
                                <div className="features-icon">
                                    <h2>02</h2>
                                    <img src="assets/images/features-icon-2.png" alt=""></img>
                                    <h4>Site Optimization</h4>
                                    <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec
                                        consectetur diam.</p>
                                    <a href="#testimonials" className="main-button">
                                        Discover More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                             data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                            <div className="features-item">
                                <div className="features-icon">
                                    <h2>03</h2>
                                    <img src="assets/images/features-icon-3.png" alt=""></img>
                                    <h4>Email Design</h4>
                                    <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec
                                        consectetur diam.</p>
                                    <a href="#testimonials" className="main-button">
                                        More Detail
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;