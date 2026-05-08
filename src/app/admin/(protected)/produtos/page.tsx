import Link from "next/link";
import { Plus } from "lucide-react";
import dbConnect from "@/lib/db";
import { Product } from "@/models/Product";
import AdminTable from "@/components/admin/AdminTable";

export default async function AdminProducts() {
  await dbConnect();
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();

  const formattedProducts = products.map((p: any) => ({
    id: p._id.toString(),
    name: p.name,
    price: `R$ ${p.price.toFixed(2).replace(".", ",")}`,
    tag: p.tag,
  }));

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-heading font-bold text-foreground">Produtos</h1>
        <Link
          href="/admin/produtos/form"
          className="bg-miflex-orange hover:bg-miflex-orange-light text-white px-6 py-2.5 rounded-full font-bold shadow-md flex items-center gap-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Novo Produto
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <AdminTable data={formattedProducts} />
      </div>
    </div>
  );
}
