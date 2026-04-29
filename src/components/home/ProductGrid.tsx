"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { ProductModal, Product } from "./ProductModal";

// Mock data for products
const products: Product[] = [
  {
    id: 1,
    name: "Balde Coleção Completa",
    price: 149.90,
    rating: 5.0,
    reviews: 124,
    image: "/images/hero-1.png",
    tag: "Super Kit",
    tagColor: "bg-miflex-orange",
    bgColor: "bg-miflex-blue-light/10",
  },
  {
    id: 2,
    name: "Kit Pintura Criativa",
    price: 89.90,
    rating: 4.9,
    reviews: 89,
    image: "/images/hero-2.png",
    tag: "DIY",
    tagColor: "bg-miflex-green",
    bgColor: "bg-miflex-green/10",
  },
  {
    id: 3,
    name: "Raposa Articulada",
    price: 39.90,
    rating: 4.8,
    reviews: 56,
    image: "/images/hero-3.png",
    tag: "Avulso",
    tagColor: "bg-miflex-blue",
    bgColor: "bg-miflex-orange-light/10",
  },
  {
    id: 4,
    name: "Axolote Flexível",
    price: 39.90,
    rating: 4.7,
    reviews: 210,
    image: "/images/hero-3.png", 
    tag: "Avulso",
    tagColor: "bg-miflex-yellow",
    bgColor: "bg-yellow-100",
  },
];

import Link from "next/link";

export function ProductGrid({ isCatalogPage = false }: { isCatalogPage?: boolean }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section id="products" className="py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          {!isCatalogPage && (
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
                >
                  Nossa <span className="text-miflex-orange">Vitrine</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-gray-600 font-sans"
                >
                  Escolha seu novo companheiro de aventuras. Todos os modelos são articulados e super divertidos!
                </motion.p>
              </div>
              
              <Link href="/produtos" className="inline-block">
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-miflex-blue font-bold font-sans hover:text-miflex-blue-light transition-colors whitespace-nowrap cursor-pointer"
                >
                  Ver todos os produtos &rarr;
                </motion.span>
              </Link>
            </div>
          )}

          {isCatalogPage && (
            <div className="text-center mb-16">
               <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
                >
                  Catálogo <span className="text-miflex-blue">Completo</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-gray-600 font-sans max-w-2xl mx-auto"
                >
                  Explore todas as nossas miniaturas flexíveis. Do clássico ao mais moderno, encontre o modelo perfeito para você.
                </motion.p>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProduct(product)}
                className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Image Container */}
                <div className={`relative w-full pt-[100%] ${product.bgColor} overflow-hidden`}>
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`${product.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
                      {product.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 p-6 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-md"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-miflex-yellow text-miflex-yellow" />
                    <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="font-bold text-2xl text-miflex-blue">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-miflex-light text-miflex-blue flex items-center justify-center group-hover:bg-miflex-blue group-hover:text-white transition-colors pointer-events-none">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </>
  );
}
