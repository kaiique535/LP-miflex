"use client";

import { motion } from "framer-motion";
import { Puzzle, Palette, ShieldCheck, Infinity as InfinityIcon } from "lucide-react";

const features = [
  {
    icon: InfinityIcon,
    title: "Flexibilidade Sem Fim",
    description: "Nossas miniaturas são totalmente articuladas, permitindo poses incríveis e muita diversão.",
    color: "text-miflex-blue",
    bgColor: "bg-miflex-blue-light/20",
    borderColor: "border-miflex-blue-light",
  },
  {
    icon: Palette,
    title: "Cores Vibrantes",
    description: "Cada Mi-Flex traz uma explosão de cores que dão vida à sua coleção de forma única.",
    color: "text-miflex-orange",
    bgColor: "bg-miflex-orange-light/20",
    borderColor: "border-miflex-orange-light",
  },
  {
    icon: ShieldCheck,
    title: "Material Resistente",
    description: "Impressão 3D de alta qualidade com materiais duráveis para resistir a qualquer aventura.",
    color: "text-miflex-green",
    bgColor: "bg-[#A7F3D0]", // emerald-200
    borderColor: "border-miflex-green",
  },
  {
    icon: Puzzle,
    title: "Lúdico e Criativo",
    description: "Desperta a imaginação de todas as idades. Muito mais que um enfeite, um companheiro de brincadeiras.",
    color: "text-miflex-yellow",
    bgColor: "bg-yellow-100",
    borderColor: "border-miflex-yellow",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100 }
  },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-miflex-blue opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-miflex-orange opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6"
          >
            Afinal, o que é o <span className="text-miflex-blue">Mi-Flex</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 font-sans"
          >
            Nascemos para revolucionar o mundo das miniaturas! O Mi-Flex não é só um boneco de enfeite, é uma experiência tátil, lúdica e cheia de personalidade.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:${feature.borderColor} group`}
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-sans">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
