import Layout from '@/components/Layout'
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '@/context/authContext';

const Creercompte = () => {
    const [formData, setFormData] = useState({ nom: '', email: '', password: '', role: 'Prestataire' });
    const router = useRouter();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);
    const { register } = useContext(AuthContext)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        //await axios.post('http://localhost:5000/api/auth/register', formData);
        try {
            const response = await register(formData)
            toast.success('Inscription réussie !');
            setTimeout(() => {
                setLoading(false);
                router.push(`/Dashboard?name=${formData.nom}&profil=${formData.role}`);
            }, 2000);
        } catch (err) {
            console.error("Erreur lors de la connexion :", err.response);
            const errorMsg = err.response?.data?.errors?.[0]?.msg || err.response?.data?.Error || 'Erreur de connexion';
            toast.error(errorMsg);
            setLoading(false);
        }
    };
    return (
        <Layout>

            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-3 mt-3 mb-3'>
                        <h3 style={{ textAlign: 'center', margin: '25px', fontSize: '22px' }}>
                            Créer mon compte
                        </h3>
                        <div className="login-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nom & Prénoms <font color="red">*</font></label>
                                    <input type="text" name="nom" className="form-control" placeholder="Nom et prénom.s"
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div className="form-group">
                                    <label>Nom d'utilisateur/ Email <font color="red">*</font></label>
                                    <input type="text" name="email" className="form-control" placeholder="Username"
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div className="form-group">
                                    <label>Mot de passe <font color="red">*</font></label>
                                    <input type="password" name="password" className="form-control" placeholder="*******"
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn bg-blue-800 btn-primary full-width" disabled={loading}>
                                        {loading ? 'Enregistrement en cours...' : 'S\'enregistrer'}
                                    </button>
                                </div>
                            </form>
                            
                        </div>
                        <div className="form-group text-center">
                            <span><a href='/Login'>J'ai déjà un compte, connexion</a></span>
                        </div>
                        
                    </div>
                    <ToastContainer />
                </div>
                {loading && (
                    <div className="overlay">
                        <div className="loader"></div>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default Creercompte