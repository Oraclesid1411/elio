import Layouta from '@/components/Connected/Layouta';
import Layout from '@/components/Layout';
import { StaticIP } from '@/config/staticip';
import { AuthContext } from '@/context/authContext';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form, Table } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';

const MonCompte = () => {
    const router = useRouter();
    const { currentUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [userid, setuserid] = useState();

    // RECUPERATION DES EMPLOYES
    const [showModalCat, setShowModalCat] = useState(false);
    const [employes, setEmployes] = useState([]);

    const fetchemployes = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${StaticIP}api/categorie/listecomplete`);
            if (response.data.Status) {
                setEmployes(response.data.Result);
            } else {
                alert("Erreur lors de la récupération des employes");
            }
        } catch (err) {
            alert("Une erreur est survenue lors de la récupération des employes");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchemployes();
    }, []);

    // LISTE DES VILLES
    const [villes, setvilles] = useState([]);
    const fetchvilles = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${StaticIP}api/ville/liste`);
            if (response.data.Status) {
                setvilles(response.data.Result);
            } else {
                alert("Erreur lors de la récupération des villes");
            }
        } catch (err) {
            alert("Une erreur est survenue lors de la récupération des villes");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchvilles();
    }, []);

    // FILTRAGE DES CATEGORIES (ou employés)
    const [filteredcategories, setFilteredcategories] = useState(employes);
    const [selectedcategorieName, setSelectedcategorieName] = useState('');
    const [selectedcategorieId, setSelectedcategorieId] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchTerm(searchValue);
        setFilteredcategories(
            employes.filter((categorie) =>
                categorie.libelle.toLowerCase().includes(searchValue)
            )
        );
    };

    const selectcategorie = (categorie) => {
        setSelectedcategorieName(categorie.libelle);
        setSelectedcategorieId(categorie.id);
        // Mise à jour de formData pour inclure la catégorie sélectionnée
        setFormData(prevData => ({
            ...prevData,
            categorie_id: categorie.id
        }));
        setShowModalCat(false);
    };

    // Etat initial pour les données du formulaire
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        role: '',
        categorie_id: '',
        ville_residence_id: '',
        intitule_service: '',
        description_service: '',
    });

    // Remplissage des champs dès que currentUser est disponible
    useEffect(() => {
        if (currentUser) {
            setFormData({
                nom: currentUser.nom || '',
                email: currentUser.email || '',
                role: currentUser.role || '',
                categorie_id: currentUser.categorie_id || selectedcategorieId,
                ville_residence_id: currentUser.ville_residence_id || '',
                intitule_service: currentUser.intitule_service || '',
                description_service: currentUser.description_service || '',
            });
            setuserid(currentUser.id);
        }
    }, [currentUser, selectedcategorieId]);

    // Mise à jour des valeurs lors d'une modification dans les inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Appel à la route de mise à jour du profil
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Création d'un objet FormData pour envoyer texte + image
            const dataToSend = new FormData();
            // Ajout de tous les champs de formData
            Object.keys(formData).forEach((key) => {
                dataToSend.append(key, formData[key]);
            });
            // Ajout de l'ID utilisateur
            dataToSend.append('userid', userid);
            // Ajout de l'image si elle est présente
            if (image) {
                dataToSend.append('image', image);
            }

            const response = await axios.put(`${StaticIP}api/auth/profile`, dataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            if (response.data.Status) {
                toast.success('Profil mis à jour avec succès !');
            } else {
                toast.error(response.data.Error);
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour du profil :', error);
            toast.error('Erreur lors de la mise à jour du profil');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <Layouta>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="bredcrumb_wrap">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/Dashboard">Tableau de bord</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Mon Compte</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <form onSubmit={handleSubmit}>
                            <div className="_dashboard_content">
                                <div className="_dashboard_content_header">
                                    <div className="_dashboard__header_flex">
                                        <h4><i className="fa fa-user mr-1"></i>Mon compte</h4>
                                    </div>
                                </div>

                                <div className="_dashboard_content_body">
                                    <div className="row">



                                        <div className="col">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="form-group">
                                                        <label className="active">Définir/ Mettre à jour ma photo</label>
                                                        <input
                                                            type="file"
                                                            className="form-control with-light"
                                                            id="customFile"
                                                            name="image"
                                                            onChange={(e) => setImage(e.target.files[0])}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="form-group">
                                                        <label className="active">Nom</label>
                                                        <input
                                                            type="text"
                                                            className="form-control with-light"
                                                            value={formData.nom}
                                                            name="nom"
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4">
                                                    <div className="form-group">
                                                        <label className="active">Email</label>
                                                        <input
                                                            type="text"
                                                            className="form-control with-light"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4">
                                                    <div className="form-group">
                                                        <label>Quelle est votre profil?</label>
                                                        <select className="form-control with-light">
                                                            <option value="Freelance">Freelance</option>
                                                            <option value="Entreprise">Entreprise</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4">
                                                    <div className="form-group">
                                                        <label className="active">Email</label>
                                                        <input
                                                            type="email"
                                                            className="form-control with-light"
                                                            value="uppcl@gmail.com"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="_dashboard_content">
                                <div className="_dashboard_content_header">
                                    <div className="_dashboard__header_flex">
                                        <h4><i className="ti-settings mr-1"></i>Services</h4>
                                    </div>
                                </div>
                                <div className="_dashboard_content_body">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4">
                                            <div className="form-group">
                                                <label className="active">Intitulé </label>
                                                <input
                                                    type="text"
                                                    className="form-control with-light"
                                                    placeholder="Ex : Technicien Canal +"
                                                    name="intitule_service"
                                                    value={formData.intitule_service}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-sm-12">
                                            <div className="form-group">
                                                <label className="active">Sélectionner votre domaine d'activité</label>
                                                <input
                                                    type="text"
                                                    className="form-control with-light"
                                                    value={currentUser?.categorie?.libelle || selectedcategorieName}
                                                    onClick={() => setShowModalCat(true)}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-sm-12" hidden>
                                            <div className="form-group">
                                                <label className="active">ID service</label>
                                                <input
                                                    type="text"
                                                    className="form-control with-light"
                                                    value={selectedcategorieId}
                                                    name="categorie_id"
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4">
                                            <div className="form-group with-light">
                                                <label>Ville de résidence</label>
                                                <select
                                                    id="country"
                                                    className="form-control"
                                                    name="ville_residence_id"
                                                    onChange={handleInputChange}
                                                >
                                                    <option value={formData.ville_residence_id}>{currentUser?.ville?.nom || ""}</option>
                                                    {villes.map((ville) => (
                                                        <option value={ville.id} key={ville.id}>
                                                            {ville.nom} / {ville.province}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="form-group">
                                                <label className="active">A propos de vous et vos prestations</label>
                                                <textarea
                                                    className="form-control with-light"
                                                    name="description_service"
                                                    onChange={handleInputChange}
                                                    value={formData.description_service}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-save" disabled={loading}>
                                {loading ? 'Mise à jour en cours...' : 'Mettre à jour les informations'}
                            </button>
                        </form>
                        {loading && (
                            <div className="overlay">
                                <div className="loader"></div>
                            </div>
                        )}
                    </div>
                    <ToastContainer />
                    <Modal show={showModalCat} onHide={() => setShowModalCat(false)} size="" scrollable>
                        <Modal.Header closeButton>
                            <Modal.Title>Rechercher un service</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/* Barre de recherche */}
                            <Form.Group controlId="searchcategorie">
                                <Form.Control
                                    type="text"
                                    placeholder="Saisir une partie du nom ou prénoms..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                            </Form.Group>

                            {/* Tableau des employés */}
                            <Table striped bordered hover className="mt-3">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nom</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredcategories.map((categorie) => (
                                        <tr
                                            key={categorie.id}
                                            onClick={() => selectcategorie(categorie)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <td>{categorie.id}</td>
                                            <td>{categorie.libelle}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={() => setShowModalCat(false)}>
                                Fermer
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Layouta>
        </Layout>
    );
};

export default MonCompte;
