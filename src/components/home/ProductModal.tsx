"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Star, ShieldCheck, Truck } from "lucide-react";
import { useEffect } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  tag: string;
  tagColor: string;
  bgColor: string;
  description?: string;
  features?: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  // Mock description if not provided
  const description = product.description || "Nossas miniaturas flexíveis são produzidas com tecnologia de impressão 3D de alta precisão. Utilizando material premium (PLA biodegradável), garantimos não apenas cores vibrantes, mas também uma durabilidade incrível. Cada articulação é pensada para proporcionar horas de diversão!";
  
  const features = product.features || [
    "Totalmente Articulado",
    "Não tóxico e seguro",
    "Material Biodegradável",
    "Design Exclusivo"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Side: Image */}
            <div className={`w-full md:w-1/2 p-8 ${product.bgColor} flex flex-col items-center justify-center relative`}>
              <div className="absolute top-6 left-6">
                 <span className={`${product.tagColor} text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-sm`}>
                    {product.tag}
                  </span>
              </div>
              <motion.div 
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="relative w-full aspect-square max-w-md"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Right Side: Details */}
            <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center text-miflex-yellow">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="ml-1 font-bold text-gray-800">{product.rating}</span>
                </div>
                <span className="text-gray-400 text-sm">({product.reviews} avaliações)</span>
              </div>

              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                {product.name}
              </h2>
              
              <div className="text-4xl font-bold text-miflex-blue mb-6">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </div>

              <p className="text-gray-600 font-sans leading-relaxed mb-8">
                {description}
              </p>

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                    <ShieldCheck className="w-5 h-5 text-miflex-green flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-4">
                <button className="w-full bg-[#FFE600] hover:bg-[#F2D600] text-[#2D3277] py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow-md transform hover:-translate-y-1">
                  Comprar no Mercado Livre
                  <ExternalLink className="w-5 h-5" />
                </button>
                
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-xl">
                  <Truck className="w-4 h-4" />
                  <span>Envio para todo o Brasil via Mercado Envios</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
