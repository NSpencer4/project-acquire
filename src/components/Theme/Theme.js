// import React, {Component} from 'react';
//
// class Theme extends Component {
//
// 	render() {
// 		return (
// 			<body>
// 			<header className="header-global">
// 				<nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
// 					<div className="container">
// 						<a className="navbar-brand mr-lg-5" href="/home">
// 							<img alt="image" src="./assets/img/brand/white.png"/>
// 						</a>
// 						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global"
// 										aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
// 							<span className="navbar-toggler-icon"></span>
// 						</button>
// 						<div className="navbar-collapse collapse" id="navbar_global">
// 							<div className="navbar-collapse-header">
// 								<div className="row">
// 									<div className="col-6 collapse-brand">
// 										<a href="/home">
// 											<img alt="image" src="./assets/img/brand/blue.png"/>
// 										</a>
// 									</div>
// 									<div className="col-6 collapse-close">
// 										<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global"
// 														aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
// 											<span></span>
// 											<span></span>
// 										</button>
// 									</div>
// 								</div>
// 							</div>
// 							<ul className="navbar-nav navbar-nav-hover align-items-lg-center">
// 								<li className="nav-item dropdown">
// 									<a href="/home" className="nav-link" data-toggle="dropdown" role="button">
// 										<i className="ni ni-ui-04 d-lg-none"></i>
// 										<span className="nav-link-inner--text">Components</span>
// 									</a>
// 									<div className="dropdown-menu dropdown-menu-xl">
// 										<div className="dropdown-menu-inner">
// 											<a href="https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html"
// 												 className="media d-flex align-items-center">
// 												<div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
// 													<i className="ni ni-spaceship"></i>
// 												</div>
// 												<div className="media-body ml-3">
// 													<h6 className="heading text-primary mb-md-1">Getting started</h6>
// 													<p className="description d-none d-md-inline-block mb-0">Learn how to use Argon compiling
// 														Scss, change brand colors and more.</p>
// 												</div>
// 											</a>
// 											<a href="https://demos.creative-tim.com/argon-design-system/docs/foundation/colors.html"
// 												 className="media d-flex align-items-center">
// 												<div className="icon icon-shape bg-gradient-success rounded-circle text-white">
// 													<i className="ni ni-palette"></i>
// 												</div>
// 												<div className="media-body ml-3">
// 													<h6 className="heading text-primary mb-md-1">Foundation</h6>
// 													<p className="description d-none d-md-inline-block mb-0">Learn more about colors, typography,
// 														icons and the grid system we used for Argon.</p>
// 												</div>
// 											</a>
// 											<a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
// 												 className="media d-flex align-items-center">
// 												<div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
// 													<i className="ni ni-ui-04"></i>
// 												</div>
// 												<div className="media-body ml-3">
// 													<h5 className="heading text-warning mb-md-1">Components</h5>
// 													<p className="description d-none d-md-inline-block mb-0">Browse our 50 beautiful handcrafted
// 														components offered in the Free version.</p>
// 												</div>
// 											</a>
// 										</div>
// 									</div>
// 								</li>
// 								<li className="nav-item dropdown">
// 									<a href="/home" className="nav-link" data-toggle="dropdown" role="button">
// 										<i className="ni ni-collection d-lg-none"></i>
// 										<span className="nav-link-inner--text">Examples</span>
// 									</a>
// 									<div className="dropdown-menu">
// 										<a href="./examples/landing.html" className="dropdown-item">Landing</a>
// 										<a href="./examples/profile.html" className="dropdown-item">Profile</a>
// 										<a href="./examples/login.html" className="dropdown-item">Login</a>
// 										<a href="./examples/register.html" className="dropdown-item">Register</a>
// 									</div>
// 								</li>
// 							</ul>
// 							<ul className="navbar-nav align-items-lg-center ml-lg-auto">
// 								<li className="nav-item">
// 									<a className="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank"
// 										 data-toggle="tooltip" title="Like us on Facebook">
// 										<i className="fa fa-facebook-square"></i>
// 										<span className="nav-link-inner--text d-lg-none">Facebook</span>
// 									</a>
// 								</li>
// 								<li className="nav-item">
// 									<a className="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
// 										 target="_blank" data-toggle="tooltip" title="Follow us on Instagram">
// 										<i className="fa fa-instagram"></i>
// 										<span className="nav-link-inner--text d-lg-none">Instagram</span>
// 									</a>
// 								</li>
// 								<li className="nav-item">
// 									<a className="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank"
// 										 data-toggle="tooltip" title="Follow us on Twitter">
// 										<i className="fa fa-twitter-square"></i>
// 										<span className="nav-link-inner--text d-lg-none">Twitter</span>
// 									</a>
// 								</li>
// 								<li className="nav-item">
// 									<a className="nav-link nav-link-icon"
// 										 href="https://github.com/creativetimofficial/argon-design-system" target="_blank"
// 										 data-toggle="tooltip" title="Star us on Github">
// 										<i className="fa fa-github"></i>
// 										<span className="nav-link-inner--text d-lg-none">Github</span>
// 									</a>
// 								</li>
// 								<li className="nav-item d-none d-lg-block ml-lg-4">
// 									<a href="https://www.creative-tim.com/product/argon-design-system" target="_blank"
// 										 className="btn btn-neutral btn-icon">
//                 <span className="btn-inner--icon">
//                   <i className="fa fa-cloud-download mr-2"></i>
//                 </span>
// 										<span className="nav-link-inner--text">Download</span>
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 				</nav>
// 			</header>
// 			<main>
// 				<div className="position-relative">
// 					<section className="section section-lg section-hero section-shaped">
// 						<div className="shape shape-style-1 shape-primary">
// 							<span className="span-150"></span>
// 							<span className="span-50"></span>
// 							<span className="span-50"></span>
// 							<span className="span-75"></span>
// 							<span className="span-100"></span>
// 							<span className="span-75"></span>
// 							<span className="span-50"></span>
// 							<span className="span-100"></span>
// 							<span className="span-50"></span>
// 							<span className="span-100"></span>
// 						</div>
// 						<div className="container shape-container d-flex align-items-center py-lg">
// 							<div className="col px-0">
// 								<div className="row align-items-center justify-content-center">
// 									<div className="col-lg-6 text-center">
// 										<img alt="image" src="./assets/img/brand/white.png" style={{width: '200px'}} className="img-fluid"/>
// 										<p className="lead text-white">A beautiful Design System for Bootstrap 4. It's Free and Open
// 											Source.</p>
// 										<div className="btn-wrapper mt-5">
// 											<a href="https://www.creative-tim.com/product/argon-design-system"
// 												 className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0">
// 												<span className="btn-inner--icon"><i className="ni ni-cloud-download-95"></i></span>
// 												<span className="btn-inner--text">Download HTML</span>
// 											</a>
// 											<a href="https://github.com/creativetimofficial/argon-design-system"
// 												 className="btn btn-lg btn-github btn-icon mb-3 mb-sm-0" target="_blank">
// 												<span className="btn-inner--icon"><i className="fa fa-github"></i></span>
// 												<span className="btn-inner--text"><span className="text-warning">Star us</span> on Github</span>
// 											</a>
// 										</div>
// 										<div className="mt-5">
// 											<small className="text-white font-weight-bold mb-0 mr-2">*proudly coded by</small>
// 											<img alt="image" src="./assets/img/brand/creativetim-white-slim.png" style={{height: '28px'}}/>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="separator separator-bottom separator-skew zindex-100">
// 							<svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
// 									 xmlns="http://www.w3.org/2000/svg">
// 								<polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
// 							</svg>
// 						</div>
// 					</section>
// 				</div>
// 				<section className="section section-components pb-0" id="section-components">
// 					<div className="container">
// 						<div className="row justify-content-center">
// 							<div className="col-lg-12">
// 								<h2 className="mb-5">
// 									<span>Basic Elements</span>
// 								</h2>
// 								<h3 className="h4 text-success font-weight-bold mb-4">Buttons</h3>
// 								<div>
// 									<button className="btn btn-primary" type="button">Button</button>
// 									<button className="btn btn-icon btn-3 btn-primary" type="button">
// 										<span className="btn-inner--icon"><i className="ni ni-bag-17"></i></span>
// 										<span className="btn-inner--text">With icon</span>
// 									</button>
// 									<button className="btn btn-icon btn-2 btn-primary" type="button">
// 										<span className="btn-inner--icon"><i className="ni ni-bag-17"></i></span>
// 									</button>
// 									<div className="mb-3 mt-5">
// 										<small className="text-uppercase font-weight-bold">Pick your size</small>
// 									</div>
// 									<button className="btn btn-sm btn-primary" type="button">Small</button>
// 									<button className="btn btn-1 btn-primary" type="button">Regular</button>
// 									<button className="btn btn-lg btn-primary" type="button">Large Button</button>
// 								</div>
// 								<div className="mb-3 mt-5">
// 									<small className="text-uppercase font-weight-bold">Pick your color</small>
// 								</div>
// 								<button className="btn btn-1 btn-primary" type="button">Primary</button>
// 								<button className="btn btn-1 btn-info" type="button">Info</button>
// 								<button className="btn btn-1 btn-success" type="button">Success</button>
// 								<button className="btn btn-1 btn-warning" type="button">Warning</button>
// 								<button className="btn btn-1 btn-danger" type="button">Danger</button>
// 								<button className="btn btn-1 btn-neutral" type="button">Neutral</button>
// 								<div className="mb-3 mt-5">
// 									<small className="text-uppercase font-weight-bold">Outline</small>
// 								</div>
// 								<button className="btn btn-1 btn-outline-primary" type="button">Outline-primary</button>
// 								<button className="btn btn-1 btn-outline-info" type="button">Outline-info</button>
// 								<button className="btn btn-1 btn-outline-success" type="button">Outline-success</button>
// 								<button className="btn btn-1 btn-outline-warning" type="button">Outline-warning</button>
// 								<button className="btn btn-1 btn-outline-danger" type="button">Outline-danger</button>
// 								<div className="mb-3 mt-5">
// 									<small className="text-uppercase font-weight-bold">Links</small>
// 								</div>
// 								<a href="/home" className="btn btn-link text-default">Default</a>
// 								<a href="/home" className="btn btn-link text-primary">Primary</a>
// 								<a href="/home" className="btn btn-link text-info">Info</a>
// 								<a href="/home" className="btn btn-link text-success">Success</a>
// 								<a href="/home" className="btn btn-link text-warning">Warning</a>
// 								<a href="/home" className="btn btn-link text-danger">Danger</a>
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 				<section className="section pb-0 section-components">
// 					<div className="container mb-5">
// 						<h3 className="h4 text-success font-weight-bold mb-4">Inputs</h3>
// 						<div className="mb-3">
// 							<small className="text-uppercase font-weight-bold">Form controls</small>
// 						</div>
// 						<div className="row">
// 							<div className="col-lg-4 col-sm-6">
// 								<div className="form-group">
// 									<input type="text" placeholder="Regular" className="form-control"/>
// 								</div>
// 								<div className="form-group">
// 									<div className="input-group mb-4">
// 										<div className="input-group-prepend">
// 											<span className="input-group-text"><i className="ni ni-zoom-split-in"></i></span>
// 										</div>
// 										<input className="form-control" placeholder="Search" type="text"></input>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="col-lg-4 col-sm-6">
// 								<div className="form-group">
// 									<input type="text" placeholder="Regular" className="form-control" disabled/>
// 								</div>
// 								<div className="form-group">
// 									<div className="input-group mb-4">
// 										<input className="form-control" placeholder="Birthday" type="text"></input>
// 										<div className="input-group-append">
// 											<span className="input-group-text"><i className="ni ni-zoom-split-in"></i></span>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="col-lg-4 col-sm-6">
// 								<div className="form-group has-success">
// 									<input type="text" placeholder="Success" className="form-control is-valid"/>
// 								</div>
// 								<div className="form-group has-danger">
// 									<input type="email" placeholder="Error Input" className="form-control is-invalid"/>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="py-5 bg-secondary">
// 						<div className="container">
// 							<div className="mb-3">
// 								<small className="text-uppercase font-weight-bold">Form controls (alternative)</small>
// 							</div>
// 							<div className="row">
// 								<div className="col-lg-4 col-sm-6">
// 									<div className="form-group">
// 										<input type="text" placeholder="Regular" className="form-control form-control-alternative"/>
// 									</div>
// 									<div className="form-group">
// 										<div className="input-group input-group-alternative mb-4">
// 											<div className="input-group-prepend">
// 												<span className="input-group-text"><i className="ni ni-zoom-split-in"></i></span>
// 											</div>
// 											<input className="form-control" placeholder="Search" type="text"></input>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="col-lg-4 col-sm-6">
// 									<div className="form-group">
// 										<input type="text" placeholder="Regular" className="form-control form-control-alternative "
// 													 disabled/>
// 									</div>
// 									<div className="form-group">
// 										<div className="input-group input-group-alternative mb-4">
// 											<input className="form-control" placeholder="Birthday" type="text"></input>
// 											<div className="input-group-append">
// 												<span className="input-group-text"><i className="ni ni-zoom-split-in"></i></span>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="col-lg-4 col-sm-6">
// 									<div className="form-group has-success">
// 										<input type="text" placeholder="Success"
// 													 className="form-control form-control-alternative is-valid"/>
// 									</div>
// 									<div className="form-group has-danger">
// 										<input type="email" placeholder="Error Input"
// 													 className="form-control form-control-alternative is-invalid"/>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 				<section className="section">
// 					<div className="container">
// 						<div className="row">
// 							<div className="col-lg-3 col-md-6">
// 								<div className="mb-3">
// 									<small className="text-uppercase font-weight-bold">Checkboxes</small>
// 								</div>
// 								<div className="custom-control custom-checkbox mb-3">
// 									<input className="custom-control-input" id="customCheck1" type="checkbox"></input>
// 									<label className="custom-control-label" for="customCheck1">
// 										<span>Unchecked</span>
// 									</label>
// 								</div>
// 								<div className="custom-control custom-checkbox mb-3">
// 									<input className="custom-control-input" id="customCheck2" type="checkbox" checked></input>
// 									<label className="custom-control-label" for="customCheck2">
// 										<span>Checked</span>
// 									</label>
// 								</div>
// 								<div className="custom-control custom-checkbox mb-3">
// 									<input className="custom-control-input" id="customCheck3" type="checkbox" disabled></input>
// 									<label className="custom-control-label" for="customCheck3">
// 										<span>Disabled Unchecked</span>
// 									</label>
// 								</div>
// 								<div className="custom-control custom-checkbox mb-3">
// 									<input className="custom-control-input" id="customCheck4" type="checkbox" checked disabled></input>
// 									<label className="custom-control-label" for="customCheck4">
// 										<span>Disabled Checked</span>
// 									</label>
// 								</div>
// 							</div>
// 							<div className="col-lg-3 col-sm-6 mt-4 mt-md-0">
// 								<div className="mb-3">
// 									<small className="text-uppercase font-weight-bold">Radios</small>
// 								</div>
// 								<div className="custom-control custom-radio mb-3">
// 									<input name="custom-radio-1" className="custom-control-input" id="customRadio1" type="radio"></input>
// 									<label className="custom-control-label" for="customRadio1"><span>Unchecked</span></label>
// 								</div>
// 								<div className="custom-control custom-radio mb-3">
// 									<input name="custom-radio-1" className="custom-control-input" id="customRadio2" checked
// 												 type="radio"></input>
// 									<label className="custom-control-label" for="customRadio2"><span>Checked</span></label>
// 								</div>
// 								<div className="custom-control custom-radio mb-3">
// 									<input name="custom-radio-2" className="custom-control-input" id="customRadio3" disabled
// 												 type="radio"></input>
// 									<label className="custom-control-label" for="customRadio3"><span>Disabled unchecked</span></label>
// 								</div>
// 								<div className="custom-control custom-radio mb-3">
// 									<input name="custom-radio-2" className="custom-control-input" id="customRadio4" checked disabled
// 												 type="radio"></input>
// 									<label className="custom-control-label" for="customRadio4"><span>Disabled checkbox</span></label>
// 								</div>
// 							</div>
// 							<div className="col-lg-3 col-sm-6 mt-4 mt-md-0">
// 								<div className="mb-3">
// 									<small className="text-uppercase font-weight-bold">Toggle buttons</small>
// 								</div>
// 								<label className="custom-toggle">
// 									<input type="checkbox"></input>
// 									<span className="custom-toggle-slider rounded-circle"></span>
// 								</label>
// 								<span className="clearfix"></span>
// 								<label className="custom-toggle">
// 									<input type="checkbox" checked></input>
// 									<span className="custom-toggle-slider rounded-circle"></span>
// 								</label>
// 							</div>
// 							<div className="col-lg-3 col-sm-6 mt-4 mt-md-0">
// 								<div className="mb-3">
// 									<small className="text-uppercase font-weight-bold">Sliders</small>
// 								</div>
// 								<div className="input-slider-container">
// 									<div id="input-slider" className="input-slider" data-range-value-min="100"
// 											 data-range-value-max="500"></div>
// 									<div className="row mt-3 d-none">
// 										<div className="col-6">
// 											<span id="input-slider-value" className="range-slider-value" data-range-value-low="100"></span>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="mt-5">
// 									<div id="input-slider-range" data-range-value-min="100" data-range-value-max="500"></div>
// 									<div className="row d-none">
// 										<div className="col-6">
// 											<span className="range-slider-value value-low" data-range-value-low="200"
// 														id="input-slider-range-value-low"></span>
// 										</div>
// 										<div className="col-6 text-right">
// 											<span className="range-slider-value value-high" data-range-value-high="400"
// 														id="input-slider-range-value-high"></span>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="row justify-content-center mt-md">
// 							<div className="col-lg-12">
// 								<h3 className="h4 text-success font-weight-bold mb-4">Menu</h3>
// 								<div className="row">
// 									<div className="col-lg-6">
// 										<div className="mb-3">
// 											<small className="text-uppercase font-weight-bold">With text</small>
// 										</div>
// 										<nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
// 											<div className="container">
// 												<a className="navbar-brand" href="/home">Menu</a>
// 												<button className="navbar-toggler" type="button" data-toggle="collapse"
// 																data-target="#nav-inner-primary" aria-controls="nav-inner-primary" aria-expanded="false"
// 																aria-label="Toggle navigation">
// 													<span className="navbar-toggler-icon"></span>
// 												</button>
// 												<div className="collapse navbar-collapse" id="nav-inner-primary">
// 													<div className="navbar-collapse-header">
// 														<div className="row">
// 															<div className="col-6 collapse-brand">
// 																<a href="/home">
// 																	<img alt="image" src="./assets/img/brand/blue.png"></img>
// 																</a>
// 															</div>
// 															<div className="col-6 collapse-close">
// 																<button type="button" className="navbar-toggler" data-toggle="collapse"
// 																				data-target="#nav-inner-primary" aria-controls="nav-inner-primary"
// 																				aria-expanded="false" aria-label="Toggle navigation">
// 																	<span></span>
// 																	<span></span>
// 																</button>
// 															</div>
// 														</div>
// 													</div>
// 													<ul className="navbar-nav ml-lg-auto">
// 														<li className="nav-item">
// 															<a className="nav-link" href="/home">Discover <span
// 																className="sr-only">(current)</span></a>
// 														</li>
// 														<li className="nav-item">
// 															<a className="nav-link" href="/home">Profile</a>
// 														</li>
// 														<li className="nav-item dropdown">
// 															<a className="nav-link" href="/home" id="nav-inner-primary_dropdown_1" role="button"
// 																 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
// 															<div className="dropdown-menu dropdown-menu-right"
// 																	 aria-labelledby="nav-inner-primary_dropdown_1">
// 																<a className="dropdown-item" href="/home">Action</a>
// 																<a className="dropdown-item" href="/home">Another action</a>
// 																<div className="dropdown-divider"></div>
// 																<a className="dropdown-item" href="/home">Something else here</a>
// 															</div>
// 														</li>
// 													</ul>
// 												</div>
// 											</div>
// 										</nav>
// 									</div>
// 									<div className="col-lg-6 mt-4 mt-lg-0">
// 										<div className="mb-3">
// 											<small className="text-uppercase font-weight-bold">With icons</small>
// 										</div>
// 										<nav className="navbar navbar-expand-lg navbar-dark bg-success rounded">
// 											<div className="container">
// 												<a className="navbar-brand" href="/home">Menu</a>
// 												<button className="navbar-toggler" type="button" data-toggle="collapse"
// 																data-target="#nav-inner-success" aria-controls="nav-inner-success" aria-expanded="false"
// 																aria-label="Toggle navigation">
// 													<span className="navbar-toggler-icon"></span>
// 												</button>
// 												<div className="collapse navbar-collapse" id="nav-inner-success">
// 													<div className="navbar-collapse-header">
// 														<div className="row">
// 															<div className="col-6 collapse-brand">
// 																<a href="/home">
// 																	<img alt="image" src="./assets/img/brand/blue.png"></img>
// 																</a>
// 															</div>
// 															<div className="col-6 collapse-close">
// 																<button type="button" className="navbar-toggler" data-toggle="collapse"
// 																				data-target="#nav-inner-success" aria-controls="nav-inner-success"
// 																				aria-expanded="false" aria-label="Toggle navigation">
// 																	<span></span>
// 																	<span></span>
// 																</button>
// 															</div>
// 														</div>
// 													</div>
// 													<ul className="navbar-nav ml-lg-auto">
// 														<li className="nav-item">
// 															<a className="nav-link nav-link-icon" href="/home">
// 																<i className="ni ni-favourite-28"></i>
// 																<span className="nav-link-inner--text d-lg-none">Discover</span>
// 															</a>
// 														</li>
// 														<li className="nav-item">
// 															<a className="nav-link nav-link-icon" href="/home">
// 																<i className="ni ni-notification-70"></i>
// 																<span className="nav-link-inner--text d-lg-none">Profile</span>
// 															</a>
// 														</li>
// 														<li className="nav-item dropdown">
// 															<a className="nav-link nav-link-icon" href="/home" id="nav-inner-success_dropdown_1"
// 																 role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 																<i className="ni ni-settings-gear-65"></i>
// 																<span className="nav-link-inner--text d-lg-none">Settings</span>
// 															</a>
// 															<div className="dropdown-menu dropdown-menu-right"
// 																	 aria-labelledby="nav-inner-success_dropdown_1">
// 																<a className="dropdown-item" href="/home">Action</a>
// 																<a className="dropdown-item" href="/home">Another action</a>
// 																<div className="dropdown-divider"></div>
// 																<a className="dropdown-item" href="/home">Something else here</a>
// 															</div>
// 														</li>
// 													</ul>
// 												</div>
// 											</div>
// 										</nav>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 				<section className="">
// 					<div className="container">
// 						<h2 className="mb-5">
// 							<span>Navbars</span>
// 						</h2>
// 					</div>
// 					<nav className="navbar navbar-expand-lg navbar-dark bg-default">
// 						<div className="container">
// 							<a className="navbar-brand" href="/home">Default Color</a>
// 							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default"
// 											aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
// 								<span className="navbar-toggler-icon"></span>
// 							</button>
// 							<div className="collapse navbar-collapse" id="navbar-default">
// 								<div className="navbar-collapse-header">
// 									<div className="row">
// 										<div className="col-6 collapse-brand">
// 											<a href="/home">
// 												<img alt="image" src="./assets/img/brand/blue.png"/>
// 											</a>
// 										</div>
// 										<div className="col-6 collapse-close">
// 											<button type="button" className="navbar-toggler" data-toggle="collapse"
// 															data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false"
// 															aria-label="Toggle navigation">
// 												<span></span>
// 												<span></span>
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 								<ul className="navbar-nav ml-lg-auto">
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="ni ni-favourite-28"></i>
// 											<span className="nav-link-inner--text d-lg-none">Discover</span>
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="ni ni-notification-70"></i>
// 											<span className="nav-link-inner--text d-lg-none">Profile</span>
// 										</a>
// 									</li>
// 									<li className="nav-item dropdown">
// 										<a className="nav-link nav-link-icon" href="/home" id="navbar-default_dropdown_1" role="button"
// 											 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 											<i className="ni ni-settings-gear-65"></i>
// 											<span className="nav-link-inner--text d-lg-none">Settings</span>
// 										</a>
// 										<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
// 											<a className="dropdown-item" href="/home">Action</a>
// 											<a className="dropdown-item" href="/home">Another action</a>
// 											<div className="dropdown-divider"></div>
// 											<a className="dropdown-item" href="/home">Something else here</a>
// 										</div>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</nav>
// 					<nav className="navbar navbar-expand-lg navbar-dark bg-primary mt-4">
// 						<div className="container">
// 							<a className="navbar-brand" href="/home">Primary Color</a>
// 							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary"
// 											aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
// 								<span className="navbar-toggler-icon"></span>
// 							</button>
// 							<div className="collapse navbar-collapse" id="navbar-primary">
// 								<div className="navbar-collapse-header">
// 									<div className="row">
// 										<div className="col-6 collapse-brand">
// 											<a href="/home">
// 												<img alt="image" src="./assets/img/brand/blue.png"/>
// 											</a>
// 										</div>
// 										<div className="col-6 collapse-close">
// 											<button type="button" className="navbar-toggler" data-toggle="collapse"
// 															data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false"
// 															aria-label="Toggle navigation">
// 												<span></span>
// 												<span></span>
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 								<ul className="navbar-nav ml-lg-auto">
// 									<li className="nav-item">
// 										<a className="nav-link" href="/home">Discover <span className="sr-only">(current)</span></a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link" href="/home">Profile</a>
// 									</li>
// 									<li className="nav-item dropdown">
// 										<a className="nav-link" href="/home" id="navbar-primary_dropdown_1" role="button"
// 											 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
// 										<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1">
// 											<a className="dropdown-item" href="/home">Action</a>
// 											<a className="dropdown-item" href="/home">Another action</a>
// 											<div className="dropdown-divider"></div>
// 											<a className="dropdown-item" href="/home">Something else here</a>
// 										</div>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</nav>
// 					<nav className="navbar navbar-expand-lg navbar-dark bg-success mt-4">
// 						<div className="container">
// 							<a className="navbar-brand" href="/home">Success Color</a>
// 							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-success"
// 											aria-controls="navbar-success" aria-expanded="false" aria-label="Toggle navigation">
// 								<span className="navbar-toggler-icon"></span>
// 							</button>
// 							<div className="collapse navbar-collapse" id="navbar-success">
// 								<div className="navbar-collapse-header">
// 									<div className="row">
// 										<div className="col-6 collapse-brand">
// 											<a href="/home">
// 												<img alt="image" src="./assets/img/brand/blue.png"/>
// 											</a>
// 										</div>
// 										<div className="col-6 collapse-close">
// 											<button type="button" className="navbar-toggler" data-toggle="collapse"
// 															data-target="#navbar-success" aria-controls="navbar-success" aria-expanded="false"
// 															aria-label="Toggle navigation">
// 												<span></span>
// 												<span></span>
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 								<ul className="navbar-nav ml-lg-auto">
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="ni ni-favourite-28"></i>
// 											<span className="nav-link-inner--text d-lg-none">Favorites</span>
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="ni ni-planet"></i>
// 											<span className="nav-link-inner--text d-lg-none">Another action</span>
// 										</a>
// 									</li>
// 									<li className="nav-item dropdown">
// 										<a className="nav-link nav-link-icon" href="/home" id="navbar-success_dropdown_1" role="button"
// 											 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 											<i className="ni ni-settings-gear-65"></i>
// 											<span className="nav-link-inner--text d-lg-none">Settings</span>
// 										</a>
// 										<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-success_dropdown_1">
// 											<a className="dropdown-item" href="/home">Action</a>
// 											<a className="dropdown-item" href="/home">Another action</a>
// 											<div className="dropdown-divider"></div>
// 											<a className="dropdown-item" href="/home">Something else here</a>
// 										</div>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</nav>
// 					<nav className="navbar navbar-expand-lg navbar-dark bg-danger mt-4">
// 						<div className="container">
// 							<a className="navbar-brand" href="/home">Danger Color</a>
// 							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-danger"
// 											aria-controls="navbar-danger" aria-expanded="false" aria-label="Toggle navigation">
// 								<span className="navbar-toggler-icon"></span>
// 							</button>
// 							<div className="collapse navbar-collapse" id="navbar-danger">
// 								<div className="navbar-collapse-header">
// 									<div className="row">
// 										<div className="col-6 collapse-brand">
// 											<a href="/home">
// 												<img alt="image" src="./assets/img/brand/blue.png"/>
// 											</a>
// 										</div>
// 										<div className="col-6 collapse-close">
// 											<button type="button" className="navbar-toggler" data-toggle="collapse"
// 															data-target="#navbar-danger" aria-controls="navbar-danger" aria-expanded="false"
// 															aria-label="Toggle navigation">
// 												<span></span>
// 												<span></span>
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 								<ul className="navbar-nav ml-auto">
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="fa fa-facebook-square"></i>
// 											<span className="nav-link-inner--text d-lg-none">Facebook</span>
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="fa fa-twitter"></i>
// 											<span className="nav-link-inner--text d-lg-none">Twitter</span>
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="fa fa-google-plus"></i>
// 											<span className="nav-link-inner--text d-lg-none">Google +</span>
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="fa fa-instagram"></i>
// 											<span className="nav-link-inner--text d-lg-none">Instagram</span>
// 										</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</nav>
// 					<nav className="navbar navbar-expand-lg navbar-dark bg-warning mt-4">
// 						<div className="container">
// 							<a className="navbar-brand" href="/home">Warning Color</a>
// 							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-warning"
// 											aria-controls="navbar-warning" aria-expanded="false" aria-label="Toggle navigation">
// 								<span className="navbar-toggler-icon"></span>
// 							</button>
// 							<div className="collapse navbar-collapse" id="navbar-warning">
// 								<div className="navbar-collapse-header">
// 									<div className="row">
// 										<div className="col-6 collapse-brand">
// 											<a href="/home">
// 												<img alt="image" src="./assets/img/brand/blue.png"/>
// 											</a>
// 										</div>
// 										<div className="col-6 collapse-close">
// 											<button type="button" className="navbar-toggler" data-toggle="collapse"
// 															data-target="#navbar-warning" aria-controls="navbar-warning" aria-expanded="false"
// 															aria-label="Toggle navigation">
// 												<span></span>
// 												<span></span>
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 								<ul className="navbar-nav align-items-lg-center ml-lg-auto">
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="fa fa-facebook-square"></i>
// 											<span className="nav-link-inner--text d-lg-none">Share</span>
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="fa fa-twitter"></i>
// 											<span className="nav-link-inner--text d-lg-none">Tweet</span>
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="fa fa-pinterest"></i>
// 											<span className="nav-link-inner--text d-lg-none">Pin</span>
// 										</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</nav>
// 					<nav className="navbar navbar-expand-lg navbar-dark bg-info mt-4">
// 						<div className="container">
// 							<a className="navbar-brand" href="/home">Info Color</a>
// 							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-info"
// 											aria-controls="navbar-info" aria-expanded="false" aria-label="Toggle navigation">
// 								<span className="navbar-toggler-icon"></span>
// 							</button>
// 							<div className="collapse navbar-collapse" id="navbar-info">
// 								<div className="navbar-collapse-header">
// 									<div className="row">
// 										<div className="col-6 collapse-brand">
// 											<a href="/home">
// 												<img alt="image" src="./assets/img/brand/blue.png"/>
// 											</a>
// 										</div>
// 										<div className="col-6 collapse-close">
// 											<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-info"
// 															aria-controls="navbar-info" aria-expanded="false" aria-label="Toggle navigation">
// 												<span></span>
// 												<span></span>
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 								<ul className="navbar-nav ml-auto">
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="fa fa-facebook-square"></i>
// 											<span className="nav-link-inner--text">Facebook</span>
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="fa fa-twitter"></i>
// 											<span className="nav-link-inner--text">Twitter</span>
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link nav-link-icon" href="/home">
// 											<i className="fa fa-instagram"></i>
// 											<span className="nav-link-inner--text">Instagram</span>
// 										</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</nav>
// 				</section>
// 				<section className="section section-components">
// 					<div className="container">
// 						<h3 className="h4 text-success font-weight-bold mb-4">Tabs</h3>
// 						<div className="row justify-content-center">
// 							<div className="col-lg-6">
// 								<div className="mb-3">
// 									<small className="text-uppercase font-weight-bold">With icons</small>
// 								</div>
// 								<div className="nav-wrapper">
// 									<ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text" role="tablist">
// 										<li className="nav-item">
// 											<a className="nav-link mb-sm-3 mb-md-0 active" id="tabs-icons-text-1-tab" data-toggle="tab"
// 												 href="#tabs-icons-text-1" role="tab" aria-controls="tabs-icons-text-1" aria-selected="true"><i
// 												className="ni ni-cloud-upload-96 mr-2"></i>Home</a>
// 										</li>
// 										<li className="nav-item">
// 											<a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-2-tab" data-toggle="tab"
// 												 href="#tabs-icons-text-2" role="tab" aria-controls="tabs-icons-text-2" aria-selected="false"><i
// 												className="ni ni-bell-55 mr-2"></i>Profile</a>
// 										</li>
// 										<li className="nav-item">
// 											<a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-3-tab" data-toggle="tab"
// 												 href="#tabs-icons-text-3" role="tab" aria-controls="tabs-icons-text-3" aria-selected="false"><i
// 												className="ni ni-calendar-grid-58 mr-2"></i>Messages</a>
// 										</li>
// 									</ul>
// 								</div>
// 								<div className="card shadow">
// 									<div className="card-body">
// 										<div className="tab-content" id="myTabContent">
// 											<div className="tab-pane fade show active" id="tabs-icons-text-1" role="tabpanel"
// 													 aria-labelledby="tabs-icons-text-1-tab">
// 												<p className="description">Raw denim you probably haven't heard of them jean shorts Austin.
// 													Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
// 													williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
// 													synth.</p>
// 												<p className="description">Raw denim you probably haven't heard of them jean shorts Austin.
// 													Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
// 											</div>
// 											<div className="tab-pane fade" id="tabs-icons-text-2" role="tabpanel"
// 													 aria-labelledby="tabs-icons-text-2-tab">
// 												<p className="description">Cosby sweater eu banh mi, qui irure terry richardson ex squid.
// 													Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher
// 													voluptate nisi qui.</p>
// 											</div>
// 											<div className="tab-pane fade" id="tabs-icons-text-3" role="tabpanel"
// 													 aria-labelledby="tabs-icons-text-3-tab">
// 												<p className="description">Raw denim you probably haven't heard of them jean shorts Austin.
// 													Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
// 													williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
// 													synth.</p>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="col-lg-6 mt-5 mt-lg-0">
// 								<div className="mb-3">
// 									<small className="text-uppercase font-weight-bold">With text</small>
// 								</div>
// 								<div className="nav-wrapper">
// 									<ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-text" role="tablist">
// 										<li className="nav-item">
// 											<a className="nav-link mb-sm-3 mb-md-0 active" id="tabs-text-1-tab" data-toggle="tab"
// 												 href="#tabs-text-1" role="tab" aria-controls="tabs-text-1" aria-selected="true">Home</a>
// 										</li>
// 										<li className="nav-item">
// 											<a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-2-tab" data-toggle="tab" href="#tabs-text-2"
// 												 role="tab" aria-controls="tabs-text-2" aria-selected="false">Profile</a>
// 										</li>
// 										<li className="nav-item">
// 											<a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-3-tab" data-toggle="tab" href="#tabs-text-3"
// 												 role="tab" aria-controls="tabs-text-3" aria-selected="false">Messages</a>
// 										</li>
// 									</ul>
// 								</div>
// 								<div className="card shadow">
// 									<div className="card-body">
// 										<div className="tab-content" id="myTabContent1">
// 											<div className="tab-pane fade show active" id="tabs-text-1" role="tabpanel"
// 													 aria-labelledby="tabs-text-1-tab">
// 												<p className="description">Raw denim you probably haven't heard of them jean shorts Austin.
// 													Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
// 													williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
// 													synth.</p>
// 												<p className="description">Raw denim you probably haven't heard of them jean shorts Austin.
// 													Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
// 											</div>
// 											<div className="tab-pane fade" id="tabs-text-2" role="tabpanel" aria-labelledby="tabs-text-2-tab">
// 												<p className="description">Cosby sweater eu banh mi, qui irure terry richardson ex squid.
// 													Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher
// 													voluptate nisi qui.</p>
// 											</div>
// 											<div className="tab-pane fade" id="tabs-text-3" role="tabpanel" aria-labelledby="tabs-text-3-tab">
// 												<p className="description">Raw denim you probably haven't heard of them jean shorts Austin.
// 													Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
// 													williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
// 													synth.</p>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="row row-grid justify-content-between align-items-center mt-lg">
// 							<div className="col-lg-5">
// 								<h3 className="h4 text-success font-weight-bold mb-4">Progress bars</h3>
// 								<div className="progress-wrapper">
// 									<div className="progress-info">
// 										<div className="progress-label">
// 											<span>Task completed</span>
// 										</div>
// 										<div className="progress-percentage">
// 											<span>40%</span>
// 										</div>
// 									</div>
// 									<div className="progress">
// 										<div className="progress-bar bg-default" role="progressbar" aria-valuenow="25" aria-valuemin="0"
// 												 aria-valuemax="100" style={{width: '25%'}}></div>
// 									</div>
// 								</div>
// 								<div className="progress-wrapper">
// 									<div className="progress-info">
// 										<div className="progress-label">
// 											<span>Task completed</span>
// 										</div>
// 										<div className="progress-percentage">
// 											<span>60%</span>
// 										</div>
// 									</div>
// 									<div className="progress">
// 										<div className="progress-bar bg-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0"
// 												 aria-valuemax="100" style={{width: '60%'}}></div>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="col-lg-5">
// 								<h3 className="h4 text-success font-weight-bold mb-5">Pagination</h3>
// 								<nav aria-label="Page navigation example" className="mb-4">
// 									<ul className="pagination">
// 										<li className="page-item"><a className="page-link" href="/home">1</a></li>
// 										<li className="page-item active"><a className="page-link" href="/home">2</a></li>
// 										<li className="page-item"><a className="page-link" href="/home">3</a></li>
// 										<li className="page-item"><a className="page-link" href="/home">4</a></li>
// 										<li className="page-item"><a className="page-link" href="/home">5</a></li>
// 									</ul>
// 								</nav>
// 								<nav aria-label="Page navigation example">
// 									<ul className="pagination">
// 										<li className="page-item"><a className="page-link" href="/home"><i className="fa fa-angle-left"></i></a>
// 										</li>
// 										<li className="page-item"><a className="page-link" href="/home">1</a></li>
// 										<li className="page-item active"><a className="page-link" href="/home">2</a></li>
// 										<li className="page-item"><a className="page-link" href="/home">3</a></li>
// 										<li className="page-item"><a className="page-link" href="/home">4</a></li>
// 										<li className="page-item"><a className="page-link" href="/home">5</a></li>
// 										<li className="page-item"><a className="page-link" href="/home"><i
// 											className="fa fa-angle-right"></i></a></li>
// 									</ul>
// 								</nav>
// 							</div>
// 						</div>
// 						<div className="row row-grid justify-content-between">
// 							<div className="col-lg-5">
// 								<h3 className="h4 text-success font-weight-bold mb-5">Navigation Pills</h3>
// 								<ul className="nav nav-pills nav-pills-circle mb-3" id="tabs_2" role="tablist">
// 									<li className="nav-item">
// 										<a className="nav-link rounded-circle active" id="home-tab" data-toggle="tab" href="#tabs_2_1"
// 											 role="tab" aria-selected="true">
// 											<span className="nav-link-icon d-block"><i className="ni ni-atom"></i></span>
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link" id="profile-tab" data-toggle="tab" href="#tabs_2_2" role="tab"
// 											 aria-selected="false">
// 											<span className="nav-link-icon d-block"><i className="ni ni-chat-round"></i></span>
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link" id="contact-tab" data-toggle="tab" href="#tabs_2_3" role="tab"
// 											 aria-selected="false">
// 											<span className="nav-link-icon d-block"><i className="ni ni-cloud-download-95"></i></span>
// 										</a>
// 									</li>
// 								</ul>
// 							</div>
// 							<div className="col-lg-5">
// 								<h3 className="h4 text-success font-weight-bold mb-5">Labels</h3>
// 								<span className="badge badge-pill badge-primary text-uppercase">Primary</span>
// 								<span className="badge badge-pill badge-success text-uppercase">Success</span>
// 								<span className="badge badge-pill badge-danger text-uppercase">Danger</span>
// 								<span className="badge badge-pill badge-warning text-uppercase">Warning</span>
// 								<span className="badge badge-pill badge-info text-uppercase">Info</span>
// 							</div>
// 						</div>
// 						<h3 className="mt-lg mb-4">
// 							<span>Alerts</span>
// 						</h3>
// 						<div className="alert alert-success alert-dismissible fade show" role="alert">
// 							<span className="alert-inner--icon"><i className="ni ni-like-2"></i></span>
// 							<span className="alert-inner--text"><strong>Success!</strong> This is a success alert—check it out!</span>
// 							<button type="button" className="close" data-dismiss="alert" aria-label="Close">
// 								<span aria-hidden="true">&times;</span>
// 							</button>
// 						</div>
// 						<div className="alert alert-info alert-dismissible fade show" role="alert">
// 							<span className="alert-inner--icon"><i className="ni ni-bell-55"></i></span>
// 							<span className="alert-inner--text"><strong>Info!</strong> This is an info alert—check it out!</span>
// 							<button type="button" className="close" data-dismiss="alert" aria-label="Close">
// 								<span aria-hidden="true">&times;</span>
// 							</button>
// 						</div>
// 						<div className="alert alert-warning alert-dismissible fade show" role="alert">
// 							<span className="alert-inner--icon"><i className="ni ni-bell-55"></i></span>
// 							<span className="alert-inner--text"><strong>Warning!</strong> This is a warning alert—check it out!</span>
// 							<button type="button" className="close" data-dismiss="alert" aria-label="Close">
// 								<span aria-hidden="true">&times;</span>
// 							</button>
// 						</div>
// 						<div className="alert alert-danger alert-dismissible fade show" role="alert">
// 							<span className="alert-inner--icon"><i className="ni ni-support-16"></i></span>
// 							<span className="alert-inner--text"><strong>Danger!</strong> This is an error alert—check it out!</span>
// 							<button type="button" className="close" data-dismiss="alert" aria-label="Close">
// 								<span aria-hidden="true">&times;</span>
// 							</button>
// 						</div>
// 						<h2 className="mt-lg mb-5">
// 							<span>Typography</span>
// 						</h2>
// 						<h3 className="h4 text-success font-weight-bold">Headings</h3>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Heading 1</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<h1 className="mb-0">Argon Design System</h1>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Heading 2</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<h2 className="mb-0">Argon Design System</h2>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Heading 3</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<h3 className="mb-0">Argon Design System</h3>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Heading 4</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<h4 className="mb-0">Argon Design System</h4>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Heading 5</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<h5 className="mb-0">Argon Design System </h5>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Heading 6</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<h6 className="mb-0">Argon Design System </h6>
// 							</div>
// 						</div>
// 						<h3 className="h4 text-success font-weight-bold mt-md">Display titles</h3>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Display 1</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<h1 className="display-1 mb-0">Argon Design System</h1>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Display 2</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<h2 className="display-2 mb-0">Argon Design System</h2>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Display 3</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<h3 className="display-3 mb-0">Argon Design System</h3>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Display 4</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<h4 className="display-4 mb-0">Argon Design System</h4>
// 							</div>
// 						</div>
// 						<h3 className="h4 text-success font-weight-bold mt-md">Specialized titles</h3>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Heading</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<h3 className="heading mb-0">Argon Design System</h3>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Heading title</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<h3 className="heading-title text-warning mb-0">Argon Design System</h3>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Heading seaction</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<div>
// 									<h2 className="display-3">Header with small subtitle </h2>
// 									<p className="lead text-muted">According to the National Oceanic and Atmospheric Administration, Ted,
// 										Scambos, NSIDClead scentist, puts the potentially record maximum.</p>
// 								</div>
// 							</div>
// 						</div>
// 						<h3 className="h4 text-success font-weight-bold mt-md">Paragraphs</h3>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Paragraph</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<p>I will be the leader of a company that ends up being worth billions of dollars, because I got the
// 									answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push
// 									possibilities, to show people, this is the level that things could be at.</p>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Lead text</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<p className="lead">I will be the leader of a company that ends up being worth billions of dollars,
// 									because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility
// 									that I have, to push possibilities, to show people, this is the level that things could be at.</p>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Quote</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<blockquote className="blockquote">
// 									<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
// 										ante.</p>
// 									<footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
// 									</footer>
// 								</blockquote>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Muted text</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<p className="text-muted mb-0">I will be the leader of a company that ends up being worth billions of
// 									dollars, because I got the answers...</p>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Primary text</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<p className="text-primary">I will be the leader of a company that ends up being worth billions of
// 									dollars, because I got the answers...</p>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Info text</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<p className="text-info mb-0">I will be the leader of a company that ends up being worth billions of
// 									dollars, because I got the answers...</p>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Success text</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<p className="text-success mb-0">I will be the leader of a company that ends up being worth billions of
// 									dollars, because I got the answers...</p>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Warning text</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<p className="text-warning mb-0">I will be the leader of a company that ends up being worth billions of
// 									dollars, because I got the answers...</p>
// 							</div>
// 						</div>
// 						<div className="row py-3 align-items-center">
// 							<div className="col-sm-3">
// 								<small className="text-uppercase text-muted font-weight-bold">Danger text</small>
// 							</div>
// 							<div className="col-sm-9">
// 								<p className="text-danger mb-0">I will be the leader of a company that ends up being worth billions of
// 									dollars, because I got the answers...</p>
// 							</div>
// 						</div>
// 						<h2 className="mt-lg mb-5">
// 							<span>Images</span>
// 						</h2>
// 						<div className="row">
// 							<div className="col-sm-3 col-6">
// 								<small className="d-block text-uppercase font-weight-bold mb-4">Image</small>
// 								<img src="./assets/img/theme/team-1-800x800.jpg" alt="Rounded image"
// 										 className="img-fluid rounded shadow" style={{width: '150px'}}/>
// 							</div>
// 							<div className="col-sm-3 col-6">
// 								<small className="d-block text-uppercase font-weight-bold mb-4">Circle Image</small>
// 								<img src="./assets/img/theme/team-2-800x800.jpg" alt="Circle image"
// 										 className="img-fluid rounded-circle shadow" style={{width: '150px'}}/>
// 							</div>
// 							<div className="col-sm-3 col-6 mt-5 mt-sm-0">
// 								<small className="d-block text-uppercase font-weight-bold mb-4">Raised</small>
// 								<img src="./assets/img/theme/team-3-800x800.jpg" alt="Raised image"
// 										 className="img-fluid rounded shadow-lg" style={{width: '150px'}}/>
// 							</div>
// 							<div className="col-sm-3 col-6 mt-5 mt-sm-0">
// 								<small className="d-block text-uppercase font-weight-bold mb-4">Circle Raised</small>
// 								<img src="./assets/img/theme/team-4-800x800.jpg" alt="Raised circle image"
// 										 className="img-fluid rounded-circle shadow-lg" style={{width: '150px'}}/>
// 							</div>
// 						</div>
// 						<h2 className="mt-lg mb-5">
// 							<span>Javascript Components</span>
// 						</h2>
// 						<h3 className="h4 text-success font-weight-bold mb-4">Modals</h3>
// 						<div className="row">
// 							<div className="col-md-4">
// 								<button type="button" className="btn btn-block btn-primary mb-3" data-toggle="modal"
// 												data-target="#modal-default">Default
// 								</button>
// 								<div className="modal fade" id="modal-default" tabindex="-1" role="dialog"
// 										 aria-labelledby="modal-default" aria-hidden="true">
// 									<div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
// 										<div className="modal-content">
// 											<div className="modal-header">
// 												<h6 className="modal-title" id="modal-title-default">Type your modal title</h6>
// 												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
// 													<span aria-hidden="true">×</span>
// 												</button>
// 											</div>
// 											<div className="modal-body">
// 												<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
// 													there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
// 													Semantics, a large language ocean.</p>
// 												<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
// 													It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
// 											</div>
// 											<div className="modal-footer">
// 												<button type="button" className="btn btn-primary">Save changes</button>
// 												<button type="button" className="btn btn-link  ml-auto" data-dismiss="modal">Close</button>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="col-md-4">
// 								<button type="button" className="btn btn-block btn-warning mb-3" data-toggle="modal"
// 												data-target="#modal-notification">Notification
// 								</button>
// 								<div className="modal fade" id="modal-notification" tabindex="-1" role="dialog"
// 										 aria-labelledby="modal-notification" aria-hidden="true">
// 									<div className="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
// 										<div className="modal-content bg-gradient-danger">
// 											<div className="modal-header">
// 												<h6 className="modal-title" id="modal-title-notification">Your attention is required</h6>
// 												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
// 													<span aria-hidden="true">×</span>
// 												</button>
// 											</div>
// 											<div className="modal-body">
// 												<div className="py-3 text-center">
// 													<i className="ni ni-bell-55 ni-3x"></i>
// 													<h4 className="heading mt-4">You should read this!</h4>
// 													<p>A small river named Duden flows by their place and supplies it with the necessary
// 														regelialia.</p>
// 												</div>
// 											</div>
// 											<div className="modal-footer">
// 												<button type="button" className="btn btn-white">Ok, Got it</button>
// 												<button type="button" className="btn btn-link text-white ml-auto" data-dismiss="modal">Close
// 												</button>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="col-md-4">
// 									<button type="button" className="btn btn-block btn-default" data-toggle="modal"
// 													data-target="#modal-form">Form
// 									</button>
// 									<div className="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form"
// 											 aria-hidden="true">
// 										<div className="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
// 											<div className="modal-content">
// 												<div className="modal-body p-0">
// 													<div className="card bg-secondary shadow border-0">
// 														<div className="card-header bg-white pb-5">
// 															<div className="text-muted text-center mb-3">
// 																<small>Sign in with</small>
// 															</div>
// 															<div className="btn-wrapper text-center">
// 																<a href="/home" className="btn btn-neutral btn-icon">
//                             <span className="btn-inner--icon">
//                               <img alt="image" src="./assets/img/icons/common/github.svg"/>
//                             </span>
// 																	<span className="btn-inner--text">Github</span>
// 																</a>
// 																<a href="/home" className="btn btn-neutral btn-icon">
//                             <span className="btn-inner--icon">
//                               <img alt="image" src="./assets/img/icons/common/google.svg"/>
//                             </span>
// 																	<span className="btn-inner--text">Google</span>
// 																</a>
// 															</div>
// 														</div>
// 														<div className="card-body px-lg-5 py-lg-5">
// 															<div className="text-center text-muted mb-4">
// 																<small>Or sign in with credentials</small>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<h3 className="h4 text-success font-weight-bold mt-md mb-4">Datepicker</h3>
// 						<div className="row">
// 							<div className="col-md-4">
// 								<small className="d-block text-uppercase font-weight-bold mb-3">Single date</small>
// 								<div className="form-group">
// 									<div className="input-group">
// 										<div className="input-group-prepend">
// 											<span className="input-group-text"><i className="ni ni-calendar-grid-58"></i></span>
// 										</div>
// 										<input className="form-control datepicker" placeholder="Select date" type="text"
// 													 value="06/20/2019"></input>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="col-md-8 mt-4 mt-md-0">
// 								<small className="d-block text-uppercase font-weight-bold mb-3">Date range</small>
// 								<div className="input-daterange datepicker row align-items-center">
// 									<div className="col">
// 										<div className="form-group">
// 											<div className="input-group">
// 												<div className="input-group-prepend">
// 													<span className="input-group-text"><i className="ni ni-calendar-grid-58"></i></span>
// 												</div>
// 												<input className="form-control" placeholder="Start date" type="text" value="06/18/2019"></input>
// 											</div>
// 										</div>
// 									</div>
// 									<div className="col">
// 										<div className="form-group">
// 											<div className="input-group">
// 												<div className="input-group-prepend">
// 													<span className="input-group-text"><i className="ni ni-calendar-grid-58"></i></span>
// 												</div>
// 												<input className="form-control" placeholder="End date" type="text" value="06/22/2019"></input>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<h3 className="h4 text-success font-weight-bold mt-md mb-4">Tooltips &amp; Popovers</h3>
// 						<div className="row">
// 							<div className="col-lg-6">
// 								<small className="d-block text-uppercase font-weight-bold mb-3">Tooltips</small>
// 								<button type="button" className="btn btn-sm btn-primary btn-tooltip" data-toggle="tooltip"
// 												data-placement="left" title="Tooltip on left" data-container="body" data-animation="true"
// 												data-delay="100">On left
// 								</button>
// 								<button type="button" className="btn btn-sm btn-primary btn-tooltip" data-toggle="tooltip"
// 												data-placement="top" title="Tooltip on top" data-container="body" data-animation="true">On top
// 								</button>
// 								<button type="button" className="btn btn-sm btn-primary btn-tooltip" data-toggle="tooltip"
// 												data-placement="bottom" title="Tooltip on bottom" data-container="body" data-animation="true">On
// 									bottom
// 								</button>
// 								<button type="button" className="btn btn-sm btn-primary btn-tooltip" data-toggle="tooltip"
// 												data-placement="right" title="Tooltip on right" data-container="body" data-animation="true">On
// 									right
// 								</button>
// 							</div>
// 							<div className="col-lg-6 mt-4 mt-lg-0">
// 								<small className="d-block text-uppercase font-weight-bold mb-3">Popovers</small>
// 								<button type="button" className="btn btn-sm btn-default" data-container="body"
// 												data-original-title="Popover On Left" data-toggle="popover" data-placement="left"
// 												data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On left
// 								</button>
// 								<button type="button" className="btn btn-sm btn-default" data-container="body"
// 												data-original-title="Popover on Top" data-toggle="popover" data-placement="top"
// 												data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On top
// 								</button>
// 								<button type="button" className="btn btn-sm btn-default" data-container="body"
// 												data-original-title="Popover on Right" data-toggle="popover" data-placement="right"
// 												data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On right
// 								</button>
// 								<button type="button" className="btn btn-sm btn-default" data-container="body"
// 												data-original-title="Popover on Bottom" data-toggle="popover" data-placement="bottom"
// 												data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On bottom
// 								</button>
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 				<section className="section section-shaped">
// 					<div className="shape shape-style-1 shape-default">
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 					</div>
// 					<div className="container py-md">
// 						<div className="row justify-content-between align-items-center">
// 							<div className="col-lg-5 mb-5 mb-lg-0">
// 								<h1 className="text-white font-weight-light">Bootstrap carousel</h1>
// 								<p className="lead text-white mt-4">Argon Design System comes with four pre-built pages to help you get
// 									started faster. You can change the text and images and you're good to go.</p>
// 								<a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
// 									 className="btn btn-white mt-4">See all components</a>
// 							</div>
// 							<div className="col-lg-6 mb-lg-auto">
// 								<div className="rounded shadow-lg overflow-hidden transform-perspective-right">
// 									<div id="carousel_example" className="carousel slide" data-ride="carousel">
// 										<ol className="carousel-indicators">
// 											<li data-target="#carousel_example" data-slide-to="0" className="active"></li>
// 											<li data-target="#carousel_example" data-slide-to="1"></li>
// 										</ol>
// 										<div className="carousel-inner">
// 											<div className="carousel-item active">
// 												<img className="img-fluid" src="./assets/img/theme/img-1-1200x1000.jpg" alt="First slide"/>
// 											</div>
// 											<div className="carousel-item">
// 												<img className="img-fluid" src="./assets/img/theme/img-2-1200x1000.jpg" alt="Second slide"/>
// 											</div>
// 										</div>
// 										<a className="carousel-control-prev" href="#carousel_example" role="button" data-slide="prev">
// 											<span className="carousel-control-prev-icon" aria-hidden="true"></span>
// 											<span className="sr-only">Previous</span>
// 										</a>
// 										<a className="carousel-control-next" href="#carousel_example" role="button" data-slide="next">
// 											<span className="carousel-control-next-icon" aria-hidden="true"></span>
// 											<span className="sr-only">Next</span>
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="separator separator-bottom separator-skew">
// 						<svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
// 								 xmlns="http://www.w3.org/2000/svg">
// 							<polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
// 						</svg>
// 					</div>
// 				</section>
// 				<section className="section section-lg section-nucleo-icons pb-250">
// 					<div className="container">
// 						<div className="row justify-content-center">
// 							<div className="col-lg-8 text-center">
// 								<h2 className="display-3">Nucleo Icons</h2>
// 								<p className="lead">
// 									The official package contains over 21.000 icons which are looking great in combination with Argon
// 									Design
// 									System. Make sure you check all of them and use those that you like the most.
// 								</p>
// 								<div className="btn-wrapper">
// 									<a href="https://demos.creative-tim.com/argon-design-system/docs/foundation/icons.html"
// 										 className="btn btn-primary">View demo icons</a>
// 									<a href="https://nucleoapp.com/?ref=1712" target="_blank" className="btn btn-default mt-3 mt-md-0">View
// 										all icons</a>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="blur--hover">
// 							<a href="https://demos.creative-tim.com/argon-design-system/docs/foundation/icons.html">
// 								<div className="icons-container blur-item mt-5" data-toggle="on-screen">
// 									<i className="icon ni ni-diamond"></i>
// 									<i className="icon icon-sm ni ni-album-2"></i>
// 									<i className="icon icon-sm ni ni-app"></i>
// 									<i className="icon icon-sm ni ni-atom"></i>
// 									<i className="icon ni ni-bag-17"></i>
// 									<i className="icon ni ni-bell-55"></i>
// 									<i className="icon ni ni-credit-card"></i>
// 									<i className="icon icon-sm ni ni-briefcase-24"></i>
// 									<i className="icon icon-sm ni ni-building"></i>
// 									<i className="icon icon-sm ni ni-button-play"></i>
// 									<i className="icon ni ni-calendar-grid-58"></i>
// 									<i className="icon ni ni-camera-compact"></i>
// 									<i className="icon ni ni-chart-bar-32"></i>
// 								</div>
// 								<span className="blur-hidden h5 text-success">Explore all the 21.000+ Nucleo Icons</span>
// 							</a>
// 						</div>
// 					</div>
// 				</section>
// 				<section className="section section-lg section-shaped">
// 					<div className="shape shape-style-1 shape-default">
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 					</div>
// 					<div className="container py-md">
// 						<div className="row row-grid justify-content-between align-items-center">
// 							<div className="col-lg-6">
// 								<h3 className="display-3 text-white">A beautiful Design System<span className="text-white">completed with examples</span>
// 								</h3>
// 								<p className="lead text-white">The Design System comes with four pre-built pages to help you get started
// 									faster. You can change the text and images and you're good to go. More importantly, looking at them
// 									will
// 									give you a picture of what you can built with this powerful Bootstrap 4 Design System.</p>
// 								<div className="btn-wrapper">
// 									<a href="./examples/login.html" className="btn btn-success">Login Page</a>
// 									<a href="./examples/register.html" className="btn btn-white">Register Page</a>
// 								</div>
// 							</div>
// 							<div className="col-lg-5 mb-lg-auto">
// 								<div className="transform-perspective-right">
// 									<div className="card bg-secondary shadow border-0">
// 										<div className="card-header bg-white pb-5">
// 											<div className="text-muted text-center mb-3"><small>Sign in with</small></div>
// 											<div className="btn-wrapper text-center">
// 												<a href="/home" className="btn btn-neutral btn-icon">
//                       <span className="btn-inner--icon">
//                         <img alt="image" src="./assets/img/icons/common/github.svg"/>
//                       </span>
// 													<span className="btn-inner--text">Github</span>
// 												</a>
// 												<a href="/home" className="btn btn-neutral btn-icon">
//                       <span className="btn-inner--icon">
//                         <img alt="image" src="./assets/img/icons/common/google.svg"/>
//                       </span>
// 													<span className="btn-inner--text">Google</span>
// 												</a>
// 											</div>
// 										</div>
// 										<div className="card-body px-lg-5 py-lg-5">
// 											<div className="text-center text-muted mb-4">
// 												<small>Or sign in with credentials</small>
// 											</div>
// 											<form>
// 												<div className="form-group mb-3">
// 													<div className="input-group input-group-alternative">
// 														<div className="input-group-prepend">
// 															<span className="input-group-text"><i className="ni ni-email-83"></i></span>
// 														</div>
// 														<input className="form-control" placeholder="Email" type="email"></input>
// 													</div>
// 												</div>
// 												<div className="form-group">
// 													<div className="input-group input-group-alternative">
// 														<div className="input-group-prepend">
// 															<span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
// 														</div>
// 														<input className="form-control" placeholder="Password" type="password"></input>
// 													</div>
// 												</div>
// 												<div className="custom-control custom-control-alternative custom-checkbox">
// 													<input className="custom-control-input" id="customCheckLogin2" type="checkbox"/>
// 													<label className="custom-control-label" for="customCheckLogin2">
// 														<span>Remember me</span>
// 													</label>
// 												</div>
// 												<div className="text-center">
// 													<button type="button" className="btn btn-primary my-4">Sign in</button>
// 												</div>
// 											</form>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="separator separator-bottom separator-skew">
// 						<svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
// 								 xmlns="http://www.w3.org/2000/svg">
// 							<polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
// 						</svg>
// 					</div>
// 				</section>
// 				<section className="section section-lg">
// 					<div className="container">
// 						<div className="row row-grid justify-content-center">
// 							<div className="col-lg-8 text-center">
// 								<h2 className="display-3">Do you love this awesome <span className="text-success">Design System for Bootstrap 4?</span>
// 								</h2>
// 								<p className="lead">Cause if you do, it can be yours for FREE. Hit the button below to navigate to
// 									Creative Tim where you can find the Design System in HTML. Start a new project or give an old
// 									Bootstrap
// 									project a new look!</p>
// 								<div className="btn-wrapper">
// 									<a href="https://www.creative-tim.com/product/argon-design-system"
// 										 className="btn btn-primary mb-3 mb-sm-0">Download HTML</a>
// 									<a href="https://www.creative-tim.com/product/argon-design-system" className="btn btn-default">Download
// 										PSD/Sketch</a>
// 								</div>
// 								<div className="text-center">
// 									<h4 className="display-4 mb-5 mt-5">Available on these technologies</h4>
// 									<div className="row justify-content-center">
// 										<div className="col-lg-2 col-4">
// 											<a href="https://www.creative-tim.com/product/argon-design-system" target="_blank"
// 												 data-toggle="tooltip"
// 												 data-original-title="Bootstrap 4 - Most popular front-end component library">
// 												<img alt="image"
// 														 src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg"
// 														 className="img-fluid"/>
// 											</a>
// 										</div>
// 										<div className="col-lg-2 col-4">
// 											<a href=" https://www.creative-tim.com/product/vue-argon-design-system" target="_blank"
// 												 data-toggle="tooltip" data-original-title="Vue.js - The progressive javascript framework">
// 												<img alt="image"
// 														 src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
// 														 className="img-fluid"/>
// 											</a>
// 										</div>
// 										<div className="col-lg-2 col-4">
// 											<a href=" https://www.sketchapp.com/" target="_blank" data-toggle="tooltip"
// 												 data-original-title="[Coming Soon] Sketch - Digital design toolkit">
// 												<img alt="image"
// 														 src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
// 														 className="img-fluid opacity-3"/>
// 											</a>
// 										</div>
// 										<div className="col-lg-2 col-4">
// 											<a href=" https://www.adobe.com/products/photoshop.html" target="_blank" data-toggle="tooltip"
// 												 data-original-title="[Coming Soon] Adobe Photoshop - Software for digital images manipulation">
// 												<img alt="image"
// 														 src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg"
// 														 className="img-fluid opacity-3"/>
// 											</a>
// 										</div>
// 										<div className="col-lg-2 col-4">
// 											<a href=" https://angularjs.org/" target="_blank" data-toggle="tooltip"
// 												 data-original-title="[Coming Soon] Angular - One framework. Mobile &amp; desktop">
// 												<img alt="image"
// 														 src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
// 														 className="img-fluid opacity-3"/>
// 											</a>
// 										</div>
// 										<div className="col-lg-2 col-4">
// 											<a href=" https://angularjs.org/" target="_blank" data-toggle="tooltip"
// 												 data-original-title="[Coming Soon] React - A JavaScript library for building user interfaces">
// 												<img alt="image"
// 														 src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
// 														 className="img-fluid opacity-3"/>
// 											</a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 			</main>
// 			<footer className="footer has-cards">
// 				<div className="container container-lg">
// 					<div className="row">
// 						<div className="col-md-6 mb-5 mb-md-0">
// 							<div className="card card-lift--hover shadow border-0">
// 								<a href="./examples/landing.html" title="Landing Page">
// 									<img alt="image" src="./assets/img/theme/landing.jpg" className="card-img"/>
// 								</a>
// 							</div>
// 						</div>
// 						<div className="col-md-6 mb-5 mb-lg-0">
// 							<div className="card card-lift--hover shadow border-0">
// 								<a href="./examples/profile.html" title="Profile Page">
// 									<img alt="image" src="./assets/img/theme/profile.jpg" className="card-img"/>
// 								</a>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="container">
// 					<div className="row row-grid align-items-center my-md">
// 						<div className="col-lg-6">
// 							<h3 className="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
// 							<h4 className="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
// 						</div>
// 						<div className="col-lg-6 text-lg-center btn-wrapper">
// 							<a target="_blank" href="https://twitter.com/creativetim"
// 								 className="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
// 								 data-original-title="Follow us">
// 								<i className="fa fa-twitter"></i>
// 							</a>
// 							<a target="_blank" href="https://www.facebook.com/creativetim"
// 								 className="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
// 								 data-original-title="Like us">
// 								<i className="fa fa-facebook-square"></i>
// 							</a>
// 							<a target="_blank" href="https://dribbble.com/creativetim"
// 								 className="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"
// 								 data-original-title="Follow us">
// 								<i className="fa fa-dribbble"></i>
// 							</a>
// 							<a target="_blank" href="https://github.com/creativetimofficial"
// 								 className="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
// 								 data-original-title="Star on Github">
// 								<i className="fa fa-github"></i>
// 							</a>
// 						</div>
// 					</div>
// 					<hr/>
// 					<div className="row align-items-center justify-content-md-between">
// 						<div className="col-md-6">
// 							<div className="copyright">
// 								&copy; 2019 <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
// 							</div>
// 						</div>
// 						<div className="col-md-6">
// 							<ul className="nav nav-footer justify-content-end">
// 								<li className="nav-item">
// 									<a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
// 								</li>
// 								<li className="nav-item">
// 									<a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About
// 										Us</a>
// 								</li>
// 								<li className="nav-item">
// 									<a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
// 								</li>
// 								<li className="nav-item">
// 									<a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
// 										 className="nav-link" target="_blank">MIT License</a>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 				</div>
// 			</footer>
// 			</body>);
// 	}
// }
//
// export default Theme;