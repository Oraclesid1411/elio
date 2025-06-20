'use client';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/authContext';
import LayoutDashboard from '@/components/admin/LayoutDashboard';
// import LayoutDashboard from "@/components/LayoutDashboard";

const GestionCategories = () => {
    const { currentUser } = useContext(AuthContext);
    const router = useRouter();
  
    useEffect(() => {
        if (!currentUser) {
          router.push('/login');
        } else if (currentUser.role !== '1') {
          router.push('/dashboard');
        }
      }, [currentUser]);
    
      if (!currentUser || currentUser.role !== '1') {
        return null; // ou un spinner
      }
  return (
    <LayoutDashboard>
      <h1 className="text-2xl font-bold mb-4">Gestion des Catégories</h1>
      {/* Ici, tu peux afficher un tableau, un formulaire d'ajout, etc. */}
      <p>Interface pour lister/créer/modifier/supprimer des catégories.</p>
    </LayoutDashboard>
  );
};

export default GestionCategories;
