import React from "react";

/**
 * Este é um backup da Logo Original (A primeira de todas).
 * Ela utiliza o quadrado simples azul com o "M" rotacionado, 
 * que existia na versão da Landing Page antes de aplicarmos
 * as imagens de referência.
 */
export function LogoV1({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 bg-miflex-blue rounded-xl flex items-center justify-center transform -rotate-6 shadow-md hover:rotate-0 transition-transform duration-300">
        <span className="text-white font-heading font-bold text-xl">M</span>
      </div>
      <span className="font-heading font-bold text-2xl text-miflex-blue tracking-tight">
        Mi-Flex
      </span>
    </div>
  );
}
