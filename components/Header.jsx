import React, { useContext } from 'react'
import Image from 'next/image';
import logoLight from "../public/assets/img/logo-light.png"; // Mettez le bon chemin vers vos images
import logoDark from "../public/assets/img/logo.png";
import logoelio from "../public/assets/img/logoelio.png";
import { useEffect, useState } from "react";
import Auth from './Auth';
import UploadResume from './UploadResume';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/authContext';
const Header = () => {
		const { currentUser, logout } = useContext(AuthContext)
				const router = useRouter();
				const handleLogout = async (e) => {
					e.preventDefault()
					try {
						await logout()
						router.push('/Login');
					} catch (error) {
						alert('Impossiv', error);
					}
				}
	  const [loading, setLoading] = useState(true);
	  const [isScrolled, setIsScrolled] = useState(false);
	  const [isMobile, setIsMobile] = useState(false);

      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	  const [navClass, setNavClass] = useState('navigation-landscape');
	  const [menuOpen, setMenuOpen] = useState(false);
	//   const [overlayOpen, setOverlayOpen] = useState(false);

	  // État pour suivre l'ouverture des sous-menus
	  const [submenuOpen, setSubmenuOpen] = useState(false);

	  // Fonction pour basculer l'état du sous-menu
	  const toggleSubmenu = (index) => {
		setSubmenuOpen(prevState => ({
		  ...prevState,
		  [index]: !prevState[index], // Toggle l'état du sous-menu ciblé
		}));
	  };
	
	//   const toggleSubmenu = () => {
	// 	setSubmenuOpen(!submenuOpen);
	//   };
	  const toggleMenu = () => {
		// alert(menuOpen)
		setMenuOpen(!menuOpen);
		// setOverlayOpen(!overlayOpen);
	  };
	//   const toggleMenu = () => {
	// 	alert('test')
	// 	setMenuOpen(prevState => !prevState);
	//   };
	
	  const handleResize = () => {
		if (window.innerWidth < 992) {
			setIsMobile(true);
		  setNavClass('navigation-portrait');
		} else {
			setIsMobile(false);
		  setNavClass('navigation-landscape');
		}
	  };
	
	  useEffect(() => {
		handleResize(); // Initial check on mount
		window.addEventListener('resize', handleResize);
	
		// Cleanup on unmount
		return () => {
		  window.removeEventListener('resize', handleResize);
		};
	  }, []);
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
            <nav id="navigation"  className={`navigation ${navClass}`}>
              <div className="nav-header">
                <a className="nav-brand static-logo" href="#">
					<Image src={logoelio} alt="test" className="logo" width={110} height={51} />
				</a>
				<a className="nav-brand fixed-logo" href="#">
					<Image src={logoelio} alt="next" className="logo" width={110} height={51} />
					{/* <img src={logoDark} className="logo" alt="next" /> */}
				</a>
                <div className="nav-toggle" onClick={toggleMenu}></div>
              </div>
              {/* MENU BURGER POUR MOBILE */}
              {/* <button
                className="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                ☰
              </button> */}
			  <div className={`nav-menus-wrapper ${menuOpen ? 'position_init' : ''}`}>
			  <span class="nav-menus-wrapper-close-button" onClick={toggleMenu}>✕</span>
				<ul className="nav-menu">
				
					<li className="active"><a href="/">Accueil
						</a>
					</li>
					<li><a href="/PagePrestataires">Nos Prestataires</a></li>
					
					<li><a href="/Services">Nos services</a></li>
					<li><a href="#">Annonces/Recherche</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
				<ul className="nav-menu nav-menu-social align-to-right">
					
					<li hidden>
						<a href="#"  onClick={openUploadResumeModal}>
							<i className="fa fa-upload mr-1"></i>Upload Resume
						</a>
					</li>
					{
						currentUser ?
						<li className="add-listing red-bg">
						<a href="/Dashboard" style={{ cursor: 'pointer' }}>
						<i className="ti-power-off"></i> Mon compte
						</a>
						</li> :
						<li className="add-listing dark-bg">
						<a href="/Login">
							<i className="ti-user mr-1"></i> Connexion
						</a>
						</li>

					}
					
				</ul>
             </div>
			 <div onClick={toggleMenu} className={`nav-overlay-panel ${menuOpen ? 'show' : ''}`}></div>

			 {/* <div className="nav-overlay-panel"></div> */}

            </nav>
          </div>
        </div>
      </div>
    </div>

			 {/* Modals */}
			 <Auth showModal={showLoginModal} closeModal={closeLoginModal}/>
			 <UploadResume showModal={showUploadResumeModal} closeModal={closeUploadResumeModal} />
	</>
	
  )
}

export default Header