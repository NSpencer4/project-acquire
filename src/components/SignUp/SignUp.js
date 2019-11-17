import React from 'react';

export default function SignUp() {
    return (
      <section className="section section-components login-form">
          <div className="container login-container">
              <h2 className="mb-5">
                  <span>Sign Up</span>
              </h2>
              <div className="container-fluid glow-border">
                  <div className="row align-middle align-items-center justify-content-center">
                      <div className="col-md-5 block-cta align-middle">
                          <form className="form" method="" action="">
                              <div className="form-group bmd-form-group">
                                  <div className="input-group">
                                      <input type="text" className="form-control" placeholder="Email" autoComplete="off"
                                             style={{cursor: "auto"}}/>
                                  </div>
                              </div>
                              <div className="form-group bmd-form-group">
                                  <div className="input-group">
                                      <input type="password" className="form-control" placeholder="Password" autoComplete="off"
                                             style={{cursor: "auto"}}/>
                                  </div>
                              </div>
                              <input type="submit" className="glow-btn" value="Sign Up"></input>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
}