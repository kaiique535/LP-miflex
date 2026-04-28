"use client";

import { motion } from "framer-motion";
import { Send, Gift } from "lucide-react";
import { useState } from "react";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui no futuro entrará a integração com o backend para salvar o Lead
    if (email && name) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setName("");
      }, 5000);
    }
  };

  return (
    <section className="py-24 bg-miflex-blue relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-miflex-orange opacity-20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-white/20 shadow-2xl"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-miflex-orange rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg transform -rotate-12"
          >
            <Gift className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Comece sua Coleção Hoje Mesmo!
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 font-sans mb-12 max-w-2xl mx-auto"
          >
            Junte-se ao clube Mi-Flex. Inscreva-se para receber novidades sobre novos lançamentos, cores exclusivas e descontos especiais.
          </motion.p>

          {isSubmitted ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-500/20 text-white p-6 rounded-2xl border border-green-400 backdrop-blur-sm inline-block"
            >
              <h3 className="text-xl font-bold font-heading mb-2">🎉 Oba! Inscrição Confirmada!</h3>
              <p className="font-sans">Fique de olho na sua caixa de entrada.</p>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
            >
              <input
                type="text"
                placeholder="Seu nome (Ex: João)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-full bg-white border border-gray-200 text-foreground font-sans focus:outline-none focus:ring-4 focus:ring-miflex-orange/50 shadow-inner placeholder:text-gray-400"
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-full bg-white border border-gray-200 text-foreground font-sans focus:outline-none focus:ring-4 focus:ring-miflex-orange/50 shadow-inner placeholder:text-gray-400"
              />
              <button 
                type="submit"
                className="bg-miflex-orange hover:bg-miflex-orange-light text-white px-8 py-4 rounded-full font-bold shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Eu Quero! <Send className="w-5 h-5" />
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
