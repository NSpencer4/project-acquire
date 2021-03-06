import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
          <footer className="footer bg-light">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                          <ul className="list-inline mb-2">
                              <li className="list-inline-item">
                                  <a href="/home">About</a>
                              </li>
                              <li className="list-inline-item">&sdot;</li>
                              <li className="list-inline-item">
                                  <a href="/home">Contact</a>
                              </li>
                              <li className="list-inline-item">&sdot;</li>
                              <li className="list-inline-item">
                                  <a href="/home">Terms of Use</a>
                              </li>
                              <li className="list-inline-item">&sdot;</li>
                              <li className="list-inline-item">
                                  <a href="/home">Privacy Policy</a>
                              </li>
                          </ul>
                          <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2019. All Rights Reserved.</p>
                      </div>
                      <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                          <ul className="list-inline mb-0">
                              <li className="list-inline-item mr-3">
                                  <a href="/home">
                                      <i className="fab fa-facebook fa-2x fa-fw"></i>
                                  </a>
                              </li>
                              <li className="list-inline-item mr-3">
                                  <a href="/home">
                                      <i className="fab fa-twitter-square fa-2x fa-fw"></i>
                                  </a>
                              </li>
                              <li className="list-inline-item">
                                  <a href="/home">
                                      <i className="fab fa-instagram fa-2x fa-fw"></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </footer>
        );
    }
}

export default Footer;