import { StaticIP } from '@/config/staticip';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const LastPrestataires = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 5000,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "linear",
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	};
	const [prestataires, setprestataires] = useState([]);

	useEffect(() => {
		const fetchprestataires = async () => {
			try {
				const response = await axios.get(`${StaticIP}api/auth/liste`);
				if (response.data.Status) {
					setprestataires(response.data.Result); // Utiliser "Result" au lieu de "users"
				} else {
					alert('ya un souci');
					console.log(response);
				}
			} catch (error) {
				console.error("Erreur lors du chargement des prestataires", error);
			}
		};

		fetchprestataires();
	}, []);
	return (
		<section className="min-sec">
			<div className="container">

				<div className="row justify-content-center">
					<div className="col-lg-7 col-md-9">
						<div className="sec-heading mb-4">
							<h2>Top <span className="theme-cl-2">Prestataires vérifiés et validés par Elio</span></h2>
							<p >Services express pour une vie sans stress !</p>
						</div>
					</div>
				</div>

				<div className="row">
				<div style={{ width: "100%" }}>
						<Slider {...settings}>
							{prestataires.map((prestataire) => (
								<div className="col-lg-3 col-md-6 col-sm-12" key={prestataire.id}>
									<div className="_freelacers_120 large">
										<div className="_freelacers_120_thumb">
											<img src="assets/img/verify.svg" className="verified" width="25" alt="" />
											<a href="freelancer-detail.html">
												<img src={`${StaticIP}imageprestataires/${prestataire.logo}`} className="img-fluid circle" alt="" /></a>
										</div>
										<div className="_freelacers_120_caption">
											<div className="_freelan_laft"><i className="ti-location-pin mr-1"></i>{prestataire?.ville?.nom || ""}</div>
											<h4><a href="freelancer-detail.html">{prestataire.nom}</a></h4>
											<span className="_freel_spec">{prestataire.intitule_service}</span>
										</div>
										<div className="_freelacers_120_body">
											<div className="_free0o9">
												<ul hidden>
													<li><span>Programmation décodeur</span></li>
													<li><span>Installation</span></li>
													<li><span>Cablage</span></li>
												</ul>
											</div>
											<div className="_freelacers_121_foot">
												<a href="freelancer-detail.html" className="btn btn-theme blue light">
													Voir profil
												</a>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>

		</section>
	)
}

export default LastPrestataires