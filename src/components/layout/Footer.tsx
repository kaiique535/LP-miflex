"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <p className="text-gray-400 font-sans mb-6">
              Criando sorrisos através de miniaturas articuladas impressas em 3D. Onde a imaginação toma forma.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 font-sans text-gray-400">
              <li><Link href="/#products" className="hover:text-miflex-orange transition-colors">Produtos</Link></li>
              <li><Link href="/#about" className="hover:text-miflex-orange transition-colors">O que é?</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-miflex-orange transition-colors">Como Funciona</Link></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Suporte</h4>
            <ul className="space-y-4 font-sans text-gray-400">
              <li><a href="#" className="hover:text-miflex-orange transition-colors">Dúvidas Frequentes (FAQ)</a></li>
              <li><a href="#" className="hover:text-miflex-orange transition-colors">Política de Trocas</a></li>
              <li><a href="#" className="hover:text-miflex-orange transition-colors">Aviso de Segurança</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Fale Conosco</h4>
            <ul className="space-y-4 font-sans text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-miflex-blue" />
                <span>contato@miflex.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-miflex-orange" />
                <span>Envio para todo o Brasil</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 font-sans text-sm">
          <p>© {new Date().getFullYear()} Mi-Flex. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
