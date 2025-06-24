'use client';

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/authContext';
import LayoutDashboard from '@/components/admin/LayoutDashboard';
import axios from 'axios';
import { Pencil, Trash2 } from 'lucide-react'; // Icônes
import { StaticIP } from '@/config/staticip';

const GestionCategories = () => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [libelle, setLibelle] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Redirection si non-admin
  useEffect(() => {
    if (!currentUser) {
      router.push('/Login');
    } else if (currentUser.role !== '1') {
      router.push('/dashboard');
    }
  }, [currentUser]);

  // Récupération des catégories
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${StaticIP}api/categorie/liste`);
			
      // const res = await axios.get('/api/categories');
      setCategories(res.data.Result);
    } catch (err) {
      console.error('Erreur chargement catégories:', err);
    }
  };

  console.log(categories)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editMode) {
        await axios.put(`/api/categories/${editId}`, { libelle });
      } else {
        await axios.post('/api/categories', {
          libelle,
          userid: currentUser.id,
        });
      }

      setLibelle('');
      setEditMode(false);
      setEditId(null);
      fetchCategories();
    } catch (err) {
      console.error('Erreur soumission:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Supprimer cette catégorie ?')) return;
    try {
      await axios.delete(`/api/categories/${id}`);
      fetchCategories();
    } catch (err) {
      console.error('Erreur suppression:', err);
    }
  };

  const handleEdit = (cat) => {
    setEditMode(true);
    setLibelle(cat.libelle);
    setEditId(cat.id);
  };

  if (!currentUser || currentUser.role !== '1') {
    return null;
  }

  return (
    <LayoutDashboard>
      <h1 className="text-2xl font-bold mb-4">Gestion des Catégories</h1>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700">Libellé</label>
          <input
            type="text"
            value={libelle}
            onChange={(e) => setLibelle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editMode ? 'Modifier' : 'Ajouter'}
        </button>
        {editMode && (
          <button
            type="button"
            onClick={() => {
              setEditMode(false);
              setLibelle('');
              setEditId(null);
            }}
            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Annuler
          </button>
        )}
      </form>

      {/* Liste */}
      <div className="bg-white shadow rounded p-4">
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Libellé</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id}>
                <td className="p-2 border text-center">{cat.id}</td>
                <td className="p-2 border">{cat.libelle}</td>
                <td className="p-2 border text-center">
                  <button
                    onClick={() => handleEdit(cat)}
                    className="text-yellow-600 hover:text-yellow-800 mr-3"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-4">
                  Aucune catégorie trouvée.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </LayoutDashboard>
  );
};

export default GestionCategories;
