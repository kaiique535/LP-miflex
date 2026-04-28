"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "O que é", href: "/#about" },
  { title: "Coleção", href: "/#products" },
  { title: "Como Funciona", href: "/#how-it-works" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-miflex-blue rounded-xl flex items-center justify-center transform -rotate-6 shadow-md hover:rotate-0 transition-transform duration-300">
                <span className="text-white font-heading font-bold text-xl">M</span>
              </div>
              <span className="font-heading font-bold text-2xl text-miflex-blue tracking-tight">
                Mi-Flex
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-foreground hover:text-miflex-orange font-semibold transition-colors duration-200"
              >
                {link.title}
              </Link>
            ))}
            <Link 
              href="/produtos" 
              className="bg-miflex-orange hover:bg-miflex-orange-light text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-miflex-orange/30 transform hover:-translate-y-1 transition-all duration-200"
            >
              Comprar Agora
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-miflex-blue focus:outline-none p-2"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-lg font-semibold text-foreground hover:text-miflex-orange w-full text-center rounded-xl hover:bg-miflex-light transition-colors"
                >
                  {link.title}
                </Link>
              ))}
              <div className="pt-4 w-full px-4">
                <Link 
                  href="/produtos" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-miflex-orange text-white px-6 py-3 rounded-full font-bold shadow-md active:scale-95 transition-transform"
                >
                  Comprar Agora
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
