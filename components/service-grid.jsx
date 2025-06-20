"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { serviceData } from "@/lib/mock-data";

const ServiceCard = ({ service }) => {
  // Map status to correct CSS class
  const statusClass = {
    VENDU: "status-vendu",
    LOUE: "status-loue",
    OFFERT: "status-offert"
  }[service.status];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="service-card"
    >
      <Link href={`/service/${service.id}`}>
        <div className="relative">
          <Image
            src={service.image}
            alt={service.title}
            width={300}
            height={200}
            className="service-card-image"
          />
          <div className="absolute top-2 right-2">
            <span className={`service-status ${statusClass}`}>
              {service.status}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-1">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
            {service.description}
          </p>
          {service.price && (
            <p className="font-medium text-primary">
              {service.price.toFixed(2)}€
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

const ServiceGrid = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // In a real app, this would be a fetch from the API
    setServices(serviceData);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceGrid;