"use client";

import { useState } from "react";
import { UploadCloud, X } from "lucide-react";
import Image from "next/image";

interface ImageUploaderProps {
  onUploadSuccess: (url: string) => void;
  defaultImage?: string;
}

export default function ImageUploader({ onUploadSuccess, defaultImage }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(defaultImage || null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Local preview
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        onUploadSuccess(data.url);
      } else {
        alert("Erro no upload da imagem");
        setPreview(defaultImage || null);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com servidor");
      setPreview(defaultImage || null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full">
      {preview ? (
        <div className="relative w-full h-48 rounded-xl overflow-hidden border border-gray-200 group">
          <Image src={preview} alt="Preview" fill className="object-contain bg-gray-50" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              type="button"
              onClick={() => {
                setPreview(null);
                onUploadSuccess("");
              }}
              className="bg-white text-red-500 p-2 rounded-full hover:scale-110 transition-transform shadow-md"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-miflex-blue transition-colors group">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <UploadCloud className="w-10 h-10 text-gray-400 group-hover:text-miflex-blue mb-3 transition-colors" />
            <p className="mb-2 text-sm text-gray-500 font-semibold">
              <span className="text-miflex-blue">Clique para enviar</span> ou arraste uma imagem
            </p>
            <p className="text-xs text-gray-400">PNG, JPG ou WEBP (Max. 2MB)</p>
          </div>
          <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} disabled={uploading} />
        </label>
      )}
      {uploading && <p className="text-sm text-miflex-blue mt-2 font-medium animate-pulse">Fazendo upload para a AWS S3...</p>}
    </div>
  );
}
