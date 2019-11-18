import React, {Component} from 'react';
import './Homepage.css';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

class Homepage extends Component {
	autoGrow(el) {
		if (el) {
			// Reset field height
			el.target.style.height = 'inherit';

			// Get the computed styles for the element
			const computed = window.getComputedStyle(el.target);

			// Calculate the height
			const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
				+ parseInt(computed.getPropertyValue('padding-top'), 10)
				+ el.target.scrollHeight
				+ parseInt(computed.getPropertyValue('padding-bottom'), 10)
				+ parseInt(computed.getPropertyValue('border-bottom-width'), 10);

			el.target.style.height = `${height}px`;
		}
	}

	// TODO: Clean this POC code up
	componentDidMount() {

		document.addEventListener('DOMContentLoaded', function (event) {
			// array with texts to type in typewriter
			let dataText = [
				"market effectively.",
				"save money.",
				"attract customers.",
				"grow your business."
			];

			// keeps calling itself until the text is finished
			function typeWriter(text, i, fnCallback) {
				if (i < (text.length)) {
					// add next character to h1
					document.querySelector(".typewriter").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

					// wait for a while and call this function again for next character
					setTimeout(function () {
						typeWriter(text, i + 1, fnCallback)
					}, 100);
				}
				// text finished, call callback if there is a callback function
				else if (typeof fnCallback == 'function') {
					// call callback after timeout
					setTimeout(fnCallback, 700);
				}
			}

			// start a typewriter animation for a text in the dataText array
			function StartTextAnimation(i) {
				if (typeof dataText[i] == 'undefined') {
					setTimeout(function () {
						StartTextAnimation(0);
					}, 6000);
				}
				// check if dataText[i] exists
				if ((dataText[i]) && (i < dataText[i].length)) {
					// text exists! start typewriter animation
					typeWriter(dataText[i], 0, function () {
						// after callback (and whole text has been animated), start next text
						StartTextAnimation(i + 1);
					});
				}
			}

			// start the text animation
			StartTextAnimation(0);
		});
	}

	render() {
		return (
			<section>
				<main>
					<div className="position-relative">
						<section className="section section-lg section-hero section-shaped">
							<div className="container shape-container d-flex align-items-center py-lg">
								<div className="col px-0">
									<div className="row align-items-center justify-content-center">
										<div className="col-lg-6 text-center">
											<h1>We empower you to</h1>
											<h1 className="typewriter"> </h1>
											<p className="lead text-white">So that you can focus on providing quality services.</p>
											<p className="lead text-white">Try us out free for a limited time!</p>
											<div className="btn-wrapper mt-5">
												<a className="try-btn" href="/home">
													<span className="btn-inner--text">Try Sidmal</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="separator separator-bottom separator-skew zindex-100">
								<svg x="0" y="0" viewBox="0 0 3440 200" preserveAspectRatio="none" version="1.1"
										 xmlns="http://www.w3.org/2000/svg">
									<polygon className="fill-white" points="0 3440 0 200 4000 50"></polygon>
								</svg>
							</div>
						</section>
					</div>
					<section className="section section-components pb-0" id="section-components">
						<div className="container features-container">
							<div className="row justify-content-center">
								<div className="col-lg-12">
									<h2 className="mb-5">
										<span>We Provide</span>
									</h2>
									<div className="container text-center is-big">
										<div className="container-fluid">
											<div className="row pt-2 to-reveal">
												<div className="col-lg mt-3">
													<div className="card shadow">
														<i className="fas fa-chart-area card-headers"></i>
														<div className="card-body">
															<h4 className="card-title">Dashboard</h4>
															<p className="card-text">Custom dashboard for your business that displays graphs of your
																marketing performance.</p>
														</div>
													</div>
												</div>
												<div className="col-lg mt-3">
													<div className="card shadow">
														<i className="fas fa-poll card-headers"></i>
														<div className="card-body">
															<h4 className="card-title">Reviews</h4>
															<p className="card-text">Centralized feed of customer reviews from Google, Facebook, Yelp
																and more.</p>
														</div>
													</div>
												</div>
												<div className="col-lg mt-3">
													<div className="card shadow">
														<i className="fas fa-file-alt card-headers"></i>
														<div className="card-body">
															<h4 className="card-title">Reporting</h4>
															<p className="card-text">Customizable reporting displaying your marketing campaigns and
																their performance.</p>
														</div>
													</div>
												</div>
												<div className="col-lg mt-3">
													<div className="card shadow">
														<i className="fas fa-users card-headers"></i>
														<div className="card-body">
															<h4 className="card-title">Acquisition Channels</h4>
															<p className="card-text">Detailed insights on how your customers are finding your
																business.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section section-components">
						<div className="container">
							<div className="container-fluid glow-border">
								<div className="row">
									<div className="col-lg-7 block-cta align-middle">
										<h3>Let's Get In Touch!</h3>
										<p>Leave us some feedback or if you have any questions feel free to write us below.</p>
										<form className="form" method="" action="">
											<div className="form-group bmd-form-group">
												<div className="input-group">
													<input type="text" className="form-control" placeholder="Name" autoComplete="off"
																 style={{cursor: "auto"}}/>
												</div>
											</div>
											<div className="form-group bmd-form-group">
												<div className="input-group">
													<input type="text" className="form-control" placeholder="Email" autoComplete="off"
																 style={{cursor: "auto"}}/>
												</div>
											</div>
											<div className="form-group bmd-form-group">
												<div className="input-group">
												<textarea placeholder="Message" className="form-control textarea-message"
																	onKeyDown={this.autoGrow} autoComplete="off"
																	style={{cursor: "auto"}}/>
												</div>
											</div>
											<input type="submit" className="glow-btn" value="Submit"></input>
										</form>
									</div>
									<div className="col-lg-5 company-name-block align-middle align-items-center justify-content-center">
										<h1 className="contact-h1">Sidmal</h1>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
				<footer className="footer has-cards">
					<div className="container">
						<hr/>
						<div className="row align-items-center justify-content-md-between">
							<div className="col-md-6">
								<div className="copyright">
									&copy; 2019 Spencer Holdings & Company LLC.
								</div>
							</div>
						</div>
					</div>
				</footer>
			</section>);
	}
}

export default Homepage;