"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ImageUploader from "./ImageUploader";

export default function ProductFormClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    tag: "",
    tagColor: "bg-miflex-orange",
    bgColor: "bg-miflex-blue/10",
    image: "",
    mlLink: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      // Fetch product data if editing
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData({
            name: data.name || "",
            price: data.price || 0,
            tag: data.tag || "",
            tagColor: data.tagColor || "bg-miflex-orange",
            bgColor: data.bgColor || "bg-miflex-blue/10",
            image: data.image || "",
            mlLink: data.mlLink || "",
            description: data.description || "",
          });
        })
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleImageUpload = (url: string) => {
    setFormData((prev) => ({ ...prev, image: url }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = id ? `/api/products/${id}` : "/api/products";
      const method = id ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/produtos");
        router.refresh();
      } else {
        alert("Erro ao salvar produto");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Nome do Produto</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-miflex-blue focus:ring-2 focus:ring-miflex-blue/20 outline-none transition-all"
            placeholder="Ex: Raposa Articulada"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Preço (R$)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            step="0.01"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-miflex-blue focus:ring-2 focus:ring-miflex-blue/20 outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Tag (Badge)</label>
          <input
            type="text"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-miflex-blue focus:ring-2 focus:ring-miflex-blue/20 outline-none transition-all"
            placeholder="Ex: Lançamento"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Link Mercado Livre</label>
          <input
            type="url"
            name="mlLink"
            value={formData.mlLink}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-miflex-blue focus:ring-2 focus:ring-miflex-blue/20 outline-none transition-all"
            placeholder="https://produto.mercadolivre.com.br/..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Descrição</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-miflex-blue focus:ring-2 focus:ring-miflex-blue/20 outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Imagem do Produto (S3)</label>
        <ImageUploader onUploadSuccess={handleImageUpload} defaultImage={formData.image} />
      </div>

      <div className="flex justify-end pt-6 border-t border-gray-100">
        <button
          type="button"
          onClick={() => router.push("/admin/produtos")}
          className="px-6 py-3 text-gray-600 font-semibold hover:bg-gray-50 rounded-xl transition-colors mr-4"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-miflex-blue hover:bg-miflex-blue-light text-white px-8 py-3 rounded-xl font-bold shadow-md transition-colors disabled:opacity-50"
        >
          {loading ? "Salvando..." : id ? "Atualizar Produto" : "Criar Produto"}
        </button>
      </div>
    </form>
  );
}
