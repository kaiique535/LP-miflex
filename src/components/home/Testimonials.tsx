"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Mãe do Leo (7 anos)",
    text: "Meu filho não larga o Dragão Esmeralda! A qualidade é incrível e as articulações deixam a brincadeira muito mais divertida. Recomendo muito!",
    rating: 5,
    bgColor: "bg-miflex-blue-light/10",
  },
  {
    id: 2,
    name: "João Pedro",
    role: "Colecionador",
    text: "Comprei o Cachorro Robô para enfeitar minha mesa e acabei brincando mais do que esperava. Material resistente e as cores são exatamente como na foto.",
    rating: 5,
    bgColor: "bg-miflex-orange-light/10",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Tia da Sofia",
    text: "Dei de presente de aniversário e foi o sucesso da festa. As crianças adoraram fazer poses diferentes. Chegou super rápido e bem embalado.",
    rating: 5,
    bgColor: "bg-miflex-green/10",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-1 mb-4"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-miflex-yellow text-miflex-yellow" />
            ))}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6"
          >
            Alegria <span className="text-miflex-blue">Comprovada</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 font-sans"
          >
            Veja o que nossos clientes estão dizendo sobre a experiência Mi-Flex.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-[2rem] ${testimonial.bgColor} relative`}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-black/5" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-miflex-yellow text-miflex-yellow" />
                ))}
              </div>
              
              <p className="text-gray-700 font-sans text-lg mb-8 relative z-10 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl font-bold font-heading text-miflex-blue shadow-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground font-heading">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 font-sans">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
