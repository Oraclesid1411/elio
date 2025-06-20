import Layout from '@/components/Layout';
import { StaticIP } from '@/config/staticip';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Services = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${StaticIP}api/categorie/categories-prestataires`);
                if (response.data.status) {
                    setCategories(response.data.categories);
                }
            } catch (error) {
                console.error("Erreur lors du chargement des catégories", error);
            }
        };

        fetchCategories();
    }, []);
  return (
    <Layout>
    <section className='gray-bg pt-4'>
				<div class="container">
				
					<div class="row justify-content-center">
						<div class="col-lg-7 col-md-9 m-3">
							<div class="sec-heading">
								<h2>Les catégories de <span class="theme-cl-2">services</span></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					
					<div class="row justify-content-left">
                    {categories.map((categorie) => (
						<div class="col-lg-3 col-md-4 col-sm-6" key={categorie.id}>
							<div class="small-category-2">
								<div class="small-category-2-thumb themes-light">
									<a href="search.html"><i class="ti-hummer"></i></a>
								</div>
								<div class="sc-2-detail">
									<h5 class="sc-jb-title"><a href="search.html">{categorie.libelle}</a></h5>
									<span>{categorie.Users?.[0]?.total_prestataires || 0} Prestataire.s</span>
								</div>
								
							</div>
						</div>
                        ))}
						
						
					</div>
					
				</div>
			</section>
            </Layout>
  )
}

export default Services