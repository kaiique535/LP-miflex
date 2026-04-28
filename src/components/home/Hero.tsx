"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Diversão que se Dobra!",
    subtitle: "Conheça as miniaturas flexíveis que vão encantar a todos.",
    image: "/images/hero-1.png",
    color: "bg-miflex-blue",
    blobColor: "bg-miflex-blue-light",
  },
  {
    id: 2,
    title: "Articulados e Coloridos",
    subtitle: "Dê vida à sua imaginação com a nossa nova coleção Dragon.",
    image: "/images/hero-2.png",
    color: "bg-miflex-green",
    blobColor: "bg-[#34D399]",
  },
  {
    id: 3,
    title: "Colecione Todos!",
    subtitle: "Crie seu próprio mundo com os Mi-Flex Friends.",
    image: "/images/hero-3.png",
    color: "bg-miflex-orange",
    blobColor: "bg-miflex-orange-light",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-transparent">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 lg:px-8 py-12 gap-8 md:gap-16"
        >
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left z-10 flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-miflex-light text-miflex-blue font-bold text-sm mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-miflex-yellow" />
              <span>Nova Coleção 2026</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight mb-6"
            >
              {slides[currentSlide].title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 mb-8 max-w-lg font-sans"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link 
                href="/produtos" 
                className={`${slides[currentSlide].color} hover:opacity-90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2`}
              >
                Ver Produtos <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Image Content with Blob Background */}
          <div className="flex-1 relative w-full max-w-md md:max-w-none flex justify-center items-center mt-10 md:mt-0 h-[400px] md:h-[600px]">
            <motion.div 
              className={`absolute inset-0 ${slides[currentSlide].blobColor} opacity-20 blur-2xl animate-blob`}
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-miflex-orange w-8" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
