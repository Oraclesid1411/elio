'use client';
import { FaListAlt, FaFileContract, FaRegNewspaper, FaConciergeBell, FaUsers, FaTrophy, FaCreditCard, FaCog, FaBars } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // ou 'react-router-dom' pour React pur
import PropTypes from 'prop-types';

const Sidebar = ({ collapsed, toggleSidebar }) => {
  const router = useRouter();

  const menu = [
    { name: "Catégories", icon: <FaListAlt />, path: "/admin/categories" },
    { name: "Contrats", icon: <FaFileContract />, path: "/admin/contrats" },
    { name: "Services", icon: <FaConciergeBell />, path: "/admin/services" },
    { name: "Utilisateurs", icon: <FaUsers />, path: "/admin/utilisateurs" },
    { name: "Gagnants", icon: <FaTrophy />, path: "/admin/gagnants" },
    { name: "Paiements", icon: <FaCreditCard />, path: "/admin/paiements" },
    { name: "Abonnements", icon: <FaRegNewspaper />, path: "/admin/abonnements" },
    { name: "Paramètres", icon: <FaCog />, path: "/admin/parametres-site" },
  ];

  return (
    <div className={`h-screen bg-gray-800 text-white p-4 transition-all duration-300 flex flex-col ${collapsed ? 'w-16' : 'w-64'}`}>
      <button onClick={toggleSidebar} className="mb-6 self-end text-lg">
        <FaBars />
      </button>
      <ul className="flex-1 space-y-2">
        {menu.map((item, idx) => (
          <li
            key={idx}
            onClick={() => router.push(item.path)}
            className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded"
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span className="ml-3">{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
