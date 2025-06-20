'use client';

import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '@/context/authContext';

// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';
import Layout from '@/components/Layout';

export default function AdminLogin() {
   const [formData, setFormData] = useState({ email: '', password: ''});
      const router = useRouter();
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState([]);
      const {adminlogin} = useContext(AuthContext)
        const handleSubmit = async (e) => {
        e.preventDefault();
            

        console.log(formData)
        return false;
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        try {
            const response = await adminlogin(formData)
            if (response.data.Status) {
                toast.success('Connexion réussie !');
                setTimeout(() => {
                    setLoading(false);
                    router.push('/Dashboard');
                  }, 2000);
              } else {
                // Si Status est false, affichez l'erreur
                toast.error(response.data.Error);
              }
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
          <h3 style={{ textAlign: 'center', margin:'25px' }}>
           Admin Authentification
          </h3>
            <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Nom d'utilisateur/ Email <font color="red">*</font></label>
                  <input type="text" className="form-control" placeholder="Username" 
                  name="email"
                  onChange={handleChange}
                  required/>
                </div>
                <div className="form-group">
                  <label>Mot de passe <font color="red">*</font></label>
                  <input type="password" className="form-control" placeholder="*******"
                  name="password" onChange={handleChange}
                  required />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary full-width" disabled={loading}>
                  {loading ? 'Connexion en cours...' : 'Se connecter'}
                  </button>
                </div>
              </form>
              
            </div>
            <div className="form-group text-center">
              <span><a href='/admin/register'>Créer mon compte ici</a></span>
            </div>
            <div className="social_logs mb-4">
              <ul className="shares_jobs text-center">
                <li>ou se connecter avec</li>
                <li><a href="#" className="share gp"><i className="fa fa-google"></i></a></li>
              </ul>
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
  );
}
