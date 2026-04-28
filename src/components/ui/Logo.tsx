import React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Ícone de Blocos 3D (SVG contido e centralizado) */}
      <svg 
        width="44" height="44" viewBox="0 0 44 44" 
        className="w-10 h-10 drop-shadow-sm"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(10, 4)">
          {/* Bottom Block */}
          <rect x="0" y="23" width="24" height="14" rx="6" fill="var(--color-miflex-blue-dark)" />
          <rect x="0" y="23" width="24" height="14" rx="6" fill="black" fillOpacity="0.15" />
          <rect x="0" y="18" width="24" height="14" rx="6" fill="var(--color-miflex-blue-dark)" />
          
          {/* Middle Block */}
          <rect x="0" y="14" width="24" height="14" rx="6" fill="var(--color-miflex-orange)" />
          <rect x="0" y="14" width="24" height="14" rx="6" fill="black" fillOpacity="0.15" />
          <rect x="0" y="9" width="24" height="14" rx="6" fill="var(--color-miflex-orange)" />
          
          {/* Top Block */}
          <rect x="0" y="5" width="24" height="14" rx="6" fill="var(--color-miflex-blue)" />
          <rect x="0" y="5" width="24" height="14" rx="6" fill="black" fillOpacity="0.15" />
          <rect x="0" y="0" width="24" height="14" rx="6" fill="var(--color-miflex-blue)" />
          
          {/* Brilhos (Highlights) para o aspecto fofinho 3D */}
          <path d="M4 2.5 L20 2.5" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
          <path d="M4 11.5 L20 11.5" stroke="white" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
          <path d="M4 20.5 L20 20.5" stroke="white" strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round" />
        </g>
      </svg>

      {/* Texto "Mi-Flex" - Correção do Stroke */}
      <div className="relative inline-flex items-center -mt-1">
        {/* Camada de Contorno e Sombra (Fica atrás para não 'engolir' a letra) */}
        <span 
          className="font-heading font-bold text-3xl tracking-wider absolute left-0 z-0 pointer-events-none select-none"
          style={{
            WebkitTextStroke: "6px var(--color-miflex-red-orange)",
            textShadow: "0px 3px 0px var(--color-miflex-red-orange)",
            color: "transparent"
          }}
          aria-hidden="true"
        >
          Mi-Flex
        </span>
        
        {/* Camada do Texto Interno */}
        <span 
          className="font-heading font-bold text-3xl tracking-wider relative z-10"
          style={{ color: "#FFF2D1" }}
        >
          Mi-Flex
        </span>
      </div>
    </div>
  );
}
