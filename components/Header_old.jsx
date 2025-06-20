import React from 'react'
import Image from 'next/image';
import logoLight from "../public/assets/img/logo-light.png"; // Mettez le bon chemin vers vos images
import logoDark from "../public/assets/img/logo.png";
import logoelio from "../public/assets/img/logoelio.png";
import { useEffect, useState } from "react";
import Auth from './Auth';
import UploadResume from './UploadResume';
const Header = () => {

	const [loading, setLoading] = useState(true);
	const [isScrolled, setIsScrolled] = useState(false);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		// Fonction qui s'exécute lors du scroll
		const handleScroll = () => {
			if (window.scrollY >= 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		// Ajouter l'écouteur d'événement de scroll
		window.addEventListener('scroll', handleScroll);

		// Nettoyage lors du démontage du composant
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		// Simuler la fin du chargement après 350ms
		const timer = setTimeout(() => {
			setLoading(false);
			document.body.style.overflow = "visible";
		}, 350);

		return () => clearTimeout(timer); // Nettoyage du timer
	}, []);

	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showUploadResumeModal, setShowUploadResumeModal] = useState(false);

	const openLoginModal = () => setShowLoginModal(true);
	const closeLoginModal = () => setShowLoginModal(false);

	const openUploadResumeModal = () => setShowUploadResumeModal(true);
	const closeUploadResumeModal = () => setShowUploadResumeModal(false);
	return (

		<>
			{loading && <div className="Loader"></div>}
			{/* <div  className="header header-transparent change-logo"> */}
			<div className={`header header-light change-logo ${isScrolled ? 'header-fixed' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<nav id="navigation" className="navigation navigation-landscape">
								<div className="nav-header">
									<a className="nav-brand static-logo" href="#">
										<Image src={logoelio} alt="test" className="logo" width={110} height={51} />
									</a>
									<a className="nav-brand fixed-logo" href="#">
										<Image src={logoelio} alt="next" className="logo" width={110} height={51} />
										{/* <img src={logoDark} className="logo" alt="next" /> */}
									</a>
									<div className="nav-toggle"></div>
								</div>
								<div className="nav-menus-wrapper">
									<ul className="nav-menu">

										<li className="active">
											<a href="#">Home</a>
										</li>
										<li>
											<a href="dashboard.html">Dashboard</a>
										</li>

										<li><a href="#">Explore
											<span className="submenu-indicator">
												<span className="submenu-indicator-chevron"></span>
											</span>
											{/* <span className="submenu-indicator"></span> */}

										</a>
											<ul className="nav-dropdown nav-submenu">
												<li><a href="#" >Search Job
													<span className="submenu-indicator">
														<span className="submenu-indicator-chevron"></span>
													</span>
													{/* <span className="submenu-indicator"></span> */}

												</a>
													<ul className="nav-dropdown nav-submenu">
														<li><a href="search-job-grid-1.html">Search Job 01</a></li>
														<li><a href="search-job-grid-2.html">Search Job 02</a></li>
														<li><a href="search-job-grid-3.html">Search Job 03</a></li>
														<li><a href="search-job-list-1.html">Search Job List 01</a></li>
														<li><a href="search-job-list-2.html">Search Job List 02</a></li>
													</ul>
												</li>
												<li><a href="#">Services
													<span className="submenu-indicator">
														<span className="submenu-indicator-chevron"></span>
													</span>
												</a>
													<ul className="nav-dropdown nav-submenu">
														<li><a href="search-services.html">Search Services 01</a></li>
														<li><a href="search-services-grid-2.html">Search Services 02</a></li>
														<li><a href="search-services-list.html">Search Services List</a></li>
													</ul>
												</li>
												<li><a href="#">Freelancers
													<span className="submenu-indicator">
														<span className="submenu-indicator-chevron"></span>
													</span>
												</a>
													<ul className="nav-dropdown nav-submenu">
														<li><a href="search-freelancers.html">Search Freelancers</a></li>
														<li><a href="search-freelancers-grid-2.html">Search Freelancers 02</a></li>
														<li><a href="search-freelancers-list.html">Search Freelancers List</a></li>
														<li><a href="freelancer-detail.html">Freelancer Detail</a></li>
													</ul>
												</li>
												<li><a href="#">Candidates
													<span className="submenu-indicator">
														<span className="submenu-indicator-chevron"></span>
													</span>

												</a>
													<ul className="nav-dropdown nav-submenu">
														<li><a href="search-candidates.html">Search Canddates</a></li>
														<li><a href="search-candidates-list.html">Search Candidates List</a></li>
														<li><a href="candidate-detail.html">Candidate Detail</a></li>
													</ul>
												</li>
												<li><a href="#">Employers
													<span className="submenu-indicator">
														<span className="submenu-indicator-chevron"></span>
													</span>
												</a>
													<ul className="nav-dropdown nav-submenu">
														<li><a href="search-employers.html">Search Employers</a></li>
														<li><a href="search-employers-list.html">Search Employers List</a></li>
														<li><a href="employer-detail.html">Employer Detail</a></li>
													</ul>
												</li>

												<li><a href="advance-search-1.html">Advance Search 01</a></li>
												<li><a href="advance-search-2.html">Advance Search 02</a></li>
											</ul>
										</li>

										

										<li><a href="#">Pages
											<span className="submenu-indicator">
												<span className="submenu-indicator-chevron"></span>
											</span>
										</a>
											<ul className="nav-dropdown nav-submenu">
												<li><a href="about-us.html">About Us</a></li>
												<li><a href="blog.html">Blogs Page</a></li>
												<li><a href="blog-detail.html">Blog Detail</a></li>
												<li><a href="pricing.html">Pricing</a></li>
												<li><a href="contact.html">Contact Us</a></li>
												<li><a href="components.html">Components</a></li>
												<li><a href="faq.html">FAQ's</a></li>
												<li><a href="checkout.html">CheckOut</a></li>
											</ul>
										</li>

									</ul>

									<ul className="nav-menu nav-menu-social align-to-right">

										<li>
											<a href="#" onClick={openUploadResumeModal}>
												<i className="fa fa-upload mr-1"></i>Upload Resume
											</a>
										</li>
										<li className="add-listing dark-bg">
											<a href="#" onClick={openLoginModal}>
												<i className="ti-user mr-1"></i> Sign in
											</a>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>

			{/* Modals */}
			<Auth showModal={showLoginModal} closeModal={closeLoginModal} />
			<UploadResume showModal={showUploadResumeModal} closeModal={closeUploadResumeModal} />
		</>

	)
}

export default Header