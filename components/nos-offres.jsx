"use client";

import { 
  BriefcaseBusiness, 
  Wrench, 
  ShoppingBag, 
  Building2, 
  Code, 
  Cog, 
  Megaphone,
  Palette
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import ServiceGrid from "./service-grid";

const categories = [
  {
    id: 'enterprise',
    name: 'Entreprise',
    icon: <BriefcaseBusiness className="h-10 w-10 text-primary" />,
    path: '/categories/enterprise'
  },
  {
    id: 'repair',
    name: 'Réparation',
    icon: <Wrench className="h-10 w-10 text-primary" />,
    path: '/categories/repair'
  },
  {
    id: 'sales',
    name: 'Vente',
    icon: <ShoppingBag className="h-10 w-10 text-primary" />,
    path: '/categories/sales'
  },
  {
    id: 'realestate',
    name: 'Immobilier',
    icon: <Building2 className="h-10 w-10 text-primary" />,
    path: '/categories/realestate'
  },
  {
    id: 'software',
    name: 'Logiciel',
    icon: <Code className="h-10 w-10 text-primary" />,
    path: '/categories/software'
  },
  {
    id: 'engineering',
    name: 'Ingénierie',
    icon: <Cog className="h-10 w-10 text-primary" />,
    path: '/categories/engineering'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    path: '/categories/marketing'
  },
  {
    id: 'design',
    name: 'Design',
    icon: <Palette className="h-10 w-10 text-primary" />,
    path: '/categories/design'
  }
];

const NosOffres = () => {
  return (
    
     <section className="py-12 md:py-16">
     <h2 className="text-3xl font-bold mb-8">Meilleures offres</h2>
     <ServiceGrid />
     <div className="flex justify-center mt-6">
      <Link
        href="/Services"
        className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-all duration-300"
      >
        voir plus
      </Link>
    </div>
   </section>
  );
};

export default NosOffres;