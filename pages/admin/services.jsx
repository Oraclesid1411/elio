'use client';

import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/authContext';
// import LayoutDashboard from '@/components/admin/LayoutDashboard';
import axios from 'axios';
import { Pencil, Trash2 } from 'lucide-react';
// const StaticIP = 'https://ton-serveur/'; // ⚠️ adapte ce chemin
import { StaticIP } from '@/config/staticip'; 
import LayoutDashboard from "@/components/admin/LayoutDashboard";



const GestionServices = () => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    categorieId: '',
    titre: '',
    description: '',
    prix: '',
    disponible: true,
    ville: '',
    images: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (!currentUser) router.push('/Login');
    else if (currentUser.role !== '1') router.push('/dashboard');
  }, [currentUser]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get(`${StaticIP}api/services/liste`);
      setServices(res.data.Result);
    } catch (err) {
      console.error('Erreur chargement services:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...form,
        prix: parseFloat(form.prix),
        images: form.images ? form.images.split(',').map((img) => img.trim()) : [],
        userId: currentUser.id,
      };

      if (editMode) {
        await axios.put(`${StaticIP}api/services/update/${editId}`, data);
      } else {
        await axios.post(`${StaticIP}api/services/create`, data);
      }

      resetForm();
      fetchServices();
    } catch (err) {
      console.error('Erreur envoi:', err);
    }
  };

  const handleEdit = (srv) => {
    setEditMode(true);
    setEditId(srv.id);
    setForm({
      categorieId: srv.categorieId,
      titre: srv.titre,
      description: srv.description,
      prix: srv.prix,
      disponible: srv.disponible,
      ville: srv.ville,
      images: srv.images?.join(', ') || '',
    });
  };

  const handleDelete = async (id) => {
    if (!confirm('Supprimer ce service ?')) return;
    try {
      await axios.delete(`${StaticIP}api/services/delete/${id}`);
      fetchServices();
    } catch (err) {
      console.error('Erreur suppression:', err);
    }
  };

  const resetForm = () => {
    setEditMode(false);
    setEditId(null);
    setForm({
      categorieId: '',
      titre: '',
      description: '',
      prix: '',
      disponible: true,
      ville: '',
      images: '',
    });
  };

  if (!currentUser || currentUser.role !== '1') return null;

  return (
    <LayoutDashboard>
      <h1 className="text-2xl font-bold mb-4">Gestion des Services</h1>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="categorieId"
            placeholder="ID Catégorie"
            value={form.categorieId}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="titre"
            placeholder="Titre"
            value={form.titre}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="p-2 border rounded col-span-2"
            required
          />
          <input
            type="number"
            name="prix"
            placeholder="Prix"
            value={form.prix}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="ville"
            placeholder="Ville"
            value={form.ville}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="images"
            placeholder="URLs images (séparées par des virgules)"
            value={form.images}
            onChange={handleChange}
            className="p-2 border rounded col-span-2"
          />
          <label className="col-span-2 flex items-center gap-2">
            <input
              type="checkbox"
              name="disponible"
              checked={form.disponible}
              onChange={handleChange}
            />
            Disponible
          </label>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editMode ? 'Modifier' : 'Ajouter'}
          </button>
          {editMode && (
            <button
              type="button"
              onClick={resetForm}
              className="ml-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Annuler
            </button>
          )}
        </div>
      </form>

      {/* Liste */}
      <div className="bg-white shadow rounded p-4">
        <table className="w-full table-auto border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Titre</th>
              <th className="p-2 border">Prix</th>
              <th className="p-2 border">Ville</th>
              <th className="p-2 border">Disponible</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((srv) => (
              <tr key={srv.id}>
                <td className="p-2 border text-center">{srv.id}</td>
                <td className="p-2 border">{srv.titre}</td>
                <td className="p-2 border">{srv.prix} FCFA</td>
                <td className="p-2 border">{srv.ville}</td>
                <td className="p-2 border text-center">{srv.disponible ? '✔️' : '❌'}</td>
                <td className="p-2 border text-center">
                  <button
                    onClick={() => handleEdit(srv)}
                    className="text-yellow-600 hover:text-yellow-800 mr-3"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(srv.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {services.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  Aucun service enregistré.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </LayoutDashboard>
  );
};

export default GestionServices;
