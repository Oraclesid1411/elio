'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../context/authContext';
import LayoutDashboard from '@/components/admin/LayoutDashboard';

const AdminDashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    } else if (currentUser.role !== "1") {
      router.push("/dashboard");
    }
  }, [currentUser]);

  return (
    <LayoutDashboard>
      <h1 className="text-2xl font-bold mb-4">Bienvenue sur Elio Dashboard</h1>
      <p className="text-gray-600">Sélectionnez une gestion dans la barre latérale.</p>
    </LayoutDashboard>
  );
};

export default AdminDashboard;
