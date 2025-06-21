"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { StaticIP } from '@/config/staticip';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {
  BriefcaseBusiness,
  Wrench,
  ShoppingBag,
  Building2,
  Code,
  Cog,
  Megaphone,
  Palette,
  TreePine,
  Construction,
  Sparkles,
  PartyPopper,
  Banknote,
  MonitorSmartphone,
  Car,
  Radiation,
  SprayCan
} from "lucide-react";

// import { 
//   BriefcaseBusiness, 
//   Wrench, 
//   ShoppingBag, 
//   Building2, 
//   Code, 
//   Cog, 
//   Megaphone,
//   Palette
// } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";


// Table de correspondance entre `libelle` partiel et icône
const iconMap = {
  "Aménagement": <TreePine className="h-10 w-10 text-primary" />,
  "BTP": <Construction className="h-10 w-10 text-primary" />,
  "Décoration": <Palette className="h-10 w-10 text-primary" />,
  "Design": <Palette className="h-10 w-10 text-primary" />,
  "Evenementiel": <PartyPopper className="h-10 w-10 text-primary" />,
  "Gestion": <Banknote className="h-10 w-10 text-primary" />,
  "Informatique": <MonitorSmartphone className="h-10 w-10 text-primary" />,
  "Electrotechnique": <Radiation className="h-10 w-10 text-primary" />,
  "Automobile": <Car className="h-10 w-10 text-primary" />,
  "Hygiène": <SprayCan className="h-10 w-10 text-primary" />
};
// const categories = [
//   {
//     id: 'enterprise',
//     name: 'Entreprise',
//     icon: <BriefcaseBusiness className="h-10 w-10 text-primary" />,
//     path: '/categories/enterprise'
//   },
//   {
//     id: 'repair',
//     name: 'Réparation',
//     icon: <Wrench className="h-10 w-10 text-primary" />,
//     path: '/categories/repair'
//   },
//   {
//     id: 'sales',
//     name: 'Vente',
//     icon: <ShoppingBag className="h-10 w-10 text-primary" />,
//     path: '/categories/sales'
//   },
//   {
//     id: 'realestate',
//     name: 'Immobilier',
//     icon: <Building2 className="h-10 w-10 text-primary" />,
//     path: '/categories/realestate'
//   },
//   {
//     id: 'software',
//     name: 'Logiciel',
//     icon: <Code className="h-10 w-10 text-primary" />,
//     path: '/categories/software'
//   },
//   {
//     id: 'engineering',
//     name: 'Ingénierie',
//     icon: <Cog className="h-10 w-10 text-primary" />,
//     path: '/categories/engineering'
//   },
//   {
//     id: 'marketing',
//     name: 'Marketing',
//     icon: <Megaphone className="h-10 w-10 text-primary" />,
//     path: '/categories/marketing'
//   },
//   {
//     id: 'design',
//     name: 'Design',
//     icon: <Palette className="h-10 w-10 text-primary" />,
//     path: '/categories/design'
//   }
// ];

const CategorySection = () => {
  // récupérer les catégories
  const [categories, setAllcategories] = useState([]);

	useEffect(() => {
		const fetchcategories = async () => {
			try {
				const response = await axios.get(`${StaticIP}/categorie/liste`);
				if (response.data.Status) {

          const apiData = response.data.Result;

const listcategories = apiData.map((item) => {
  // Cherche une icône qui correspond partiellement au libelle
  const iconEntry = Object.entries(iconMap).find(([key]) =>
    item.libelle.toLowerCase().includes(key.toLowerCase())
  );

  return {
    id: item.id,
    name: item.libelle,
    icon: iconEntry ? iconEntry[1] : <BriefcaseBusiness className="h-10 w-10 text-primary" />,
    path: `/categories/${item.id}` // ou slugify(item.libelle)
  };
});
					setAllcategories(listcategories); // Utiliser "Result" au lieu de "users"
				} else {
					alert('ya un souci');
					console.log(response);
				}
			} catch (error) {
				console.error("Erreur lors du chargement des categories", error);
			}
		};

		fetchcategories();
	}, []);

  // console.log(allcategories)
  return (
    <section className="py-12">
      <div className="relative">
      {/* Boutons navigation */}
      <div className="">
    
      <div className="swiper-button-prev !text-primary absolute left-0 top-1/2 -translate-y-1/2 z-10" />
      <div className="swiper-button-next !text-primary absolute right-0 top-1/2 -translate-y-1/2 z-10" />

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex flex-col items-center hover:text-primary transition-colors"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      </div>
    </section>
  );
};

export default CategorySection;