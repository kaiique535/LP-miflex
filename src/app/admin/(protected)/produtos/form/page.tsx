import { Suspense } from "react";
import ProductFormClient from "@/components/admin/ProductFormClient";

export default function ProductFormPage() {
  return (
    <div>
      <h1 className="text-3xl font-heading font-bold text-foreground mb-8">
        Produto
      </h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <Suspense fallback={<div>Carregando formulário...</div>}>
          <ProductFormClient />
        </Suspense>
      </div>
    </div>
  );
}
