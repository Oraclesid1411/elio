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

const CategorySection = () => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link 
              href={category.path} 
              className="flex flex-col items-center hover:text-primary transition-colors"
            >
              <div className="p-4 bg-secondary/20 rounded-full hover:bg-secondary/30 transition-colors">
                {category.icon}
              </div>
              <span className="mt-2 text-sm md:text-base font-medium text-center">
                {category.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;