"use client";

import { useState } from "react";
import ImageUploader from "@/components/admin/ImageUploader";
import { Trash2 } from "lucide-react";
import Image from "next/image";

// Placeholder for images since we didn't create a DB schema for Carousel yet
const initialImages = [
  { id: 1, url: "/images/hero-1.png" },
  { id: 2, url: "/images/hero-2.png" },
  { id: 3, url: "/images/hero-3.png" },
];

export default function CarouselAdminPage() {
  const [images, setImages] = useState(initialImages);

  const handleUploadSuccess = (url: string) => {
    if (url) {
      setImages((prev) => [...prev, { id: Date.now(), url }]);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Remover esta imagem do carrossel?")) {
      setImages((prev) => prev.filter((img) => img.id !== id));
      // call api to delete from DB and S3 if implemented
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-heading font-bold text-foreground mb-8">
        Gestão do Carrossel
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Adicionar Imagem</h2>
            <p className="text-gray-500 mb-6 text-sm">
              Faça o upload de novas imagens para o banner da página inicial.
            </p>
            <ImageUploader onUploadSuccess={handleUploadSuccess} />
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6">Imagens Atuais</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.map((img) => (
                <div key={img.id} className="relative rounded-xl overflow-hidden border border-gray-200 group bg-gray-50 h-48">
                  <Image src={img.url} alt="Carousel item" fill className="object-contain" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button
                      onClick={() => handleDelete(img.id)}
                      className="bg-white text-red-500 p-2 rounded-full hover:scale-110 transition-transform shadow-md"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
              
              {images.length === 0 && (
                <div className="col-span-full p-8 text-center text-gray-500">
                  Nenhuma imagem no carrossel.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
