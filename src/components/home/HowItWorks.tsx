"use client";

import { motion } from "framer-motion";
import { MousePointerClick, Printer, PackageCheck, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Você Escolhe",
    description: "Navegue pela nossa vitrine e escolha seu personagem ou kit favorito.",
    icon: MousePointerClick,
    color: "bg-miflex-blue",
  },
  {
    id: 2,
    title: "Nós Imprimimos",
    description: "Sua miniatura ganha vida em nossas impressoras 3D com precisão milimétrica.",
    icon: Printer,
    color: "bg-miflex-orange",
  },
  {
    id: 3,
    title: "Embalagem Especial",
    description: "Cada Mi-Flex é revisado e embalado com carinho e proteção.",
    icon: PackageCheck,
    color: "bg-miflex-green",
  },
  {
    id: 4,
    title: "Diversão em Casa",
    description: "O pacote chega rápido para você começar a diversão e criar novas poses!",
    icon: Rocket,
    color: "bg-miflex-yellow",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-miflex-dark text-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Como Funciona a <span className="text-miflex-orange">Mágica</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 font-sans"
          >
            Desde a sua escolha até a chegada na sua casa, preparamos tudo com muita tecnologia e carinho.
          </motion.p>
        </div>

        {/* Steps Grid/Line */}
        <div className="relative">
          {/* Connector Line (visible only on desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-white/10 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Icon */}
                <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-xl transform transition-transform hover:scale-110 relative z-10`}>
                  <step.icon className="w-10 h-10 text-white" />
                  
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-miflex-dark font-bold flex items-center justify-center shadow-md">
                    {step.id}
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 font-sans">
                  {step.description}
                </p>

                {/* Arrow pointing down for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-8 text-white/20">
                    <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
