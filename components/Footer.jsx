import React from 'react';
import logoelio2 from "../public/assets/img/logoelio2.png";
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className="dark-footer skin-dark-footer">
			<div>
				<div className="container">
					<div className="row">

						<div className="col-lg-4 col-md-6" hidden>
							<div className="footer-widget">
								<Image src={logoelio2} alt="test" className="img-fluid f-logo" width={110} height={51} />
								
							</div>
						</div>
						<div className="col-lg-2 col-md-4" hidden>
							<div className="footer-widget">
								<h4 className="widget-title">Useful links</h4>
								<ul className="footer-menu">
									<li><a href="#">About Us</a></li>
									<li><a href="#">FAQs Page</a></li>
									<li><a href="#">Checkout</a></li>
									<li><a href="#">Login</a></li>
								</ul>
							</div>
						</div>

						<div className="col-lg-2 col-md-4" hidden>
							<div className="footer-widget">
								<h4 className="widget-title">Developers</h4>
								<ul className="footer-menu">
									<li><a href="#">Booking</a></li>
									<li><a href="#">Stays</a></li>
									<li><a href="#">Adventures</a></li>
									<li><a href="#">Author Detail</a></li>
								</ul>
							</div>
						</div>

						<div className="col-lg-2 col-md-4" hidden>
							<div className="footer-widget">
								<h4 className="widget-title">Useful links</h4>
								<ul className="footer-menu">
									<li><a href="#">About Us</a></li>
									<li><a href="#">Jobs</a></li>
									<li><a href="#">Events</a></li>
									<li><a href="#">Press</a></li>
								</ul>
							</div>
						</div>

						<div className="col-lg-2 col-md-4" hidden>
							<div className="footer-widget">
								<h4 className="widget-title">Useful links</h4>
								<ul className="footer-menu">
									<li><a href="#">Support</a></li>
									<li><a href="#">Contact Us</a></li>
									<li><a href="#">Privacy &amp; Terms</a></li>
								</ul>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="container">
					<div className="row align-items-center">

						<div className="col-lg-12 col-md-12 text-center">
							<p className="mb-0">© 2025 Elio. Tous droits reservés <a href="/">Notre Politique de confidentialité</a></p>
						</div>

					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer