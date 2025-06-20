import { StaticIP } from '@/config/staticip';
import { useSearch } from '@/context/SearchContext';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const PrestataireResult = () => {
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
    const router = useRouter();
    const { query } = router.query;
    const { presta } = useSearch();
    useEffect(() => {
        if (query) {
            fetch(`${StaticIP}api/auth/search?query=${encodeURIComponent(query)}`)
                .then((res) => res.json())
                .then((data) => setproduits(data))
                .catch((error) => console.error('Erreur lors de la recherche:', error));
        }
    }, [query]);
    return (
        <div class="col-lg-9 col-md-12 col-sm-12">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="_filt_tag786">
                        <div class="_tag782">
                            <div class="_tag780">Prestataires trouvés / {query && `Résultats pour "${query}"`}</div>
                        </div>
                        <div class="_tag785">
                            <div class="__g72juy">
                                <a href="search-freelancers.html" class="_ujh_tyr active"><i class="ti-layout-grid2"></i></a>
                                <a href="search-freelancers-list.html" class="_ujh_tyr"><i class="ti-view-list"></i></a>
                            </div>
                            <div class="_g78juy">
                                <select class="form-control">
                                    <option>Libreville</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                {presta.length > 0 ?
                    presta.map((prestataire) => (
                        <div class="col-lg-4 col-md-4 col-sm-12" key={prestataire.id}>
                            <div class="_freelacers_120 large shadow_0">

                                <div class="_freelacers_120_thumb">
                                    <img src="assets/img/verify.svg" class="verified" width="15" alt="" />
                                    <a href="freelancer-detail.html">
                                        <img src={`${StaticIP}imageprestataires/${prestataire.logo}`} class="img-fluid circle" alt="" />
                                    </a>
                                </div>
                                <div class="_freelacers_120_caption">
                                    <div class="_freelan_laft"><i class="ti-location-pin mr-1"></i>{prestataire?.ville?.nom || ""}</div>
                                    <h4><a href="freelancer-detail.html">{prestataire.nom}</a></h4>
                                    <span class="_freel_spec">{prestataire.intitule_service}</span>
                                    <div class="_freelan_right"><strong><i class="fa fa-star mr-1"></i>4.6</strong></div>
                                </div>
                                <div class="_freelacers_120_body">
                                    <div class="_free0o9" hidden>
                                        <ul hidden>
                                            <li><span>HTML5</span></li>
                                            <li><span>CSS3</span></li>
                                            <li><span>PHP</span></li>
                                            <li><span>Bootstrap</span></li>
                                            <li><span>JavaScript</span></li>
                                            <li><span>3 More</span></li>
                                        </ul>
                                    </div>
                                    <div className="_freelacers_121_foot">
                                        <a href="#" className="btn btn-theme blue light">
                                            Voir profil
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) :

                    prestataires.map((prestataire) => (
                        <div class="col-lg-4 col-md-4 col-sm-12" key={prestataire.id}>
                            <div class="_freelacers_120 large shadow_0">

                                <div class="_freelacers_120_thumb">
                                    <img src="assets/img/verify.svg" class="verified" width="15" alt="" />
                                    <a href="freelancer-detail.html">
                                        <img src={`${StaticIP}imageprestataires/${prestataire.logo}`} class="img-fluid circle" alt="" />
                                    </a>
                                </div>
                                <div class="_freelacers_120_caption">
                                    <div class="_freelan_laft"><i class="ti-location-pin mr-1"></i>{prestataire?.ville?.nom || ""}</div>
                                    <h4><a href="freelancer-detail.html">{prestataire.nom}</a></h4>
                                    <span class="_freel_spec">{prestataire.intitule_service}</span>
                                    <div class="_freelan_right"><strong><i class="fa fa-star mr-1"></i>4.6</strong></div>
                                </div>
                                <div class="_freelacers_120_body">
                                    <div class="_free0o9" hidden>
                                        <ul hidden>
                                            <li><span>HTML5</span></li>
                                            <li><span>CSS3</span></li>
                                            <li><span>PHP</span></li>
                                            <li><span>Bootstrap</span></li>
                                            <li><span>JavaScript</span></li>
                                            <li><span>3 More</span></li>
                                        </ul>
                                    </div>
                                    <div className="_freelacers_121_foot">
                                        <a href="#" className="btn btn-theme blue light">
                                            Voir profil
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>

            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span class="ti-arrow-left"></span>
                                <span class="sr-only">Préc</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item active"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">...</a></li>
                        <li class="page-item"><a class="page-link" href="#">18</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span class="ti-arrow-right"></span>
                                <span class="sr-only">Suiv</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default PrestataireResult